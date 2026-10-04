# SEIAI-0132: KOTAK Investment Club retirement-corpus fraud

## Record status

- Case ID: `SEIAI-0132`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0132-01 | T1 | bail_order | R. Riyas Mohammed v. State of Odisha & connected matters, 9 June 2025 |

Source URL: https://indiankanoon.org/doc/59155811/

## Procedural posture

- Court / authority: Orissa High Court
- Case / FIR: BLAPL No.12332/2024 & connected matters; Cyber Crime P.S. Case No.48/2024
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

An Odisha retiree was automatically added to a WhatsApp group styled KOTAK Investment Club, exposed to daily investment discussions and fictitious share/IPO allocations, and induced to commit his retirement corpus. When he attempted withdrawal, further fees were demanded, the app was deactivated and he was removed from the group. He reported a INR 62.8 million loss.

## Reconstruction

### Initial contact

The retired informant was automatically added to a WhatsApp group called 'KOTAK Investment Club', administered through an overseas-number identity and investment personas including 'Evelyn Smith'.

### Pretext

Daily trading discussions and purported share/IPO allocations were used to establish legitimacy; the victim was shown fictitious investment balances and later asked for additional service/withdrawal fees.

### Requested action

Transfer retirement funds for purported share/IPO investments and later pay additional charges to unlock withdrawals.

### Victim action and consequence

The informant invested his retirement corpus and additional amounts and ultimately reported a total loss of INR 62,800,000; he was removed from the group and the app was deactivated when he tried to withdraw.

- Reported financial loss: INR 62800000
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

### SEIAI-0132-A01: KOTAK Investment Club / Evelyn Smith operator cluster
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

### SEIAI-0132-A02: Mule-account and fund-routing network
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

- Attribution target: KOTAK Investment Club victim-facing operator cluster and national/international mule-account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **moderate**
- Limitations: The record maps extensive financial infrastructure and arrests but the real-world identities behind the victim-facing WhatsApp administrators/personas remain only partially resolved.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated WhatsApp/app/provider evidence tying the named personas and overseas-number administrator to specific human operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

Cross-border dimension is coded suspected because preliminary investigation indicated a Vietnam-linked bank account; this is not treated as a final finding about the entire operator network.
