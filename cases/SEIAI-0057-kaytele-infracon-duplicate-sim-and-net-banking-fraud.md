# SEIAI-0057: Kaytele Infracon duplicate-SIM and net-banking fraud

## Record status

- Case ID: `SEIAI-0057`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0057-01 | T1 | appellate_judgment | Vodafone Idea Limited v. Krishan Lal Nain & Anr., 2 December 2025 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Telecom Disputes Settlement & Appellate Tribunal
- Case / proceeding: Cyber Appeal No.8/2021
- Public status coded: `appeal`
- Disposition: TDSAT appellate judgment concerning telecom liability after SIM replacement fraud.

## Neutral case summary

TDSAT reviewed a 2017 Rajasthan SIM-swap fraud in which a duplicate SIM was issued using forged identity documents and INR 6.85 million was siphoned from Kaytele Infracon LLP's bank account. The appellate record also describes a criminal charge sheet and partial recovery.

## Reconstruction

### Target

- Target type: `business`
- Sector/context: infrastructure business / business banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

An unknown person used forged identity documents at a Vodafone store to obtain a replacement SIM associated with the complainant's business banking.

### Pretext

The duplicate SIM took over the registered number and enabled OTP-authenticated withdrawals while the legitimate SIM was non-operational.

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

Obtain the replacement SIM and use OTP access to transfer funds from the business account.

### Victim action / consequence

Kaytele Infracon LLP did not authorize six series of transactions totalling INR 6,850,000; INR 4,400,000 was reported recovered.

- Financial loss coded: `6850000`
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
- Other reported evidence: Forged SIM-replacement documents; bank statement; charge sheet; recovery records.

## Attribution analysis

### Attribution target

Duplicate-SIM applicant and charged financial/transaction network

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `bank_account_or_money_flow`

### Incident-level attribution strength

**moderate**

### Limitations

The tribunal's findings concern telecom/service liability; although a charge sheet is described, the decision does not establish final criminal guilt of each charged person.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Duplicate-SIM / telecom-impersonation operator(s)**: `technical` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Obtaining or causing issuance/blocking/replacement of the registered SIM through false identity or false service representation and using the resulting number control. Limitation: The adjudicatory record strongly documents the SIM-control mechanism but does not fully identify the human requester/operator.
- **Online-banking / beneficiary-network operator(s)**: `financial` / `bank_account_controller`; strength `moderate`. Conduct assessed: Using diverted authentication or compromised banking access to add beneficiaries, transfer funds and/or withdraw the proceeds. Limitation: Financial activity is documented, but the adjudicatory record does not necessarily establish that the beneficiary/cash-out actors also performed the SIM impersonation.

### v0.2.0 functional actor coding

- **Duplicate-SIM / telecom-impersonation operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Online-banking / beneficiary-network operator(s)**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Final criminal trial findings and device/login records connecting the duplicate SIM to the unauthorized bank sessions.

## Coding decisions / research notes

v0.2.0 full re-audit: attack end corrected to 29 May 2017, the last source-described fraudulent transaction date; 1 June was discovery/reporting, not attack conduct. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
