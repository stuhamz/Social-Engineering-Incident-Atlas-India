# SEIAI-0110: Telegram video-liking and investment-task fraud

## Record status

- Case ID: `SEIAI-0110`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0110-01 | T1 | bail_order | Johnny J. v. State of Telangana, 16 April 2024 |

Source URL: https://indiankanoon.org/doc/161767423/

## Procedural posture

- Court / authority: Telangana High Court
- Case / FIR: Criminal Petition Nos.3717 and 3718 of 2024; Crime No.2481/2023
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Hyderabad complainant was recruited through Telegram for simple YouTube/Instagram engagement tasks. Small payments built trust before the operators escalated to paid investment tasks, leading to a reported INR 4,945,900 loss. The bail record describes bank tracing of beneficiary accounts while the Telegram personas remain only partially resolved.

## Reconstruction

### Initial contact

The complainant received Telegram messages offering part-time work for subscribing to/liking YouTube and Instagram content.

### Pretext

Operators directed her to a purported digital-marketing task platform, made small initial payments, then induced progressively larger investment/task payments on promises of profit.

### Requested action

Perform social-media tasks and transfer funds for higher-yield investment/task rounds.

### Victim action and consequence

The complainant made repeated payments and reported total losses of INR 4,945,900 across the two task sequences described in the complaint.

- Reported financial loss: INR 4945900
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

### SEIAI-0110-A01: Telegram task-recruiter/operator cluster
- Identity resolution: `partially_identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0110-A02: Beneficiary-account network traced by police
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Telegram task operators and beneficiary-account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **moderate**
- Limitations: The judicial source documents beneficiary-bank tracing and the victim-facing Telegram accounts, but does not publicly resolve every online persona to an identified human.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated Telegram/platform and device records linking named handles to operators and to beneficiary-account controllers.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The total focal loss follows the complaint total stated in the judicial record, not broader network transaction values.
