# SEIAI-0114: Fake Groww and E-TRADES investment fraud

## Record status

- Case ID: `SEIAI-0114`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0114-01 | T1 | bail_order | Sanjay Chauhan v. State of NCT of Delhi, 28 July 2025 |

Source URL: https://indiankanoon.org/doc/113036025/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN. 1600/2025; FIR No.40/2024
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi businessman was called by a person claiming to represent Groww, added to a WhatsApp stock-education group and introduced to an E-TRADES platform. Trust in the brand and investment explanations induced INR 2.07 million in transfers before inconsistencies exposed the scheme.

## Reconstruction

### Initial contact

A New Delhi businessman received a call from a person claiming to represent Groww Company and was invited into a WhatsApp group for stock-market investment education.

### Pretext

The group introduced an E-TRADES platform, promoted stock/IPO opportunities and invoked positive tips and escrow-compliance assurances to create legitimacy.

### Requested action

Join the WhatsApp investment group and transfer money into supplied beneficiary accounts for stock/IPO investments.

### Victim action and consequence

Between 29 May and 7 June 2024 the complainant transferred INR 2,070,000 before discrepancies in beneficiary accounts and the purported company address exposed the fraud.

- Reported financial loss: INR 2070000
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

### SEIAI-0114-A01: Groww-impersonating investment operator(s)
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

### SEIAI-0114-A02: E-TRADES beneficiary-account network
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

- Attribution target: Purported Groww/E-TRADES operators and downstream beneficiary-account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The source reconstructs the pretext and payment path but does not publicly establish the identity of the original caller or WhatsApp administrators.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Provider/device records linking the Groww-impersonating caller, WhatsApp group and E-TRADES infrastructure to human operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The case is coded as investment fraud with secondary social-media/brand impersonation; no claim is made that Groww itself was involved.
