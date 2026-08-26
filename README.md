# Social Engineering Incident Atlas India

A structured research dataset and analytical framework for studying **social-engineering-enabled cybercrime, digital evidence, and attribution in India**.

## v0.1.1 expanded validation set

The repository now contains **30 incident records**. The first 10 were purposively selected to test the coding schema. Cases 11-30 were collected under a versioned, protocolized retrieval process with documented query families, candidate logging, duplicate rules, a category-diversity constraint and a fixed stopping rule.

This remains a **methodology and schema-validation dataset, not a representative sample of Indian cybercrime**. It must not be used to estimate national prevalence, state rankings, average losses, category frequencies or conviction rates.

See [`docs/v0.1_case_index.md`](docs/v0.1_case_index.md) for all 30 incidents and [`methodology/retrieval_protocol_v0.1.1.md`](methodology/retrieval_protocol_v0.1.1.md) for the expansion protocol.

## Core research question

> **What does social-engineering-enabled cybercrime look like in India when publicly documented incidents are systematically reconstructed and compared?**

The project studies three connected layers:

1. **Social engineering**  
   How targets are approached and influenced through impersonation, authority, fear, urgency, trust, social proof, relationship-building, isolation, repeated contact, and related mechanisms.

2. **Digital evidence**  
   What public case records report about devices, communications, bank records, telecom records, IP/login evidence, platform records, CCTV, and forensic examinations.

3. **Attribution**  
   What the available evidence can actually connect to a person, account, device, role, or transaction, and what remains inferential.

## Research principle

> **Reconstruct broadly. Attribute conservatively.**

A SIM registration, bank account, IP address, device, or receipt of funds may be important evidence, but none automatically proves who conducted the original social-engineering interaction.

## Source hierarchy

The pilot uses publicly accessible material and records source stage separately from source tier.

- **T1: Judicial and formal adjudicatory material**, including judgments, bail/procedural orders, and reasoned statutory adjudicatory decisions
- **T2: Official institutional material**, including police, government, regulator, or investigative-agency sources
- **T3: Credible journalism** containing substantive case detail

A judicial order may reproduce prosecution allegations, defence claims, or prima facie observations without finally determining guilt. The dataset preserves this distinction.

The tier refers to the **underlying material**, not necessarily the website hosting the accessible copy. The source registry records the URL actually used for verification.

## Repository structure

```text
data/
  cases.csv
  data_dictionary.md
  controlled_vocabulary.md

cases/
  SEIAI-0001-....md
  ...
  SEIAI-0030-....md

references/
  sources.csv
  screening_log.csv

methodology/
  inclusion_criteria.md
  exclusion_criteria.md
  sampling_strategy.md
  retrieval_protocol_v0.1.1.md
  source_quality.md
  coding_protocol.md
  attribution_framework.md
  evidence_framework.md
  deduplication_protocol.md
  intercoder_reliability.md
  versioning.md

schemas/
  case_record.schema.json
  controlled_vocabulary.json

analysis/scripts/
  validate_dataset.py
  basic_summary.py
  new_case.py

docs/
  research_questions.md
  project_scope.md
  roadmap.md
  v0.1_case_index.md
  v0.1_release_audit.md
  v0.1.1_release_audit.md
  v0.1.1_schema_stress_test.md
```

## Data model

The unit of analysis is the **incident**, not the source, accused person, transaction, or court order.

Each incident row can be linked to multiple source records in `references/sources.csv`.

The dataset records, where available:

- incident context and geography
- attack category and communication channel
- impersonated identity
- pretext and manipulation mechanisms
- requested and victim actions
- financial consequences
- reported digital and financial evidence
- procedural status
- attribution basis
- attribution strength and limitations
- primary evidentiary gaps

Field definitions are in [`data/data_dictionary.md`](data/data_dictionary.md).

## Attribution scale

The pilot uses five values:

- **strong**: multiple independent evidence streams connect the target to the relevant conduct, or a judicial finding establishes that role
- **moderate**: meaningful linkage exists, but a material inferential step or plausible alternative explanation remains
- **limited**: evidence establishes association with an account, transaction, device, SIM, or person but does not substantially establish the relevant conduct
- **unclear**: public material is too incomplete or ambiguous
- **not_assessed**: insufficient attribution material exists to evaluate

See [`methodology/attribution_framework.md`](methodology/attribution_framework.md).

## Reproducibility and validation

Run:

```bash
python analysis/scripts/validate_dataset.py
```

Run the validator after each dataset update. The reviewed v0.1.1 30-case dataset validates with 0 structural errors and 0 warnings.

A basic non-inferential summary can be generated with:

```bash
python analysis/scripts/basic_summary.py
```

The first ten cases were selected for schema diversity. Cases 11-30 use a more explicit retrieval protocol, but the combined set remains purposive and descriptive counts are not population estimates.

## Known limitations

- The pilot is purposively sampled.
- Most records are based on judicial material generated for litigation, not purpose-built forensic datasets.
- Bail orders can contain unusually rich facts but are not final findings of guilt.
- Public records often expose downstream financial and telecom evidence more clearly than provider-side account metadata or full forensic provenance.
- A single incident row may summarise multiple actors. A later release may introduce actor-level and source-claim companion tables.
- Some fields remain `unknown` or `not_reported` by design rather than being inferred.

## Privacy and source handling

The Atlas does not republish underlying judgments, screenshots, phone numbers, bank-account numbers, or other source documents. It stores researcher-created structured coding, neutral reconstruction notes, and source links.

Names appearing in source titles are retained only where necessary to identify the cited public judicial record.

## Licensing

- Software and scripts are licensed under the [MIT License](LICENSE).
- The compiled dataset and researcher-created research documentation are licensed under **Creative Commons Attribution 4.0 International (CC BY 4.0)**. See [`DATA_LICENSE.md`](DATA_LICENSE.md).
- Underlying judgments, news reports, and third-party source material remain subject to their original rights and are not relicensed by this repository.

## Citation

Suggested citation:

> Hamzah. (2026). *Social Engineering Incident Atlas India* (v0.1.1). GitHub repository.

If you use individual cases, cite the original source(s) listed in `references/sources.csv` as well as the Atlas.

## Status

**v0.1.1: reviewed 30-case expanded validation set**

Cases 11-30 have completed their second-pass source and coding audit. The next stage is a schema review before the larger v0.2 collection.

## Author

**Hamzah**  
MSc Digital Forensics and Information Security  
National Forensic Sciences University, Bhopal
