# SEIAI-0075: Bank-branch vishing and Aadhaar-linking ATM-card fraud

## Record status

- Case ID: `SEIAI-0075`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0075-01 | T1 | appellate_judgment | State Bank of India v. Prabhu Lal, 28 April 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Madhya Pradesh State Consumer Disputes Redressal Commission
- Case / proceeding: First Appeal No.1986/2017
- Public status coded: `appeal`
- Disposition: Madhya Pradesh State Consumer Commission allowed the bank's appeal and set aside the refund direction.

## Neutral case summary

A Madhya Pradesh consumer appeal documents a classic vishing case in which a caller impersonating the bank's main branch used ATM blocking/Aadhaar-linking as a pretext to obtain card details, followed by eight online purchases. The commission ultimately attributed contributory negligence to the complainant in the banking-liability dispute.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: retail banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

An unknown caller claimed to be calling from the bank's main branch and said the victim's ATM card was being blocked and linked with Aadhaar.

### Pretext

The caller requested the nineteen-digit number on the back of the card under the bank-verification/Aadhaar-linking pretext.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Disclose ATM/card details to prevent blocking and complete the purported Aadhaar linkage.

### Victim action / consequence

The complainant disclosed the requested card number; eight online purchases totalling INR 42,760 followed, with INR 4,000 later credited back.

- Financial loss coded: `42760`
- Payment method: `card`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Caller pretext; card transaction SMS; bank and police complaint records.

## Attribution analysis

### Attribution target

Unknown bank-impersonating caller

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The consumer appeal reconstructs the call and transactions but does not identify the caller or establish who entered any OTP/PIN/CVV required for the purchases.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Bank-main-branch impersonating caller**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Calling the complainant, invoking ATM blocking/Aadhaar linking and eliciting card details. Limitation: The consumer appeal does not identify the caller or subscriber.
- **Online-purchase / payment operator(s)**: `financial` / `bank_account_controller`; strength `limited`. Conduct assessed: Using the compromised card information to conduct eight online purchases totalling INR 42,760. Limitation: Transaction records show use of the card credentials but not the identity of the person who conducted the purchases.

### v0.2.0 functional actor coding

- **Bank-main-branch impersonating caller**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Online-purchase / payment operator(s)**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Caller CDR/subscriber records, merchant/payment-gateway logs, device/IP evidence and transaction-authentication records.

## Coding decisions / research notes

v0.2.0 full re-audit: attack conduct occurred on 27 May 2016; 28 May was discovery, so end date corrected to 27 May. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
