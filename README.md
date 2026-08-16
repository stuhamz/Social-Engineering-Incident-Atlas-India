# Social Engineering Incident Atlas India

A structured research dataset and analytical framework for studying **social-engineering-enabled cybercrime, digital evidence, and attribution in India**.

## v0.1 pilot

The first public release contains **10 reviewed incident records** selected purposively to test the coding framework across substantially different social-engineering patterns.

This is a **methodology pilot**, not a representative sample of Indian cybercrime. It must not be used to estimate national prevalence, state rankings, average losses, or the frequency of scam categories.

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

## Pilot case set

| Case | Category | State | Year | Loss recorded for focal incident |
|---|---|---|---:|---:|
| SEIAI-0001 | Digital arrest | Madhya Pradesh | 2025 | INR 25,299,000 |
| SEIAI-0002 | Fake investment | Haryana | 2025 | INR 8,248,021 |
| SEIAI-0003 | Work-from-home task fraud | Delhi | 2025 | INR 375,000 |
| SEIAI-0004 | Family-member impersonation | Haryana | 2025 | INR 400,000 |
| SEIAI-0005 | Fake customer care / APK | Delhi | 2025 | about INR 2,600,000 |
| SEIAI-0006 | Cross-border tech-support fraud | Uttar Pradesh | 2025 | not normalised at victim level |
| SEIAI-0007 | Matrimonial impersonation | Delhi | 2021 | INR 55,900 |
| SEIAI-0008 | Phishing + vishing | Uttar Pradesh | 2021 | INR 260,000 |
| SEIAI-0009 | Compromised-superior impersonation | Delhi | 2025 | INR 45,000 |
| SEIAI-0010 | Sextortion / pseudo-legal coercion | Haryana | 2023 | INR 1,347,499 |

See [`docs/v0.1_case_index.md`](docs/v0.1_case_index.md) and the individual files in [`cases/`](cases/) for reconstruction notes.

## Source hierarchy

The pilot uses publicly accessible material and records source stage separately from source tier.

- **T1: Judicial material**, including judgments and bail/procedural orders
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
  SEIAI-0010-....md

references/
  sources.csv
  screening_log.csv

methodology/
  inclusion_criteria.md
  exclusion_criteria.md
  sampling_strategy.md
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

The v0.1 release candidate validates **10 populated case rows with 0 structural errors and 0 warnings**.

A basic non-inferential summary can be generated with:

```bash
python analysis/scripts/basic_summary.py
```

The first ten cases were selected for schema diversity. Descriptive counts from them are not population estimates.

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

> Hamzah. (2026). *Social Engineering Incident Atlas India* (v0.1). GitHub repository.

If you use individual cases, cite the original source(s) listed in `references/sources.csv` as well as the Atlas.

## Status

**v0.1: reviewed 10-case methodology pilot**

The next stage is to define a systematic retrieval strategy before expanding the dataset beyond the schema-testing sample.

## Author

**Hamzah**  
MSc Digital Forensics and Information Security  
National Forensic Sciences University, Bhopal
