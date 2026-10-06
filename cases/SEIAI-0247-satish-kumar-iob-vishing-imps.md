# SEIAI-0247: Indian Overseas Bank ATM-verification vishing and IMPS fraud

## Record status

- Case ID: `SEIAI-0247`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0247-01 | T1 | appellate_judgment | Indian Overseas Bank v. Satish Kumar, 20 September 2024 |

Source URL:
- https://indiankanoon.org/doc/13384062/

## Procedural posture

- Court / authority: State Consumer Disputes Redressal Commission, Uttarakhand
- Case: First Appeal No.71/2021
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: The State Commission allowed Indian Overseas Bank appeal and dismissed the consumer complaint, finding no bank deficiency for the IMPS transactions after OTP disclosure.

## Neutral case summary

A caller claiming to be from Indian Overseas Bank told Satish Kumar to visit the branch for ATM-card verification and asked for an OTP. Kumar disclosed the OTP, then quickly had the ATM card blocked, but multiple IMPS transactions totalling INR 498,863 were made from the account. The consumer appeal held the bank not deficient. The manipulation sequence is clear, while the offender identity remains unresolved.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: retail banking.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

Satish Kumar received a call from a person claiming to be from Indian Overseas Bank and was told to visit the branch the next day for ATM-card verification.

### 4. Pretext

The caller presented the interaction as a bank verification exercise, requested identity documents for the next-day visit and demanded an OTP.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Provide the OTP to the purported bank representative and follow the claimed ATM-verification process.

### 7. Victim action

Satish Kumar provided the OTP, then realized the risk and had his ATM card blocked. IMPS transactions later removed funds from the underlying account.

### 8. Consequence

- Reported focal financial loss: INR 498863
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2019-09-19`
- incident_end_date: `2019-09-20`
- incident_year: `2019`

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
- Other evidence: Bank statements, call details recited in the consumer record and complaint material.

## Actor and attribution analysis

### SEIAI-0247-A01: Unknown Indian Overseas Bank verification caller

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Attribution basis: `witness_or_statement` / `sim_or_subscriber_record`
- Attribution strength: **limited**
- Conduct assessed: Impersonating the bank and eliciting the OTP under an ATM-verification pretext.
- Limitation: The human caller was not identified in the consumer record.
- Alternative explanation: The caller could have been distinct from the IMPS operator.

### SEIAI-0247-A02: Unknown IMPS transaction operator

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Executing or receiving the unauthorized IMPS transactions.
- Limitation: Beneficiary account controllers and the transaction initiator were not identified in the appellate judgment.
- Alternative explanation: Could be separate from the caller.


### Incident-level attribution assessment

- Attribution target: Unknown bank-impersonating caller and unknown IMPS operator
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The appellate consumer record reconstructs the caller pretext and transactions but does not identify the caller or the humans controlling the IMPS destinations.
- Alternative explanation: The caller and downstream transfer operators may have been separate people.

## Primary evidentiary gap

Subscriber/CDR evidence resolving the caller and beneficiary-account evidence resolving the IMPS operators.

## Legal/procedural notes

Consumer Protection Act 2019 Section 41

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The District Commission had awarded INR 338,860, apparently reflecting unrecovered loss, while the source states gross disputed transactions of INR 498,863. The Atlas records the gross amount.
