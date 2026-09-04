# Social Engineering Incident Atlas India

> **Current dataset release: v0.1.5.** The repository contains **75 reviewed incident records** and **198 reviewed actor-role attribution records**. The actor-role schema introduced in v0.1.2 remains stable and separates victim-facing, financial, technical and organisational conduct.

A structured research dataset and analytical framework for studying **social-engineering-enabled cybercrime, digital evidence, and attribution in India**.

## 75-case corrective validation set

The first 10 incidents were purposively selected to test the schema. Later batches use documented candidate logging, inclusion/exclusion rules, duplicate handling and diversity-focused retrieval. Cases 51–75 are an audit-directed corrective batch selected to reduce bail-order dependence, widen temporal coverage, add stronger final/appellate adjudication, and stress-test the actor model under different source stages.

This remains a **methodology and schema-validation dataset, not a representative sample of Indian cybercrime**. It must not be used to estimate national prevalence, state rankings, average losses, category frequencies or conviction rates.

See [`docs/v0.1_case_index.md`](docs/v0.1_case_index.md) for the incident index, [`methodology/retrieval_protocol_v0.1.1.md`](methodology/retrieval_protocol_v0.1.1.md) for the protocolized expansion foundation, [`docs/v0.1.4_50_case_analytical_stability_audit.md`](docs/v0.1.4_50_case_analytical_stability_audit.md) for the audit that defined the corrective priorities, and [`docs/v0.1.5_75_case_expansion_audit.md`](docs/v0.1.5_75_case_expansion_audit.md) for the 75-case audit.

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

This allows the Atlas to represent, for example, moderate evidence that a person controlled a receiving account while separately coding limited or unclear evidence that the same person operated the original impersonating account.

Definitions are in [`data/data_dictionary.md`](data/data_dictionary.md) and [`data/actor_data_dictionary.md`](data/actor_data_dictionary.md).

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
  actor_coding_protocol_v0.1.2.md
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
```

The public release should be tagged only after both validators return zero errors and zero warnings and the privacy scan is clean.

## Known limitations

- The corpus is purposively sampled and retrieval is not prevalence-representative.
- **37 of 75 primary sources are bail orders (49.3%).** This is substantially lower than 33/50 at v0.1.4, but source stage still affects what evidence and procedural discussion are visible in the public record.
- **71 of 75 incidents currently have one registered source.** Source-stage quality improved in v0.1.5, but independent corroboration remains limited for most records.
- **32 of 75 cases are from Delhi or Haryana**, and 23 of 75 incidents occurred in 2025. Their proportional concentration is lower than at v0.1.4, but geographic and temporal frequencies remain retrieval-driven.
- Five of the eighteen primary attack categories currently occur in only one source stage, down from ten of seventeen at v0.1.4. Comparisons between attack categories can still be confounded by document type.
- Bail and charge-stage records can contain detailed allegations without final guilt findings.
- Public records often expose downstream financial/telecom evidence more clearly than provider-side metadata or full forensic provenance.
- In the current actor corpus, financial-layer attribution is often more resolved than victim-facing attribution. This is a descriptive property of this corpus, not a national prevalence estimate, and may partly reflect source-stage selection.
- `unknown` and `not_reported` are used deliberately instead of researcher inference.
- `source_claims.csv` remains deferred because the actor-role layer currently solves the main attribution-compression problem without disproportionate annotation burden.
- `accused_count` is retained for compatibility but is flagged for pre-v0.2 review because it remains populated in only one of the 75 current incident records.

## Privacy and source handling

The Atlas does not republish underlying judgments, screenshots, phone numbers, bank-account numbers or private source material. It stores researcher-created structured coding, neutral reconstruction notes and source links. Names appearing in source titles are retained only where necessary to identify the cited public judicial/adjudicatory record.

## Licensing

- Software/scripts: [MIT License](LICENSE)
- Compiled dataset and researcher-created documentation: **CC BY 4.0**, see [`DATA_LICENSE.md`](DATA_LICENSE.md)
- Underlying third-party source material remains subject to its original rights.

## Citation

Suggested citation:

> Hamzah. (2026). *Social Engineering Incident Atlas India* (v0.1.5). GitHub repository.

If using individual incident records, cite the original source(s) in `references/sources.csv` as well as the Atlas.

## Status

**v0.1.5: 75 reviewed incidents, 198 reviewed actor-role records.**

The next stage should prioritize second-source corroboration, cases outside Delhi and Haryana, final/appellate material for categories still confined to bail orders, and records with provider/forensic/authentication material. Before another breaking schema version, `accused_count` should be either systematically backfilled or deprecated.

## Author

**Hamzah**  
MSc Digital Forensics and Information Security  
National Forensic Sciences University, Delhi
