# SEIAI-0115: NSS and SMC WhatsApp stock-market fraud

## Record status

- Case ID: `SEIAI-0115`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0115-01 | T1 | bail_order | Jayeshbhai Anilbhai Galani v. State of Gujarat, 3 February 2025 |

Source URL: https://indiankanoon.org/doc/141534895/

## Procedural posture

- Court / authority: Gujarat High Court
- Case / FIR: R/CR.MA/482/2025; C.R.No.11208057240033/2024
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Gujarat prosecution alleged that a WhatsApp group advertised NSS and SMC stock-market investments and induced the complainant to transfer INR 1,147,000. The bail record documents a narrow INR 50,000 trail to the applicant but does not identify him as the original victim-facing operator.

## Reconstruction

### Initial contact

The prosecution case describes a WhatsApp group used to lure members of the public into purported NSS and SMC stock-market investments.

### Pretext

Group administrators sent links, advertisements and investment temptations and directed money into supplied accounts.

### Requested action

Participate in the promoted NSS/SMC stock-market investment and transfer money to designated accounts.

### Victim action and consequence

The focal scheme received INR 1,147,000 from the complainant into the accounts described in the prosecution case.

- Reported financial loss: INR 1147000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0115-A01: NSS/SMC WhatsApp investment operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0115-A02: Beneficiary-account network including applicant-linked account
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: NSS/SMC WhatsApp operator(s) and beneficiary-account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `co_accused_link`
- Attribution strength: **limited**
- Limitations: Only INR 50,000 was traced to the particular bail applicant; the source does not show that he administered the victim-facing WhatsApp group.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Device and WhatsApp provider evidence resolving the group administrators and their relationship to account controllers.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

Applicant-specific INR 50,000 money trail is not substituted for the focal complainant’s reported INR 1,147,000 loss.
