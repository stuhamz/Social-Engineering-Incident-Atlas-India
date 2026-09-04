# SEIAI-0061: RBL reward-points phishing link and credit-card fraud

## Record status

- Case ID: `SEIAI-0061`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0061-01 | T1 | final_judgment | Ritesh Kumar v. State of Madhya Pradesh, 8 January 2024 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Madhya Pradesh High Court
- Case / proceeding: M.Cr.C. No.46412/2023
- Public status coded: `judgment`
- Disposition: FIR and consequential proceedings quashed following settlement between the parties; allegations not adjudicated on merits.

## Neutral case summary

The Madhya Pradesh High Court's quashing order reproduces a phishing/vishing sequence in which a reward-points caller sent a link, the complainant submitted details, and INR 24,311 was fraudulently disbursed. Proceedings were later quashed on compromise rather than merits.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: retail banking / credit card
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The complainant received repeated calls offering redemption of RBL credit-card reward points; on 13 April 2023 an unknown caller sent a link.

### Pretext

The link was presented as a reward-redemption mechanism. After the complainant clicked it and filled in details, an unauthorized credit-card transaction followed.

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

Open the reward-redemption link and submit requested card/account details.

### Victim action / consequence

The complainant clicked the link, filled the form and lost INR 24,311 from the credit card.

- Financial loss coded: `24311`
- Payment method: `card`

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
- Other reported evidence: Reward-points call and phishing link; credit-card transaction.

## Attribution analysis

### Attribution target

Unknown reward-points caller and link operator

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The order primarily addresses compromise/quashing and does not develop the technical evidence identifying the original caller or website operator.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **RBL reward-points caller / phishing-link operator**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Calling the victim with a reward-points pretext and sending the phishing link used to collect card information. Limitation: The compromise/quashing order gives no direct technical attribution of the caller or link.
- **Credit-card transaction recipient/operator**: `financial` / `bank_account_controller`; strength `unclear`. Conduct assessed: Executing or benefiting from the INR 24,311 card transaction after the phishing flow. Limitation: The public order does not identify the merchant/account operator.

### v0.2.0 functional actor coding

- **RBL reward-points caller / phishing-link operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Credit-card transaction recipient/operator**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Original URL/domain records, call records, device/browser artefacts and card-transaction authentication logs.

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
