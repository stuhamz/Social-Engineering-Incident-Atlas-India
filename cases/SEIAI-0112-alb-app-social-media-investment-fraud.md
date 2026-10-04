# SEIAI-0112: ALB App social-media investment fraud

## Record status

- Case ID: `SEIAI-0112`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0112-01 | T1 | bail_order | Devanand v. State of NCT of Delhi, 12 November 2025 |

Source URL: https://indiankanoon.org/doc/30249198/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN. 3203/2025; FIR No.19/2024
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi complainant was drawn from an Instagram advertisement into a WhatsApp investment group and the ALB App, then induced to transfer about INR 6.65 million on promises of high returns. Investigation traced a portion of the funds to a downstream account and linked its SIM to devices associated with the bail applicant, while the original promoters remained unresolved.

## Reconstruction

### Initial contact

The complainant was induced through an Instagram advertisement and WhatsApp group to participate in an online investment scheme.

### Pretext

The operators promoted the ALB App as a high-return investment platform and directed transfers into supplied bank accounts.

### Requested action

Invest through the ALB App by transferring funds to designated accounts.

### Victim action and consequence

The complainant transferred approximately INR 6,650,000 and no money was repaid.

- Reported financial loss: INR 6650000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `yes`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `yes`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0112-A01: ALB App / WhatsApp investment operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0112-A02: SIM/device-linked downstream financial actors
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Unresolved ALB App/WhatsApp investment operators and device/SIM-linked downstream actors.
- Primary basis: `cdr_or_telecom_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The applicant was linked through CDR/device use of a bank-linked SIM associated with a downstream account, not shown to have authored the original Instagram/WhatsApp inducement.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Platform/provider and app infrastructure records identifying the ALB App and victim-facing account controllers.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The source contains a prosecution submission referring to INR 5.65 million in one place; the complaint recital gives approximately INR 6.65 million, which is retained as the focal reported loss.
