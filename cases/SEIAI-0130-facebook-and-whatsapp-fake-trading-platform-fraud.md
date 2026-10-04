# SEIAI-0130: Facebook and WhatsApp fake trading-platform fraud

## Record status

- Case ID: `SEIAI-0130`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0130-01 | T1 | bail_order | Deekshith v. State of Kerala, 6 October 2025 |

Source URL: https://indiankanoon.org/doc/198066771/

## Procedural posture

- Court / authority: Kerala High Court
- Case / FIR: BAIL APPL. 11950/2025; Crime No.12/2025
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Wayanad complainant was contacted through Facebook and WhatsApp with promises of online-trading profits and directed to a fake trading platform. Between October 2024 and April 2025 he transferred INR 3,144,530 and received no profit or refund.

## Reconstruction

### Initial contact

Between 1 October 2024 and 15 April 2025 the complainant was contacted through Facebook and WhatsApp by persons promising profits from online trading.

### Pretext

The operators induced the complainant to open an account on a fake trading platform and represented transfers to supplied bank accounts as investment capital.

### Requested action

Open/use the purported trading account and transfer funds for online investment.

### Victim action and consequence

The complainant transferred INR 3,144,530 across multiple transactions and received neither profit nor refund.

- Reported financial loss: INR 3144530
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `yes`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0130-A01: Facebook/WhatsApp fake-trading operator(s)
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

### SEIAI-0130-A02: Beneficiary-account network including petitioner-linked subset
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

- Attribution target: Facebook/WhatsApp trading operators and beneficiary-account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The bail record alleges the petitioner contacted the complainant and received a traced portion, but the public record does not reproduce authenticated platform/device evidence proving account authorship.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated Facebook/WhatsApp and fake-platform records establishing account control and linking it to the money trail.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The source states that INR 400,000 was traced to the petitioner; this is an applicant-specific subset, not a replacement for the focal loss.
