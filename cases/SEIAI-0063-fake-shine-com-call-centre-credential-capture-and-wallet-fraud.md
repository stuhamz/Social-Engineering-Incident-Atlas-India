# SEIAI-0063: Fake Shine.com call-centre credential capture and wallet fraud

## Record status

- Case ID: `SEIAI-0063`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0063-01 | T1 | bail_order | Ankur Saini v. State through Govt. of NCT of Delhi, 15 April 2024 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / proceeding: BAIL APPLN. 903/2024; FIR No.0079/2024
- Public status coded: `bail_or_interim`
- Disposition: Bail-stage proceedings; trial/investigation allegations remained unadjudicated.

## Neutral case summary

A Delhi High Court bail order describes a fake Shine.com call centre that used a lookalike domain and nominal INR 10 payment pretext to capture payment credentials and OTPs, then allegedly transferred larger amounts to Paytm/PhonePe wallets.

## Reconstruction

### Target

- Target type: `job_seeker`
- Sector/context: employment / online recruitment
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

A fake call centre allegedly procured job-seeker details from Shine.com and called victims while impersonating Shine employees.

### Pretext

Victims were told a job-help service cost only INR 10 and were guided to the lookalike domain shinecomplaint.in, which captured payment credentials and OTP input.

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

Enter personal/payment details and authorize what appeared to be a nominal INR 10 service charge.

### Victim action / consequence

Victims entered credentials/OTP believing they were paying INR 10, while operators allegedly used the captured data to transfer larger sums into wallets.

- Financial loss coded: `not normalized / not reported`
- Payment method: `wallet`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `not_reported`
- IP/login evidence: `not_reported`
- Device evidence: `yes`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Lookalike domain; seized laptops and phones; alleged wallet/account flows.

## Attribution analysis

### Attribution target

Bail applicant's alleged role in operating the call centre and supplying bank accounts

### Basis

- Primary: `co_accused_link`
- Secondary: `device_possession_or_forensics`

### Incident-level attribution strength

**limited**

### Limitations

The source is a bail-stage order. The applicant disputed the co-accused disclosure basis and the order does not finally establish who operated each victim-facing call or credential-capture session.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Fake Shine.com call-centre operators**: `victim_facing` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Calling job seekers while impersonating Shine.com employees and directing them to the lookalike payment domain. Limitation: The operation is described in the status report, but individual victim calls are not mapped to each accused.
- **Bail applicant with alleged call-centre/account role**: `organisational` / `organiser`; strength `limited`. Conduct assessed: Allegedly operating the illegal call centre and supplying accounts to receive cheated funds. Limitation: The applicant contested the co-accused disclosure basis; the bail order is not a final guilt finding.

### v0.2.0 functional actor coding

- **Fake Shine.com call-centre operators**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Bail applicant with alleged call-centre/account role**: identity `identified`; victim-facing function `no`; financial function `yes`. paper functional override: financial conduct

## Primary evidentiary gap

Forensic examination of seized laptops/phones, domain registration/hosting records and wallet/account KYC tying the applicant to specific victim sessions.

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
