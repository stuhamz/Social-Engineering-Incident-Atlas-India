# SEIAI-0059: Fake Prestige customer-care link and UPI fraud

## Record status

- Case ID: `SEIAI-0059`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0059-01 | T1 | appellate_judgment | UCO Bank v. Lipika Mittal, 2 March 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Punjab State Consumer Disputes Redressal Commission
- Case / proceeding: not normalized
- Public status coded: `appeal`
- Disposition: State consumer appeal decided in favour of the bank; consumer liability dispute adjudicated, attacker identity not decided.

## Neutral case summary

A Punjab consumer appeal records that the complainant found a fake Prestige customer-care number through Google, was directed to a link/application flow and subsequently lost INR 200,000 through nine UPI transactions.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The complainant searched Google for Prestige gas-burner customer care, opened a top search result and called the number displayed there.

### Pretext

The caller represented himself as Prestige customer care, promised quick repair and sent a link for a supposed service application/registration process.

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Click the link, install/use the purported support flow and make a small UPI registration payment.

### Victim action / consequence

The complainant followed the caller's instructions; nine UPI transfers totalling INR 200,000 were then made from her account.

- Financial loss coded: `200000`
- Payment method: `upi`

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
- Other reported evidence: Google-search entry vector; customer-care link/application; UPI transaction records.

## Attribution analysis

### Attribution target

Unknown fake customer-care operator

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The consumer appeal reconstructs the victim-facing deception but does not identify the caller or technical operator.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Fake Prestige customer-care operator**: `victim_facing` / `victim_facing_operator`; strength `unclear`. Conduct assessed: Answering the customer-care call, impersonating Prestige support and directing the victim into the fraudulent link/application flow. Limitation: The consumer appeal reconstructs the call but does not identify the caller.
- **UPI beneficiary / technical operator(s)**: `financial` / `bank_account_controller`; strength `unclear`. Conduct assessed: Receiving or facilitating the nine unauthorized UPI transfers after the victim followed the fake support instructions. Limitation: The source does not provide developed beneficiary KYC or device attribution.

## Primary evidentiary gap

Search-ad ownership/website registration, call-detail records, device artefacts and beneficiary UPI KYC tying the support identity to the operator.

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
