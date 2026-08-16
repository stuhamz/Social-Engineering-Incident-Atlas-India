# SEIAI-0009: Hacked superior WhatsApp payment impersonation

## Record status

- Case ID: `SEIAI-0009`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0009-01 | T1 | bail_order | Rajan Kumar v. State of NCT of Delhi and Anr., 1 July 2025 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: FIR No.28/2025, Cyber Police Station West Delhi
- Public status coded: `investigation`
- Disposition in reviewed source: Anticipatory bail denied on 1 July 2025; investigation ongoing.

## Neutral case summary

An employee received payment requests through the WhatsApp account of his reporting officer, a senior public-sector executive, and transferred INR 45,000 before a third request prompted verification. The officer's account had been hacked. Investigation linked the beneficiary accounts and a mobile number to the applicant, found that one account had been opened a day before the fraud, and identified similar complaints involving the same accounts. The case functions as a compact Indian analogue of executive-impersonation/BEC-style social engineering.

## Reconstruction

### Target

- Target type: `employee`
- Sector/context: government / public sector organisation
- Target selection known: `yes`

### Reconnaissance

- Coded: `unknown`
- Detail: The fraud exploited a compromised WhatsApp account within an existing superior-subordinate communication context. The source does not establish a separate pre-contact reconnaissance process by the fraudster.

### Initial contact

While the complainant was conversing with his reporting officer on WhatsApp, a request appeared asking him to transfer money to Rajan Kumar.

### Pretext

The message appeared to come from the complainant's reporting officer, first requesting INR 20,000 and then INR 25,000. A third request for INR 30,000 triggered verification, revealing that the officer's WhatsApp account had been hacked.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** no.
- **Urgency:** yes.
- **Trust / legitimacy:** yes.
- **Scarcity:** no.
- **Reciprocity:** no.
- **Isolation:** no.
- **Repeated contact:** yes.
- **Other documented mechanism:** Exploitation of an existing organisational trust channel and superior authority; low-value escalation before a third request triggered verification.

### Requested action

Transfer INR 20,000, then INR 25,000, followed by a further INR 30,000 request.

### Victim action

The complainant transferred INR 45,000 through Paytm and Mobikwik before verifying the request.

### Consequence

- Financial loss recorded for this incident/victim: INR 45000
- Credential compromise: `unknown`
- Device compromise: `unknown`
- Payment method: `wallet`
- Reported mule/intermediary accounts: `yes`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Phone / SIM / subscriber records | Association between a number/SIM/subscriber/device and the investigation | Who authored a specific communication or possessed the device at every relevant moment |
| CDR / telecom records | Communication relationships, timing, frequency, and sometimes location context | The content of communications or criminal intent by themselves |
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| Chat / message evidence | Content, sequence, personas, requests, or coordination described in messages | Human authorship unless account/device attribution is independently supported |
| Social-media / profile evidence | Use of an online persona or account in the incident | Who controlled the persona unless platform/device evidence supports it |
| Other reported evidence | Jio Payment Bank and India Post Payment Bank accounts in applicant's name; CAF/CDR linked fraud mobile number to applicant; one account opened a day before the fraud and linked to three other cyber complaints. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Rajan Kumar's alleged role as recipient/controller of payment accounts and mobile number connected to the impersonation fraud.

### Primary basis

`bank_account_or_money_flow`

Secondary basis: `cdr_or_telecom_record`

### Attribution strength

**moderate**

### Limitations

The court stated that the petitioner allegedly hacked the superior's WhatsApp account, but the public order's strongest described evidence concerns accounts, mobile linkage, repeated complaints and use of funds rather than a detailed forensic account-takeover analysis.

### Alternative explanation

The applicant claimed a friend had taken his account details for receiving funds from abroad and denied the offence, although he returned the cheated amount.

## Primary evidentiary gap

Forensic/platform evidence showing how the superior's WhatsApp account was taken over and directly linking the takeover session/device to the accused.

## Legal / procedural notes

BNS 318(4); BNS 319(2)

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

Useful bridge between account takeover and social engineering: the technical compromise created the trusted identity, while the fraud itself depended on organisational authority and contextual trust.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
