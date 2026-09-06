#!/usr/bin/env python3
"""Build the public Atlas JSON from authoritative research CSVs.

The website is a read-only exploration layer. It never edits research data.
Derived browser data is rebuilt from data/cases.csv, data/actors.csv and
references/sources.csv (or data/sources.csv in local packaging).
"""
from __future__ import annotations

import csv
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CASES_PATH = ROOT / "data" / "cases.csv"
ACTORS_PATH = ROOT / "data" / "actors.csv"
SOURCES_CANDIDATES = [ROOT / "references" / "sources.csv", ROOT / "data" / "sources.csv"]
OUT_PATH = ROOT / "atlas" / "data" / "atlas.json"
REPO = "stuhamz/Social-Engineering-Incident-Atlas-India"
REPO_URL = f"https://github.com/{REPO}"

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

CORE_MATRIX_EVIDENCE = [
    "Bank / transaction", "Phone / SIM", "CDR / telecom", "Device",
    "Chat / message", "IP / login", "Platform records", "CCTV / video",
]

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

# Approximate centroids used only to place corpus markers on the schematic map.
# They are not incident coordinates and must never be interpreted as precise locations.
STATE_CENTROIDS = {
    "Andaman and Nicobar Islands": (11.74, 92.66),
    "Andhra Pradesh": (15.91, 79.74),
    "Arunachal Pradesh": (28.22, 94.73),
    "Assam": (26.20, 92.94),
    "Bihar": (25.10, 85.31),
    "Chandigarh": (30.73, 76.78),
    "Chhattisgarh": (21.28, 81.87),
    "Delhi": (28.61, 77.21),
    "Goa": (15.30, 74.12),
    "Gujarat": (22.26, 71.19),
    "Haryana": (29.06, 76.08),
    "Himachal Pradesh": (31.10, 77.17),
    "Jammu and Kashmir": (33.78, 76.58),
    "Jharkhand": (23.61, 85.28),
    "Karnataka": (15.32, 75.71),
    "Kerala": (10.85, 76.27),
    "Ladakh": (34.15, 77.58),
    "Madhya Pradesh": (23.47, 77.95),
    "Maharashtra": (19.75, 75.71),
    "Odisha": (20.95, 85.10),
    "Puducherry": (11.94, 79.81),
    "Punjab": (31.15, 75.34),
    "Rajasthan": (27.02, 74.22),
    "Tamil Nadu": (11.13, 78.66),
    "Telangana": (18.11, 79.02),
    "Uttar Pradesh": (26.85, 80.95),
    "Uttarakhand": (30.07, 79.02),
    "West Bengal": (22.99, 87.85),
}

