# SEIAI-0252: State Bank of Patiala ATM-card vishing fraud

## Record status

- Case ID: `SEIAI-0252`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0252-01 | T1 | appellate_judgment | State Bank of Patiala v. Wisakha Singh, 28 January 2022 |

Source URL:
- https://indiankanoon.org/doc/177682044/

## Procedural posture

- Court / authority: State Consumer Disputes Redressal Commission, Punjab
- Case: First Appeal No.557/2019
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: The State Commission allowed the bank appeal and set aside the District Commission refund award.

## Neutral case summary

A caller posing as a State Bank of Patiala official induced Wisakha Singh to disclose ATM-card information. Two online transactions of INR 19,990 each followed. The consumer appellate decision treated customer disclosure as the relevant cause and relieved the bank of liability. The human fraudster was not identified.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: retail banking.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

Wisakha Singh received a call from a person he believed was from State Bank of Patiala and was asked for ATM-card information.

### 4. Pretext

The caller used bank authority to obtain payment-card details and, according to the appellate reasoning, may also have obtained CVV or OTP information required for the online payments.

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

Disclose ATM-card details to the purported bank official.

### 7. Victim action

Wisakha Singh disclosed his ATM-card number; two unauthorized online debits of INR 19,990 each followed.

### 8. Consequence

- Reported focal financial loss: INR 39980
- Payment method: `card`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2017-01-11`
- incident_end_date: `2017-01-11`
- incident_year: `2017`

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

### SEIAI-0252-A01: Unknown State Bank of Patiala impersonating caller

- Identity resolution: `unknown`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Impersonating the bank, eliciting card information and facilitating the two online debits.
- Limitation: No subscriber/CDR or recipient-account evidence identifies the human caller or proves caller-recipient identity overlap.
- Alternative explanation: The transaction recipient may have been a separate actor.


### Incident-level attribution assessment

- Attribution target: Unknown State Bank of Patiala impersonating caller
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The consumer record establishes the call and resulting debits but does not identify the caller or reproduce telecom/provider evidence.
- Alternative explanation: The caller and transaction recipient may have been separate actors.

## Primary evidentiary gap

Subscriber/CDR and merchant-recipient records linking the caller to the two online transactions.

## Legal/procedural notes

Consumer Protection Act 1986 Section 15; RBI electronic-banking liability circular

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The appellate judgment says the complainant admitted disclosure of the card number and did not specifically deny disclosure of CVV or OTP, but the Atlas does not code unproven disclosure of CVV or OTP as a separate fact.
