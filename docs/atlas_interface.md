# Public Atlas research interface

The website is a deliberately descriptive, accessible exploration interface. It restores the analytical capabilities of the older v0.4.0 Atlas while preserving the clearer research-purpose explanation added in the post-v0.4.0 correction.

## Sections

- **Overview:** corpus dimensions, primary attack categories, source stages, evidence mentions and case-level attribution codes.
- **Cases:** searchable 300-case ID index, source-stage and attack-type filters, evidence-type filter and filtered metadata export.
- **Categories:** complete primary attack-category breakdown, primary contact channels and coded manipulation mechanisms.
- **Evidence:** status-based evidence explorer displaying `yes`, `no`, `not_reported` and `not_applicable` separately, with source-stage and attack-category filters. No ambiguous absent-evidence inference.
- **Actor roles:** aggregated coded functions, identity resolution and attribution-strength categories for 600 actor-role records. An actor record does not necessarily represent a unique person or convicted offender.
- **Sources:** category and provenance breakdowns for 310 source records and primary document stages for 300 incident records. The denominator is explicit.
- **Methods:** research question, coding definitions, sampling limitations, links to source registry and methodological protocols.

The site intentionally does **not** embed names, case titles, narrative descriptions, amounts, accused or survivor identities, underlying evidence, court documents, registered source URLs or individual actor notes in the JavaScript payload. The repository retains versioned canonical case notes and original source references. Case IDs can be used to locate notes in GitHub.

The browser's evidence statuses refer to researcher-coded mention in publicly available source material, **not** forensic authentication, admissibility, or proof of guilt. Counts are descriptive within a purposive nonrepresentative collection and must not be interpreted as prevalence, temporal trends in India's crime rate or conviction rates.

## Reproducibility and checks

`python analysis/scripts/build_public_atlas.py` regenerates the allowlisted `atlas/data/atlas.json` using the authoritative CSV files. `python analysis/scripts/test_public_atlas_export.py` verifies population counts, field-level allowlists, metadata omission of sensitive terms and front-end element references. The Pages workflow runs these checks before deployment from `main`.

## Archival distinction

The v0.4.0 Zenodo DOI identifies the archived v0.4.0 dataset. Post-release code and data corrections in GitHub are not retroactively part of that record. For reproducibility, cite the exact Git revision or, if subsequently published, the specific DOI of a new Zenodo version.
