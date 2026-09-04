# SEIAI-0054: Co-operative bank duplicate-SIM OTP diversion fraud

## Record status

- Case ID: `SEIAI-0054`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0054-01 | T1 | final_judgment | Sri Basaveshwara Pattana Sahakara Bank Niyamitha v. Canara Bank, 1 June 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Karnataka High Court
- Case / proceeding: not normalized
- Public status coded: `judgment`
- Disposition: High Court final judgment on service-provider/banking liability and compensation for the SIM-swap enabled loss.

## Neutral case summary

The Karnataka High Court treated the unauthorized duplicate SIM as the foundational event enabling OTP diversion and seven fraudulent RTGS/NEFT transactions between 6 and 7 February 2019 totalling INR 8,770,000.

## Reconstruction

### Target

- Target type: `business`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

Unknown persons obtained a duplicate SIM corresponding to the co-operative bank's registered mobile number from BSNL without the bank's authorization.

### Pretext

The duplicate SIM diverted OTPs used to authenticate seven RTGS/NEFT transfers from the bank's Canara Bank current account.

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

Obtain the registered mobile identity and use OTPs to authenticate high-value transfers.

### Victim action / consequence

The co-operative bank did not authorize the transactions and discovered seven transfers totalling INR 8,770,000.

- Financial loss coded: `8770000`
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
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Duplicate-SIM records; OTP authentication evidence; seven RTGS/NEFT transactions; police complaint.

## Attribution analysis

### Attribution target

Unknown duplicate-SIM applicant(s) and transaction operator(s)

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `bank_account_or_money_flow`

### Incident-level attribution strength

**moderate**

### Limitations

The judgment makes strong findings about the causal mechanism and service-provider verification failure, but the public decision is principally a liability case rather than a final criminal attribution of the fraudsters.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Duplicate-SIM / telecom-impersonation operator(s)**: `technical` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Obtaining or causing issuance/blocking/replacement of the registered SIM through false identity or false service representation and using the resulting number control. Limitation: The adjudicatory record strongly documents the SIM-control mechanism but does not fully identify the human requester/operator.
- **Online-banking / beneficiary-network operator(s)**: `financial` / `bank_account_controller`; strength `moderate`. Conduct assessed: Using diverted authentication or compromised banking access to add beneficiaries, transfer funds and/or withdraw the proceeds. Limitation: Financial activity is documented, but the adjudicatory record does not necessarily establish that the beneficiary/cash-out actors also performed the SIM impersonation.

## Primary evidentiary gap

Subscriber-request/KYC evidence, CCTV and device/login evidence identifying the individual who obtained and used the duplicate SIM.

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
