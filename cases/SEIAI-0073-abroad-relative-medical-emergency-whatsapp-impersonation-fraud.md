# SEIAI-0073: Abroad-relative medical-emergency WhatsApp impersonation fraud

## Record status

- Case ID: `SEIAI-0073`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0073-01 | T1 | bail_order | Anshu Yadav v. State of Haryana, 17 July 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / proceeding: CRM-M-26249-2026; FIR No.160/2025
- Public status coded: `bail_or_interim`
- Disposition: Regular bail granted after charge sheet and framing of charges; merits remained for trial.

## Neutral case summary

A Punjab and Haryana High Court bail order records a WhatsApp family-impersonation fraud in which a caller posed as the complainant's relative abroad and used a medical-emergency pretext to induce transfers of about INR 799,000. Police traced one beneficiary account to the petitioner, who claimed his account and ATM had been misused by another person.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: household / family network
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The complainant received a WhatsApp call from an unknown number where the caller impersonated his relative Pankaj, said to be living abroad.

### Pretext

The caller invoked a medical emergency and induced the complainant to send money to accounts supplied by the fraud network.

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Transfer money urgently to the supplied accounts for the purported relative's medical emergency.

### Victim action / consequence

The complainant transferred approximately INR 799,000 before learning that the real relative had initiated no such transaction.

- Financial loss coded: `799000`
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM evidence: `not_reported`
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
- Other reported evidence: Beneficiary bank account trace; IP addresses reportedly linked outside India; challan.

## Attribution analysis

### Attribution target

Petitioner's alleged beneficiary-account role, separate from the unidentified WhatsApp caller

### Basis

- Primary: `bank_account_or_money_flow`
- Secondary: `ip_or_login_record`

### Incident-level attribution strength

**limited**

### Limitations

The petitioner was linked to an account receiving cheated funds but the order does not establish that he made the WhatsApp call; he claimed another person controlled his account/ATM.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Relative-impersonating WhatsApp caller**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Impersonating the complainant's relative abroad and invoking a medical emergency to direct transfers. Limitation: The caller is not identified in the bail order.
- **Bail applicant linked to beneficiary account**: `financial` / `bank_account_controller`; strength `limited`. Conduct assessed: Alleged connection to one account used to receive cheated funds. Limitation: The order explicitly leaves the extent of involvement for trial and records the defence that another person controlled the account/ATM.

### v0.2.0 functional actor coding

- **Relative-impersonating WhatsApp caller**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Bail applicant linked to beneficiary account**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Authenticated WhatsApp/telecom records identifying the caller and device/account evidence establishing who controlled the beneficiary account during the transfers.

## Coding decisions / research notes

v0.2.0 full re-audit: exact fraud date was not established independently of FIR/procedural timing; day-level dates removed. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
