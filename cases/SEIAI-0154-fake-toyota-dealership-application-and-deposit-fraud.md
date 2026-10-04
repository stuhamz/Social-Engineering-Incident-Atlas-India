# SEIAI-0154: Fake Toyota dealership application and deposit fraud

## Record status

- Case ID: `SEIAI-0154`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0154-01 | T1 | bail_order | Dharminder Kumar @ Dharu v. State of U.T. Chandigarh, 19 May 2026 |

Source URL: https://indiankanoon.org/doc/142776476/

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / FIR: CRM-M-16909-2026; FIR No.35 dated 17.04.2025, P.S. Cybercrime Chandigarh
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail petition dismissed on 19 May 2026; prosecution cited an active account-procurement/layering role and pending trial witnesses.

## Neutral case summary

A prospective dealer saw a Toyota dealership notification in a newspaper, submitted an application through the supplied link, and was contacted about two and a half months later. After calls, information collection and a Zoom meeting, he transferred INR 5.4 million to two accounts. Investigation recovered multiple passbooks, ATM cards, SIMs and phones from petitioner Dharminder Kumar, supporting a downstream financial/infrastructure role rather than direct proof that he operated the dealership persona.

## Reconstruction

### Initial contact

The complainant saw a newspaper notification concerning opening of a Toyota dealership, followed the supplied link and submitted a dealership application form.

### Pretext

About two and a half months later, callers said the application had been received, collected information, arranged a Zoom meeting and demanded deposits for dealership allotment.

### Requested action

Complete the purported Toyota dealership process and deposit required funds into supplied bank accounts.

### Victim action and consequence

Believing that a Toyota dealership would be allotted, the complainant transferred INR 5,400,000 into two bank accounts.

- Reported focal financial loss: INR 5400000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Brand legitimacy plus a delayed follow-up to a real application action and a Zoom meeting made the dealership process appear authentic.

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

Other evidence: Six passbooks, five ATM cards belonging to different account holders, three SIM cards and two mobile phones recovered from the petitioner.

## Actor and attribution analysis

### SEIAI-0154-A01: Fake Toyota dealership operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Publishing/operating the dealership application process, following up by phone/Zoom and inducing dealership deposits.
- Limitation: The humans behind the newspaper/link, calls and Zoom interaction are not resolved in the bail order.
- Alternative explanation: Different operators may have handled publication, calls and video meeting.

### SEIAI-0154-A02: Dharminder Kumar @ Dharu
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `device_possession_or_forensics`
- Attribution strength: **moderate**
- Conduct assessed: Allegedly procuring/arranging beneficiary accounts and participating in layering/concealment; multiple passbooks, ATM cards, SIMs and phones were recovered.
- Limitation: Infrastructure and financial-role evidence does not establish that the petitioner personally delivered the Toyota dealership pretext.
- Alternative explanation: The petitioner may have had a downstream account/logistics role.


### Incident-level attribution assessment

- Attribution target: Unknown Toyota dealership operator(s) and petitioner Dharminder Kumar's alleged account-procurement/layering role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `device_possession_or_forensics`
- Attribution strength: **moderate**
- Limitations: The petitioner was linked through co-accused disclosure, recovered banking/SIM/device material and an alleged role arranging accounts; the source does not establish that he authored the newspaper/link, call or Zoom presentation.
- Alternative explanation: The petitioner may have occupied a downstream financial/logistical role rather than the victim-facing dealership persona.

## Primary evidentiary gap

Publication/link provenance, domain/platform records and communication artefacts connecting the Toyota dealership front end to the account-procurement network.

## Legal/procedural notes

BNS 318(4), 61(2)

## Coding decisions

No dedicated dealership/franchise category exists in the controlled vocabulary. The case is coded identity_theft_deception because a real business identity and purported dealership process were used to induce payments, with secondary other.
