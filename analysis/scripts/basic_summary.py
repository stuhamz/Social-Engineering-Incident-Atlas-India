from pathlib import Path
import csv
from collections import Counter

ROOT = Path(__file__).resolve().parents[2]
path = ROOT / "data" / "cases.csv"

with path.open(newline="", encoding="utf-8") as f:
    rows = [r for r in csv.DictReader(f) if r.get("case_id","").strip()]

print("Cases:", len(rows))

for field in [
    "state","attack_category_primary","contact_channel_primary",
    "impersonated_identity_category","attribution_strength"
]:
    print(f"\n{field}")
    for value, n in Counter(r.get(field,"") or "BLANK" for r in rows).most_common():
        print(f"  {value}: {n}")

print("\nNOTE: v0.1 counts are schema-testing descriptives only, not population estimates.")
