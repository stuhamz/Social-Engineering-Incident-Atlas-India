#!/usr/bin/env python3
"""Print a compact current-corpus snapshot from authoritative CSVs."""
from pathlib import Path
import csv
from collections import Counter

ROOT = Path(__file__).resolve().parents[2]

def read(path):
    with path.open(newline="", encoding="utf-8-sig") as f:
        return [r for r in csv.DictReader(f) if any((v or "").strip() for v in r.values())]

cases = read(ROOT / "data" / "cases.csv")
actors = read(ROOT / "data" / "actors.csv")
sources = read(ROOT / "references" / "sources.csv")
screen = read(ROOT / "references" / "screening_log.csv")

source_counts = Counter(r.get("case_id", "").strip() for r in sources)
stages = Counter(r.get("source_stage", "").strip() or "BLANK" for r in cases)
tiers = Counter(r.get("primary_source_tier", "").strip() or "BLANK" for r in cases)
decisions = Counter(r.get("decision", "").strip() or "BLANK" for r in screen)

case_ids = {r.get("case_id", "").strip() for r in cases}

print(f"Cases: {len(cases)}")
print(f"Actors: {len(actors)}")
print(f"Sources: {len(sources)}")
print(f"Screening candidates: {len(screen)}")
print(f"One-source cases: {sum(1 for cid in case_ids if source_counts[cid] == 1)}")
print(f"Multi-source cases: {sum(1 for cid in case_ids if source_counts[cid] > 1)}")

print("\nPrimary source tiers")
for k, v in tiers.most_common():
    print(f"  {k}: {v}")

print("\nPrimary source stages")
for k, v in stages.most_common():
    print(f"  {k}: {v}")

print("\nScreening decisions")
for k, v in decisions.most_common():
    print(f"  {k}: {v}")
