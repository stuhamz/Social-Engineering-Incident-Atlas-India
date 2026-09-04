# SEIAI-0052: Repeated BSNL SIM-swap and HDFC account takeover fraud

## Record status

- Case ID: `SEIAI-0052`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0052-01 | T1 | final_judgment | Subodh C. Korde v. Union of India, 6 April 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Bombay High Court
- Case / proceeding: not normalized
- Public status coded: `judgment`
- Disposition: High Court final judgment on liability arising from the SIM-swap and unauthorized banking transactions.

## Neutral case summary

The Bombay High Court examined a 2021 cyber fraud in which the petitioner's BSNL SIM was swapped four times between 12 and 15 July 2021 and INR 3,804,000 was transferred to three newly created beneficiaries. The judgment records SIM-swap details, banking activity and police/telecom material.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

Multiple SIM-replacement requests were processed between Nashik, Pune and Vasai/Kalyan using the petitioner's identity while the legitimate subscriber experienced network problems.

### Pretext

The fraud mechanism relied on repeated SIM replacement, including loss/defect explanations, so OTPs and alerts associated with the petitioner's banking access could be diverted.

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

Take control of the registered mobile connection and use the resulting authentication channel to alter beneficiaries and execute bank transfers.

### Victim action / consequence

The petitioner did not authorize the beneficiary creation, increased transfer limit or transfers and reported the fraud after receiving a delayed transaction alert.

- Financial loss coded: `3804000`
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
- Other reported evidence: BSNL SIM-swap logs; police correspondence; beneficiary creation and transfer records.

## Attribution analysis

### Attribution target

Unknown SIM-swap and online-banking operator(s)

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `bank_account_or_money_flow`

### Incident-level attribution strength

**moderate**

### Limitations

The judgment establishes the repeated SIM-swap sequence and unauthorized banking activity but does not finally attribute every replacement request and transaction to identified human actors.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Duplicate-SIM / telecom-impersonation operator(s)**: `technical` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Obtaining or causing issuance/blocking/replacement of the registered SIM through false identity or false service representation and using the resulting number control. Limitation: The adjudicatory record strongly documents the SIM-control mechanism but does not fully identify the human requester/operator.
- **Online-banking / beneficiary-network operator(s)**: `financial` / `bank_account_controller`; strength `moderate`. Conduct assessed: Using diverted authentication or compromised banking access to add beneficiaries, transfer funds and/or withdraw the proceeds. Limitation: Financial activity is documented, but the adjudicatory record does not necessarily establish that the beneficiary/cash-out actors also performed the SIM impersonation.

## Primary evidentiary gap

CCTV, original SIM-replacement applications/KYC artefacts and device/login records linking each fraudulent replacement and banking session to specific persons.

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
