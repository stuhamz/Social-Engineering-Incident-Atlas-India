#!/usr/bin/env python3
"""Build the public Atlas JSON from authoritative research CSVs.

The website never edits research data. This script derives a browser-friendly,
read-only JSON artifact from data/cases.csv, data/actors.csv and references/sources.csv
(or data/sources.csv for local packaging).
"""
from __future__ import annotations

import csv
import json
import math
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CASES_PATH = ROOT / "data" / "cases.csv"
ACTORS_PATH = ROOT / "data" / "actors.csv"
SOURCES_CANDIDATES = [ROOT / "references" / "sources.csv", ROOT / "data" / "sources.csv"]
OUT_PATH = ROOT / "atlas" / "data" / "atlas.json"

NOT_REPORTED = {"", "nan", "none", "not_reported", "not_applicable", "unknown"}
HUMAN_RESOLVED = {"identified", "partially_identified"}

EVIDENCE_FIELDS = {
    "phone_or_sim_evidence": "Phone / SIM",
    "cdr_evidence": "CDR / telecom",
    "bank_evidence": "Bank / transaction",
    "ip_or_login_evidence": "IP / login",
    "device_evidence": "Device",
    "chat_message_evidence": "Chat / message",
    "email_evidence": "Email",
    "social_media_evidence": "Social media",
    "cctv_evidence": "CCTV / video",
    "platform_provider_records": "Platform records",
    "forensic_examination_reported": "Forensic examination",
    "electronic_evidence_authentication_discussed": "Authentication discussed",
    "chain_of_custody_discussed": "Chain of custody discussed",
    "evidence_integrity_issue_reported": "Integrity issue reported",
}

MECHANISM_FIELDS = {
    "authority_mechanism": "Authority",
    "fear_mechanism": "Fear",
    "urgency_mechanism": "Urgency",
    "trust_mechanism": "Trust",
    "scarcity_mechanism": "Scarcity",
    "reciprocity_mechanism": "Reciprocity",
    "isolation_mechanism": "Isolation",
    "repeated_contact_mechanism": "Repeated contact",
}


def read_csv(path: Path):
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def clean(value):
    if value is None:
        return ""
    value = str(value).strip()
    return "" if value.lower() in {"nan", "none"} else value


def yes(value):
    return clean(value).lower() == "yes"


def to_number(value):
    value = clean(value)
    if value.lower() in NOT_REPORTED:
        return None
    try:
        n = float(value)
        return int(n) if n.is_integer() else n
    except (ValueError, TypeError):
        return None


def split_multi(value):
    value = clean(value)
    if not value or value.lower() in NOT_REPORTED:
        return []
    parts = re.split(r"\s*;\s*|\s*/\s*", value)
    return [p.strip() for p in parts if p.strip()]


def titleize(value):
    value = clean(value)
    if not value:
        return "Not reported"
    return value.replace("_", " ").strip().title()


def count_sorted(values):
    c = Counter(v for v in values if v and str(v).lower() not in NOT_REPORTED)
    return [{"key": k, "label": titleize(k), "count": v} for k, v in sorted(c.items(), key=lambda kv: (-kv[1], kv[0]))]


