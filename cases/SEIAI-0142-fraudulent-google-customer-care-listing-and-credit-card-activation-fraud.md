# SEIAI-0142: Fraudulent Google customer-care listing and credit-card activation fraud

## Record status

- Case ID: `SEIAI-0142`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0142-01 | T1 | bail_order | Khalid Ansari @ Md. Khalid Ansari v. State of Jharkhand, 17 July 2026 |

Source URL: https://www.casemine.com/judgement/in/6a5db3b5422e276d1cb4ed84

## Procedural posture

- Court / authority: Jharkhand High Court
- Case / FIR: B.A. 5912/2026; Cyber P.S. Case No.167/2025
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Bail dismissed on 17 July 2026; the High Court expected the trial to conclude within six months.

## Neutral case summary

A victim trying to activate a new credit card called a phone number displayed on Google as customer care and lost INR 45,099. A Jharkhand High Court bail order states that the number was seized from petitioner Khalid Ansari, providing unusually direct device/number linkage, while still leaving the precise call-session attribution unstated.

## Reconstruction

### Initial contact

A victim searching for help activating a new credit card called a number displayed on Google as a customer-care contact.

### Pretext

The number was allegedly presented fraudulently as customer care and used the activation request as the context for the fraud.

### Requested action

Engage with the purported customer-care number to activate the new credit card.

### Victim action and consequence

The victim called the displayed number and INR 45,099 was taken from the victim's bank account.

- Reported focal financial loss: INR 45099
- Payment method: `other`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Search-result/customer-care legitimacy caused the victim to initiate contact with the fraudulent endpoint.

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not reported

## Actor and attribution analysis

### SEIAI-0142-A01: Fraudulent Google customer-care operator
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Operating the purported customer-care interaction used when the victim sought credit-card activation.
- Limitation: The public order does not identify the speaker separately from the seized number.
- Alternative explanation: A number can be controlled or used by more than one person.

### SEIAI-0142-A02: Khalid Ansari / seized-number actor
- Identity resolution: `identified`
- Role layer: `technical`
- Victim-facing function: `uncertain`
- Financial function: `not_assessed`
- Direct victim contact: `unknown`
- Attribution basis: `device_possession_or_forensics`
- Attribution strength: **limited**
- Conduct assessed: Possessing the mobile/number that the case diary said was fraudulently displayed as customer care on Google.
- Limitation: The source does not reproduce call-session, platform or bank-endpoint evidence proving that the petitioner personally answered the focal call.
- Alternative explanation: Possession of the phone may reflect control of infrastructure without proving each victim-facing act.


### Incident-level attribution assessment

- Attribution target: Petitioner Khalid Ansari's seized mobile/number and the unresolved human operator of the fraudulent customer-care interaction.
- Primary basis: `device_possession_or_forensics`
- Secondary basis: `sim_or_subscriber_record`
- Attribution strength: **limited**
- Limitations: The bail order says the fraudulent Google customer-care number was seized from the petitioner and case-diary material attributes the fraud to him, but it does not reproduce call-session or platform evidence proving who answered the victim.
- Alternative explanation: Possession/subscriber association with the number does not by itself prove authorship of every customer-care interaction.

## Primary evidentiary gap

Google listing/control records, CDRs and device artefacts tying the victim's call to the seized handset and a specific user session.

## Legal/procedural notes

BNS 111(2)(b), 111(3), 111(4), 319(2), 318(4), 338, 336(3), 340(2), 61(2); IT Act 66B, 66C, 66D, 84C

## Coding decisions

Primary source is a judicial order reproduced by CaseMine rather than Indian Kanoon; the neutral citation is 2026:JHHC:21137.
