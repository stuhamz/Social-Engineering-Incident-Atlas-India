# SEIAI-0136: TCS JOB government-outsourcing recruitment fraud

## Record status

- Case ID: `SEIAI-0136`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0136-01 | T1 | bail_order | Jitendra Kumar @ Jitu Sah v. State of Bihar, 29 April 2026 |

Source URL: https://indiankanoon.org/doc/48331938/

## Procedural posture

- Court / authority: Patna High Court
- Case / FIR: Criminal Miscellaneous No.90826/2025; Cyber Nalanda P.S. Case No.49/2025 (order header states Case No.50/2025)
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Anticipatory bail dismissed on 29 April 2026; investigation was stated to be continuing.

## Neutral case summary

A Bihar informant was induced to believe that a TCS JOB entity held outsourcing tenders for government and contractual recruitment. The alleged operators used fake websites, emails, identity cards, appointment materials, training schedules and in-person meetings to sustain legitimacy while collecting repeated fees. The order states that INR 2,972,160 was extracted, while the petitioner disputed the employment narrative.

## Reconstruction

### Initial contact

The informant was introduced to persons representing that TCS JOB had government outsourcing tenders in Bihar and Jharkhand and later came into contact with petitioner Jitendra Kumar, who projected himself as TCS JOB management in Kolkata.

### Pretext

The scheme promised genuine recruitment in health, railways, teaching and other posts, using fake identity cards, websites, emails, notifications, training schedules, agreements and online results to support the representation.

### Requested action

Submit biodata and pay registration, processing, training and other job-related fees through repeated online transactions.

### Victim action and consequence

The informant and associated applicants submitted biodata and made repeated payments. The order states a total extracted amount of INR 2,972,160.

- Reported focal financial loss: INR 2972160
- Payment method: `multiple`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Institutional legitimacy was created through fake portals, documents, meetings, agreements and apparent government outsourcing arrangements.

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `yes`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Fake identity cards, appointment materials, websites, training schedules, agreements and security cheques.

## Actor and attribution analysis

### SEIAI-0136-A01: Jitendra Kumar @ Jitu Sah
- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Direct victim contact: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Projecting himself as TCS JOB management, sending identity/document/web materials, making recruitment assurances and allegedly receiving repeated payments.
- Limitation: The conduct is described at anticipatory-bail stage and remains unadjudicated.
- Alternative explanation: The petitioner said the transfers concerned business investment rather than recruitment.

### SEIAI-0136-A02: Wider TCS JOB recruitment cluster
- Identity resolution: `actor_cluster`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Direct victim contact: `yes`
- Attribution basis: `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Coordinating fake outsourcing/recruitment representations, documents, websites, fees and applicant processing.
- Limitation: The source describes multiple co-accused and a structured racket but does not resolve every persona, website or payment to a specific human.



### Incident-level attribution assessment

- Attribution target: Petitioner Jitendra Kumar and the wider TCS JOB recruitment cluster.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **moderate**
- Limitations: The source is an anticipatory-bail order and records allegations and case-diary material rather than final criminal findings.
- Alternative explanation: The petitioner asserted that the transfers related to business investment and denied job-related correspondence.

## Primary evidentiary gap

Authenticated control records for the fake websites, email accounts and messaging identities, together with complete transaction reconciliation.

## Legal/procedural notes

IPC 406, 419, 420, 467, 468, 471, 120B

## Coding decisions

The source contains an internal arithmetic inconsistency: listed payment figures overlap with a later court-stated total of INR 2,972,160. Atlas codes the court-stated total and preserves the discrepancy rather than silently recomputing it. The order header references Cyber P.S. Case No.50/2025 while paragraph 2 states No.49/2025.
