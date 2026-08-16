# SEIAI-0010: WhatsApp sexual blackmail and fake cyber-offence extortion

## Record status

- Case ID: `SEIAI-0010`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0010-01 | T1 | bail_order | Waris v. State of Haryana, 24 February 2026 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: FIR No.14 dated 04.05.2023
- Public status coded: `investigation`
- Disposition in reviewed source: Anticipatory bail denied on 24 February 2026; investigation/trial merits left open.

## Neutral case summary

A Haryana complainant received a sexual video call from an unknown woman, disconnected, and was later contacted by a caller who sent the recording, claimed he had committed a cyber offence, threatened FIR registration and widespread publication, and demanded payment. The victim transferred INR 1,347,499 to multiple accounts. The case captures a coercive social-engineering pattern built around shame, reputational threat and pseudo-legal pressure, while public attribution to the bail applicant remains comparatively weak.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: not reported
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance process is documented in the public source.

### Initial contact

The complainant received an unknown video call from a nude woman and was asked through WhatsApp to become nude; he disconnected and deleted WhatsApp.

### Pretext

Three days later a caller named Rahul sent the recorded video, claimed the victim had committed a cyber offence and that the video had been uploaded to major platforms, and demanded money to avoid FIR registration and publication.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** yes.
- **Urgency:** yes.
- **Trust / legitimacy:** no.
- **Scarcity:** no.
- **Reciprocity:** no.
- **Isolation:** yes.
- **Repeated contact:** yes.
- **Other documented mechanism:** Sexual shame, reputational threat and fear of criminal process were combined to coerce escalating payments.

### Requested action

Pay INR 71,500 initially to avoid FIR registration and further payments to suppress the video/threats.

### Victim action

The complainant made multiple transfers totalling INR 1,347,499 to several accounts.

### Consequence

- Financial loss recorded for this incident/victim: INR 1347499
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`
- Reported mule/intermediary accounts: `yes`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| Chat / message evidence | Content, sequence, personas, requests, or coordination described in messages | Human authorship unless account/device attribution is independently supported |
| Social-media / profile evidence | Use of an online persona or account in the incident | Who controlled the persona unless platform/device evidence supports it |
| Other reported evidence | Recorded sexual video, WhatsApp messages, beneficiary accounts and co-accused disclosure statements are described in the public order. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Petitioner Waris's alleged role in the extortion network.

### Primary basis

`co_accused_link`

Secondary basis: `bank_account_or_money_flow`

### Attribution strength

**limited**

### Limitations

The order states the petitioner's involvement was based on a co-accused disclosure and alleged sharing of proceeds; it does not directly connect him to the initial video call or Rahul persona.

### Alternative explanation

The petitioner argued that he was implicated only through a co-accused disclosure statement and had no independently established role.

## Primary evidentiary gap

Direct device/account/platform evidence connecting the petitioner to the initial WhatsApp/video identities or extortion communications.

## Legal / procedural notes

IPC 384; IPC 419; IPC 420; IPC 467; IPC 468; IPC 471; IPC 120-B; IPC 34; IT Act 66; IT Act 66C; IT Act 67; IT Act 67A

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

Added `sextortion` as a controlled attack category during v0.1 because the existing taxonomy did not adequately capture this pattern.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
