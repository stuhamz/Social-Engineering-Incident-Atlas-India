# SEIAI-0046: Fake Indus Towers Facebook tower-installation and fee fraud

## Record status

- Case ID: `SEIAI-0046`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0046-01 | T1 | bail_order | Pankaj Gulati v. State of Punjab, 29 October 2025 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / proceeding: CRM-M-41196-2025; FIR No.03/2025, Cyber Crime Police Station Mansa
- Public status coded: `trial`
- Disposition: Regular bail granted on 29 October 2025 after about five months’ custody and compromise-related considerations; the court expressly avoided deciding merits.

## Neutral case summary

A Punjab landowner/petrol-pump operator responded to a fake Indus Towers Facebook post and was drawn into months of calls and WhatsApp exchanges with people posing as company executives. Forged documents and escalating regulatory/fee pretexts induced payments totalling INR 5.75 million. The bail record contains relatively rich account, telecom and persona-role evidence.

## Reconstruction

### Target

- Target type: `business`
- Sector/context: petrol-pump / landowner / small business
- Target selection known: `yes`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is reported in the reviewed source.

### Initial contact

A petrol-pump owner saw a Facebook post advertising lucrative mobile-tower installation and called the number listed in the post.

### Pretext

Callers posing as an Indus Towers legal advisor, Managing Director, Chairman and CEO promised a large advance, monthly tower rent and family jobs. Forged agreement/job documents were sent and a long sequence of fabricated NOC, GST, TRAI, transport, tax and commission fees followed.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `yes`
- Reciprocity: `yes`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Business-opportunity greed/commitment escalation, executive role-play, forged documents and repeated sunk-cost fee demands.

### Requested action

Pay successive application, regulatory, tax, transport and commission charges to secure the promised tower installation, advance, rent and family employment.

### Victim action / consequence

The complainant repeatedly paid through Google Pay, bank transfers and cash deposits, with the status report describing a total fraud amount of INR 5,748,697.

## Evidence map

- Phone/SIM evidence: `yes`
- CDR/telecom evidence: `yes`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Other reported evidence: The status report described forged agreement/job documents, bank-account records, call details/CAF data and NCRP complaints linked to the accounts/numbers used in the tower scheme.

## Attribution analysis

### Attribution target

Petitioner’s alleged legal-advisor/persona and linked account/communication role within the fake Indus Towers scheme.

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `bank_account_or_money_flow`

### Attribution strength

**moderate**

### Limitations

The High Court described sufficient prima facie material connecting the petitioner but the case remained at bail/trial stage; the record does not finally establish which operator authored every Facebook/WhatsApp communication or controlled every beneficiary account.

### Alternative explanation

Individual account/phone associations may represent narrower roles than operation of the entire multi-person executive-impersonation workflow.

### v0.2.0 functional actor coding

- **Fake Indus Towers executive-persona cluster**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Petitioner-linked legal-advisor/account role**: identity `identified`; victim-facing function `yes`; financial function `yes`. paper functional override: victim-facing conduct; paper functional override: financial conduct
- **Beneficiary-account network**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Final trial findings plus platform/device records mapping the Facebook page, each executive persona and each payment account to specific human operators.

## Coding decisions / research notes

Raw phone/account identifiers contained in the judicial source are intentionally omitted from the public Atlas data. Second-pass source-to-code and privacy audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
