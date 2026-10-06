# SEIAI-0246: Dr Shabir Khan duplicate-SIM takeover and twenty-transfer bank fraud

## Record status

- Case ID: `SEIAI-0246`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0246-01 | T1 | appellate_judgment | Axis Bank Ltd. & Anr. v. Dr. Shabir Khan Ranjan Rawther & 2 Ors., 4 December 2025 |

Source URL:
- https://indiankanoon.org/doc/158015410/

## Procedural posture

- Court / authority: National Consumer Disputes Redressal Commission
- Case: FA/573/2017 & FA/1950/2017; CC No.47/2012
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: NCDRC upheld the finding that Vodafone issued the duplicate SIM without proper verification and resolved the service-provider liability appeals.

## Neutral case summary

Dr Shabir Khan legitimate Vodafone SIM went dead after a duplicate SIM had been issued on a replacement request using mismatched identity material. The duplicate SIM enabled OTP access while unknown persons operated his Axis Bank accounts and carried out twenty transfers totalling INR 1,114,500. NCDRC treated the telecom verification failure and fraud mechanism as established, while the human operators themselves remained unresolved.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal banking / telecom subscriber.

### 2. Reconnaissance

Reconnaissance present: `yes`. The requester used the complainant identity material and targeted the mobile number linked to two Axis Bank accounts.

### 3. Initial contact

A SIM-replacement application was submitted using the complainant identity while his original SIM was still active.

### 4. Pretext

The applicant falsely claimed the original SIM had been lost and used mismatched identity material to obtain control of the registered number.

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

Issue a replacement SIM for the complainant existing mobile number.

### 7. Victim action

Vodafone issued the duplicate SIM. Fraudsters then changed or used banking access and OTP authentication to transfer funds.

### 8. Consequence

- Reported focal financial loss: INR 1114500
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2012-03-30`
- incident_end_date: `2012-03-31`
- incident_year: `2012`

## Evidence map

- Phone / SIM evidence: `yes`
- CDR evidence: `not_reported`
- Bank evidence: `yes`
- IP / login evidence: `yes`
- Device evidence: `not_reported`
- Message / chat evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other evidence: SIM replacement form, identity documents, account statements, twenty transfer records, FIR and charge-sheet context.

## Actor and attribution analysis

### SEIAI-0246-A01: Unknown Vodafone replacement-SIM impostor

- Identity resolution: `unknown`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `no`
- Attribution basis: `sim_or_subscriber_record` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Obtaining the complainant replacement SIM by false subscriber identity.
- Limitation: The human requester was not resolved in the consumer appeals.
- Alternative explanation: May be distinct from the later banking operators.

### SEIAI-0246-A02: Unknown Axis Bank account-takeover / beneficiary network

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `sim_or_subscriber_record`
- Attribution strength: **moderate**
- Conduct assessed: Changing or using banking access, receiving OTPs and moving funds across beneficiary accounts.
- Limitation: The consumer source does not map the twenty transactions to specific human operators.
- Alternative explanation: Different account holders or cash-out actors may have had narrower roles.


### Incident-level attribution assessment

- Attribution target: Unknown duplicate-SIM requester and unknown banking operators
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The consumer proceeding strongly establishes the mechanism and service-provider failures but does not identify the specific human who presented the forged SIM request or each person operating the downstream beneficiary accounts.
- Alternative explanation: The telecom-facing impostor and the banking/cash-out actors may have been different participants.

## Primary evidentiary gap

Verified human identity for the SIM requester and transaction-by-transaction attribution to banking operators.

## Legal/procedural notes

Consumer Protection Act proceedings; FIR concerning fraudulent electronic transactions

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The source describes twenty transfers and a total loss of INR 1,114,500. Earlier individual transfer figures of INR 942,000 and INR 172,500 reconcile to that total.
