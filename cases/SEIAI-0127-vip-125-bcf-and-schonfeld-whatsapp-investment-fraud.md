# SEIAI-0127: VIP 125-BCF and Schonfeld WhatsApp investment fraud

## Record status

- Case ID: `SEIAI-0127`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0127-01 | T1 | bail_order | Shilajit Choudhury v. State of West Bengal, 19 September 2025 |

Source URL: https://indiankanoon.org/doc/133367662/

## Procedural posture

- Court / authority: Calcutta High Court
- Case / FIR: CRM(M) 47/2025 & CRM(M) 167/2025; Bidhannagar Cyber Crime P.S. Case No.139/2024
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A West Bengal complainant followed a Facebook share-trading advertisement into two WhatsApp groups, VIP 125-BCF Investment Academy and Schonfeld Mutual Aid Community 375. He used promoted apps and transferred INR 10.035 million before withdrawal failed and further-payment demands exposed the fraud. The record also describes extensive account-opening infrastructure.

## Reconstruction

### Initial contact

The complainant encountered a Facebook advertisement promising substantial share-trading benefits and joined two WhatsApp groups through their links.

### Pretext

The groups promoted apps named ESCORTS and Ssa-EE and directed deposits for purported share trading; when the complainant attempted withdrawal, more money was demanded.

### Requested action

Join the WhatsApp investment communities, use the promoted apps and transfer funds to accounts designated by the platforms.

### Victim action and consequence

The complainant transferred INR 10,035,000 from three bank accounts and could not withdraw it; demands for additional money then raised suspicion.

- Reported financial loss: INR 10035000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `yes`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0127-A01: VIP 125-BCF / Schonfeld investment operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0127-A02: Bank-account-opening and mule infrastructure network
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

- Attribution target: VIP/Schonfeld investment operators and bank-account-opening/mule infrastructure network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **moderate**
- Limitations: The source distinguishes the victim-facing investment scheme from petitioners involved in bank-account infrastructure; specific contact by the petitioners with the focal victim was disputed.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Provider/device evidence tying the investment-group administrators and app controllers to the account-opening infrastructure.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The 704 accounts and 1,530 complaints described by the State are network-level context, not the focal incident loss. Cross-border dimension is coded suspected because the prosecution alleged Dubai/Sri Lanka routing but the public judgment did not finally establish it.
