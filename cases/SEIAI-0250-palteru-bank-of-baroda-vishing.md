# SEIAI-0250: Bank of Baroda online-verification vishing and tracker-ID fraud

## Record status

- Case ID: `SEIAI-0250`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0250-01 | T1 | appellate_judgment | Palteru Venkata Malleswara Rao v. Bank of Baroda, 10 June 2013 |

Source URL:
- https://indiankanoon.org/doc/77536924/

## Procedural posture

- Court / authority: A.P. State Consumer Disputes Redressal Commission, Circuit Bench at Visakhapatnam
- Case: FA 854/2011; CC 81/2011
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: The State Commission dismissed the consumer appeal and confirmed the District Forum dismissal of the bank-liability complaint.

## Neutral case summary

A Bank of Baroda customer received an SMS containing accurate account information followed by calls from a person claiming to conduct an online-banking verification. The caller requested a mobile tracker ID, and INR 100,000 was then withdrawn in two transactions. The consumer appeal held the bank not liable, while the human fraudster remained unidentified.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: NRI / retail banking.

### 2. Reconnaissance

Reconnaissance present: `yes`. The fraudulent communication contained the customer ID, account number, balance and recent transaction information before the verification call.

### 3. Initial contact

The complainant wife received a bank-like SMS containing accurate account information and then calls from a person claiming to be a bank official.

### 4. Pretext

The caller described the contact as part of an online-banking verification exercise and asked for a mobile tracker ID for security purposes.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Disclose the mobile tracker ID during the purported bank verification.

### 7. Victim action

The requested security-related information was disclosed, and INR 100,000 was then withdrawn in two transactions.

### 8. Consequence

- Reported focal financial loss: INR 100000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2010-11-22`
- incident_end_date: `2010-11-23`
- incident_year: `2010`

## Evidence map

- Phone / SIM evidence: `yes`
- CDR evidence: `not_reported`
- Bank evidence: `yes`
- IP / login evidence: `not_reported`
- Device evidence: `not_reported`
- Message / chat evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other evidence: Bank SMS, account statements, complaint and FIR material.

## Actor and attribution analysis

### SEIAI-0250-A01: Unknown Bank of Baroda verification caller

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Attribution basis: `witness_or_statement` / `message_or_email_content`
- Attribution strength: **limited**
- Conduct assessed: Impersonating bank personnel and eliciting security information through the online-verification pretext.
- Limitation: No human caller identity is resolved.
- Alternative explanation: The caller may have been distinct from the banking-session operator.

### SEIAI-0250-A02: Unknown online-banking operator

- Identity resolution: `unknown`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Using compromised account or security information to create or execute third-party transfers.
- Limitation: The human transaction operator was not identified in the consumer appeal.
- Alternative explanation: Could be separate from the caller.


### Incident-level attribution assessment

- Attribution target: Unknown Bank of Baroda impersonating caller and unknown online-banking operator
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The consumer appeal establishes the social-engineering sequence and loss but does not resolve the fraudster human identity. The criminal investigation was still pending.
- Alternative explanation: The caller and banking-session operator may have been different people.

## Primary evidentiary gap

Telecom and banking-session evidence identifying the caller and unauthorized transaction operator.

## Legal/procedural notes

Consumer Protection Act proceedings; FIR No.685/2010

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The source identifies the victim as an NRI account holder and therefore cross_border_dimension is coded yes.
