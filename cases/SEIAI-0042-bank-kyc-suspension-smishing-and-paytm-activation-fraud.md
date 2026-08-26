# SEIAI-0042: Bank-KYC suspension smishing and Paytm activation fraud

## Record status

- Case ID: `SEIAI-0042`
- Coding version: `0.1.4`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0042-01 | T1 | appellate_judgment | Sri Rana Yadav v. Oriental Bank of Commerce & Anr., 15 June 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: State Consumer Disputes Redressal Commission, West Bengal
- Case / proceeding: Appeal arising from CC/170/2021
- Public status coded: `appeal`
- Disposition: On 15 June 2026 the State Commission set aside the threshold dismissal and restored/remanded the consumer complaint for adjudication on merits.

## Neutral case summary

A West Bengal bank customer received a KYC-suspension SMS and then a call directing him to update details through Paytm and add INR 20 through UPI. Five unauthorized transactions followed. The appellate consumer record is useful for reconstructing smishing-to-vishing manipulation while leaving attacker identity and the technical compromise unresolved.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: retail banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is reported in the reviewed source.

### Initial contact

The complainant received an SMS stating that his KYC had been suspended and was then contacted by a person presenting himself as a KYC-support representative.

### Pretext

The caller instructed the complainant to update KYC particulars through Paytm and add a nominal INR 20 through UPI to activate the wallet. Five unauthorized debits followed; the complainant maintained that he did not share any OTP.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Account-service disruption warning combined with a low-value activation transaction that appeared routine.

### Requested action

Enter KYC particulars in the Paytm workflow and add INR 20 through UPI for wallet activation.

### Victim action / consequence

The complainant followed the KYC/activation instructions. Five debits totalling INR 49,242.35 followed; INR 15,000 was later credited back, leaving about INR 34,242.35 unrecovered in the appellate record.

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `no`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Other reported evidence: The consumer record describes the initial SMS, Paytm/UPI interaction, five disputed transactions and the complainant’s assertion that no OTP was shared.

## Attribution analysis

### Attribution target

Unknown SMS/call KYC impersonator and transaction operator.

### Basis

- Primary: `not specified`
- Secondary: `not specified`

### Attribution strength

**not_assessed**

### Limitations

The consumer appeal reconstructs the manipulation but does not identify the human operator, explain the technical compromise mechanism, or provide offender-side beneficiary/device evidence.

### Alternative explanation

The underlying consumer dispute concerned whether the customer’s disclosure of KYC information constituted negligence; it did not adjudicate offender identity.

## Primary evidentiary gap

Telecom, Paytm/UPI, device-session and beneficiary-account records sufficient to explain the unauthorized transactions and identify the human operator.

## Coding decisions / research notes

Financial-loss field records the approximately unrecovered amount after the source-reported INR 15,000 credit, while the gross fraudulent debit of INR 49,242.35 is preserved in narrative. Second-pass source-to-code and privacy audit completed 2026-08-26.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