def main():
    cases = read_csv(CASES_PATH)
    actors = read_csv(ACTORS_PATH)
    source_path = next((p for p in SOURCES_CANDIDATES if p.exists()), None)
    if not source_path:
        raise FileNotFoundError("Could not find sources.csv")
    sources = read_csv(source_path)

    actors_by_case = defaultdict(list)
    for a in actors:
        normalized = {k: clean(v) for k, v in a.items() if k}
        actors_by_case[normalized.get("case_id", "")].append(normalized)

    sources_by_case = defaultdict(list)
    for s in sources:
        normalized = {k: clean(v) for k, v in s.items() if k}
        sources_by_case[normalized.get("case_id", "")].append(normalized)

    public_cases = []
    for row in cases:
        c = {k: clean(v) for k, v in row.items() if k}
        cid = c.get("case_id", "")
        case_actors = actors_by_case.get(cid, [])
        case_sources = sources_by_case.get(cid, [])

        evidence = [label for field, label in EVIDENCE_FIELDS.items() if yes(c.get(field))]
        mechanisms = [label for field, label in MECHANISM_FIELDS.items() if yes(c.get(field))]

        vf_human = any(
            a.get("victim_facing_function") == "yes" and a.get("identity_resolution") in HUMAN_RESOLVED
            for a in case_actors
        )
        fin_human = any(
            a.get("financial_function") == "yes" and a.get("identity_resolution") in HUMAN_RESOLVED
            for a in case_actors
        )
        if vf_human and fin_human:
            resolution = "both"
        elif vf_human:
            resolution = "victim_facing_only"
        elif fin_human:
            resolution = "financial_only"
        else:
            resolution = "neither"

        contact_channels = []
        if c.get("contact_channel_primary") and c.get("contact_channel_primary").lower() not in NOT_REPORTED:
            contact_channels.append(c["contact_channel_primary"])
        contact_channels.extend(split_multi(c.get("contact_channels_other")))
        contact_channels = list(dict.fromkeys(contact_channels))

        item = c.copy()
        item.update({
            "financial_loss_inr_number": to_number(c.get("financial_loss_inr")),
            "incident_year_number": to_number(c.get("incident_year")),
            "known_account_count_number": to_number(c.get("known_account_count")),
            "evidence_present": evidence,
            "psychological_mechanisms": mechanisms,
            "contact_channels": contact_channels,
            "resolution_summary": resolution,
            "victim_facing_human_resolved": vf_human,
            "financial_human_resolved": fin_human,
            "actors": case_actors,
            "sources": case_sources,
        })
        public_cases.append(item)

    # Aggregate data for first-paint charts and filters.
    losses = [c["financial_loss_inr_number"] for c in public_cases if c["financial_loss_inr_number"] is not None]
    years = [c["incident_year_number"] for c in public_cases if isinstance(c["incident_year_number"], (int, float))]
    state_counts = count_sorted([c.get("state") for c in public_cases])
    attack_counts = count_sorted([c.get("attack_category_primary") for c in public_cases])
    source_stage_counts = count_sorted([c.get("source_stage") for c in public_cases])
    target_counts = count_sorted([c.get("target_type") for c in public_cases])
    identity_counts = count_sorted([a.get("identity_resolution") for a in actors])
    actor_strength_counts = count_sorted([a.get("attribution_strength") for a in actors])

    year_counter = Counter(int(y) for y in years)
    year_counts = [{"year": y, "count": year_counter[y]} for y in range(min(year_counter), max(year_counter)+1)] if year_counter else []

    evidence_counts = []
    for field, label in EVIDENCE_FIELDS.items():
        count = sum(1 for c in public_cases if label in c["evidence_present"])
        evidence_counts.append({"key": field, "label": label, "count": count})
    evidence_counts.sort(key=lambda x: (-x["count"], x["label"]))

    resolution_counts = Counter(c["resolution_summary"] for c in public_cases)
    resolution_order = ["financial_only", "both", "victim_facing_only", "neither"]
    resolution_chart = [
        {"key": k, "label": titleize(k), "count": resolution_counts.get(k, 0)}
        for k in resolution_order
    ]

    source_tiers = count_sorted([s.get("source_tier") for s in sources])

    filters = {
        "states": sorted({c.get("state") for c in public_cases if c.get("state") and c.get("state").lower() not in NOT_REPORTED}),
        "attack_categories": sorted({c.get("attack_category_primary") for c in public_cases if c.get("attack_category_primary")}),
        "source_stages": sorted({c.get("source_stage") for c in public_cases if c.get("source_stage")}),
        "channels": sorted({ch for c in public_cases for ch in c["contact_channels"]}),
        "impersonation_categories": sorted({c.get("impersonated_identity_category") for c in public_cases if c.get("impersonated_identity_category")}),
        "target_types": sorted({c.get("target_type") for c in public_cases if c.get("target_type")}),
        "payment_methods": sorted({c.get("payment_method") for c in public_cases if c.get("payment_method")}),
        "identity_resolution": sorted({a.get("identity_resolution") for a in actors if a.get("identity_resolution")}),
        "actor_strength": sorted({a.get("attribution_strength") for a in actors if a.get("attribution_strength")}),
    }

    payload = {
        "meta": {
            "title": "Social Engineering Incident Atlas India",
            "dataset_version": "v0.2.1 public interface build",
            "research_data_version": "v0.2.0 coding model / v0.2.1 repository hotfix",
            "case_count": len(public_cases),
            "actor_count": len(actors),
            "source_count": len(sources),
            "states_ut_count": len(state_counts),
            "year_min": min(years) if years else None,
            "year_max": max(years) if years else None,
            "reported_loss_case_count": len(losses),
            "reported_loss_total_inr": sum(losses),
            "reported_loss_median_inr": sorted(losses)[len(losses)//2] if losses else None,
            "sampling_notice": "The Atlas is purposively sampled and retrieval-driven. Case counts describe the Atlas corpus and must not be interpreted as national cybercrime prevalence.",
            "attribution_notice": "Actor records assess source-supported conduct and identity resolution. They are not findings of guilt.",
        },
        "charts": {
            "states": state_counts,
            "attack_categories": attack_counts,
            "source_stages": source_stage_counts,
            "target_types": target_counts,
            "identity_resolution": identity_counts,
            "actor_attribution_strength": actor_strength_counts,
            "years": year_counts,
            "evidence": evidence_counts,
            "resolution": resolution_chart,
            "source_tiers": source_tiers,
        },
        "filters": filters,
        "cases": public_cases,
        "actors": [{k: clean(v) for k, v in a.items() if k} for a in actors],
        "sources": [{k: clean(v) for k, v in s.items() if k} for s in sources],
    }

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Built {OUT_PATH.relative_to(ROOT)}")
    print(f"Cases: {len(public_cases)} | Actors: {len(actors)} | Sources: {len(sources)}")


if __name__ == "__main__":
    main()
