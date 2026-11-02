#!/usr/bin/env python3
"""Build privacy-minimized public browsing metadata; omit all case narratives, names and URLs."""
from pathlib import Path
import csv, json
ROOT = Path(__file__).resolve().parents[2]
def rows(relative):
    with (ROOT / relative).open(newline='', encoding='utf-8-sig') as f:
        return list(csv.DictReader(f))
cases=rows('data/cases.csv')
actors=rows('data/actors.csv')
sources=rows('references/sources.csv')
screening=rows('references/screening_log.csv')
assert len(cases)==300 and len(actors)==600 and len(sources)==310 and len(screening)==412
assert len({x['case_id'] for x in cases})==300
assert all(x['case_id'].startswith('SEIAI-') for x in cases)
allowed=('case_id','attack_category_primary','source_stage','primary_source_tier')
view=[{k:c[k] for k in allowed} for c in cases]
# Deliberately do not export outcome, actor identity, source titles, names, amounts or links.
data={'meta':{'case_count':len(cases),'actor_role_count':len(actors),'registered_source_count':len(sources),'screening_count':len(screening),'snapshot_type':'post-v0.4.0 public index'},'cases':sorted(view,key=lambda r:r['case_id'])}
folder=ROOT/'atlas/data';folder.mkdir(parents=True,exist_ok=True)
(folder/'atlas.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n',encoding='utf-8')
print('Built minimal case index:',len(view),'cases,',len(data['meta']),'counts')
