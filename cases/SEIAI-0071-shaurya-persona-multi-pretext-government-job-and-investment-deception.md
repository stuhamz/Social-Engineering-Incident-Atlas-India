# SEIAI-0071: Shaurya persona multi-pretext government-job and investment deception

## Record status

- Case ID: `SEIAI-0071`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0071-01 | T1 | bail_order | Rishabh Gehlot v. State (NCT of Delhi), 13 April 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / proceeding: BAIL APPLN. 2071/2025
- Public status coded: `bail_or_interim`
- Disposition: Regular bail granted; underlying cheating allegations remained for trial.

## Neutral case summary

A Delhi High Court bail order describes a long-running deception using the persona 'Shaurya' and multiple shifting pretexts, including government jobs, tenders, investments and personal emergencies. The prosecution relied on WhatsApp chats, audio recordings and bank statements, while disputing which communications involved the bail applicant.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: employment / retail investment
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The complainant and her daughter allegedly dealt over an extended period with a person using the identity 'Shaurya'.

### Pretext

The persona allegedly promised government jobs, tenders involving MTNL/BMW/Google, investment opportunities and later invoked personal/emergency narratives to obtain further money.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: not separately coded

### Requested action

Pay money under successive job, tender, investment and emergency pretexts.

### Victim action / consequence

The complainant and her daughter allegedly made repeated payments; the public bail order does not state a clean aggregate loss amount.

- Financial loss coded: `not normalized / not reported`
- Payment method: `multiple`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `yes`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: WhatsApp chats; audio recordings; bank statements; phone-possession account.

## Attribution analysis

### Attribution target

Bail applicant's alleged role in the Shaurya persona/payment collection

### Basis

- Primary: `message_or_email_content`
- Secondary: `bank_account_or_money_flow`

### Incident-level attribution strength

**limited**

### Limitations

The prosecution itself distinguished audio conversations involving a co-accused from WhatsApp chats attributed to the Shaurya persona; the applicant disputed that the chats involved him. The source is bail-stage only.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Shaurya persona operator**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Using the Shaurya identity across WhatsApp to induce repeated payments under job, tender, investment and emergency pretexts. Limitation: The prosecution attributed the WhatsApp identity to the applicant through a phone-possession theory, but the applicant disputed the chats and the matter remained at bail stage.
- **Bail applicant with alleged cash/payment collection role**: `financial` / `cashout_actor`; strength `limited`. Conduct assessed: Allegedly receiving cash/payments connected with the Shaurya deception and using a phone said to have been supplied by another person. Limitation: Payment/phone association does not itself prove authorship of every Shaurya communication.

### v0.2.0 functional actor coding

- **Shaurya persona operator**: identity `partially_identified`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Bail applicant with alleged cash/payment collection role**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Device extraction, account/session records and voice/device attribution tying the Shaurya WhatsApp identity and payment collections to identified operators.

## Coding decisions / research notes

v0.2.0 full re-audit: old 2016-2017 range was unsupported. Public bail material does not establish a reliable focal incident year, so incident_year is now not_reported and exact dates are blank. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
