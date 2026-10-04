# SEIAI-0151: Railway finance-officer PF-interest OTP vishing fraud

## Record status

- Case ID: `SEIAI-0151`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0151-01 | T1 | final_judgment | Awadhesh Singh v. Reserve Bank of India and 2 Others, 24 March 2021 |

Source URL: https://indiankanoon.org/doc/8791020/

## Procedural posture

- Court / authority: Allahabad High Court
- Case / FIR: Writ-C No.2045/2020; FIR No.161/2019, P.S. Dhoomanganj
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: Allahabad High Court ordered the bank to credit/refund the post-notification unauthorized withdrawals, while leaving the initial social-engineering transaction outside that liability finding.

## Neutral case summary

A railway employee was called by someone posing as a Divisional Railway Manager office finance officer and told an OTP was needed to credit provident-fund interest. The victim disclosed the OTP and unauthorized debits followed. The total loss reached about INR 299,800, but the High Court distinguished the initial roughly INR 99,900 fraud from later INR 199,900 withdrawals that occurred after the bank had been notified.

## Reconstruction

### Initial contact

The petitioner received a call from a person identifying himself as the Finance and Accounts Officer in the Divisional Railway Manager's office.

### Pretext

The caller said an OTP was required to credit provident-fund interest and induced the victim to disclose the OTP.

### Requested action

Disclose the OTP so the purported railway finance office could credit provident-fund interest.

### Victim action and consequence

The victim disclosed the OTP. About INR 99,900 was immediately debited; despite prompt notice to the bank, further unauthorized withdrawals on the next two days brought the total to about INR 299,800.

- Reported focal financial loss: INR 299800
- Payment method: `other`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not reported

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: SMS/debit alerts, prompt complaint and bank-notification records; FIR and banking-liability correspondence.

## Actor and attribution analysis

### SEIAI-0151-A01: Fake railway Finance and Accounts Officer caller
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Impersonating a railway finance official and eliciting the OTP through a PF-interest credit pretext.
- Limitation: The judgment does not identify the caller.
- Alternative explanation: The caller and later transaction operator may be the same or different humans.

### SEIAI-0151-A02: Unauthorized transaction operator(s)
- Identity resolution: `unknown`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **not_assessed**
- Conduct assessed: Using compromised authentication to execute unauthorized withdrawals/debits across the three-day period.
- Limitation: The judgment documents the transactions but not the human/controller identity or beneficiary path.
- Alternative explanation: Later losses were facilitated by bank inaction after notice, without resolving offender identity.


### Incident-level attribution assessment

- Attribution target: Unidentified caller and unknown transaction operator(s); the final writ adjudicated bank liability rather than offender identity.
- Primary basis: `unclear`
- Secondary basis: `unclear`
- Attribution strength: **not_assessed**
- Limitations: The final judgment reconstructs the social-engineering event and transaction chronology but does not identify the offender.
- Alternative explanation: The later INR 199,900 loss was attributed by the High Court to the bank's failure to act after notification, rather than to a new social-engineering interaction.

## Primary evidentiary gap

Telecom/device and beneficiary-account evidence capable of identifying the caller and transaction operator.

## Legal/procedural notes

No additional statutory coding is necessary beyond the source/case metadata for this wave.

## Coding decisions

The final judgment is valuable for causal separation: the initial OTP deception enabled the compromise, while later losses were also shaped by post-notification bank conduct. Total unauthorized loss is coded, with the two phases documented in the narrative.
