# Social Engineering Incident Atlas India

> **Current dataset release: v0.2.1.** The repository contains **74 active reviewed incident records**, **196 reviewed actor-role attribution records**, **82 active registered sources**, and **96 screening candidates**. v0.2.0 is a full source-to-code re-audit of the complete 75-ID history. One exact semantic duplicate, `SEIAI-0060`, was retired in favour of the earlier stable record `SEIAI-0029`; later IDs were not renumbered.

A structured research dataset and analytical framework for studying **social-engineering-enabled cybercrime, digital evidence, and attribution in India**.

## v0.2.1 repository-integrity hotfix

v0.2.1 is a repository-integrity hotfix over the unchanged v0.2.0 coded dataset. It removes the retired `SEIAI-0060` narrative from the public case directory and strengthens `validate_full_audit.py` so active case IDs and narrative files must match one-to-one. No incident, actor, source, screening, or coding values changed from v0.2.0.

### v0.2.0 substantive re-audit baseline

The first 10 incidents were purposively selected to test the schema. Later batches use documented candidate logging, inclusion/exclusion rules, duplicate handling and diversity-focused retrieval. Cases 51-75 were originally an audit-directed corrective batch selected to reduce bail-order dependence, widen temporal coverage, add stronger final/appellate adjudication, and stress-test the actor model. The v0.2.0 release then rechecked every incident from `SEIAI-0001` through `SEIAI-0075`, every active actor row, every registered source relationship, and the screening history under tightened identity and actor-function rules.

This remains a **methodology and schema-validation dataset, not a representative sample of Indian cybercrime**. It must not be used to estimate national prevalence, state rankings, average losses, category frequencies or conviction rates.

See [`docs/v0.1_case_index.md`](docs/v0.1_case_index.md) for the incident index, [`methodology/retrieval_protocol_v0.1.1.md`](methodology/retrieval_protocol_v0.1.1.md) for the protocolized expansion foundation, [`docs/v0.1.4_50_case_analytical_stability_audit.md`](docs/v0.1.4_50_case_analytical_stability_audit.md) for the audit that defined the corrective priorities, [`docs/v0.1.5_75_case_expansion_audit.md`](docs/v0.1.5_75_case_expansion_audit.md) for the original expansion audit, and [`docs/v0.2.0_full_reaudit.md`](docs/v0.2.0_full_reaudit.md) for the current full re-audit.

## Core research question

> **What does social-engineering-enabled cybercrime look like in India when publicly documented incidents are systematically reconstructed and compared?**

The project studies three connected layers:

1. **Social engineering**: how targets are approached and influenced through impersonation, authority, fear, urgency, trust, social proof, relationship-building, isolation and related mechanisms.
2. **Digital evidence**: what public case records report about devices, communications, bank records, telecom records, IP/login evidence, platform records, CCTV and forensic examinations.
3. **Attribution**: what the evidence can actually connect to a person, account, device, role or transaction, and what remains inferential.

## Research principle

> **Reconstruct broadly. Attribute conservatively.**

A SIM registration, bank account, IP address, device, or receipt of funds may be important evidence, but none automatically proves who conducted the original social-engineering interaction.

## Source hierarchy

- **T1**: judicial and formal adjudicatory material
- **T2**: official institutional material
- **T3**: credible journalism with substantive case detail

A judicial order may reproduce prosecution allegations, defence claims or prima facie observations without finally determining guilt. The Atlas records procedural stage and uses final-judgment language only for propositions actually adjudicated.

## Data model

`data/cases.csv` remains the incident-level table.

`data/actors.csv` is a companion actor-role attribution layer. One actor row represents one analytically distinct role/conduct assessment within an incident. It is not necessarily one named accused and it is not a finding of guilt.

The legacy `role_layer` field is retained as a descriptive storage taxonomy. v0.2.0 adds two non-exclusive functional fields: `victim_facing_function` and `financial_function`. An actor can perform both functions. Human identity resolution is coded separately from both function and attribution strength.

This allows the Atlas to represent, for example, moderate evidence that a person controlled a receiving account while separately coding limited or unclear evidence that the same person operated the original impersonating account.

Definitions are in [`data/data_dictionary.md`](data/data_dictionary.md), [`data/actor_data_dictionary.md`](data/actor_data_dictionary.md), and [`methodology/actor_coding_protocol_v0.2.0.md`](methodology/actor_coding_protocol_v0.2.0.md).

