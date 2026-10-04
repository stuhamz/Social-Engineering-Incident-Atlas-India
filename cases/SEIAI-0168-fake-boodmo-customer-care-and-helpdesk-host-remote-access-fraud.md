# SEIAI-0168: Fake BOODMO customer care and HelpDesk Host remote-access fraud

## Record status

- Case ID: `SEIAI-0168`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0168-01 | T1 | bail_order | Mohammad Mukhtar Ansari v. State of Chhattisgarh, 20 July 2026 |

Source URL: https://indiankanoon.org/doc/58274522/

## Procedural posture

- Court / authority: High Court of Chhattisgarh
- Case / FIR: MCrC No.4166/2026; Crime No.04/2026, Cyber Cell Mahasamund
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail allowed on 20 July 2026 after completion of investigation and filing of the charge sheet.

## Neutral case summary

A Chhattisgarh victim who had difficulty with an online BOODMO purchase searched Google for customer support, reached a fraudulent number and was persuaded to install HelpDesk Host for a supposed refund. After the remote-support interaction, INR 249,988 was withdrawn. The record contains unusually rich telecom, IP, KYC and bank evidence, while still requiring separation between the person who made the support call and downstream infrastructure actors.

## Reconstruction

### 1. Target

The focal target is coded as `individual` in the sector `online auto-parts purchase / personal banking`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

After paying for four-wheel rims on the BOODMO website and not seeing the order reflected, the victim searched Google for customer care and contacted a fraudulent number.

### 4. Pretext

A fake BOODMO executive offered to process a refund and directed the victim to install the HelpDesk Host application and follow remote-support instructions.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Install HelpDesk Host and follow the purported refund-support steps.

### 7. Victim action

The victim installed the app and followed the instructions; INR 249,988 was withdrawn from the account.

### 8. Consequence

- Reported focal financial loss: INR 249988
- Payment method: `multiple`
- Credential compromise: `yes`
- Device compromise: `yes`
- Remote-access tool: HelpDesk Host

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

Other evidence: Subscriber, Aadhaar KYC, CDR, IP, linked mobile/email and bank-transaction records.

## Actor and attribution analysis

### SEIAI-0168-A01: Fake BOODMO customer-care operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0168-A02: Mohammad Mukhtar Ansari
- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Direct victim contact: `unknown`
- Attribution basis: `cdr_or_telecom_record` / `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Investigation-linked telecom, IP and financial role in the fake-customer-care network.
- Limitation: The source does not conclusively state that he personally made the BOODMO support call.
- Alternative explanation: He may have supplied infrastructure rather than conducting the victim-facing refund conversation.

### Incident-level attribution assessment

- Attribution target: Fake BOODMO support operator(s) and investigation-linked downstream actor(s).
- Primary basis: `cdr_or_telecom_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The technical and financial records support network linkage but do not necessarily establish that every accused personally conducted the refund call.
- Alternative explanation: Some accused may have supplied technical or financial infrastructure without being the original support impersonator.

## Primary evidentiary gap

Forensic linkage between the specific HelpDesk Host session, victim-facing phone number and the human operator controlling the remote-access endpoint.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

This case is coded with device compromise because the source describes the remote-access application as enabling control during the fraudulent support interaction.
