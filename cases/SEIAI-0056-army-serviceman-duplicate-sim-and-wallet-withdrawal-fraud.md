# SEIAI-0056: Army serviceman duplicate-SIM and wallet withdrawal fraud

## Record status

- Case ID: `SEIAI-0056`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0056-01 | T1 | appellate_judgment | Shyam Kumar v. Bharti Airtel Ltd. & Ors., 5 June 2024 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: National Consumer Disputes Redressal Commission
- Case / proceeding: not normalized
- Public status coded: `appeal`
- Disposition: NCDRC revision concerning telecom deficiency and consumer compensation.

## Neutral case summary

NCDRC reviewed a SIM-replacement fraud affecting an Army serviceman. It recorded that an unknown person obtained a duplicate SIM on 18 May 2017 and INR 287,630 was subsequently withdrawn through multiple online services.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

An unknown person fraudulently obtained a duplicate SIM for the complainant's number using identity documents that did not match the existing subscriber record.

### Pretext

The duplicate SIM enabled transactions through Paytm, Airtel Money, Snapdeal and M-Paisa while the complainant continued to possess his original SIM at his posting.

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

Take control of the registered number and use linked online services to withdraw funds.

### Victim action / consequence

The complainant did not authorize the transactions and lost INR 287,630 between 21 and 27 May 2017.

- Financial loss coded: `287630`
- Payment method: `multiple`

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
- Other reported evidence: SIM-document discrepancy; wallet/online-service transaction trail.

## Attribution analysis

### Attribution target

Unknown duplicate-SIM applicant and online-service operator

### Basis

- Primary: `documentary_record`
- Secondary: `bank_account_or_money_flow`

### Incident-level attribution strength

**limited**

### Limitations

The consumer decision establishes deficient SIM verification and the resulting loss but does not identify the human fraudster.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Duplicate-SIM / telecom-impersonation operator(s)**: `technical` / `social_engineering_operator`; strength `limited`. Conduct assessed: Obtaining or causing issuance/blocking/replacement of the registered SIM through false identity or false service representation and using the resulting number control. Limitation: The adjudicatory record strongly documents the SIM-control mechanism but does not fully identify the human requester/operator.
- **Online-banking / beneficiary-network operator(s)**: `financial` / `bank_account_controller`; strength `limited`. Conduct assessed: Using diverted authentication or compromised banking access to add beneficiaries, transfer funds and/or withdraw the proceeds. Limitation: Financial activity is documented, but the adjudicatory record does not necessarily establish that the beneficiary/cash-out actors also performed the SIM impersonation.

## Primary evidentiary gap

Original duplicate-SIM application/KYC, service-centre CCTV and wallet/provider account records identifying the operator.

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
