# SEIAI-0129: Dadel Technologies WhatsApp part-time job fraud

## Record status

- Case ID: `SEIAI-0129`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0129-01 | T1 | bail_order | Manoj Sreenivas v. State of Kerala, 23 January 2024 |

Source URL: https://indiankanoon.org/doc/111286000/

## Procedural posture

- Court / authority: Kerala High Court
- Case / FIR: BAIL APPL. 69/2024; Crime No.73/2023
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Kerala cybercrime case concerns a WhatsApp part-time job offer made by a person allegedly posing as a Dadel Technologies employee. The scheme induced a substantial transfer and the bail record places INR 1.196 million in the focal transaction path. Victim-facing identity resolution remains limited.

## Reconstruction

### Initial contact

The focal complainant received a WhatsApp message offering part-time work from a person alleged to be impersonating an employee of Dadel Technologies Pvt. Ltd.

### Pretext

The purported company employment opportunity was used to induce digital payments into the account/infrastructure associated with the scheme.

### Requested action

Participate in the offered part-time work and transfer money as instructed by the purported company representative.

### Victim action and consequence

The source records receipt of INR 1,196,000 in connection with the focal transaction sequence.

- Reported financial loss: INR 1196000
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

### SEIAI-0129-A01: Dadel Technologies-impersonating WhatsApp operator(s)
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

### SEIAI-0129-A02: Downstream recipient/account network
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

- Attribution target: Dadel Technologies-impersonating WhatsApp operator(s) and downstream account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The bail order contains a concise prosecution recital and wider similar-transaction context but limited public technical evidence proving who controlled the victim-facing WhatsApp identity.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated WhatsApp/device/provider evidence identifying the purported Dadel Technologies operator.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The source mentions numerous other similar transactions; those are network context and are not aggregated into this focal loss.
