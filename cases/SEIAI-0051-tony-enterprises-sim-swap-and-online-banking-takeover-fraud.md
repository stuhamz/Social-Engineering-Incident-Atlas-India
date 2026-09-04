# SEIAI-0051: Tony Enterprises SIM-swap and online-banking takeover fraud

## Record status

- Case ID: `SEIAI-0051`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0051-01 | T1 | final_judgment | Tony Enterprises v. Reserve Bank of India, 11 October 2019 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Kerala High Court
- Case / proceeding: WP(C) No.28823/2017
- Public status coded: `judgment`
- Disposition: Writ petitions disposed with directions concerning disputed fraudulent banking transactions; criminal investigation findings were discussed but individual criminal guilt was not adjudicated.

## Neutral case summary

Tony Enterprises and Tony Lites lost INR 1,625,000 after a duplicate SIM was issued to a person impersonating the registered subscriber. The Kerala High Court recorded CBCID findings that the fraudsters used duplicate SIMs, OTPs and unauthorized online-bank access, with funds transferred to accounts in West Bengal and Maharashtra.

## Reconstruction

### Target

- Target type: `business`
- Sector/context: small business / retail banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

An unknown person approached the telecom service provider and fraudulently represented himself as the registered subscriber in order to obtain a duplicate SIM.

### Pretext

The impostor sought a duplicate SIM in the subscriber's identity; once the legitimate SIM became dysfunctional, OTPs and banking alerts could be received on the fraudulently issued SIM.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Obtain control of the registered mobile number and use it to authenticate online-banking transactions.

### Victim action / consequence

The account holders did not authorize the transfer; after the mobile stopped functioning they discovered unauthorized online transfers.

- Financial loss coded: `1625000`
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM evidence: `yes`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `yes`
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
- Other reported evidence: CBCID investigation reports; duplicate-SIM issuance records; bank transfer trail; IP-address findings.

## Attribution analysis

### Attribution target

Unknown SIM-swap operator(s) and downstream beneficiary network

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `ip_or_login_record`

### Incident-level attribution strength

**moderate**

### Limitations

The High Court records investigative findings on the mechanism and financial trail, but the public judgment does not fully resolve the identity and specific conduct of every human operator.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Duplicate-SIM / telecom-impersonation operator(s)**: `technical` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Obtaining or causing issuance/blocking/replacement of the registered SIM through false identity or false service representation and using the resulting number control. Limitation: The adjudicatory record strongly documents the SIM-control mechanism but does not fully identify the human requester/operator.
- **Online-banking / beneficiary-network operator(s)**: `financial` / `bank_account_controller`; strength `moderate`. Conduct assessed: Using diverted authentication or compromised banking access to add beneficiaries, transfer funds and/or withdraw the proceeds. Limitation: Financial activity is documented, but the adjudicatory record does not necessarily establish that the beneficiary/cash-out actors also performed the SIM impersonation.

### v0.2.0 functional actor coding

- **Duplicate-SIM / telecom-impersonation operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Online-banking / beneficiary-network operator(s)**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Subscriber-acquisition records, CCTV/device evidence and authenticated bank-login artefacts tying the duplicate-SIM request and account access to specific operators.

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
