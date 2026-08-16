from pathlib import Path
import sys, re

ROOT = Path(__file__).resolve().parents[2]
template = (ROOT / "cases" / "CASE_TEMPLATE.md").read_text(encoding="utf-8")

if len(sys.argv) < 3:
    raise SystemExit("Usage: python analysis/scripts/new_case.py SEIAI-0001 short-slug")

case_id = sys.argv[1]
slug = sys.argv[2]

if not re.fullmatch(r"SEIAI-\d{4}", case_id):
    raise SystemExit("Case ID must look like SEIAI-0001")

slug = re.sub(r"[^a-z0-9-]+", "-", slug.lower()).strip("-")
out = ROOT / "cases" / f"{case_id}-{slug}.md"

if out.exists():
    raise SystemExit(f"{out.name} already exists")

out.write_text(template.replace("SEIAI-XXXX", case_id), encoding="utf-8")
print(out)
