# SEIAI-0122: TRAI-Mumbai Police-CBI senior-citizen digital-arrest fraud

## Record status

- Case ID: `SEIAI-0122`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0122-01 | T1 | bail_order | Himanshu v. State GNCT of Delhi, 1 October 2026 |

Source URL: https://indiankanoon.org/doc/144827828/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN. 4195/2026; FIR No.214/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi senior citizen was placed under a digital-arrest style fraud by callers impersonating TRAI, Mumbai Police and the CBI. They alleged misuse of his Aadhaar identity, threatened him and his family, and induced INR 26.5 million in transfers. The bail applicant was a remote downstream recipient, not a documented victim-facing operator.

## Reconstruction

### Initial contact

A senior citizen was contacted through Skype and telephone by persons impersonating TRAI, Mumbai Police and CBI officials.

### Pretext

The operators claimed the victim’s Aadhaar credentials had been used in criminal activity and threatened arrest and consequences to his family.

### Requested action

Comply with the purported investigation and transfer funds to accounts specified by the callers.

### Victim action and consequence

The complainant transferred an aggregate INR 26.5 million, with INR 15 million traced to Asif Enterprises and INR 11.5 million to Waveland Comestible Pvt. Ltd.

- Reported financial loss: INR 26500000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `yes`
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

### SEIAI-0122-A01: TRAI/Mumbai Police/CBI impersonator cluster
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

### SEIAI-0122-A02: Asif Enterprises / Waveland and downstream financial network
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

- Attribution target: TRAI/Mumbai Police/CBI impersonator cluster and primary beneficiary entities.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The bail applicant was not alleged to have spoken to the complainant; his implication arose from a later INR 531,168 credit, for which he asserted a bona fide commercial explanation.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Victim-facing communication/provider evidence and proof of knowing control over the principal beneficiary accounts.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The applicant’s INR 531,168 credit is a remote-layer amount and is not treated as proof that he participated in the original impersonation.
