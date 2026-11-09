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
    assert set(case)==set(ALLOWED_CASE_FIELDS)|{'evidence','mechanisms','actor_counts','source_counts'}
    assert set(case['evidence'])==set(EVIDENCE_FIELDS)
    assert set(case['mechanisms'])==set(MECHANISM_FIELDS)
    assert set(case['actor_counts'])==set(ACTOR_AGGREGATE_FIELDS)
    assert set(case['source_counts'])=={'source_tier','source_stage','source_type'}
    for kind in ['actor_counts','source_counts']:
        for field,counts in case[kind].items():
            for coded_value,n in counts.items():
                assert re.fullmatch(r'[A-Za-z0-9_-]+', coded_value),(field,coded_value)
                assert isinstance(n,int) and n>0,(field,coded_value,n)
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
# Reconstruct actor and source chart totals from incident-linked counts. This
# guarantees each displayed chart bar drills into exactly its contributing cases.
for field in ACTOR_AGGREGATE_FIELDS:
    from_cases=Counter()
    for case in p['cases']:
        from_cases.update(case['actor_counts'][field])
    assert dict(from_cases)==p['actors_aggregate'][field],field
    assert sum(from_cases.values())==600,field
for field,aggregate in [('source_tier','tier'),('source_stage','stage'),('source_type','type')]:
    from_cases=Counter()
    for case in p['cases']:
        from_cases.update(case['source_counts'][field])
    assert dict(from_cases)==p['source_aggregate'][aggregate],field
    assert sum(from_cases.values())==310,field
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

# Each public case ID must open a generated neutral link directly to its existing note.
notes_dir=ROOT/'atlas/notes'
assert notes_dir.is_dir(), 'Missing generated case-note directory'
note_pages=sorted(notes_dir.glob('SEIAI-*.html'))
assert len(note_pages)==300, f'Expected 300 direct note pages, found {len(note_pages)}'
for case in p['cases']:
    case_id=case['case_id']
    page=(notes_dir/f'{case_id}.html')
    assert page.exists(), case_id
    text=page.read_text(encoding='utf-8')
    assert 'github.com/stuhamz/Social-Engineering-Incident-Atlas-India/blob/main/cases/' in text
    assert 'github.com/search' not in text and 'type=code' not in text
    assert case_id in text
    path_matches=list((ROOT/'cases').glob(f'{case_id}-*.md'))
    assert len(path_matches)==1, (case_id,path_matches)
    assert path_matches[0].name in text, case_id
front_js=(ROOT/'atlas/app.js').read_text(encoding='utf-8')
assert 'const caseLink=id=>`./notes/${encodeURIComponent(id)}.html`' in front_js
assert 'Find note in GitHub' not in front_js
assert '/search?q=' not in front_js
# Chart bars must navigate to the case results; multiple roles or source rows
# per incident are represented with counts rather than unique-person claims.
for id in ['overviewAttack','overviewStages','overviewEvidence','overviewAttribution',
           'categoryAttack','categoryChannels','categoryMechanisms',
           'actorIdentity','actorStrength','actorVictim','actorFinancial',
           'sourceTiers','sourceCaseStages']:
    assert f"chartBars('{id}'," in front_js,id
assert 'selectDrilldown(' in front_js
assert 'actor_counts' in front_js and 'source_counts' in front_js
assert 'scopeAttack' in front_js and 'scopeStage' in front_js
assert 'drilldownBanner' in html and 'matchedRecordsHeader' in html
print('PASS: all 300 case-note links target real Markdown files without using GitHub search')
