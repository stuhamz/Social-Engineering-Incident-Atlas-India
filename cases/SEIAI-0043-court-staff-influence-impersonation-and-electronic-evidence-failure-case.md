# SEIAI-0043: Court-staff influence impersonation and electronic-evidence failure case

## Record status

- Case ID: `SEIAI-0043`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0043-01 | T1 | final_judgment | C. Vaishnavi v. C.B. Krishnan, 27 February 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Bengaluru District Court
- Case / proceeding: C.C.No.19511/2016
- Public status coded: `judgment`
- Disposition: All accused acquitted by final judgment dated 27 February 2026.

## Neutral case summary

A Bengaluru complainant facing a property dispute received messages from a purported court-connected person demanding INR 15–20 lakh for a favourable order and threatening death. The final trial judgment acquitted the accused after identifying serious problems in SIM linkage, witness proof and Section 65-B authentication. The case is a useful negative example of association failing to mature into admissible attribution.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: civil litigant / property dispute
- Target selection known: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: The messages referred to the complainant’s pending property litigation and promised influence over a favourable court order, showing case-specific knowledge even though its source was not established.

### Initial contact

The complainant received repeated messages/calls and a letter from a person presenting himself as a court-connected operator who could influence a pending property case.

### Pretext

The sender demanded INR 15–20 lakh in exchange for securing a favourable court outcome and threatened death if the demand was not met. The prosecution later attempted to connect the communications to accused persons through SIM/CAF/CDR and related electronic material.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Claimed privileged access to judicial/police systems coupled with violent threats.

### Requested action

Pay INR 15–20 lakh in return for a favourable court order and to avoid threatened harm.

### Victim action / consequence

The public judgment describes repeated demands and threats but does not establish delivery of the demanded property; the court treated the extortion case as unproved.

## Evidence map

- Phone/SIM evidence: `yes`
- CDR/telecom evidence: `yes`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `yes`
- Other reported evidence: The prosecution relied on CAF/KYC, CDR and other secondary electronic records, but the court identified conflicting SIM-registration evidence, missing witnesses and invalid Section 65-B certification.

## Attribution analysis

### Attribution target

Accused persons alleged to have operated the court-connected persona and threatening communications.

### Basis

- Primary: `sim_or_subscriber_record`
- Secondary: `cdr_or_telecom_record`

### Attribution strength

**unclear**

### Limitations

The final court found the prosecution failed to prove the accused sent the messages or committed the charged offences. SIM-registration evidence conflicted and electronic records were held inadmissible for want of valid Section 65-B certification.

### Alternative explanation

The unknown “court staff” persona may not have been operated by the accused persons charged; subscriber/CAF association did not resolve actual use of the critical number.

### v0.2.0 functional actor coding

- **Purported court-connected extortion operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Accused No.1 alleged SIM/message operator**: identity `identified`; victim-facing function `yes`; financial function `no`. paper functional override: victim-facing conduct
- **Accused No.2 alleged evidence-destruction role**: identity `identified`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function

## Primary evidentiary gap

Admissible, authenticated telecom/electronic records and reliable subscriber/device evidence connecting the critical communications to the accused human operators.

## Coding decisions / research notes

Included specifically for evidentiary failure and final acquittal, not as a finding that no social-engineering attempt occurred. Second-pass source-to-code and privacy audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
