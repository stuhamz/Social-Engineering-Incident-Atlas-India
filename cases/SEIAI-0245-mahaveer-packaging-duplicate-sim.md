# SEIAI-0245: Mahaveer Packaging forged duplicate-SIM and net-banking fraud

## Record status

- Case ID: `SEIAI-0245`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0245-01 | T1 | appellate_judgment | Bank of Baroda v. Mahaveer Packaging Indore & Ors., 22 July 2026 |

Source URL:
- https://indiankanoon.org/doc/187291742/

## Procedural posture

- Court / authority: Telecom Disputes Settlement & Appellate Tribunal, New Delhi
- Case: Cyber Appeal No.5/2020
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: TDSAT dismissed the bank appeal and left the adjudicating officer compensation findings substantially intact.

## Neutral case summary

Mahaveer Packaging legitimate SIM stopped working after an unauthorized person obtained a duplicate SIM from Ujjain using forged identity material. During the takeover, two IMPS transfers removed INR 292,000 from the firm Bank of Baroda account. TDSAT treated the duplicate-SIM issue and bank transaction-control failures as established for civil liability, but the human fraudster remained unresolved.

## Reconstruction

### 1. Target

Target type: `business`. Sector/context: packaging / commercial banking.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

An unauthorized person obtained a duplicate BSNL SIM for the business registered mobile number using a forged driving licence and forged signature.

### 4. Pretext

The requester falsely represented entitlement to replace the legitimate subscriber SIM, enabling receipt of banking authentication messages.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Issue and activate a duplicate SIM for the business registered mobile number.

### 7. Victim action

The telecom provider issued the duplicate SIM. Fraudsters then used net banking and the diverted mobile channel to execute two IMPS transfers.

### 8. Consequence

- Reported focal financial loss: INR 292000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2018-08-09`
- incident_end_date: `2018-08-10`
- incident_year: `2018`

## Evidence map

- Phone / SIM evidence: `yes`
- CDR evidence: `not_reported`
- Bank evidence: `yes`
- IP / login evidence: `not_reported`
- Device evidence: `not_reported`
- Message / chat evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other evidence: Forged driving licence and signature, duplicate-SIM record, bank transaction records and FIR material.

## Actor and attribution analysis

### SEIAI-0245-A01: Unknown forged duplicate-SIM requester

- Identity resolution: `unknown`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `no`
- Attribution basis: `sim_or_subscriber_record` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Impersonating the subscriber or authorized requester to obtain control of the registered mobile number.
- Limitation: The adjudicatory record does not identify the human requester.
- Alternative explanation: The requester may have been distinct from the online-banking operator.

### SEIAI-0245-A02: Unknown net-banking / IMPS operator

- Identity resolution: `unknown`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `sim_or_subscriber_record`
- Attribution strength: **moderate**
- Conduct assessed: Using compromised online-banking access and diverted mobile authentication to transfer funds.
- Limitation: The human banking-session operator and beneficiary controllers were not resolved in the TDSAT source.
- Alternative explanation: Could be a different actor from the SIM requester.


### Incident-level attribution assessment

- Attribution target: Unknown duplicate-SIM requester and downstream banking operator
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The TDSAT proceeding adjudicates bank and telecom liability and does not resolve the criminal identity of the fraudster who requested the SIM or executed the transactions.
- Alternative explanation: The SIM requester and online-banking operator may have been different participants.

## Primary evidentiary gap

Human identity evidence connecting the forged SIM request to the online banking session and beneficiary accounts.

## Legal/procedural notes

Information Technology Act Sections 43, 43A, 57, 66C and 66D; IPC provisions in FIR

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: This is a service-provider/adjudicatory liability judgment, not a criminal finding of guilt against the unknown fraudster.
