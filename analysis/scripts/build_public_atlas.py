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
import re
from html import escape
from urllib.parse import quote

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



def build_case_note_links(case_ids):
    """Create neutral, stable Pages links to the actual 300 GitHub case notes.

    Do not publish title slugs in the browser's main JSON. These links are
    generated from the filenames that really exist, not from GitHub code search.
    """
    source_dir = ROOT / 'cases'
    matching = list(source_dir.glob('SEIAI-*.md'))
    by_id = {}
    for note in matching:
        found = re.fullmatch(r'(SEIAI-\d{4})-[a-zA-Z0-9-]+\.md', note.name)
        assert found, f'Unexpected case-note filename: {note.name}'
        case_id = found.group(1)
        assert case_id not in by_id, f'Duplicate case-note ID: {case_id}'
        by_id[case_id] = note
    expected = set(case_ids)
    assert set(by_id) == expected, (
        f'Case-note index mismatch: missing={sorted(expected-set(by_id))}; '
        f'extra={sorted(set(by_id)-expected)}'
    )
    output_dir = ROOT / 'atlas/notes'
    output_dir.mkdir(parents=True, exist_ok=True)
    for stale in output_dir.glob('SEIAI-*.html'):
        stale.unlink()
    for case_id, note in sorted(by_id.items()):
        path = f'cases/{note.name}'
        assert note.is_file() and note.stat().st_size > 0
        url = 'https://github.com/stuhamz/Social-Engineering-Incident-Atlas-India/blob/main/' + quote(path, safe='/')
        url_attr = escape(url, quote=True)
        page = (
            '<!doctype html>\n<html lang="en"><head><meta charset="utf-8">'
            '<meta name="robots" content="noindex">'
            f'<meta http-equiv="refresh" content="0; url={url_attr}">'
            f'<title>{case_id} | Case note</title></head><body>'
            f'<p>Opening research note {case_id}. '
            f'<a href="{url_attr}">Open the case note directly on GitHub</a>.</p>'
            '</body></html>\n'
        )
        (output_dir / f'{case_id}.html').write_text(page, encoding='utf-8')
    return len(by_id)

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
    case_link_count = build_case_note_links(row['case_id'] for row in cases)
    target = ROOT / 'atlas/data/atlas.json'
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':')) + '\n', encoding='utf-8')
    print('Built Atlas explorer:', len(case_view), 'coded case rows;', len(result['actors_aggregate']), 'actor summaries;', case_link_count, 'direct case-note links;', target.stat().st_size, 'bytes')
    return result

if __name__ == '__main__':
    build()
