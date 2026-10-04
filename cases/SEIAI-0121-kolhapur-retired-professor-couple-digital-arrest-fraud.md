# SEIAI-0121: Kolhapur retired-professor couple digital-arrest fraud

## Record status

- Case ID: `SEIAI-0121`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0121-01 | T1 | bail_order | Tejas Rahul Bhalerao v. State of Maharashtra, 8 April 2026 |

Source URL: https://indiankanoon.org/doc/16038768/

## Procedural posture

- Court / authority: Bombay High Court, Circuit Bench at Kolhapur
- Case / FIR: Criminal Bail Application No.3740/2025; Crime No.378/2025
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A retired professor couple in Kolhapur was drawn into a digital-arrest fraud beginning with a fake TRAI/Colaba police call and escalating to staged Mumbai Police and virtual-court video. Under an RBI verification pretext, the victim transferred INR 35.723 million across 11 transactions.

## Reconstruction

### Initial contact

On 18 April 2025 a retired professor in Kolhapur received a call from a person posing as a police officer from the 'TRAI Department, Colaba'.

### Pretext

The caller alleged her Aadhaar was implicated in a INR 6 crore Naresh Goyal money-laundering case; staged Mumbai Police/virtual-court video calls and an RBI 'verification' process were used to coerce compliance.

### Requested action

Share banking details and transfer funds through the purported RBI verification process.

### Victim action and consequence

The complainant transferred INR 35,723,000 through 11 RTGS/NEFT transactions to accounts supplied by the operators.

- Reported financial loss: INR 35723000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `yes`
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

### SEIAI-0121-A01: TRAI/Mumbai Police/virtual-court impersonator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0121-A02: Downstream beneficiary-account network
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

- Attribution target: TRAI/Mumbai Police/virtual-court impersonator cluster and downstream accounts.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The order reconstructs the high-value digital-arrest episode and payments but the original victim-facing personas remain unresolved in the public record.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated WhatsApp/video, telecom and device records tying the impersonating personas to identified humans.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The focal loss is the source-stated INR 35,723,000 total, not any network-wide account flows.
