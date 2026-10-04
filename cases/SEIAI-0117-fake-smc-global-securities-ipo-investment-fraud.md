# SEIAI-0117: Fake SMC Global Securities IPO investment fraud

## Record status

- Case ID: `SEIAI-0117`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0117-01 | T1 | bail_order | Shashank Pathak v. State of NCT of Delhi, 3 December 2025 |

Source URL: https://indiankanoon.org/doc/199423578/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN. 3199/2025; FIR No.06/2025
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi complainant was approached through WhatsApp by persons impersonating SMC Global Securities, using a fake Ajay Garg identity, A105 Progress Forum and a fake SMC Global Securities App. He transferred about INR 26.24 million for purported IPO subscriptions before withdrawals were blocked. The bail applicant was linked to one recipient account but not to the victim-facing communications.

## Reconstruction

### Initial contact

Between 1 December 2024 and 3 January 2025 the complainant was approached on WhatsApp by persons impersonating SMC Global Securities personnel.

### Pretext

Operators used a fake identity of Ajay Garg, a group named A105 Progress Forum and a mobile app called SMC Global Securities App to offer IPO subscriptions and fictitious IPO shares.

### Requested action

Subscribe to IPOs and transfer investment money to the bank accounts supplied by the operators.

### Victim action and consequence

The complainant transferred INR 26,239,965.16 across 24 accounts and realized the fraud when withdrawals were blocked.

- Reported financial loss: INR 26239965.16
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0117-A01: Fake Ajay Garg / A105 Progress Forum operator cluster
- Identity resolution: `partially_identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0117-A02: Downstream recipient-account network including Shri Ram Travels
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

- Attribution target: Fake SMC Global/A105 Progress Forum operators and downstream account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The applicant’s proprietorship account received INR 2 million, but the source records no CDR or WhatsApp evidence connecting him to the complainant and preserves his account-misuse defence.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Provider/device evidence identifying the WhatsApp group/app operators and resolving knowledge/control of downstream accounts.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

This promotes existing screening candidate CAND-0056 from pending to include. Applicant-specific attribution remains intentionally separated from the original victim-facing fraud.
