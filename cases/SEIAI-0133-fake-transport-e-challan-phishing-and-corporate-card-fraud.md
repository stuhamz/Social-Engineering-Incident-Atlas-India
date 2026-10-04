# SEIAI-0133: Fake transport e-challan phishing and corporate-card fraud

## Record status

- Case ID: `SEIAI-0133`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0133-01 | T1 | bail_order | Prithavi Kumar @ Rahul v. State of Chhattisgarh, 10 July 2026 |

Source URL: https://indiankanoon.org/doc/25742372/

## Procedural posture

- Court / authority: Chhattisgarh High Court
- Case / FIR: MCRC Nos.4919 and 5734/2026; Crime No.08/2026
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Raipur company director received a fake transport e-challan SMS, opened the link and entered corporate credit-card details and an OTP for a purported INR 1,200 traffic penalty. Three unauthorized online transactions totalling INR 452,132 followed. Investigation linked applicants to a mobile number allegedly used in the fraud.

## Reconstruction

### Initial contact

On 3 January 2026 the director of Jai Ambe Emergency Services India Pvt. Ltd. received an SMS containing a fake transport e-challan link.

### Pretext

The link represented itself as a payment route for a INR 1,200 traffic penalty and requested corporate credit-card details and an OTP.

### Requested action

Open the purported e-challan link, enter corporate card details and authenticate the INR 1,200 penalty with an OTP.

### Victim action and consequence

The complainant entered the card details and OTP; INR 452,132 was then fraudulently debited through three online transactions.

- Reported financial loss: INR 452132
- Payment method: `card`

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

### SEIAI-0133-A01: Fake transport e-challan phishing operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0133-A02: Mobile-number-linked accused/transaction network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `sim_or_subscriber_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Fake e-challan phishing operator(s) and mobile-number-linked accused.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The source states technical material linked applicants to the mobile number allegedly used in the offence, but does not reproduce the full forensic chain proving authorship/control of the phishing page.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Domain/server, device and transaction-session evidence tying the fake e-challan link and mobile number to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The judgment header refers to Crime No.08/2026 while the factual recital once calls the original complaint Crime No.06/2026. The record uses Crime No.08/2026 as the bail case reference; the inconsistency is preserved rather than silently reconciled.
