# SEIAI-0149: TRAI and Colaba Police digital-arrest fraud against retired Army couple

## Record status

- Case ID: `SEIAI-0149`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0149-01 | T1 | bail_order | Mohammad Altamash Qadeer v. State of Punjab, 18 September 2026 |

Source URL: https://indiankanoon.org/doc/115496031/

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / FIR: CRM-M-29977-2026; FIR No.48 dated 03.11.2025
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail dismissed on 18 September 2026; investigation had concluded and trial had commenced.

## Neutral case summary

A retired Army officer and his wife were told that his phone number was tied to a money-laundering complaint and were kept under digital arrest using TRAI, police, revenue and Supreme Court authority cues. They transferred INR 8.980047 million. Investigation traced funds through layered beneficiary accounts and alleged that petitioner Mohammad Altamash Qadeer controlled part of the financial routing, but did not identify him as the original caller.

## Reconstruction

### Initial contact

Retired Army personnel Sunil Dutt received a call from a woman claiming to be from TRAI and saying his phone number was involved in a money-laundering complaint at Colaba Police Station.

### Pretext

The callers used police/regulatory authority and forged communications purportedly from the Ministry of Finance, Department of Revenue and Supreme Court to keep the complainant and his wife under “digital arrest”.

### Requested action

Remain compliant with the purported investigation and transfer retirement savings through accounts specified by the operators.

### Victim action and consequence

The complainant and his wife transferred a total of INR 8,980,047 before realising they had been cheated.

- Reported focal financial loss: INR 8980047
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
- Other: not reported

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `yes`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: CAF records, tower locations, three-layer beneficiary tracing, seized mobile phones, debit cards and cheque book.

## Actor and attribution analysis

### SEIAI-0149-A01: TRAI / police digital-arrest operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Using TRAI, Colaba Police and forged government/court communications to place the couple under digital arrest and induce transfers.
- Limitation: The human operators of the victim-facing personas are not identified in the reviewed order.
- Alternative explanation: Several personas may have been controlled by multiple operators.

### SEIAI-0149-A02: Mohammad Altamash Qadeer
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Allegedly exercising operational control over a beneficiary account and routing part of the fraud proceeds using SIMs/mobile phones of different persons.
- Limitation: The alleged account-control role is supported by investigation/co-accused material but does not establish victim-facing authorship.
- Alternative explanation: The petitioner disputed receiving or benefiting from the focal funds.

### SEIAI-0149-A03: Mohd. Tauseef / Fashion Traders account actor
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Controlling a Fashion Traders account that directly received INR 3.8 million from the cheated amount before onward transfer, according to the investigation.
- Limitation: Receipt/control evidence does not show that Tauseef delivered the TRAI/police deception.
- Alternative explanation: The role may be limited to beneficiary-account facilitation.


### Incident-level attribution assessment

- Attribution target: Unresolved TRAI/police digital-arrest operators and downstream beneficiary-account controllers including Mohd. Tauseef and petitioner Mohammad Altamash Qadeer.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Limitations: The petitioner was linked to operational control of a beneficiary account through investigation and co-accused disclosure, not to the original TRAI/police call.
- Alternative explanation: The petitioner denied benefiting from the focal transactions and challenged reliance on co-accused disclosure statements.

## Primary evidentiary gap

Authenticated victim-call and platform records connecting the TRAI/police personas to identified humans and the downstream financial network.

## Legal/procedural notes

BNS 316(2), 318(4), 319(2), 336(3), 338, 340(2), 351(2), 61(2); IT Act 66D

## Coding decisions

The court described INR 3.8 million reaching a Fashion Traders beneficiary account. That is a portion of the focal loss, not an additional loss figure.
