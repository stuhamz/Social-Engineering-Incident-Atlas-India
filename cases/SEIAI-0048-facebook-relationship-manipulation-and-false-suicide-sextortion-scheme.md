# SEIAI-0048: Facebook relationship manipulation and false-suicide sextortion scheme

## Record status

- Case ID: `SEIAI-0048`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0048-01 | T1 | final_judgment | Pritam Mahant v. State of Chhattisgarh, 14 May 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Chhattisgarh High Court
- Case / proceeding: CRMP No.1371/2026; Crime No.11/2024, Cyber Range Bilaspur
- Public status coded: `judgment`
- Disposition: On 14 May 2026 the Chhattisgarh High Court quashed the remaining criminal proceedings after an amicable settlement; the order did not adjudicate the underlying allegations on merits.

## Neutral case summary

A Facebook friendship developed into sustained WhatsApp communication and emotional disclosure. The complainant alleged that sympathy-based transfers were followed by threats of a false suicide case, police complaint and circulation of obscene material, leading to total payments of about INR 2.03 million. The later High Court closure was compromise-based rather than an attribution finding.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: personal / relationship
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `yes`
- Detail: The complainant shared family problems during sustained WhatsApp communications; the subsequent pressure exploited that disclosed emotional context.

### Initial contact

The complainant accepted a Facebook friend request and began WhatsApp calls/chats with the online persona, sharing details of family problems.

### Pretext

The persona described abandonment/harassment by her family and induced transfers using a QR code. After an in-person meeting, callers claiming to be her friends/associates threatened to implicate the complainant in a false suicide/police case and to circulate obscene photographs/videos unless further payments were made.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Relationship-building, emotional disclosure, sympathy, shame/reputational threat and fear of false criminal implication.

### Requested action

Transfer money online and in cash, and continue paying under threats of a false suicide/police case and publication of intimate/obscene material.

### Victim action / consequence

The complainant alleged online transfers of INR 729,199 and cash payments of INR 1,300,000, totalling INR 2,029,199.

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
- Other reported evidence: The prosecution narrative refers to Facebook/WhatsApp communications, QR-code transfers, handwritten notes, obscene photographs/videos and later charge-sheet proceedings.

## Attribution analysis

### Attribution target

Petitioners’ alleged participation in the relationship/extortion scheme, distinct from the unresolved operator identity of each online persona and threatening call.

### Basis

- Primary: `documentary_record`
- Secondary: `witness_or_statement`

### Attribution strength

**unclear**

### Limitations

The High Court’s 2026 judgment quashed proceedings on the basis of compromise, not a merits determination of which petitioner operated each persona, call or payment channel. The source does not reproduce a detailed actor-specific digital attribution chain.

### Alternative explanation

Settlement/quashing does not establish innocence or guilt, and the existence of a charged petitioner does not by itself identify the original Facebook/WhatsApp operator.

### v0.2.0 functional actor coding

- **Facebook/WhatsApp relationship persona operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **False-suicide/police threat caller cluster**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Petitioners’ alleged scheme participation**: identity `identified`; victim-facing function `no`; financial function `uncertain`. paper boundary: focal financial linkage incomplete

## Primary evidentiary gap

Platform, device, telecom and payment records mapping the social persona, threatening callers and financial recipients to individual actors.

## Coding decisions / research notes

Included because it has a clear focal victim and attack sequence, unlike network-only records screened out during the same batch. Second-pass source-to-code and privacy audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
