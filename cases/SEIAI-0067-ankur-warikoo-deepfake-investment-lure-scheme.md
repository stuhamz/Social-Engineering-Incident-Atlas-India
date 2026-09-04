# SEIAI-0067: Ankur Warikoo deepfake investment-lure scheme

## Record status

- Case ID: `SEIAI-0067`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0067-01 | T1 | interim_order | Ankur Warikoo & Anr. v. John Doe & Ors., 26 May 2025 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / proceeding: CS(COMM) 514/2025
- Public status coded: `bail_or_interim`
- Disposition: Interim injunction/takedown and disclosure directions; suit remained pending.

## Neutral case summary

The Delhi High Court granted interim relief against deepfake investment content falsely depicting Ankur Warikoo. The order describes a funnel from social-media deepfakes to WhatsApp groups and suspicious investment apps/accounts, with reports that investors had already lost money.

## Reconstruction

### Target

- Target type: `investor`
- Sector/context: retail investment
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

Deepfake videos using Ankur Warikoo's face, voice and identity were published on social-media platforms and directed viewers toward WhatsApp groups.

### Pretext

The fabricated videos falsely presented Warikoo as giving stock tips and promising high-return opportunities, then moved victims to suspicious investment groups/apps/accounts.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Join the WhatsApp group and deposit money into suspicious investment applications/accounts.

### Victim action / consequence

The source records reports of investors who lost money after believing the deepfake endorsements, but does not provide a single normalized focal loss amount.

- Financial loss coded: `not normalized / not reported`
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `not_reported`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `yes`
- CCTV evidence: `not_reported`
- Platform-provider records: `yes`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Deepfake video content; Instagram/Facebook links; WhatsApp groups; platform complaint records.

## Attribution analysis

### Attribution target

Unknown deepfake publisher(s) and investment-group operators

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The John Doe operators were not identified in the interim order; the court directed platform disclosure of available registration and IP information.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Deepfake publisher / social-media operator(s)**: `technical` / `platform_account_operator`; strength `unclear`. Conduct assessed: Publishing AI/deepfake videos using Warikoo's face and voice and directing viewers to investment groups. Limitation: John Doe operators were unidentified at the interim stage.
- **WhatsApp investment-group / payment operator(s)**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Moving viewers from fake endorsements into WhatsApp groups and suspicious investment apps/accounts where money was solicited. Limitation: The interim order describes reported investor losses but does not identify the group/payment controllers.

### v0.2.0 functional actor coding

- **Deepfake publisher / social-media operator(s)**: identity `unknown`; victim-facing function `yes`; financial function `no`. paper functional override: victim-facing conduct
- **WhatsApp investment-group / payment operator(s)**: identity `unknown`; victim-facing function `yes`; financial function `yes`. Atlas victim_facing layer; paper functional override: financial conduct

## Primary evidentiary gap

Platform disclosure, IP/login records, payment beneficiary KYC and device evidence identifying the deepfake publishers and investment-account operators.

## Coding decisions / research notes

v0.2.0 full re-audit: exact dates removed. Source describes deepfake material surfacing around August-September 2024 and continuing into 2025; judgment date is not coded as incident end. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
