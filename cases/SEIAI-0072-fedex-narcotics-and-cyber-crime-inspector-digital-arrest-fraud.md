# SEIAI-0072: FedEx narcotics and Cyber Crime Inspector digital-arrest fraud

## Record status

- Case ID: `SEIAI-0072`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0072-01 | T1 | final_judgment | A.A. Abdulla v. Union of India, 28 March 2025 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Kerala High Court
- Case / proceeding: not normalized
- Public status coded: `judgment`
- Disposition: Kerala High Court directed the CBI to take over investigation of the cybercrime FIR.

## Neutral case summary

The Kerala High Court recorded a digital-arrest style fraud in which a FedEx narcotics pretext escalated to Mumbai Cyber Crime impersonation and induced a 75-year-old victim to transfer INR 10,440,111. The judgment transferred the investigation to the CBI because the perpetrators and transactions appeared spread across multiple states.

## Reconstruction

### Target

- Target type: `elderly_person`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

An unknown caller introduced himself as Ajay Kumar from FedEx Mumbai and claimed that a Russia-bound package booked in the victim's name contained illegal drugs.

### Pretext

The call was transferred to another person claiming to be a Mumbai Cyber Crime Inspector, who said the victim's bank account required verification before the matter could be cleared.

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

Transfer savings into bank accounts supplied by the purported investigators for verification/clearance.

### Victim action / consequence

The 75-year-old petitioner transferred INR 10,440,111 into three accounts between 22 and 24 July 2024.

- Financial loss coded: `10440111`
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
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: FIR; investigation statement; three beneficiary accounts and nationwide transaction trail.

## Attribution analysis

### Attribution target

Unknown FedEx and Cyber Crime impersonating callers and downstream account network

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The final writ judgment concerns transfer of investigation, not guilt or identification of the perpetrators; the victim-facing callers remained unresolved.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **FedEx and Mumbai Cyber Crime impersonating caller(s)**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Using courier/narcotics and police-investigation pretexts to frighten the victim and direct bank transfers for supposed verification. Limitation: The final writ judgment transferred the investigation but did not identify the callers.
- **Three beneficiary-account / downstream operator(s)**: `financial` / `bank_account_controller`; strength `limited`. Conduct assessed: Receiving the victim's INR 10.44 million across the three accounts supplied by the callers. Limitation: The transaction accounts are documented but the public judgment does not establish who controlled each account or their relationship to the callers.

## Primary evidentiary gap

Telecom/platform records, beneficiary-account KYC, device/IP evidence and cross-state transaction tracing identifying the caller and financial controllers.

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
