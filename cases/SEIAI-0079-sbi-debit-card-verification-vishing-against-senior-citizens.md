# SEIAI-0079: SBI debit-card verification vishing against senior citizens

## Record status

- Case ID: `SEIAI-0079`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0079-01 | T1 | appellate_judgment | State Bank of India v. Kodudhala Joji Reddy (Deceased) & Anr., 17 November 2025 |

Source URLs:

- SRC-SEIAI-0079-01: https://indiankanoon.org/doc/193138533/

## Procedural posture

- Court / authority: National Consumer Disputes Redressal Commission
- Case / FIR: Revision Petition No.1381 of 2018
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: NCDRC dismissed SBI's revision petition and left the State Commission's direction to re-credit INR 35,458 with interest and compensation intact.

## Neutral case summary

Senior-citizen pension account holders had recently received a replacement SBI debit card and PIN. A caller posing as SBI's Debit Card Section knew the secret PIN and said the new card was blocked pending verification. One account holder disclosed card details. Within minutes the other changed the PIN, but six withdrawals nonetheless reduced the account balance from INR 35,527.71 to INR 69.71. The caller was never traced. Consumer adjudication focused on the unexplained ability to withdraw funds even after the PIN change and on bank-system responsibility. The case is valuable because it documents a classic vishing interaction while preserving a major unresolved technical question about how the caller possessed fresh card/PIN information and how the withdrawals were executed.

## Reconstruction

### 1. Target

- Target type: `elderly_person`
- Sector/context: senior-citizen / pension banking
- State/UT: Telangana
- City: Secunderabad
- Incident year: 2015
- Cross-border dimension: `not_reported`

### 2. Reconnaissance

- Present: `yes`
- Detail: The caller knew the newly allotted secret PIN and referred specifically to the recently issued ATM/debit card, indicating access to non-public account/card information, though the source does not establish how it was obtained.

### 3. Initial contact

A caller contacted one of the senior-citizen joint account holders and introduced himself as an SBI Debit Card Section employee.

### 4. Pretext

The caller said the recently issued debit card was blocked pending verification, stated the secret PIN and asked for card particulars.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `no`

- Other mechanism: Possession of the new-card PIN and card-specific knowledge created strong legitimacy.

### 6. Requested action

Provide debit-card particulars to complete verification/unblocking.

### 7. Victim/target action

The card particulars were disclosed. The other account holder changed the PIN within minutes, but six withdrawals still reduced the balance from INR 35,527.71 to INR 69.71.

### 8. Consequence

- Reported financial loss: INR 35,458
- Credential compromise: `yes`
- Device compromise: `no`
- Payment method: `card`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | yes |
| CDR/telecom | not_reported |
| Bank/transaction | yes |
| IP/login | not_reported |
| Device | not_reported |
| Chats/messages | not_reported |
| Email | not_reported |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: ATM/debit-card transaction history and banking records showing withdrawals despite a changed PIN.

## Actor and attribution analysis

### SEIAI-0079-A01 — SBI Debit Card Section impersonating caller

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Conduct assessed: Calling the senior citizen, stating the fresh PIN and eliciting card particulars under a verification pretext.
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitation: No subscriber/device evidence in the reviewed source resolves the caller; possession of the new PIN remains unexplained.

### SEIAI-0079-A02 — Unknown withdrawal operator(s)

- Identity resolution: `unknown`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Executing or benefiting from the six withdrawals after the victim changed the PIN.
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitation: Transaction evidence establishes loss but not human identity or whether the caller and withdrawal operator were the same person.


### Incident-level attribution assessment

- Attribution target: Unresolved caller and the unknown person(s) who executed the withdrawals.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitations: The fraudulent caller was not traced and the consumer record does not identify the human operator who made the withdrawals or explain how the caller obtained the newly issued PIN.
- Alternative explanation: The dispute focused on bank liability and security-system gaps; it did not resolve criminal authorship.

## Primary evidentiary gap

Telecom/subscriber records and ATM/location/device evidence capable of linking the call and withdrawals to a specific person.

## Legal/procedural notes

Consumer Protection Act, 1986

## Coding decisions

Financial loss uses the INR 35,458 re-credit amount fixed by the State Commission/NCDRC. The record is adjudicatory on consumer liability, not criminal attribution.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
