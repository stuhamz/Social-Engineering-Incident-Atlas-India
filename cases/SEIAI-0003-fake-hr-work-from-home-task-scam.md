# SEIAI-0003: Fake HR work-from-home task scam

## Record status

- Case ID: `SEIAI-0003`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0003-01 | T1 | bail_order | Aayush Goyal v. State of NCT of Delhi, 15 December 2025 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: FIR No.44/2025 dated 08.07.2025
- Public status coded: `investigation`
- Disposition in reviewed source: Anticipatory bail granted on 15 December 2025; investigation and trial-related proceedings remained ongoing.

## Neutral case summary

A Delhi complainant was approached through WhatsApp by a fake HR executive offering paid Google review tasks. Small initial payouts established trust, after which the victim was induced to pay for higher-value tasks and to make additional deposits when attempting to recover earnings, losing INR 375,000. Investigation traced funds through mule accounts, CCTV-recorded withdrawals and WhatsApp account-sharing chats, illustrating a multi-layered separation between social-engineering operators and financial infrastructure.

## Reconstruction

### Target

- Target type: `job_seeker`
- Sector/context: work-from-home / online tasks
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance process is documented in the public source.

### Initial contact

The complainant received a WhatsApp call from a woman presenting herself as an HR executive and offering paid work-from-home Google search/review tasks.

### Pretext

The caller promised payment for simple tasks, made small initial payments to build trust, then claimed free task coupons had expired and induced the complainant to pay for higher-income tasks.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** no.
- **Urgency:** yes.
- **Trust / legitimacy:** yes.
- **Scarcity:** yes.
- **Reciprocity:** yes.
- **Isolation:** no.
- **Repeated contact:** yes.
- **Other documented mechanism:** Trust seeding through genuine small payouts before escalating to paid tasks; sunk-cost pressure when further payments were demanded to recover supposed earnings.

### Requested action

Perform online tasks, then make repeated payments for higher-return tasks and additional payments to unlock earnings.

### Victim action

The complainant made repeated deposits and lost INR 375,000.

### Consequence

- Financial loss recorded for this incident/victim: INR 375000
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`
- Reported mule/intermediary accounts: `yes`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Phone / SIM / subscriber records | Association between a number/SIM/subscriber/device and the investigation | Who authored a specific communication or possessed the device at every relevant moment |
| CDR / telecom records | Communication relationships, timing, frequency, and sometimes location context | The content of communications or criminal intent by themselves |
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| Device evidence | Association with devices and any artefacts described in the public source | A particular role unless relevant artefacts and provenance support it |
| Chat / message evidence | Content, sequence, personas, requests, or coordination described in messages | Human authorship unless account/device attribution is independently supported |
| CCTV / video evidence | Physical presence or cash-out activity where the image and time are sufficiently linked | Participation in earlier online communications by itself |
| Platform-provider records | Account metadata, registration, access, or provider-side linkage where described | Complete human attribution unless corroborated |
| Other reported evidence | Calling numbers traced to waho.pro, hosted on a U.S.-based server; bank CCTV recorded cash withdrawal; WhatsApp chats recovered from a co-accused phone showed account details being shared. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Aayush Goyal's alleged role in supplying/circulating mule bank accounts, distinct from the original HR impersonator.

### Primary basis

`message_or_email_content`

Secondary basis: `bank_account_or_money_flow`

### Attribution strength

**moderate**

### Limitations

The complainant did not directly identify the applicant as the inducer. His alleged role arose through co-accused disclosures and WhatsApp chats showing bank-account sharing, rather than direct evidence that he made the original call.

### Alternative explanation

The applicant argued that his cryptocurrency-related activity was legitimate and that he neither received cheated money nor knew the complainant.

## Primary evidentiary gap

Direct linkage between the original HR impersonation account/calling infrastructure and identified human operators, plus full cryptocurrency transaction records tying mule-account circulation to fraudulent proceeds.

## Legal / procedural notes

BNS 318(4); BNS 61(2); BNS 3(5)

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

The source reports the calling infrastructure as waho.pro on a U.S.-based server, supporting a cross-border infrastructure dimension even though the victim and investigated network were in India.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
