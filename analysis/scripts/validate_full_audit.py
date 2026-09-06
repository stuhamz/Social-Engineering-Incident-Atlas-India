from pathlib import Path
import csv, re, sys
from datetime import date
from collections import Counter

ROOT=Path(__file__).resolve().parents[2]

def read(path):
    with path.open(newline='',encoding='utf-8') as f:
        return [r for r in csv.DictReader(f) if any((v or '').strip() for v in r.values())]

cases=read(ROOT/'data'/'cases.csv')
actors=read(ROOT/'data'/'actors.csv')
sources=read(ROOT/'references'/'sources.csv')
screen=read(ROOT/'references'/'screening_log.csv')
errors=[]; warnings=[]

case_ids=[r.get('case_id','').strip() for r in cases]
source_ids=[r.get('source_id','').strip() for r in sources]
actor_ids=[r.get('actor_id','').strip() for r in actors]

for label, vals in [('case_id',case_ids),('source_id',source_ids),('actor_id',actor_ids)]:
    for value,n in Counter(vals).items():
        if not value:
            errors.append(f'blank {label}')
        elif n != 1:
            errors.append(f'duplicate {label} {value}: {n} rows')

case_set=set(case_ids)
source_by_id={r['source_id'].strip():r for r in sources if r.get('source_id','').strip()}
retired={'SEIAI-0060'}

# Every active incident must have exactly one public narrative.
case_note_paths=sorted((ROOT/'cases').glob('SEIAI-*.md'))
narrative_ids=[]
for path in case_note_paths:
    m=re.match(r'^(SEIAI-\d{4})-', path.name)
    if not m:
        errors.append(f'unparseable case narrative filename: {path.name}')
    else:
        narrative_ids.append(m.group(1))
for cid,n in Counter(narrative_ids).items():
    if n != 1:
        errors.append(f'{cid}: expected exactly one case narrative, found {n}')
for cid in sorted(case_set-set(narrative_ids)):
    errors.append(f'{cid}: active case has no narrative file')
for cid in sorted(set(narrative_ids)-case_set):
    errors.append(f'{cid}: orphan/non-active narrative file remains in cases/')

# Retired IDs must never return.
for cid in retired:
    if cid in case_set: errors.append(f'retired case {cid} remains active')
    if any(r.get('case_id','').strip()==cid for r in actors): errors.append(f'retired case {cid} still has active actor rows')
    if any(r.get('case_id','').strip()==cid for r in sources): errors.append(f'retired case {cid} still has active source rows')
    if cid in set(narrative_ids): errors.append(f'retired case {cid} has a narrative file')

# Source URLs may repeat within one case, but not across different active incidents.
url_to_cases={}
for r in sources:
    u=r.get('url','').strip().rstrip('/')
    if u:
        url_to_cases.setdefault(u,set()).add(r.get('case_id','').strip())
for u,cids in url_to_cases.items():
    if len(cids)>1:
        errors.append(f'active source URL reused across cases {sorted(cids)}: {u}')

# Source ownership, primary-source agreement and date precision.
for c in cases:
    cid=c['case_id'].strip()
    psid=c.get('primary_source_id','').strip()
    src=source_by_id.get(psid)
    if not src:
        errors.append(f'{cid}: primary source missing')
    elif src.get('case_id','').strip()!=cid:
        errors.append(f'{cid}: primary source {psid} belongs to {src.get("case_id")}')
    if src and src.get('case_number','').strip() and not c.get('case_number','').strip():
        errors.append(f'{cid}: case_number blank although primary source registry has one')
    s=c.get('incident_start_date','').strip()
    e=c.get('incident_end_date','').strip()
    y=c.get('incident_year','').strip()
    def parse(x):
        try: return date.fromisoformat(x)
        except Exception: return None
    sd=parse(s) if s else None
    ed=parse(e) if e else None
    if s and not sd: errors.append(f'{cid}: invalid incident_start_date {s!r}')
    if e and not ed: errors.append(f'{cid}: invalid incident_end_date {e!r}')
    if sd and ed and sd>ed: errors.append(f'{cid}: incident_start_date after incident_end_date')
    if y!='not_reported':
        if not re.fullmatch(r'\d{4}',y):
            errors.append(f'{cid}: incident_year must be YYYY or not_reported')
        elif sd and not (sd.year<=int(y)<= (ed.year if ed else sd.year)):
            warnings.append(f'{cid}: incident_year {y} lies outside encoded exact date range {s} to {e}')
    rn=c.get('research_notes','')
    if s.endswith('-01-01') or e.endswith('-12-31'):
        if 'source' not in rn.lower() and 'exact' not in rn.lower():
            warnings.append(f'{cid}: year-boundary exact date should be source-supported or removed')
    if not c.get('target_sector','').strip(): warnings.append(f'{cid}: target_sector blank')
    if not c.get('impersonated_identity_detail','').strip(): warnings.append(f'{cid}: impersonated_identity_detail blank')

# Every case must have at least one actor and one source after v0.2.
actor_counts=Counter(r.get('case_id','').strip() for r in actors)
source_counts=Counter(r.get('case_id','').strip() for r in sources)
for cid in sorted(case_set):
    if actor_counts[cid] < 1: errors.append(f'{cid}: no actor-role record')
    if source_counts[cid] < 1: errors.append(f'{cid}: no registered source')

# Actor source ownership and functional coding.
allowed_fun={'yes','no','uncertain','not_assessed'}
for a in actors:
    aid=a['actor_id'].strip(); cid=a['case_id'].strip()
    if cid not in case_set: errors.append(f'{aid}: parent case is not active')
    for f in ('victim_facing_function','financial_function'):
        if a.get(f,'').strip() not in allowed_fun: errors.append(f'{aid}: invalid {f}')
    if not a.get('function_assignment_basis','').strip(): errors.append(f'{aid}: blank function_assignment_basis')
    for sid in [x.strip() for x in a.get('source_ids','').split(';') if x.strip()]:
        src=source_by_id.get(sid)
        if not src: errors.append(f'{aid}: source {sid} missing')
        elif src.get('case_id','').strip()!=cid: errors.append(f'{aid}: source {sid} belongs to different case {src.get("case_id")}')

# Screening transparency for the retired duplicate remains mandatory.
r=[x for x in screen if x.get('candidate_id')=='CAND-0079']
if not r:
    errors.append('CAND-0079 missing from screening history')
else:
    x=r[0]
    if x.get('decision')!='duplicate' or x.get('duplicate_of_case_id')!='SEIAI-0029':
        errors.append('CAND-0079 not correctly marked duplicate of SEIAI-0029')

print(f'Full audit validator: {len(cases)} cases, {len(case_note_paths)} narratives, {len(actors)} actors, {len(sources)} sources, {len(screen)} screening candidates')
print(f'Errors: {len(errors)}')
for x in errors: print('ERROR:',x)
print(f'Warnings: {len(warnings)}')
for x in warnings: print('WARNING:',x)
sys.exit(1 if errors else 0)
