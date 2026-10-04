# SEIAI-0125: WhatsApp and Telegram part-time employment fraud

## Record status

- Case ID: `SEIAI-0125`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0125-01 | T1 | bail_order | Rohit Dixit v. State of Kerala, 12 June 2025 |

Source URL: https://indiankanoon.org/doc/110274798/

## Procedural posture

- Court / authority: Kerala High Court
- Case / FIR: BAIL APPL. 6400/2025; Crime No.15/2023
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Thrissur complainant was recruited through WhatsApp and Telegram for purported part-time employment. Small payments built confidence before she was induced to transfer INR 290,000 to different accounts. The bail record supports the focal manipulation sequence but provides limited public digital attribution of the victim-facing accounts.

## Reconstruction

### Initial contact

Between 21 and 31 July 2023 the complainant was contacted through WhatsApp and Telegram and offered an online part-time job.

### Pretext

The operators projected large earnings and made small payments for work to build confidence before requiring transfers to different bank accounts.

### Requested action

Participate in the purported online employment and transfer money into accounts supplied by the operators.

### Victim action and consequence

After receiving small trust-building payments, the complainant transferred INR 290,000 and was neither provided employment nor repaid.

- Reported financial loss: INR 290000
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

### SEIAI-0125-A01: WhatsApp/Telegram part-time job operator(s)
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

### SEIAI-0125-A02: Downstream beneficiary-account network
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

- Attribution target: WhatsApp/Telegram employment-scam operator(s) and account network.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The prosecution alleged the petitioners were part of the racket, but the public order does not reproduce device/platform evidence attributing the original contacts to them.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated WhatsApp/Telegram and device evidence resolving the recruiter/operator identities.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

Only the focal complainant’s INR 290,000 transfer is normalized as loss.
