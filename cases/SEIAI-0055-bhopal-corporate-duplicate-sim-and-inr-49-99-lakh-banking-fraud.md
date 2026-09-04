# SEIAI-0055: Bhopal corporate duplicate-SIM and INR 49.99 lakh banking fraud

## Record status

- Case ID: `SEIAI-0055`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0055-01 | T1 | appellate_judgment | Bharti Airtel Limited v. R.S. Chauhan & Ors., 19 March 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Telecom Disputes Settlement & Appellate Tribunal
- Case / proceeding: not normalized
- Public status coded: `appeal`
- Disposition: TDSAT appellate judgment upheld/considered telecom liability arising from duplicate-SIM issuance.

## Neutral case summary

TDSAT reviewed a 2013 corporate SIM-swap fraud in Bhopal in which INR 4.999 million was transferred after a duplicate SIM was issued on forged documentation. The tribunal discussed telecom verification failures, OTP use, beneficiary accounts and a criminal charge sheet.

## Reconstruction

### Target

- Target type: `business`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

An impostor obtained a duplicate corporate SIM from a telecom point of sale using forged documentation.

### Pretext

The duplicate SIM replaced the legitimate connection and allowed the perpetrator to receive OTPs used for internet-banking transfers.

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

Obtain a duplicate SIM and authenticate transfers from the company's bank account.

### Victim action / consequence

The company did not authorize INR 4,999,000 in transfers to two beneficiary accounts; part of the amount was later recovered.

- Financial loss coded: `4999000`
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM evidence: `yes`
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
- Other reported evidence: Forged duplicate-SIM documentation; OTP records; beneficiary accounts; charge-sheet material.

## Attribution analysis

### Attribution target

Duplicate-SIM applicant and beneficiary-account network

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `bank_account_or_money_flow`

### Incident-level attribution strength

**moderate**

### Limitations

The appellate decision establishes the mechanism and service-provider negligence but does not itself finally determine the criminal responsibility of every accused in the separate prosecution.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Duplicate-SIM / telecom-impersonation operator(s)**: `technical` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Obtaining or causing issuance/blocking/replacement of the registered SIM through false identity or false service representation and using the resulting number control. Limitation: The adjudicatory record strongly documents the SIM-control mechanism but does not fully identify the human requester/operator.
- **Online-banking / beneficiary-network operator(s)**: `financial` / `bank_account_controller`; strength `moderate`. Conduct assessed: Using diverted authentication or compromised banking access to add beneficiaries, transfer funds and/or withdraw the proceeds. Limitation: Financial activity is documented, but the adjudicatory record does not necessarily establish that the beneficiary/cash-out actors also performed the SIM impersonation.

## Primary evidentiary gap

Trial findings and device-level evidence tying the duplicate-SIM user to the online-banking sessions and beneficiary-account control.

## Coding decisions / research notes

v0.1.5 corrective expansion; source-to-code review completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
