# SEIAI-0146: FedEx parcel and Mumbai Cyber Police digital-arrest fraud against retired Brigadier

## Record status

- Case ID: `SEIAI-0146`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0146-01 | T1 | bail_order | Kulveer v. State of Himachal Pradesh, 6 June 2025 |

Source URL: https://indiankanoon.org/doc/192210366/

## Procedural posture

- Court / authority: Himachal Pradesh High Court
- Case / FIR: CrMP(M) 1215/2025; FIR No.36/2024, Cyber Crime P.S. Central Range Mandi
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail dismissed on 6 June 2025; charge sheet filed, charges framed and trial substantially underway.

## Neutral case summary

A retired Brigadier was told that a FedEx parcel booked with his identity contained contraband, then connected to purported Mumbai Cyber Police and other official personas. Under threats of money-laundering liability and overnight monitoring, he transferred INR 2 million. The entire focal amount entered an account of Kulveer's company, and telecom/IP material linked numbers to him, while the original caller layer remained unresolved.

## Reconstruction

### Initial contact

A retired Brigadier received an IVR/WhatsApp-linked call claiming an undelivered FedEx parcel had been booked using his and his family's details.

### Pretext

The parcel was said to contain passports, credit cards and MDMA. The victim was transferred to purported Mumbai Cyber Police and shown CBI/RBI-style communications alleging money laundering and a PMLA investigation.

### Requested action

Cooperate with the purported investigation, remain under monitoring and transfer funds to the designated “safe”/RBI-directed account.

### Victim action and consequence

The complainant remained under monitoring and transferred INR 2,000,000 to the Veer Sona (OPC) Private Limited ICICI account.

- Reported focal financial loss: INR 2000000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `yes`
- Repeated contact: `yes`
- Other: Layered courier, police, CBI and RBI legitimacy plus an overnight monitoring/digital-arrest environment.

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `yes`
- Bank / transaction: `yes`
- IP / login: `yes`
- Device: `not_reported`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Purported CBI and RBI letters; NCCRP transaction records; account statements; CAF/CDR and IP-log material.

## Actor and attribution analysis

### SEIAI-0146-A01: FedEx / Mumbai Cyber Police digital-arrest operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the courier contraband, police investigation, money-laundering and monitoring pretexts and instructing the focal transfer.
- Limitation: The public bail order does not identify the humans behind the victim-facing personas.
- Alternative explanation: Multiple personas may have been controlled by one or several operators.

### SEIAI-0146-A02: Kulveer / Veer Sona beneficiary-account actor
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Opening/controlling the Veer Sona account that received the entire INR 2 million focal transfer and routing funds onward; linked telecom numbers were registered to him.
- Limitation: Direct financial and telecom linkage does not establish that Kulveer made the original FedEx/police calls.
- Alternative explanation: The applicant may have been a downstream financial/technical actor.


### Incident-level attribution assessment

- Attribution target: Unknown victim-facing digital-arrest operators and Kulveer's beneficiary-account/telecom role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `ip_or_login_record`
- Attribution strength: **moderate**
- Limitations: The applicant's account directly received the focal INR 2 million and telecom/IP material linked numbers to him, but the public order does not prove he personally delivered the FedEx/police impersonation.
- Alternative explanation: The applicant denied the offence; downstream account control is distinct from victim-facing authorship.

## Primary evidentiary gap

Authenticated victim-call/platform records tying the FedEx/police personas to the applicant or another identified operator.

## Legal/procedural notes

IPC 420; IT Act 66D

## Coding decisions

The applicant account reportedly received INR 24.5 million in total during the relevant period. Atlas codes only the complainant's INR 2 million focal loss, not the wider account total.
