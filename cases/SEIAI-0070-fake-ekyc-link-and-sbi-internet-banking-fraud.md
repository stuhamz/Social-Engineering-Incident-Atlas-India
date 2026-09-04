# SEIAI-0070: Fake eKYC link and SBI internet-banking fraud

## Record status

- Case ID: `SEIAI-0070`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0070-01 | T1 | appellate_judgment | Vikas Mehra v. State Bank of India, 26 February 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: State Consumer Disputes Redressal Commission, U.T. Chandigarh
- Case / proceeding: Appeal No.292/2025
- Public status coded: `appeal`
- Disposition: State consumer appeal dismissed; bank liability not established.

## Neutral case summary

A Chandigarh consumer appeal examined an INR 49,997 internet-banking transaction after the complainant clicked a purported eKYC link. The commission characterized the allegations as involving phishing/impersonation but found no proven bank-system failure.

## Reconstruction

### Target

- Target type: `business`
- Sector/context: business banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

While visiting what the complainant described as the official SBI website, an eKYC-verification link appeared and was believed to be genuine.

### Pretext

The link presented itself as a bank eKYC verification process. After it was clicked, an IMPS transaction was completed using internet banking and OTP authentication.

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

Complete the purported eKYC verification flow.

### Victim action / consequence

The complainant clicked the link and INR 49,997 was withdrawn from a business current account.

- Financial loss coded: `49997`
- Payment method: `bank_transfer`

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
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Purported eKYC link; OTP delivery report; IMPS/internet-banking transaction records.

## Attribution analysis

### Attribution target

Unknown eKYC/phishing-link operator

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The source does not establish where the link originated or who controlled it; the commission specifically noted lack of material connecting the link to the bank.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Purported eKYC phishing-link operator**: `victim_facing` / `technical_infrastructure_operator`; strength `unclear`. Conduct assessed: Presenting a bank-branded/eKYC link believed genuine and inducing the complainant to enter the verification flow. Limitation: The commission expressly noted no material showing where the link originated or connecting it to the bank.
- **IMPS recipient / banking-session operator**: `financial` / `bank_account_controller`; strength `unclear`. Conduct assessed: Executing or benefiting from the INR 49,997 IMPS transfer following the phishing event. Limitation: The public decision does not identify the beneficiary operator or banking-session controller.

### v0.2.0 functional actor coding

- **Purported eKYC phishing-link operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **IMPS recipient / banking-session operator**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Original URL/domain, browser history, DNS/hosting records and bank/IP session logs tying the phishing page to an operator.

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
