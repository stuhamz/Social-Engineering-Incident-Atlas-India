# SEIAI-0064: boAt replacement-charge email and UPI impersonation case

## Record status

- Case ID: `SEIAI-0064`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0064-01 | T1 | final_judgment | Central CEN Crime Police Station v. Syed Aakhib, 30 June 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: XLV Additional CJM, Bengaluru
- Case / proceeding: C.C. No.979/2024
- Public status coded: `judgment`
- Disposition: Final criminal acquittal on all charged counts.

## Neutral case summary

A Bengaluru criminal trial examined allegations that a service-partner employee created a misleading boAt-related email identity and fake UPI IDs to collect replacement courier charges. Despite subscriber, bank, Google/Paytm and electronic-record material, the accused was acquitted because the prosecution failed to prove the charges beyond reasonable doubt.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: retail consumer / warranty support
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

Customers seeking warranty replacements received unauthorized demands through a misleading email address that appeared connected to boAt/Imagine Marketing.

### Pretext

The sender falsely represented that courier/replacement charges had to be paid even though the company's policy provided free door-to-door warranty replacement.

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

Pay purported courier/replacement charges through supplied UPI identifiers.

### Victim action / consequence

At least one documented customer paid INR 164 through UPI; seven customers complained of similar unauthorized demands.

- Financial loss coded: `164`
- Payment method: `upi`

## Evidence map

- Phone/SIM evidence: `yes`
- CDR/telecom evidence: `yes`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `not_reported`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `yes`
- Other reported evidence: Customer complaints; misleading email; UPI IDs; subscriber data; Google/Paytm records; bank statements/KYC; CDR/CAF; Section 65B discussion.

## Attribution analysis

### Attribution target

Accused's alleged creation/use of misleading email and UPI identifiers

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The trial court expressly acquitted the accused; the prosecution evidence did not establish beyond reasonable doubt that he created or controlled the misleading email/UPI identities.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Accused service-partner employee**: `hybrid` / `platform_account_operator`; strength `unclear`. Conduct assessed: Allegedly creating/using the misleading boAt-related email and UPI identifiers to demand replacement courier charges. Limitation: The final trial court acquitted the accused and held the prosecution had not proved control of the email/UPI identities beyond reasonable doubt.
- **Unknown misleading-email / UPI operator**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Sending replacement-charge demands while impersonating boAt/Imagine Marketing and directing customers to UPI payments. Limitation: The fraudulent communications are documented, but the human operator remained unresolved after the acquittal.

### v0.2.0 functional actor coding

- **Accused service-partner employee**: identity `identified`; victim-facing function `yes`; financial function `yes`. paper functional override: victim-facing conduct; paper functional override: financial conduct
- **Unknown misleading-email / UPI operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer

## Primary evidentiary gap

Properly authenticated provider records and direct device/account-control evidence linking the email and UPI identifiers to the accused.

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
