# SEIAI-0050: Spoofed CBI and MHA official impersonation extortion conspiracy

## Record status

- Case ID: `SEIAI-0050`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0050-01 | T1 | appellate_judgment | Selvam Ramraj v. State of Telangana, 2 March 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Telangana High Court
- Case / proceeding: Criminal Revision Case No.199/2025; C.C.No.6061/2024; CBI RC 01(A)/2020
- Public status coded: `trial`
- Disposition: Telangana High Court dismissed the criminal revision on 2 March 2026, holding there was sufficient material for the petitioner to face trial and that a mini-trial was impermissible at the discharge stage.

## Neutral case summary

A CBI-investigated conspiracy allegedly used spoofed official government numbers and claimed access to senior CBI/MHA officials to demand huge payments from persons facing investigations in return for favourable outcomes. The case expands the Atlas into official-influence extortion and is useful for separating charge-stage evidentiary sufficiency from final attribution.

## Reconstruction

### Target

- Target type: `executive`
- Sector/context: business executive / person facing investigation
- Target selection known: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: The alleged scheme targeted persons facing investigations and used case-specific promises of favourable intervention, official identities/numbers and intermediary relationships.

### Initial contact

The prosecution alleged a conspiracy in which spoofed official government numbers and intermediaries were used to approach persons facing investigations.

### Pretext

The actors allegedly impersonated or invoked senior Government of India/CBI/MHA authority, promised favourable settlement of investigative matters and demanded enormous payments, including a source-described INR 100 crore demand in one instance.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Official-number spoofing, claimed access to senior government authority and exploitation of targets’ fear of ongoing investigations.

### Requested action

Pay large sums in return for purported influence over or favourable resolution of investigative/criminal matters.

### Victim action / consequence

The reviewed revision order describes demands and attempted extortion; it does not establish a completed focal transfer suitable for coding as financial loss.

## Evidence map

- Phone/SIM evidence: `yes`
- CDR/telecom evidence: `yes`
- Bank/transaction evidence: `not_reported`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Other reported evidence: The prosecution material described WhatsApp chats, telephonic surveillance, spoofed calls from official government numbers, witness statements and alleged coordination among accused persons.

## Attribution analysis

### Attribution target

Petitioner’s alleged coordinator/conspiracy role in an extortion-by-impersonation network.

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `message_or_email_content`

### Attribution strength

**moderate**

### Limitations

The High Court was reviewing a discharge/revision question, not deciding guilt. It found sufficient material to proceed but expressly left proof of the charges to trial.

### Alternative explanation

The petitioner argued that he was himself a victim/was excluded from the core conspiracy and that the prosecution material did not conclusively establish his involvement.

### v0.2.0 functional actor coding

- **Spoofed senior-government-official operator cluster**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Petitioner alleged coordinator/intermediary role**: identity `identified`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Extortion-by-impersonation network**: identity `actor_cluster`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function

## Primary evidentiary gap

Trial-tested evidence connecting each spoofed call, government persona and extortion demand to specific human operators and establishing the petitioner’s knowledge/intent beyond the charge-stage threshold.

## Coding decisions / research notes

No financial_loss_inr is coded because the reviewed order describes demands, including INR 100 crore, but does not establish a completed focal payment. Second-pass source-to-code and privacy audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
