# Public Atlas research interface

The website is a deliberately descriptive, accessible exploration interface. Its chart bars and evidence-status segments are interactive: clicking a coded value opens the matching cases and their direct note links, while preserving the clearer research-purpose explanation added in the post-v0.4.0 correction.

## Sections

- **Overview:** corpus dimensions, primary attack categories, source stages, evidence mentions and case-level attribution codes.
- **Cases:** searchable 300-case ID index, source-stage and attack-type filters, evidence-type filter, filtered metadata export, and one-click links to the original Markdown note for every case.
- **Categories:** complete primary attack-category breakdown, primary contact channels and coded manipulation mechanisms.
- **Evidence:** status-based evidence explorer displaying `yes`, `no`, `not_reported` and `not_applicable` separately, with source-stage and attack-category filters. No ambiguous absent-evidence inference.
- **Actor roles:** aggregated coded functions, identity resolution and attribution-strength categories for 600 actor-role records, with clickable categories. Drill-down lists show the number of matching actor-role records in each incident, not one row per person. An actor record does not necessarily represent a unique person or convicted offender.
- **Sources:** clickable source category breakdowns for 310 registered source records and primary document stages for 300 incident records. Source drill-downs show how many matching source rows correspond to each incident; the denominator is explicit.
- **Methods:** research question, coding definitions, sampling limitations, links to source registry and methodological protocols.

The browser payload contains case IDs, categorical codes, and per-case counts of actor-role and registered-source codes to support chart drill-downs. It intentionally does **not** embed names, case titles, narrative descriptions, amounts, accused or survivor identities, underlying evidence, court documents, registered source URLs or individual actor notes. The repository retains versioned canonical case notes and original source references. Case IDs can be used to locate notes in GitHub.

The browser's evidence statuses refer to researcher-coded mention in publicly available source material, **not** forensic authentication, admissibility, or proof of guilt. Counts are descriptive within a purposive nonrepresentative collection and must not be interpreted as prevalence, temporal trends in India's crime rate or conviction rates.

## Reproducibility and checks

`python analysis/scripts/build_public_atlas.py` regenerates the allowlisted `atlas/data/atlas.json` using the authoritative CSV files. `python analysis/scripts/test_public_atlas_export.py` verifies population counts, field-level allowlists, metadata omission of sensitive terms and front-end element references. The Pages workflow runs these checks before deployment from `main`.

## Archival distinction

The v0.4.0 Zenodo DOI identifies the archived v0.4.0 dataset. Post-release code and data corrections in GitHub are not retroactively part of that record. For reproducibility, cite the exact Git revision or, if subsequently published, the specific DOI of a new Zenodo version.

## Reliable case-note navigation

The 300 case-note links on the website use stable `notes/SEIAI-XXXX.html` URLs, generated from the actual filenames in `cases/` during every build. They redirect directly to GitHub's Markdown file viewer. They never rely on GitHub code search or search indexing. Each build fails if a case note is missing or multiple filenames share a case ID. The generated redirect pages intentionally remain out of Git version control and are deployed as part of the GitHub Pages artifact. Source notes and historical Git revisions remain unchanged.

## Interactive chart-to-case navigation

Every overview, attack, contact-channel, mechanism, actor-role and source bar can be selected to open the corresponding cases in the Cases tab. The evidence matrix lets the reader choose an individual status (yes, no, not reported or not applicable) within the current attack-category and source-stage selection. The resulting list links directly to stable case-note redirects, not GitHub code search.

Case-level chart totals count incidents. Actor-role chart totals count actor-role records, and source-tier totals count registered source records, so the drill-down explicitly reports both the number of matching underlying rows and the number of distinct cases. Multiple actor or source records may refer to the same case. This is a descriptive selection tool, not a claim of independent verification or guilt.
