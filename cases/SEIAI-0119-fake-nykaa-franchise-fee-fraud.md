# SEIAI-0119: Fake Nykaa franchise fee fraud

## Record status

- Case ID: `SEIAI-0119`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0119-01 | T1 | bail_order | Aayush Kumar Rai v. State of Chhattisgarh, 29 January 2026 |

Source URL: https://indiankanoon.org/doc/165273298/

## Procedural posture

- Court / authority: Chhattisgarh High Court
- Case / FIR: MCRC No.38/2026; Crime No.01/2025
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Chhattisgarh complainant was induced by persons posing as Nykaa representatives to pay successive franchise-related amounts into supplied accounts. The payments totalled INR 1,165,500. The public bail record supports the brand-impersonation and money trail but not a final allocation of the original communications to every accused.

## Reconstruction

### Initial contact

The complainant was approached by persons presenting themselves as connected with Nykaa and offering a franchise/business opportunity.

### Pretext

The operators used purported corporate communications and documents to demand successive franchise-related deposits into specified bank accounts.

### Requested action

Pay franchise/application/security amounts into the accounts supplied by the purported Nykaa representatives.

### Victim action and consequence

The complainant transferred INR 265,500, INR 500,000 and INR 400,000, totalling INR 1,165,500.

- Reported financial loss: INR 1165500
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `not_reported`
- Email: `yes`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0119-A01: Nykaa-impersonating franchise operator cluster
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

### SEIAI-0119-A02: Beneficiary-account network linked in investigation
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

- Attribution target: Nykaa-impersonating franchise operators and beneficiary-account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The bail order records prosecution material against several applicants but does not establish that each applicant authored the victim-facing corporate impersonation.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Email/domain/provider and device records tying the fraudulent Nykaa communications to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The three transfer amounts are summed only because the source expressly treats them as the focal complainant’s payments in the same scheme.
