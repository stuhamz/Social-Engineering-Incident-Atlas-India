# SEIAI-0145: Profit trading plan web-app and WhatsApp investment fraud

## Record status

- Case ID: `SEIAI-0145`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0145-01 | T1 | bail_order | Ajeet Kumar Shukla v. State of Rajasthan, 27 February 2026 |

Source URL: https://indiankanoon.org/doc/107341519/

## Procedural posture

- Court / authority: Rajasthan High Court, Jaipur
- Case / FIR: S.B. Criminal Misc. Bail Application No.7954/2025; FIR No.346/2024, P.S. Shyam Nagar, Jaipur City South
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail dismissed on 27 February 2026 after charges had been framed and trial was pending.

## Neutral case summary

A Rajasthan prosecution alleged that Ajeet Kumar Shukla lured a complainant with a profit trading plan, induced download of a web application and used WhatsApp messaging while INR 8.2 million was transferred. Approximately INR 6.5 to 7 million was alleged to have reached the applicant's account. The High Court rejected bail but expressly left merits for trial.

## Reconstruction

### Initial contact

The prosecution alleged that the complainant was approached and lured into a profit trading plan.

### Pretext

The complainant was induced to download a web application and make transfers while the scheme was sustained through WhatsApp messages.

### Requested action

Download the trading web application and transfer investment funds in accordance with WhatsApp instructions.

### Victim action and consequence

The complainant transferred a total of INR 8.2 million according to the bail-order prosecution recital.

- Reported focal financial loss: INR 8200000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: not reported

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not reported

## Actor and attribution analysis

### SEIAI-0145-A01: Ajeet Kumar Shukla
- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Direct victim contact: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Allegedly luring the complainant into the profit trading plan, inducing the web-app download, messaging through WhatsApp and receiving a substantial portion of funds.
- Limitation: The source is a bail judgment and the underlying communications/app control are not reproduced in the public order.
- Alternative explanation: The applicant denied guilt; allegation remains for trial.

### SEIAI-0145-A02: Web-app / WhatsApp scheme co-operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `technical`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Direct victim contact: `unknown`
- Attribution basis: `documentary_record`
- Attribution strength: **unclear**
- Conduct assessed: Operating or supporting the web trading application and messaging infrastructure used in the scheme, to the extent separate from the applicant.
- Limitation: The public order does not resolve whether other persons operated the application or messaging identities.
- Alternative explanation: The applicant may have operated some or all of this infrastructure himself.


### Incident-level attribution assessment

- Attribution target: Ajeet Kumar Shukla and the web-app/WhatsApp investment operation described by the prosecution.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **moderate**
- Limitations: The conduct is recited as an allegation at bail stage. The source does not reproduce the underlying authenticated WhatsApp or application-control records.
- Alternative explanation: The applicant denied guilt; criminal responsibility remains for trial.

## Primary evidentiary gap

Authenticated messaging, app-control and transaction evidence mapping the full victim-facing session to the applicant and any co-operators.

## Legal/procedural notes

IPC 406, 420, 120B; IT Act 66C, 66D

## Coding decisions

INR 8.2 million codes the source-stated focal total transfer. The INR 6.5-7 million figure is the alleged portion reaching the applicant account, not a separate loss.
