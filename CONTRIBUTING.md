# Contributing

The Atlas is maintained as a source-auditable research dataset.

Useful contributions include candidate public incidents, possible duplicates, broken source links, coding inconsistencies, stronger primary sources, and validator or interface bugs.

A candidate should include a public source URL, enough detail to distinguish the focal incident, a clear social-engineering component, and sufficient provenance for independent checking.

Do not submit private personal data, leaked material, or non-public case files.

The authoritative structured tables are:

- `data/cases.csv`
- `data/actors.csv`
- `references/sources.csv`
- `references/screening_log.csv`

Any accepted case addition must preserve stable IDs, source provenance, duplicate handling, and the attribution rules documented in `methodology/`.

Before research-data changes are released, run:

```bash
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
```

The project records uncertainty explicitly rather than filling missing values through inference.
