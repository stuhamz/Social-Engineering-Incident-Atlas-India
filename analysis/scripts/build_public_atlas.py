#!/usr/bin/env python3
"""Build a research-friendly, privacy-minimized Atlas exploration payload.

Exports descriptive *codes only*, no personal names, titles, narratives, monetary values,
source URLs, actor identities or raw evidence. A 'yes' is a researcher-coded mention,
not authentication or proof of the underlying fact.
"""
from collections import Counter
from pathlib import Path
import csv
import json

ROOT = Path(__file__).resolve().parents[2]
ALLOWED_CASE_FIELDS = (
    'case_id', 'attack_category_primary', 'contact_channel_primary',
    'source_stage', 'primary_source_tier', 'attribution_strength',
)
EVIDENCE_FIELDS = (
    'bank_evidence', 'cdr_evidence', 'phone_or_sim_evidence', 'ip_or_login_evidence',
    'device_evidence', 'chat_message_evidence', 'email_evidence',
    'social_media_evidence', 'cctv_evidence', 'platform_provider_records',
    'forensic_examination_reported', 'electronic_evidence_authentication_discussed',
    'chain_of_custody_discussed', 'evidence_integrity_issue_reported',
)
MECHANISM_FIELDS = (
    'authority_mechanism', 'fear_mechanism', 'urgency_mechanism',
    'trust_mechanism', 'scarcity_mechanism', 'reciprocity_mechanism',
    'isolation_mechanism', 'repeated_contact_mechanism',
)
ACTOR_AGGREGATE_FIELDS = (
    'victim_facing_function', 'financial_function',
    'identity_resolution', 'attribution_strength', 'role_layer',
)
SAFE_FLAGS = {'yes', 'no', 'not_reported', 'not_applicable', 'unknown', ''}

def rows(relative):
    with (ROOT / relative).open(newline='', encoding='utf-8-sig') as handle:
        return list(csv.DictReader(handle))

def distribution(items, field):
    return dict(sorted(Counter(str(item[field]) or 'not_reported' for item in items).items()))

def build():
    cases = rows('data/cases.csv')
    actors = rows('data/actors.csv')
    sources = rows('references/sources.csv')
    screening = rows('references/screening_log.csv')
    assert (len(cases), len(actors), len(sources), len(screening)) == (300, 600, 310, 412)
    assert len({row['case_id'] for row in cases}) == 300
    assert {row['case_id'] for row in actors} <= {row['case_id'] for row in cases}
    assert all(row['case_id'].startswith('SEIAI-') for row in cases)
    assert all(row[k] in SAFE_FLAGS for row in cases for k in EVIDENCE_FIELDS + MECHANISM_FIELDS), 'Unexpected evidence coding'

    case_view = []
    for row in cases:
        entry = {k: row[k] for k in ALLOWED_CASE_FIELDS}
        entry['evidence'] = {k: row[k] or 'not_reported' for k in EVIDENCE_FIELDS}
        entry['mechanisms'] = {k: row[k] or 'not_reported' for k in MECHANISM_FIELDS}
        case_view.append(entry)

    result = {
        'meta': {
            'case_count': len(cases), 'actor_role_count': len(actors),
            'registered_source_count': len(sources), 'screening_count': len(screening),
            'release_scope': 'Post-v0.4.0 working repository: researcher-coded metadata',
            'interpretation': 'Descriptive counts within a purposive corpus, not national prevalence, source authentication or proof of guilt',
        },
        'cases': sorted(case_view, key=lambda entry: entry['case_id']),
        'actors_aggregate': {k: distribution(actors, k) for k in ACTOR_AGGREGATE_FIELDS},
        'source_aggregate': {
            'tier': distribution(sources, 'source_tier'),
            'stage': distribution(sources, 'source_stage'),
            'type': distribution(sources, 'source_type'),
        },
    }
    target = ROOT / 'atlas/data/atlas.json'
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':')) + '\n', encoding='utf-8')
    print('Built Atlas explorer:', len(case_view), 'coded case rows;', len(result['actors_aggregate']), 'actor summaries;', target.stat().st_size, 'bytes')
    return result

if __name__ == '__main__':
    build()
