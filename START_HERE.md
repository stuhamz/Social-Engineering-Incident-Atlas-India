# Start here

## What this project contains

The Social Engineering Incident Atlas India is a public-source research corpus. The original v0.4.0 archive contains 300 incident records, 600 actor-role records, 310 registered sources and 412 screening decisions. The current repository includes a documented post-release correction, but the DOI remains a citation for the original archival snapshot.

The public website displays an index using case IDs, broad attack categories and source types. The repository also contains coded records and case reconstructions; read their procedural stage and limitations before interpreting allegations as proven facts.

## Where to begin

- Website: `atlas/index.html`, deployed through GitHub Pages.
- Corpus: `data/cases.csv` and `data/actors.csv`.
- Original registered references: `references/sources.csv`.
- Individual narratives: `cases/`.
- Collection and coding method: `methodology/`.
- Scope and post-release correction explanations: `docs/RESEARCH_SCOPE_AND_CORRECTIONS.md`.

## Rebuild and validate

```bash
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
python analysis/scripts/build_public_atlas.py
```

The last command produces only non-identifying, public-index metadata from the coded CSVs. It does not independently confirm the contents of court records.

## Research interpretation

The corpus is purposive and retrieval-driven. It is not a representative sample of Indian cybercrime. The judicial record may report accusations, evidence summaries, interim rulings or final findings. Actor-role classifications are research assessments, not findings of guilt. A separately sampled paper should re-read and cite its selected judgments directly.
