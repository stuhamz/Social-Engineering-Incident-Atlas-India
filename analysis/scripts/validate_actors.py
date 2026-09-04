from pathlib import Path
import csv, json, re, sys
ROOT=Path(__file__).resolve().parents[2]
A=ROOT/'data'/'actors.csv'; C=ROOT/'data'/'cases.csv'; S=ROOT/'references'/'sources.csv'
AV=json.loads((ROOT/'schemas'/'actor_controlled_vocabulary.json').read_text(encoding='utf-8'))
V=json.loads((ROOT/'schemas'/'controlled_vocabulary.json').read_text(encoding='utf-8'))
def read(p):
    with p.open(newline='',encoding='utf-8') as f:return list(csv.DictReader(f))
actors,cases,sources=read(A),read(C),read(S)
case_ids={r['case_id'].strip() for r in cases if r.get('case_id','').strip()}
source_ids={r['source_id'].strip() for r in sources if r.get('source_id','').strip()}
errors=[]; warnings=[]; seen=set()
for i,r in enumerate(actors,start=2):
    aid=r.get('actor_id','').strip(); cid=r.get('case_id','').strip()
    if not re.fullmatch(r'SEIAI-\d{4}-A\d{2}',aid): errors.append(f'row {i}: invalid actor_id {aid!r}')
    if aid in seen: errors.append(f'duplicate actor_id {aid}')
    seen.add(aid)
    if cid not in case_ids: errors.append(f'{aid}: parent case_id not found')
    if aid and cid and not aid.startswith(cid+'-'): errors.append(f'{aid}: prefix does not match {cid}')
    if r.get('record_status','').strip() not in V['record_status']: errors.append(f'{aid}: invalid record_status')
    if r.get('identity_resolution','').strip() not in AV['identity_resolution']: errors.append(f'{aid}: invalid identity_resolution')
    if r.get('role_layer','').strip() not in AV['role_layer']: errors.append(f'{aid}: invalid role_layer')
    for f in ('victim_facing_function','financial_function'):
        if r.get(f,'').strip() not in AV['actor_function']: errors.append(f'{aid}: invalid {f}')
    if not r.get('function_assignment_basis','').strip(): errors.append(f'{aid}: function_assignment_basis is blank')
    if r.get('role_primary','').strip() not in AV['role_primary']: errors.append(f'{aid}: invalid role_primary')
    rs=r.get('role_secondary','').strip()
    if rs and rs not in AV['role_primary']: errors.append(f'{aid}: invalid role_secondary')
    if r.get('direct_victim_contact','').strip() not in V['yes_no_unknown_na']: errors.append(f'{aid}: invalid direct_victim_contact')
    for f in ('attribution_basis_primary','attribution_basis_secondary'):
        x=r.get(f,'').strip()
        if x and x not in V['attribution_basis']: errors.append(f'{aid}: {f}={x!r} invalid')
    st=r.get('attribution_strength','').strip()
    if st not in V['attribution_strength']: errors.append(f'{aid}: invalid attribution_strength')
    if st in {'strong','moderate','limited'} and not r.get('attribution_limitations','').strip(): warnings.append(f'{aid}: limitations blank')
    for sid in [x.strip() for x in r.get('source_ids','').split(';') if x.strip()]:
        if sid not in source_ids: errors.append(f'{aid}: source {sid} not found')
print(f'Validated {len(actors)} actor-role rows.')
print(f'Errors: {len(errors)}')
for e in errors: print('ERROR:',e)
print(f'Warnings: {len(warnings)}')
for w in warnings: print('WARNING:',w)
sys.exit(1 if errors else 0)
