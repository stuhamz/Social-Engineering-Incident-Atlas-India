#!/usr/bin/env python3
"""Regression checks for public browser metadata, denominators and privacy allowlist."""
import csv
import json
import re
from collections import Counter
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
with (ROOT/'atlas/data/atlas.json').open(encoding='utf-8') as f:
    p=json.load(f)
with (ROOT/'data/cases.csv').open(encoding='utf-8-sig',newline='') as f:
    raw=list(csv.DictReader(f))
with (ROOT/'data/actors.csv').open(encoding='utf-8-sig',newline='') as f:
    actors=list(csv.DictReader(f))
from build_public_atlas import ALLOWED_CASE_FIELDS, EVIDENCE_FIELDS, MECHANISM_FIELDS, ACTOR_AGGREGATE_FIELDS
assert len(p['cases'])==len(raw)==300
assert p['meta']['actor_role_count']==len(actors)==600
assert p['meta']['registered_source_count']==310
assert p['meta']['screening_count']==412
assert len({c['case_id'] for c in p['cases']})==300
assert set(p)=={'meta','cases','actors_aggregate','source_aggregate'}
for case in p['cases']:
    assert set(case)==set(ALLOWED_CASE_FIELDS)|{'evidence','mechanisms'}
    assert set(case['evidence'])==set(EVIDENCE_FIELDS)
    assert set(case['mechanisms'])==set(MECHANISM_FIELDS)
    assert re.fullmatch(r'SEIAI-\d{4}',case['case_id'])
    for k in ALLOWED_CASE_FIELDS:
        if k!='case_id': assert re.fullmatch(r'[\w-]+',case[k]),(case['case_id'],k)
    for v in list(case['evidence'].values())+list(case['mechanisms'].values()):
        assert v in {'yes','no','not_reported','not_applicable','unknown'}
assert set(p['actors_aggregate'])==set(ACTOR_AGGREGATE_FIELDS)
for k,counts in p['actors_aggregate'].items():
    assert sum(counts.values())==600,(k,sum(counts.values()))
assert sum(p['source_aggregate']['tier'].values())==310
assert sum(p['source_aggregate']['stage'].values())==310
assert sum(p['source_aggregate']['type'].values())==310
# Do not silently reproduce the old unrestricted JSON or bring source URLs into the site payload.
serialized=(ROOT/'atlas/data/atlas.json').read_text(encoding='utf-8')
for forbidden in ['https://','http://','case_summary','financial_loss_inr','actor_label','victim_action','research_notes','phone_number','source_url','disposition']:
    assert forbidden not in serialized,forbidden
html=(ROOT/'atlas/index.html').read_text(encoding='utf-8')
js=(ROOT/'atlas/app.js').read_text(encoding='utf-8')
all_ids=set(re.findall(r'\bid="([\w-]+)"',html))
for identifier in re.findall(r'\$\(\s*[\'\"]([\w-]+)[\'\"]\s*\)',js):
    assert identifier in all_ids,identifier
assert '<script src="./app.js" defer>' in html
assert '<link rel="stylesheet" href="./styles.css">' in html
print('PASS: 300 cases, 600 actor roles, 310 sources; no private names, narratives, URLs or financial details in browser JSON; HTML hooks resolved')
