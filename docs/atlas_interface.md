# Public Atlas website

The website is a readable research introduction and searchable index to the frozen 300-case corpus. It opens with the project purpose, intended readers, central question and limits of public-source evidence.

## Site contents

- Case IDs, broad attack categories, procedural source stage and source-tier labels.
- Filters by ID or category, source stage and source tier.
- Direct links to the repository's case narratives, methodology, and documented corrections.

The public browser dataset does **not** include raw case summaries, financial amounts, individual actor labels, narrative names, registered source URLs or other sensitive field values. These omissions apply to the website payload, not to the historical v0.4.0 Git revisions or repository CSVs.

## Reproducibility

`analysis/scripts/build_public_atlas.py` reads the authoritative CSV files and generates the minimal `atlas/data/atlas.json`. The GitHub Pages action validates the repository, regenerates that JSON and deploys only `atlas/` after a main-branch update.

## Research boundary

This is a purposively assembled corpus, not national crime statistics. T1/T2/T3 classifications identify source type. Automated validation does not establish independent original-document authentication, privacy approval, or independent academic review.
