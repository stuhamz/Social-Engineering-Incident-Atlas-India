# SEIAI-0041: WhatsApp managing-director impersonation and corporate payment diversion

## Record status

- Case ID: `SEIAI-0041`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0041-01 | T1 | bail_order | Vikas Vishwanath Kapoor v. State of Maharashtra, 17 September 2025 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Bombay High Court
- Case / proceeding: Anticipatory Bail Application No.1492/2025; Crime Register No.72/2025, Khopoli Police Station
- Public status coded: `trial`
- Disposition: Anticipatory bail allowed on 17 September 2025; the High Court found no material showing applicant-imposter nexus or personal gain, while the underlying fraud investigation/trial remained distinct.

## Neutral case summary

A corporate finance employee received WhatsApp instructions from an unknown person impersonating the company’s Managing Director and processed INR 55 million in transfers. The record is valuable because the High Court separately examined whether the manipulated employee was himself complicit and found the available material supported his bona fide-belief explanation rather than deliberate collusion.

## Reconstruction

### Target

- Target type: `employee`
- Sector/context: corporate finance / manufacturing
- Target selection known: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: The imposter targeted the company’s General Manager (Finance), adopted the Managing Director’s identity and exploited the company’s existing WhatsApp-based payment-approval workflow.

### Initial contact

On 8 January 2025 an unknown WhatsApp user contacted the company’s General Manager (Finance), claimed to be the Managing Director and asked that a new number be saved.

### Pretext

Between 9 and 17 January the imposter sent payment instructions that appeared to continue the company’s established approval workflow. The employee also exchanged contemporaneous approval messages with the real Managing Director, which the High Court treated as supporting his claimed bona fide belief.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Executive authority, continuity with an established internal payment process and trusted-channel mimicry.

### Requested action

Process RTGS transfers to bank accounts furnished by the person impersonating the Managing Director.

### Victim action / consequence

The finance employee processed transfers totalling INR 55,000,000 to third-party accounts. About INR 13,100,000 was later recovered by freezing one account.

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Other reported evidence: The High Court considered the real Managing Director’s contemporaneous WhatsApp approvals, the destination-account investigation and recovery after an account freeze.

## Attribution analysis

### Attribution target

Unknown Managing-Director impersonator, beneficiary-account network, and the prosecution’s alleged insider/facilitation theory concerning the finance employee.

### Basis

- Primary: `message_or_email_content`
- Secondary: `bank_account_or_money_flow`

### Attribution strength

**unclear**

### Limitations

The attack itself is well reconstructed, but the imposter remains unidentified. The High Court found no material linking the finance employee to the imposter or destination accounts and said the contemporaneous messages supported his bona fide-belief explanation.

### Alternative explanation

The employee may have been a manipulated organisational insider rather than a colluding participant; the High Court found negligence or lack of diligence insufficient to establish criminal complicity at that stage.

### v0.2.0 functional actor coding

- **Managing-Director impersonation operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Destination-account controller cluster**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer
- **Finance employee alleged insider/facilitator role**: identity `identified`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function

## Primary evidentiary gap

Platform/device records identifying the imposter and end-to-end evidence linking the impersonating WhatsApp account to the controllers of the receiving accounts.

## Coding decisions / research notes

First Atlas case centered on executive-authority impersonation inside a live corporate payment workflow. Gross diverted amount is coded; later recovery of INR 13.1 million is preserved in narrative rather than silently netted. Second-pass source-to-code and privacy audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
