# SEIAI-0123: TRAI-to-CBI three-day WhatsApp digital-arrest fraud

## Record status

- Case ID: `SEIAI-0123`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0123-01 | T1 | bail_order | Karanam Lakshmi Narayana Santosh Kumar v. State of NCT of Delhi, 6 August 2026 |

Source URL: https://indiankanoon.org/doc/71534355/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN. 1544/2026; FIR No.15/2025
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi complainant received a WhatsApp call from a purported TRAI official and was escalated to video callers posing as Colaba Police, CBI and Supreme Court authorities. He was kept under a nearly three-day digital arrest and transferred INR 4,859,308 after liquidating fixed deposits.

## Reconstruction

### Initial contact

On 2 March 2025 the complainant received a WhatsApp call from a person identifying himself as Deepak Sharma from TRAI.

### Pretext

The caller claimed a PMLA FIR had been registered at Colaba Police Station, after which video callers impersonating Colaba Police, CBI and Supreme Court officials kept the complainant under a nearly three-day digital arrest.

### Requested action

Remain under the purported investigation, liquidate funds and transfer them to accounts designated by the impersonators.

### Victim action and consequence

The complainant prematurely liquidated fixed deposits and transferred INR 4,859,308 from ICICI, Canara Bank and PNB accounts to AU Small Finance Bank and DBS Bank accounts.

- Reported financial loss: INR 4859308
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

### SEIAI-0123-A01: TRAI/Colaba Police/CBI/Supreme Court impersonator cluster
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

### SEIAI-0123-A02: Downstream AU/DBS beneficiary-account network
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

- Attribution target: TRAI/police/CBI/Supreme Court impersonator cluster and downstream account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The public order distinguishes the applicant’s downstream account/infrastructure position from the unidentified persons who made the victim-facing WhatsApp calls.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated WhatsApp/device/provider evidence identifying the impersonators and linking them to the recipient-account controllers.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

Applicant-specific downstream conduct is not treated as proof that the applicant operated any victim-facing persona.
