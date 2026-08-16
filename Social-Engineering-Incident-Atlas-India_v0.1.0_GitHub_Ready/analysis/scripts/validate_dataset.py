from pathlib import Path
import csv, json, re, sys

ROOT = Path(__file__).resolve().parents[2]
CASES = ROOT / "data" / "cases.csv"
SOURCES = ROOT / "references" / "sources.csv"
VOCAB = json.loads((ROOT / "schemas" / "controlled_vocabulary.json").read_text(encoding="utf-8"))

REQUIRED = {
    "case_id","record_status","coding_version","coder","date_coded","case_title",
    "incident_year","state","primary_source_id","primary_source_tier","source_stage",
    "case_status","attack_category_primary","contact_channel_primary",
    "impersonated_identity_category","target_type","initial_contact_summary",
    "pretext_summary","requested_action","victim_action","attribution_strength",
    "attribution_limitations","primary_evidentiary_gap","case_summary"
}

ENUM_MAP = {
    "record_status": "record_status",
    "primary_source_tier": "primary_source_tier",
    "source_stage": "source_stage",
    "case_status": "case_status",
    "attack_category_primary": "attack_category",
    "attack_category_secondary": "attack_category",
    "contact_channel_primary": "contact_channel",
    "impersonated_identity_category": "impersonated_identity_category",
    "target_type": "target_type",
    "cross_border_dimension": "cross_border_dimension",
    "payment_method": "payment_method",
    "attribution_basis_primary": "attribution_basis",
    "attribution_basis_secondary": "attribution_basis",
    "attribution_strength": "attribution_strength",
    "conviction_status": "conviction_status",
}

YESNO_FIELDS = {
    "target_selection_known","reconnaissance_present","authority_mechanism",
    "fear_mechanism","urgency_mechanism","trust_mechanism","scarcity_mechanism",
    "reciprocity_mechanism","isolation_mechanism","repeated_contact_mechanism",
    "credential_compromise","device_compromise","money_mule_reported",
    "phone_or_sim_evidence","cdr_evidence","bank_evidence","ip_or_login_evidence",
    "device_evidence","chat_message_evidence","email_evidence","social_media_evidence",
    "cctv_evidence","platform_provider_records","forensic_examination_reported",
    "electronic_evidence_authentication_discussed","chain_of_custody_discussed",
    "evidence_integrity_issue_reported","arrest_reported","charge_sheet_reported"
}

def read_csv(path):
    with path.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))

errors = []
warnings = []

cases = read_csv(CASES)
sources = read_csv(SOURCES)
source_ids = {r["source_id"].strip() for r in sources if r.get("source_id", "").strip()}
seen = set()

for i, row in enumerate(cases, start=2):
    if not any((v or "").strip() for v in row.values()):
        continue

    cid = row.get("case_id", "").strip()

    if not re.fullmatch(r"SEIAI-\d{4}", cid):
        errors.append(f"cases.csv row {i}: invalid case_id {cid!r}")
    if cid in seen:
        errors.append(f"cases.csv row {i}: duplicate case_id {cid}")
    seen.add(cid)

    for field in REQUIRED:
        if not row.get(field, "").strip():
            errors.append(f"{cid or 'row '+str(i)}: required field {field} is blank")

    psid = row.get("primary_source_id", "").strip()
    if psid and psid not in source_ids:
        errors.append(f"{cid}: primary_source_id {psid} not found in sources.csv")

    for field, vocab_name in ENUM_MAP.items():
        value = row.get(field, "").strip()
        if not value:
            continue
        if value not in VOCAB[vocab_name]:
            errors.append(f"{cid}: {field}={value!r} not in controlled vocabulary")

    for field in YESNO_FIELDS:
        value = row.get(field, "").strip()
        if value and value not in VOCAB["yes_no_unknown_na"]:
            errors.append(f"{cid}: {field}={value!r} must use yes/no/unknown/not_reported/not_applicable")

    loss = row.get("financial_loss_inr", "").strip()
    if loss:
        try:
            value = float(loss)
            if value < 0:
                errors.append(f"{cid}: financial_loss_inr cannot be negative")
        except ValueError:
            errors.append(f"{cid}: financial_loss_inr must be numeric without currency symbols or commas")

    if row.get("attribution_strength","").strip() in {"strong","moderate","limited"}:
        if not row.get("attribution_basis_primary","").strip():
            warnings.append(f"{cid}: attribution strength is set but attribution_basis_primary is blank")
        if not row.get("attribution_target","").strip():
            warnings.append(f"{cid}: attribution strength is set but attribution_target is blank")

print(f"Validated {len([r for r in cases if any((v or '').strip() for v in r.values())])} populated case rows.")
print(f"Errors: {len(errors)}")
for e in errors:
    print("ERROR:", e)
print(f"Warnings: {len(warnings)}")
for w in warnings:
    print("WARNING:", w)

sys.exit(1 if errors else 0)
