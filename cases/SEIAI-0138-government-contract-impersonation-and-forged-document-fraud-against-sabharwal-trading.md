# SEIAI-0138: Government-contract impersonation and forged-document fraud against Sabharwal Trading

## Record status

- Case ID: `SEIAI-0138`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0138-01 | T1 | bail_order | Harish Bansal v. State of Assam, 20 September 2024 |

Source URL: https://indiankanoon.org/doc/62052300/

## Procedural posture

- Court / authority: Gauhati High Court
- Case / FIR: Bail Appln. 2424/2024; CID P.S. Case No.16/2023; Sessions Case No.93/2024
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail rejected on 20 September 2024; charge sheet had been filed and trial commenced.

## Neutral case summary

Sabharwal Trading alleged that a group induced the company to rely on a purported government contract through public-servant impersonation, counterfeit seals and forged government documents. The Gauhati High Court bail record notes WhatsApp material concerning petitioner Harish Bansal but leaves the victim-facing authorship and individual role boundaries unresolved.

## Reconstruction

### Initial contact

The director of Sabharwal Trading Pvt. Ltd. reported that a group induced him and his company to treat a purported government contract as authentic.

### Pretext

The alleged scheme used public-servant impersonation, counterfeit government seals and forged documents to create the appearance of a genuine government contract.

### Requested action

Proceed with the purported contract, deliveries and payments on the belief that the government transaction was genuine.

### Victim action and consequence

The company acted on the purported contract and suffered financial loss; the reviewed source does not isolate a reliable focal loss amount.

- Reported focal financial loss: not reliably isolated in the reviewed source
- Payment method: `unknown`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Official-looking documents, seals and public-servant personas created institutional legitimacy.

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `not_reported`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Forged government documents, counterfeit seals, FIR and charge-sheet material.

## Actor and attribution analysis

### SEIAI-0138-A01: Public-servant impersonation operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Impersonating public servants and using purported government authority, seals and documents to validate the contract pretext.
- Limitation: The cluster conduct is described by the FIR/charge-sheet recital, but specific personas are not mapped to resolved humans.
- Alternative explanation: Multiple accused may have divided impersonation, document and financial functions.

### SEIAI-0138-A02: Harish Bansal
- Identity resolution: `identified`
- Role layer: `organisational`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Direct victim contact: `unknown`
- Attribution basis: `message_or_email_content`
- Attribution strength: **limited**
- Conduct assessed: Allegedly participating in communications concerning delivery status and payments within the purported contracting scheme.
- Limitation: The source does not establish that the petitioner operated a public-servant persona or controlled the focal financial endpoint.
- Alternative explanation: The messages may support a narrower logistical role than authorship of the deception.


### Incident-level attribution assessment

- Attribution target: Public-servant impersonation cluster and petitioner Harish Bansal's alleged supporting role.
- Primary basis: `message_or_email_content`
- Secondary basis: `documentary_record`
- Attribution strength: **limited**
- Limitations: The bail order describes the petitioner's role mainly through WhatsApp enquiries about delivery and payments and does not establish that he personally impersonated a public servant.
- Alternative explanation: The petitioner disputed involvement and characterised the matter as contractual.

## Primary evidentiary gap

Authenticated communications and device evidence tying specific accused persons to the public-servant personas and forged contracting material.

## Legal/procedural notes

IPC conspiracy, cheating and forgery provisions including 120B, 419, 420, 467, 468, 471; State Emblem of India Act provisions

## Coding decisions

The prosecution referred to more than INR 60 crore allegedly siphoned from the complainant and associates. That is an aggregate/network figure, not a clean focal-incident loss, so financial_loss_inr is intentionally left blank.