## Attribution scale

- **strong**: multiple independent evidence streams connect the target to the relevant conduct, or an adjudicated finding establishes that role
- **moderate**: meaningful linkage exists but a material inferential step or plausible alternative explanation remains
- **limited**: association is established but the relevant conduct is not substantially established
- **unclear**: public material is too incomplete or ambiguous
- **not_assessed**: insufficient attribution material exists to evaluate

See [`methodology/attribution_framework.md`](methodology/attribution_framework.md).

## Repository structure

```text
data/
  cases.csv
  actors.csv
  data_dictionary.md
  actor_data_dictionary.md

cases/
  SEIAI-0001-....md
  ...
  SEIAI-0075-....md

references/
  sources.csv
  screening_log.csv

methodology/
  inclusion_criteria.md
  exclusion_criteria.md
  sampling_strategy.md
  retrieval_protocol_v0.1.1.md
  coding_protocol.md
  attribution_framework.md
  actor_coding_protocol_v0.2.0.md
  human_identity_resolution_codebook_v0.2.0.md
  evidence_framework.md
  deduplication_protocol.md

schemas/
  case_record.schema.json
  actor_record.schema.json
  controlled_vocabulary.json
  actor_controlled_vocabulary.json

analysis/scripts/
  validate_dataset.py
  validate_actors.py
  basic_summary.py
```

## Reproducibility and validation

Run:

```bash
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
```

The public release should be tagged only after both validators return zero errors and zero warnings and the privacy scan is clean.

## Known limitations

- The corpus is purposively sampled and retrieval is not prevalence-representative.
- **37 of 74 active primary sources are bail orders (50.0%).** Source stage materially affects what evidence, allegations and procedural findings become visible.
- **70 of 74 active incidents have one registered source.** Independent source corroboration remains limited for most records.
- **32 of 74 active cases are from Delhi or Haryana**, and 23 of 74 incidents are coded to 2025. Geographic and temporal frequencies remain retrieval-driven.
- Eighteen primary attack categories are represented, but category composition remains partly confounded with source type and retrieval strategy.
- Bail, anticipatory-bail, charge-stage and interim records can contain detailed allegations without final guilt findings.
- Final consumer, telecom and civil liability records may richly document payment or institutional evidence without resolving criminal human operators.
- Public records often expose downstream bank, SIM, device or payment endpoints more clearly than the human who delivered the original deception. Endpoint visibility is not treated as human identity resolution.
- Exact incident dates are left blank when day-level precision is not supported by the source. `incident_year` can be `not_reported` rather than inferred from an FIR, complaint or judgment date.
- `unknown`, `actor_cluster`, `not_reported` and `not_assessed` are used deliberately instead of researcher inference.
- The dataset should not be used to estimate national prevalence, state rankings, attack-category frequencies, average losses, conviction rates or demographic risk.
- `accused_count` remains sparsely populated and should not be used analytically until it is systematically backfilled or deprecated.

## Privacy and source handling

The Atlas does not republish underlying judgments, screenshots, phone numbers, bank-account numbers or private source material. It stores researcher-created structured coding, neutral reconstruction notes and source links. Names appearing in source titles are retained only where necessary to identify the cited public judicial/adjudicatory record.

## Licensing

- Software/scripts: [MIT License](LICENSE)
- Compiled dataset and researcher-created documentation: **CC BY 4.0**, see [`DATA_LICENSE.md`](DATA_LICENSE.md)
- Underlying third-party source material remains subject to its original rights.

## Citation

Suggested citation:

> Hamzah. (2026). *Social Engineering Incident Atlas India* (v0.2.0). GitHub repository.

If using individual incident records, cite the original source(s) in `references/sources.csv` as well as the Atlas.

## Status

**v0.2.1: 74 active reviewed incidents, 196 reviewed actor-role records, 82 active registered sources, 96 screening candidates.**

The v0.2.1 release preserves the full 75-ID audit history and leaves all structured v0.2.0 coding unchanged. `SEIAI-0060` is retired as an exact duplicate of `SEIAI-0029`; `SEIAI-0061` through `SEIAI-0075` keep their stable identifiers.

The next collection stage should be decided only after evaluating what the corrected corpus can and cannot support as research. Horizontal expansion should remain audit-directed rather than count-driven.

## Author

**Hamzah**  
MSc Digital Forensics and Information Security  
National Forensic Sciences University, Delhi Campus
