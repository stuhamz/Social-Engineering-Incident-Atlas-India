# SEIAI-0253: SBI ATM-renewal vishing and repeated online-account loss

## Record status

- Case ID: `SEIAI-0253`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0253-01 | T1 | appellate_judgment | The Branch Manager, State Bank of India v. B. Mohan Raj, 21 December 2021 |

Source URL:
- https://www.casemine.com/judgement/in/61f6c3d9b50db99177197b9a

## Procedural posture

- Court / authority: Telangana State Consumer Disputes Redressal Commission, Hyderabad
- Case: FA.No.748/2020; CC.No.182/2019
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: The Telangana State Commission allowed SBI appeal and set aside the District Forum partial consumer award.

## Neutral case summary

A caller posing as an SBI official told 78-year-old retired police officer B. Mohan Raj that his ATM card would be blocked unless renewed and induced him to disclose card details and OTPs. Fraudulent transactions totalling INR 606,000 followed, and another INR 58,500 was later transferred through internet banking. The consumer appeal held the bank not deficient. The caller remained unidentified.

## Reconstruction

### 1. Target

Target type: `elderly_person`. Sector/context: pension / retail banking.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

On 1 September 2018, 78-year-old retired senior police officer B. Mohan Raj received a call from a person posing as a bank official.

### 4. Pretext

The caller said the ATM card was about to be blocked and had to be renewed immediately, then requested card details and OTPs.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Disclose ATM-card details and OTPs to prevent the purported card blocking and complete renewal.

### 7. Victim action

Mohan Raj disclosed card details and OTPs. Fraudulent withdrawals totalling INR 606,000 followed on 2 and 3 September, and a further INR 58,500 internet-banking transfer occurred on 2 October.

### 8. Consequence

- Reported focal financial loss: INR 664500
- Payment method: `multiple`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2018-09-01`
- incident_end_date: `2018-10-02`
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
- Other evidence: 

## Actor and attribution analysis

### SEIAI-0253-A01: Unknown SBI impersonating caller / associated fraud operator

- Identity resolution: `unknown`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Using the ATM-renewal or blocking pretext to obtain credentials and facilitate unauthorized debits.
- Limitation: The human caller was never identified and the later October internet-banking transfer may not have been executed by the same person.
- Alternative explanation: Different operators may have handled the initial vishing and later account access.


### Incident-level attribution assessment

- Attribution target: Unknown SBI-impersonating caller and associated online-account operator
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The consumer judgment reconstructs the caller interaction and losses but does not identify the fraudster or prove whether the same person executed the later October internet-banking transfer.
- Alternative explanation: The initial vishing caller and later online-banking operator may have been distinct participants.

## Primary evidentiary gap

Telecom attribution and transaction-endpoint evidence identifying the caller and later banking operator.

## Legal/procedural notes

Consumer Protection Act 1986 Section 15

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The gross disputed loss is INR 664,500. The later INR 58,500 transfer occurred after the initial fraud had been reported and may have involved a distinct access path, so actor overlap is not inferred.