PROCEDURE_NOTICES = {
    "bail_order": ("Bail order", "Allegations and prima facie material may be recorded. This is not a final determination of guilt."),
    "interim_order": ("Interim order", "Preliminary or provisional findings may be recorded. Read them within the limited issue before the court."),
    "procedural_order": ("Procedural order", "The record may reproduce allegations or investigative material without deciding the merits."),
    "charge_sheet_or_fir_summary": ("Investigation-stage record", "Allegations and investigative claims have not been finally adjudicated."),
    "final_judgment": ("Final judgment", "Adjudicated findings are available, but only for the issues and parties actually decided in this proceeding."),
    "appellate_judgment": ("Appellate judgment", "Adjudicated appellate findings are available. The proceeding may address liability without resolving every offender identity."),
    "official_release": ("Official release", "An official account of the investigation or incident, not automatically a final judicial finding."),
    "regulatory_advisory": ("Regulatory material", "Institutional or regulatory material may describe the incident without adjudicating criminal responsibility."),
    "journalistic_report": ("Journalistic report", "Credible reporting may reconstruct the incident, but it is not a judicial finding."),
    "other": ("Public record", "Interpret the source within its stated procedural and evidentiary limits."),
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


def find_case_note_url(case_id: str):
    case_dir = ROOT / "cases"
    if case_dir.exists():
        matches = sorted(case_dir.glob(f"{case_id}-*.md"))
        if matches:
            rel = matches[0].relative_to(ROOT).as_posix()
            return f"{REPO_URL}/blob/main/{rel}"
    return f"{REPO_URL}/search?q={case_id}&type=code"


def procedure_notice(stage: str):
    label, note = PROCEDURE_NOTICES.get(stage, (titleize(stage), "Interpret this record within its procedural and evidentiary limits."))
    return {"label": label, "note": note}


def main():
    cases = read_csv(CASES_PATH)
    actors = read_csv(ACTORS_PATH)
    source_path = next((p for p in SOURCES_CANDIDATES if p.exists()), None)
    if not source_path:
        raise FileNotFoundError("Could not find sources.csv")
    sources = read_csv(source_path)

    normalized_actors = [{k: clean(v) for k, v in a.items() if k} for a in actors]
    normalized_sources = [{k: clean(v) for k, v in s.items() if k} for s in sources]

    actors_by_case = defaultdict(list)
    for a in normalized_actors:
        actors_by_case[a.get("case_id", "")].append(a)

    sources_by_case = defaultdict(list)
    source_by_id = {}
    for s in normalized_sources:
        sources_by_case[s.get("case_id", "")].append(s)
        source_by_id[s.get("source_id", "")] = s

    public_cases = []
    for row in cases:
        c = {k: clean(v) for k, v in row.items() if k}
        cid = c.get("case_id", "")
        case_actors = actors_by_case.get(cid, [])
        case_sources = sources_by_case.get(cid, [])

        evidence = [label for field, label in EVIDENCE_FIELDS.items() if yes(c.get(field))]
        mechanisms = [label for field, label in MECHANISM_FIELDS.items() if yes(c.get(field))]
        if clean(c.get("other_psychological_mechanism")) and c.get("other_psychological_mechanism", "").lower() not in NOT_REPORTED:
            mechanisms.append("Other documented mechanism")

        vf_human = any(a.get("victim_facing_function") == "yes" and a.get("identity_resolution") in HUMAN_RESOLVED for a in case_actors)
        fin_human = any(a.get("financial_function") == "yes" and a.get("identity_resolution") in HUMAN_RESOLVED for a in case_actors)
        resolution = "both" if vf_human and fin_human else "victim_facing_only" if vf_human else "financial_only" if fin_human else "neither"

        contact_channels = []
        if c.get("contact_channel_primary") and c.get("contact_channel_primary").lower() not in NOT_REPORTED:
            contact_channels.append(c["contact_channel_primary"])
        contact_channels.extend(split_multi(c.get("contact_channels_other")))
        contact_channels = list(dict.fromkeys(contact_channels))

        primary_source = source_by_id.get(c.get("primary_source_id", "")) or (case_sources[0] if case_sources else {})
        actor_strengths = [a.get("attribution_strength") for a in case_actors if a.get("attribution_strength")]
        strength_rank = {"strong": 4, "moderate": 3, "limited": 2, "unclear": 1, "not_assessed": 0}
        strongest_actor_strength = max(actor_strengths, key=lambda x: strength_rank.get(x, -1)) if actor_strengths else "not_assessed"

        item = c.copy()
        item.update({
            "financial_loss_inr_number": to_number(c.get("financial_loss_inr")),
            "incident_year_number": to_number(c.get("incident_year")),
            "known_account_count_number": to_number(c.get("known_account_count")),
            "evidence_present": evidence,
            "psychological_mechanisms": list(dict.fromkeys(mechanisms)),
            "contact_channels": contact_channels,
            "resolution_summary": resolution,
            "victim_facing_human_resolved": vf_human,
            "financial_human_resolved": fin_human,
            "strongest_actor_attribution_strength": strongest_actor_strength,
            "actors": case_actors,
            "sources": case_sources,
            "primary_source_url": primary_source.get("url") or primary_source.get("archive_url") or "",
            "case_note_url": find_case_note_url(cid),
            "procedure_notice": procedure_notice(c.get("source_stage", "")),
        })
        public_cases.append(item)

    losses = [c["financial_loss_inr_number"] for c in public_cases if c["financial_loss_inr_number"] is not None]
    years = [c["incident_year_number"] for c in public_cases if isinstance(c["incident_year_number"], (int, float))]
    state_counts = count_sorted([c.get("state") for c in public_cases])
    attack_counts = count_sorted([c.get("attack_category_primary") for c in public_cases])
    source_stage_counts = count_sorted([c.get("source_stage") for c in public_cases])
    target_counts = count_sorted([c.get("target_type") for c in public_cases])
    identity_counts = count_sorted([a.get("identity_resolution") for a in normalized_actors])
    actor_strength_counts = count_sorted([a.get("attribution_strength") for a in normalized_actors])

    year_counter = Counter(int(y) for y in years)
    year_counts = [{"year": y, "count": year_counter[y]} for y in range(min(year_counter), max(year_counter) + 1)] if year_counter else []

    evidence_counts = []
    for field, label in EVIDENCE_FIELDS.items():
        count = sum(1 for c in public_cases if label in c["evidence_present"])
        evidence_counts.append({"key": field, "label": label, "count": count})
    evidence_counts.sort(key=lambda x: (-x["count"], x["label"]))

    resolution_counts = Counter(c["resolution_summary"] for c in public_cases)
    resolution_order = ["financial_only", "both", "victim_facing_only", "neither"]
    resolution_chart = [{"key": k, "label": titleize(k), "count": resolution_counts.get(k, 0)} for k in resolution_order]

    geo_points = []
    for d in state_counts:
        coords = STATE_CENTROIDS.get(d["key"])
        if coords:
            lat, lon = coords
            geo_points.append({**d, "lat": lat, "lon": lon})

    matrix_rows = []
    for attack in attack_counts:
        subset = [c for c in public_cases if c.get("attack_category_primary") == attack["key"]]
        cells = {label: sum(1 for c in subset if label in c["evidence_present"]) for label in CORE_MATRIX_EVIDENCE}
        matrix_rows.append({"key": attack["key"], "label": attack["label"], "count": len(subset), "cells": cells})

    filters = {
        "states": sorted({c.get("state") for c in public_cases if c.get("state") and c.get("state").lower() not in NOT_REPORTED}),
        "attack_categories": sorted({c.get("attack_category_primary") for c in public_cases if c.get("attack_category_primary")}),
        "source_stages": sorted({c.get("source_stage") for c in public_cases if c.get("source_stage")}),
        "channels": sorted({ch for c in public_cases for ch in c["contact_channels"]}),
        "impersonation_categories": sorted({c.get("impersonated_identity_category") for c in public_cases if c.get("impersonated_identity_category")}),
        "target_types": sorted({c.get("target_type") for c in public_cases if c.get("target_type")}),
        "payment_methods": sorted({c.get("payment_method") for c in public_cases if c.get("payment_method")}),
        "psychological_mechanisms": list(MECHANISM_FIELDS.values()) + ["Other documented mechanism"],
        "cross_border_values": sorted({c.get("cross_border_dimension") for c in public_cases if c.get("cross_border_dimension")}),
        "case_attribution_strength": sorted({c.get("attribution_strength") for c in public_cases if c.get("attribution_strength")}),
        "identity_resolution": sorted({a.get("identity_resolution") for a in normalized_actors if a.get("identity_resolution")}),
        "actor_strength": sorted({a.get("attribution_strength") for a in normalized_actors if a.get("attribution_strength")}),
        "years": sorted({int(y) for y in years}),
    }

    payload = {
        "meta": {
            "title": "Social Engineering Incident Atlas India",
            "interface_version": "v0.2",
            "dataset_version": "v0.2.2 Wave 1A public interface build",
            "research_data_version": "v0.2.2 corrective expansion / v0.2.0 actor schema",
            "case_count": len(public_cases),
            "actor_count": len(normalized_actors),
            "source_count": len(normalized_sources),
            "states_ut_count": len(state_counts),
            "year_min": min(years) if years else None,
            "year_max": max(years) if years else None,
            "reported_loss_case_count": len(losses),
            "reported_loss_total_inr": sum(losses),
            "reported_loss_median_inr": sorted(losses)[len(losses) // 2] if losses else None,
            "sampling_notice": "The Atlas is purposively sampled and retrieval-driven. Case counts describe the reviewed corpus and must not be interpreted as national cybercrime prevalence or state rankings.",
            "attribution_notice": "Actor records assess source-supported conduct and identity resolution. They are not findings of guilt.",
            "map_notice": "Map markers show the state or UT coded for reviewed incidents. Marker location is an approximate state centroid, not an incident coordinate.",
            "citation": "Hamzah. (2026). Social Engineering Incident Atlas India (v0.2.2). GitHub repository.",
            "repository_url": REPO_URL,
        },
        "charts": {
            "states": state_counts,
            "geo_points": geo_points,
            "attack_categories": attack_counts,
            "source_stages": source_stage_counts,
            "target_types": target_counts,
            "identity_resolution": identity_counts,
            "actor_attribution_strength": actor_strength_counts,
            "years": year_counts,
            "evidence": evidence_counts,
            "resolution": resolution_chart,
            "source_tiers": count_sorted([s.get("source_tier") for s in normalized_sources]),
            "evidence_matrix": {"columns": CORE_MATRIX_EVIDENCE, "rows": matrix_rows},
        },
        "filters": filters,
        "cases": public_cases,
        "actors": normalized_actors,
        "sources": normalized_sources,
    }

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Built {OUT_PATH.relative_to(ROOT)}")
    print(f"Cases: {len(public_cases)} | Actors: {len(normalized_actors)} | Sources: {len(normalized_sources)}")
    print(f"Map points: {len(geo_points)} | Evidence matrix rows: {len(matrix_rows)}")


if __name__ == "__main__":
    main()
