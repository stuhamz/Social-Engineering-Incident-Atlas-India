# Social Engineering Incident Atlas India

[![Archived v0.4.0 DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23209001.svg)](https://doi.org/10.5281/zenodo.23209001)

**What is this?** A collection of 300 incidents of social-engineering-enabled cybercrime in India, assembled from publicly accessible court decisions, other institutional records, and reporting. It is designed to help readers examine how deception is described in the records and what those records do, or do not, establish about the people involved.

**Who is it for?** Researchers of crime and law, journalists, and students working with documentary evidence. You can inspect the research methods, coded data and individual case notes. You do not need specialist digital-forensics training to understand the public introduction.

**Central research question:** What can public records establish about the conduct and identity of people involved in social-engineering fraud, and where does that evidence stop?

The dataset has **300 incident records**, **600 actor-role records**, **310 registered source entries** and **412 screening decisions**. These are differently defined records, not numbers of proven offences, individual offenders or independent underlying evidence sources.

**Browse the analytical dashboards:** [Atlas website](https://stuhamz.github.io/Social-Engineering-Incident-Atlas-India/) | [Case notes](cases/) | [Research methods](methodology/) | [Correction note](docs/RESEARCH_SCOPE_AND_CORRECTIONS.md)

**Version distinction:** The Zenodo DOI identifies the frozen **v0.4.0** dataset. Changes after that release are documented in this repository and must not be attributed to the archived DOI. The public correction update retains the original 300 incident IDs, and does not amount to independent academic certification of every case.

## What the Atlas studies

The Atlas reconstructs publicly documented incidents in which human manipulation is materially relevant to the offence.

The project focuses on three connected layers:

1. **Social engineering**: how targets are approached, impersonated, persuaded, threatened, isolated, or otherwise manipulated.
2. **Digital and financial evidence**: what public records report about communications, bank records, telecom records, devices, IP/login evidence, platform records, CCTV, and forensic examination.
3. **Attribution**: what the available evidence can actually connect to a person, account, device, role, or transaction, and what remains unresolved.

The unit of analysis is the **incident**. A single incident may contain multiple sources and multiple analytically distinct actor records.

## Citation and licensing

The archived v0.4.0 dataset is identified by DOI `10.5281/zenodo.23209001`.

Original structured data, coding, narrative summaries, schemas, methodology, and documentation are released under CC BY 4.0, subject to third-party rights in the underlying source material. Software and scripts remain under the repository MIT License. See `LICENSE-DATA` and `LICENSE`.

## Research principle

> **Reconstruct broadly. Attribute conservatively.**

A bank account, SIM registration, IP address, device, platform account, or receipt of funds may be important evidence. None automatically proves who delivered the original social-engineering interaction.

## Current corpus

The v0.4.0 archive fixed the 300-incident population; the current repository also contains documented post-release corrections to selected fields and narrative wording.

- 300 active reviewed incidents
- 600 reviewed actor-role records
- 310 registered sources
- 412 screening candidates
- 282 incidents with T1 primary sources
- 18 incidents with T3 primary sources
- 19 primary attack categories represented
- incident years represented from 2003 through 2026, with 16 records coded `not_reported`

All retained records are source-linked. Automated validators check cross-file consistency, but they do not authenticate original court documents or independently verify each underlying allegation.

The Atlas is **not a representative sample of Indian cybercrime**. Corpus counts describe the reviewed dataset only.

## Source hierarchy

- **T1**: judicial and formal adjudicatory material
- **T2**: official institutional material
- **T3**: credible journalism with substantive case detail

Procedural posture matters. Bail, interim, investigative, final, and appellate records are not treated as equivalent evidentiary objects.

## Data model

`data/cases.csv` is the authoritative incident-level table.

`data/actors.csv` contains conduct-specific actor-role assessments linked by `case_id`.

The actor model separates `victim_facing_function`, `financial_function`, `identity_resolution`, `attribution_strength`, `attribution_basis_primary`, limitations, and alternative explanations.

`references/sources.csv` registers the public material used for coding.

`references/screening_log.csv` preserves included, excluded, duplicate, and pending candidates.

## Attribution scale

- **strong**: multiple independent evidence streams connect the target to the relevant conduct, or an adjudicated finding establishes the role
- **moderate**: meaningful linkage exists, but a material inferential step or plausible alternative explanation remains
- **limited**: association is established, but the relevant conduct is not substantially established
- **unclear**: the public material is too incomplete or ambiguous
- **not_assessed**: the public material does not support a reliable assessment

See [`methodology/attribution_framework.md`](methodology/attribution_framework.md).

## Methodology

Current methodology documentation:

- [`methodology/retrieval_protocol.md`](methodology/retrieval_protocol.md)
- [`methodology/sampling_strategy.md`](methodology/sampling_strategy.md)
- [`methodology/inclusion_criteria.md`](methodology/inclusion_criteria.md)
- [`methodology/exclusion_criteria.md`](methodology/exclusion_criteria.md)
- [`methodology/coding_protocol.md`](methodology/coding_protocol.md)
- [`methodology/actor_coding_protocol_v0.2.0.md`](methodology/actor_coding_protocol_v0.2.0.md)
- [`methodology/human_identity_resolution_codebook_v0.2.0.md`](methodology/human_identity_resolution_codebook_v0.2.0.md)
- [`methodology/evidence_framework.md`](methodology/evidence_framework.md)
- [`methodology/attribution_framework.md`](methodology/attribution_framework.md)
- [`methodology/deduplication_protocol.md`](methodology/deduplication_protocol.md)
- [`methodology/quality_control.md`](methodology/quality_control.md)
- [`methodology/versioning.md`](methodology/versioning.md)

## Repository structure

```text
data/          authoritative incident and actor tables
cases/         one narrative reconstruction per active incident
references/    source registry and candidate screening log
methodology/   current coding, retrieval, attribution, and quality rules
schemas/       machine-readable schemas and controlled vocabularies
analysis/      validators, summaries, and public-Atlas build scripts
atlas/         read-only public exploration interface
docs/          current project documentation and historical audits
```

## Validation

Run before each release:

```bash
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
python analysis/scripts/corpus_snapshot.py
python analysis/scripts/build_public_atlas.py
```

A release should not be tagged until the validators return zero errors and the generated public Atlas matches the authoritative CSVs.

## Known limitations

- The corpus is purposively assembled and retrieval-driven.
- 143 of 300 primary sources are bail orders. Procedural stage materially affects what becomes visible.
- 294 of 300 incidents currently have one registered source.
- Geographic, temporal, and attack-category composition reflects collection strategy and public-source availability, not population prevalence.
- Bail and interim records can contain detailed allegations without final findings of guilt.
- Public records often expose financial, telecom, device, or account endpoints more clearly than the human who delivered the original deception.
- `unknown`, `actor_cluster`, `not_reported`, and `not_assessed` are used deliberately instead of researcher inference.
- Exact incident dates are left blank when day-level precision is not source-supported.
- The dataset must not be used to estimate national prevalence, state rankings, category frequencies, average losses, conviction rates, or demographic risk.

## Privacy and source handling

The Atlas does not republish underlying judgments, screenshots, phone numbers, bank-account numbers, or private source material. It stores researcher-created structured coding, neutral reconstruction notes, and public source links.

## Licensing

- Software/scripts: [MIT License](LICENSE)
- Compiled dataset and researcher-created documentation: **CC BY 4.0**, see [`DATA_LICENSE.md`](DATA_LICENSE.md)
- Underlying third-party source material remains subject to its original rights

## Citation

> Hamzah. (2026). *Social Engineering Incident Atlas India* (v0.4.0). GitHub repository.

When using individual incidents, cite the original source material in `references/sources.csv` as well as the Atlas.

## Author

**Hamzah**  
National Forensic Sciences University, Delhi Campus, India
