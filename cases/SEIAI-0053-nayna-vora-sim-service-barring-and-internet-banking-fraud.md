# SEIAI-0053: Nayna Vora SIM-service barring and internet-banking fraud

## Record status

- Case ID: `SEIAI-0053`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0053-01 | T1 | final_judgment | Nayna Bipin Vora & Anr. v. Bank of Baroda & Ors., 20 April 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Bombay High Court
- Case / proceeding: WP No.3185/2022
- Public status coded: `judgment`
- Disposition: High Court final judgment concerning liability for the unauthorized transactions and telecom/banking control failures.

## Neutral case summary

The Bombay High Court examined unauthorized internet-banking transfers totalling INR 1,879,000 during a period in which the petitioner's mobile service had been fraudulently barred. Cyber-cell, CDR/SDR/CAF and SMS activity records were discussed, including the absence of delivered OTP/debit messages during the relevant period.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: retail banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

Someone contacted the telecom service provider and requested that the registered mobile service be barred on the false ground that the handset was lost.

### Pretext

While the legitimate subscriber's mobile was out of service, beneficiaries were added and internet-banking transfers were executed; debit/OTP messages were not delivered to her.

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `not_reported`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Disable the legitimate subscriber's mobile service and exploit the resulting authentication gap to transfer funds.

### Victim action / consequence

The account holder did not authorize the transactions and discovered that INR 1,879,000 had been transferred from her savings account.

- Financial loss coded: `1879000`
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM evidence: `yes`
- CDR/telecom evidence: `yes`
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
- Other reported evidence: CDR/SDR/CAF; SMS activity reports; beneficiary and internet-banking transaction records.

## Attribution analysis

### Attribution target

Unknown caller who caused service barring and online-banking operator(s)

### Basis

- Primary: `cdr_or_telecom_record`
- Secondary: `bank_account_or_money_flow`

### Incident-level attribution strength

**moderate**

### Limitations

The source strongly documents service barring and transaction timing but does not conclusively identify the person who made the fraudulent telecom request or operated the bank session.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Duplicate-SIM / telecom-impersonation operator(s)**: `technical` / `social_engineering_operator`; strength `limited`. Conduct assessed: Obtaining or causing issuance/blocking/replacement of the registered SIM through false identity or false service representation and using the resulting number control. Limitation: The adjudicatory record strongly documents the SIM-control mechanism but does not fully identify the human requester/operator.
- **Online-banking / beneficiary-network operator(s)**: `financial` / `bank_account_controller`; strength `moderate`. Conduct assessed: Using diverted authentication or compromised banking access to add beneficiaries, transfer funds and/or withdraw the proceeds. Limitation: Financial activity is documented, but the adjudicatory record does not necessarily establish that the beneficiary/cash-out actors also performed the SIM impersonation.

### v0.2.0 functional actor coding

- **Duplicate-SIM / telecom-impersonation operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Online-banking / beneficiary-network operator(s)**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Authenticated call/request records and device/login artefacts tying the service-barring request and bank session to the same operator.

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
