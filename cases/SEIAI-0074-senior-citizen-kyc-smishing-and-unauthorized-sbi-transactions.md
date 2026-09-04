# SEIAI-0074: Senior-citizen KYC smishing and unauthorized SBI transactions

## Record status

- Case ID: `SEIAI-0074`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0074-01 | T1 | appellate_judgment | State Bank of India v. G. Natrajan, 9 July 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi State Consumer Disputes Redressal Commission
- Case / proceeding: not normalized
- Public status coded: `appeal`
- Disposition: Delhi State Consumer Commission dismissed the bank's appeal and maintained consumer relief.

## Neutral case summary

A Delhi consumer appeal records a KYC smishing incident in which a senior citizen clicked a verification link and then suffered INR 45,000 in unauthorized transactions. The record included the original SMS and banking complaint documents.

## Reconstruction

### Target

- Target type: `elderly_person`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

A senior citizen received an SMS on his registered mobile number asking him to complete KYC.

### Pretext

He clicked the KYC link; two unauthorized transactions then occurred, including an ATM withdrawal in Jamshedpur while he was in Delhi.

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

Open the KYC link and complete the purported verification process.

### Victim action / consequence

The complainant clicked the link and INR 45,000 was withdrawn/transferred from his account.

- Financial loss coded: `45000`
- Payment method: `multiple`

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
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: KYC SMS; ATM and transfer records; bank complaint and claim documents.

## Attribution analysis

### Attribution target

Unknown KYC-message/link operator

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The consumer appeal addressed bank liability and did not identify the sender of the SMS, the link controller or the person behind the Jamshedpur withdrawal.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **KYC smishing/link operator**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Sending the KYC SMS/link that induced the senior citizen to click a purported verification flow. Limitation: The consumer appeal does not identify the sender or link controller.
- **ATM/transfer recipient operator(s)**: `financial` / `cashout_actor`; strength `limited`. Conduct assessed: Executing or benefiting from the INR 20,000 ATM withdrawal and INR 25,000 transfer. Limitation: The transaction/location evidence does not identify who conducted the ATM withdrawal or controlled the transfer recipient.

## Primary evidentiary gap

Original URL/domain and SMS-origin records, ATM CCTV/card-authentication evidence and beneficiary-account KYC.

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
