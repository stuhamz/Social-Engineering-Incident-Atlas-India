# SEIAI-0049: FedEx narcotics pretext and Mumbai Cyber Crime digital-arrest fraud

## Record status

- Case ID: `SEIAI-0049`
- Coding version: `0.1.4`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0049-01 | T1 | bail_order | Sunil Kumar Dubey v. State of Kerala, 19 March 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Kerala High Court
- Case / proceeding: Bail Application No.1074/2026; Crime No.24/2023, Cyber Crime Police Station Palakkad
- Public status coded: `investigation`
- Disposition: Pre-arrest bail dismissed on 19 March 2026; the Kerala High Court held the investigation was at a preliminary stage and custodial interrogation was necessary.

## Neutral case summary

A Kerala complainant was told that a FedEx parcel to Taiwan contained narcotics and was then threatened by callers posing as Mumbai Cyber Crime police. She transferred about INR 4.5 million. The bail record distinguishes the unidentified victim-facing callers from account controllers and cash-out actors traced through the financial investigation.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: household / personal finance
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is reported in the reviewed source.

### Initial contact

The complainant was called and told that a FedEx parcel purportedly sent by her to Taiwan contained narcotic drugs.

### Pretext

The callers escalated the courier story into a criminal-prosecution threat, presented themselves as Mumbai Cyber Crime police and said the complainant had to pay money to save herself from prosecution.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Courier-to-police escalation, narcotics accusation and fear of criminal prosecution.

### Requested action

Transfer funds purportedly required to avoid or resolve the threatened criminal prosecution.

### Victim action / consequence

The complainant transferred INR 4,499,996. The investigation traced major portions through specific bank accounts and onward transfers/withdrawals.

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Other reported evidence: The court relied on account statements, National Cyber Crime Reporting Portal cash-flow information and investigation findings concerning account opening, onward transfers and cash withdrawal.

## Attribution analysis

### Attribution target

Applicant’s alleged account-control/routing role and other accused persons’ cash-out/financial roles, distinct from the original FedEx/police callers.

### Basis

- Primary: `bank_account_or_money_flow`
- Secondary: `multiple_independent_sources`

### Attribution strength

**moderate**

### Limitations

The bail order provides strong prima facie financial linkage to the applicant’s account but does not establish that the applicant made the original FedEx or police impersonation calls; the investigation was still preliminary.

### Alternative explanation

A bank-account routing role can be narrower than operation of the victim-facing digital-arrest pretext.

## Primary evidentiary gap

Telecom/device evidence identifying the original FedEx and police impersonators and linking those callers to the financial-routing network.

## Coding decisions / research notes

Cross-border dimension reflects the Taiwan courier pretext and multi-state financial routing, not proof that the human operators were outside India. Second-pass source-to-code and privacy audit completed 2026-08-26.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
