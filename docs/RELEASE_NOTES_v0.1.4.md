# Release Notes v0.1.4

v0.1.4 expands the reviewed validation corpus from **40 to 50 incidents** and from **116 to 148 actor-role records**.

## Added cases

- SEIAI-0041: WhatsApp Managing-Director impersonation and corporate payment diversion
- SEIAI-0042: bank-KYC suspension smishing and Paytm activation fraud
- SEIAI-0043: court-staff influence impersonation and electronic-evidence failure
- SEIAI-0044: fake MakeMyTrip support with AnyDesk remote access
- SEIAI-0045: electricity-disconnection smishing and fraudulent BESCOM-style app
- SEIAI-0046: fake Indus Towers Facebook tower-installation fraud
- SEIAI-0047: SIM-swap identity theft and pension-account takeover
- SEIAI-0048: Facebook relationship manipulation and false-suicide sextortion
- SEIAI-0049: FedEx/Mumbai Cyber Crime digital-arrest fraud
- SEIAI-0050: spoofed CBI/MHA official impersonation extortion conspiracy

## Why this batch matters

This batch intentionally adds underrepresented mechanisms and more final/appellate adjudicatory material. It contains the Atlas’s first primary `smishing` and `identity_theft_deception` records and a final acquittal where electronic-evidence authentication and subscriber linkage materially failed.

The actor schema remains unchanged. Attribution continues to be scored against specific conduct, not against a person globally.

## Analytical stability audit

Before public release, the 50-case corpus was examined for sampling, source-stage, actor-layer and field-completeness effects.

Key findings:

- 33 of 50 primary sources are bail orders.
- 47 of 50 incidents have one registered source.
- Delhi and Haryana account for 23 of 50 cases.
- 10 of 17 primary attack categories currently occur in only one source stage.
- 36 cases contain both a victim-facing and financial actor layer. In 29 of those 36 cases, the financial layer has a stronger resolved attribution class; none has a stronger victim-facing class under the audit's conservative three-level comparison.
- `accused_count` is flagged for pre-v0.2 schema review because it is populated in only one current record.

These are corpus-level methodological findings, not population estimates. See `docs/v0.1.4_50_case_analytical_stability_audit.md`.

