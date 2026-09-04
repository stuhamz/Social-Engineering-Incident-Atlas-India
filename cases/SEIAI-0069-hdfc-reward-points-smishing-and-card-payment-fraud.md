# SEIAI-0069: HDFC reward-points smishing and card-payment fraud

## Record status

- Case ID: `SEIAI-0069`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0069-01 | T1 | appellate_judgment | Aditya Gupta v. HDFC Bank Ltd., 17 June 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: State Consumer Disputes Redressal Commission, Chandigarh
- Case / proceeding: First Appeal No.SC/4/FA/239/2025
- Public status coded: `appeal`
- Disposition: State consumer appellate decision concerning liability for the disputed card transactions.

## Neutral case summary

A Chandigarh consumer appeal examined a reward-points smishing/phishing incident in which two fraudulent credit-card payments totalling INR 248,000 succeeded after the complainant clicked a reward-points message. The parties disputed what OTP use implied about responsibility.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: retail banking / credit card
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The complainant received an SMS on 28 January 2023 about redeeming HDFC credit-card reward points.

### Pretext

He clicked the reward-points message/link believing it genuine; OTPs were generated and two fraudulent card transactions were completed after a first attempted transaction failed.

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Open the reward-redemption flow and complete the purported redemption process.

### Victim action / consequence

The complainant clicked the message/link and INR 248,000 in two card transactions was charged; he denied sharing the OTPs.

- Financial loss coded: `248000`
- Payment method: `card`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `not_applicable`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Reward-points SMS/link; OTP messages; card transaction and merchant records.

## Attribution analysis

### Attribution target

Unknown reward-points message/link operator

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The consumer proceeding addresses bank/customer liability and OTP authentication, not the human identity behind the phishing infrastructure.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Reward-points SMS/link operator**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Sending/operating the reward-points phishing message or link that led to fraudulent card transactions. Limitation: The consumer appeal does not identify the external sender/link controller.
- **Merchant/payment recipient(s)**: `financial` / `bank_account_controller`; strength `limited`. Conduct assessed: Receiving or facilitating the two successful fraudulent card payments totalling INR 248,000. Limitation: Merchant/recipient records establish transaction destinations but not necessarily participation in the phishing deception.

### v0.2.0 functional actor coding

- **Reward-points SMS/link operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Merchant/payment recipient(s)**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Original SMS/link/domain artefacts, merchant/payment-gateway records, device/browser telemetry and IP logs identifying the external operator.

## Coding decisions / research notes

v0.1.5 corrective expansion; source-to-code review completed 2026-09-04. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
