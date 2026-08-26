# SEIAI-0045: Electricity-disconnection smishing and fraudulent BESCOM app transaction

## Record status

- Case ID: `SEIAI-0045`
- Coding version: `0.1.4`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0045-01 | T1 | appellate_judgment | State Bank of India v. Prodosh Kumar Banerjee, 15 April 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: National Consumer Disputes Redressal Commission
- Case / proceeding: Second Appeal No.540/2025
- Public status coded: `appeal`
- Disposition: NCDRC dismissed the bank’s second appeal on 15 April 2026 and upheld re-credit of INR 199,000 plus compensation.

## Neutral case summary

A Bengaluru consumer received an electricity-disconnection SMS, called the supplied number, downloaded a BESCOM-style application and attempted a INR 20 payment. Unauthorized debits followed. This is the Atlas’s first primary smishing case and is valuable because the adjudicatory record expressly discusses the absence of OTPs and third-party control of the online software.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: household utilities / retail banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is reported in the reviewed source.

### Initial contact

The complainant received an SMS warning that his electricity connection would be disconnected if the previous bill was not paid and giving a number for clarification.

### Pretext

After the complainant called, the dues were purportedly confirmed and he was directed to download an application displaying a BESCOM screen and attempt a nominal INR 20 payment. Larger unauthorized debits followed.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `no`
- Other: Threat of essential-service disconnection combined with a nominal verification/payment step.

### Requested action

Call the supplied number, download the purported electricity-service application and attempt a INR 20 payment.

### Victim action / consequence

The complainant installed/used the application and attempted INR 20. Unauthorized debits of INR 25,000 and INR 199,000 followed without an OTP being received according to the adjudicatory record; INR 25,000 was later reversed.

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `yes`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `yes`
- Other reported evidence: The NCDRC record states the online software was under third-party control, discusses OTP absence, immediate cybercrime reporting and the disputed transactions.

## Attribution analysis

### Attribution target

Unknown electricity-service impersonator and fraudulent application/session operator.

### Basis

- Primary: `not specified`
- Secondary: `not specified`

### Attribution strength

**not_assessed**

### Limitations

The consumer proceeding determined customer/bank liability, not attacker identity, beneficiary-account control or the technical architecture of the fraudulent application.

### Alternative explanation

The bank argued customer credential sharing/negligence; the Commission accepted that the two large transactions were not initiated by the complainant and no OTP for them was received.

## Primary evidentiary gap

Application provenance, device artefacts, telecom/session logs and beneficiary-account records identifying the fraud operator and explaining the unauthorized debit mechanism.

## Coding decisions / research notes

Financial loss codes the unreversed INR 199,000, while the initially reversed INR 25,000 debit remains documented in narrative. Second-pass source-to-code and privacy audit completed 2026-08-26.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
