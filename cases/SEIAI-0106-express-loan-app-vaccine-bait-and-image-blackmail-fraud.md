# SEIAI-0106: Express Loan app vaccine-bait and image-blackmail fraud

## Record status

- Case ID: `SEIAI-0106`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0106-01 | T1 | bail_order | Vineet Jhavar v. State, 13 February 2023 |

Source URL: https://indiankanoon.org/doc/30737892/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN. 3856/2022; FIR No.129/2022
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi complainant clicked an SMS link framed around eligibility for a third Covid-19 vaccine dose, which installed the Express Loan app. After he entered Aadhaar and PAN details and received a small loan, operators used access to his contacts and images to threaten him with morphed photographs. The bail record documents a broader extortion network, CDR/IP tracing and beneficiary accounts.

## Reconstruction

### Initial contact

The focal complainant received SMS messages about a loan for a third Covid-19 vaccine dose, with a link for checking eligibility; clicking it downloaded the Express Loan app.

### Pretext

The app requested Aadhaar and PAN details and immediately credited INR 4,200. Days later, operators who had obtained contact and image access threatened the complainant with morphed images sent to his contacts.

### Requested action

Install the app, provide identity details and later comply with payment demands to stop dissemination of morphed images.

### Victim action and consequence

The complainant installed the app, supplied Aadhaar/PAN details, received the small loan and was subsequently threatened through calls and morphed-image dissemination. The source does not state a focal amount he paid.

- Reported financial loss: not normalized / not reported for the focal victim
- Payment method: `unknown`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `yes`
- Bank / transaction: `yes`
- IP / login: `yes`
- Device: `yes`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0106-A01: Express Loan victim-facing operator cluster
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

### SEIAI-0106-A02: Account-linked Express Loan financial network
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

- Attribution target: Express Loan operator network and account-linked downstream accused.
- Primary basis: `cdr_or_telecom_record`
- Secondary basis: `ip_or_login_record`
- Attribution strength: **moderate**
- Limitations: The bail order contains network-level CDR/IP and bank material and identifies accused linked to accounts, but not every accused is shown to have authored the focal SMS or threats to Rohan Kapoor.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated app/backend, messaging and device records mapping the focal SMS and threatening identities to specific operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The separate INR 25 lakh extortion suffered by another complainant, Aditya Sharma, is not normalized as the focal victim’s loss. The wider INR 140 crore network transaction figure is also not coded as focal loss.
