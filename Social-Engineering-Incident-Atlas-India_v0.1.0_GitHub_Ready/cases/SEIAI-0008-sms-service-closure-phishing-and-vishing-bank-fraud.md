# SEIAI-0008: SMS-service closure phishing and vishing bank fraud

## Record status

- Case ID: `SEIAI-0008`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0008-01 | T1 | final_judgment | Hare Ram Singh v. Reserve Bank of India & Ors., 18 November 2024 |
| SRC-SEIAI-0008-02 | T1 | appellate_judgment | State Bank of India v. Hare Ram Singh & Anr., 29 May 2026 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: LPA 52/2025 arising from W.P.(C) 13497/2022
- Public status coded: `judgment`
- Disposition in reviewed source: Delhi High Court Division Bench allowed SBI's appeal on 29 May 2026 and set aside the earlier single-judge judgment; it stressed that unresolved technical questions required forensic examination rather than inference in writ proceedings.

## Neutral case summary

An academician received an SMS link and a call warning that his SMS service would be closed unless he clicked. After doing so, two internet-banking transactions totalling INR 260,000 were executed. The victim denied sharing OTPs. The later appellate judgment is especially valuable for the Atlas because the court refused to infer the exact compromise mechanism without technical or forensic evidence, highlighting the gap between a documented social-engineering trigger and unresolved technical causation.

## Reconstruction

### Target

- Target type: `professional`
- Sector/context: academician
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance process is documented in the public source.

### Initial contact

The victim received an SMS containing a link followed by a phone call from an unknown person.

### Pretext

The caller said the victim had to click the link or his SMS service would be closed. After he clicked, unauthorised internet-banking transactions were made.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** yes.
- **Urgency:** yes.
- **Trust / legitimacy:** yes.
- **Scarcity:** no.
- **Reciprocity:** no.
- **Isolation:** no.
- **Repeated contact:** no.
- **Other documented mechanism:** Service-interruption threat used to induce a security-sensitive action.

### Requested action

Click the SMS link to keep mobile/SMS service active.

### Victim action

The victim clicked the link; INR 260,000 was then transferred through two internet-banking transactions. He immediately reported the unauthorised transactions.

### Consequence

- Financial loss recorded for this incident/victim: INR 260000
- Credential compromise: `unknown`
- Device compromise: `unknown`
- Payment method: `multiple`
- Reported mule/intermediary accounts: `unknown`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Phone / SIM / subscriber records | Association between a number/SIM/subscriber/device and the investigation | Who authored a specific communication or possessed the device at every relevant moment |
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| IP / login records | Access from a network/address or account at a given time | Human identity or exclusive control by themselves |
| Other reported evidence | Internet-banking login timestamps, OTP delivery records, beneficiary details, merchant code, RRN and IP address were examined in banking/ombudsman proceedings. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Unknown attacker and mechanism by which banking credentials/OTPs were compromised.

### Primary basis

`ip_or_login_record`

Secondary basis: `bank_account_or_money_flow`

### Attribution strength

**unclear**

### Limitations

The litigation established the victim interacted with a suspicious link and that valid internet-banking authentication was used, but the exact technical compromise mechanism and attacker identity were not forensically established.

### Alternative explanation

The victim maintained he never shared OTPs and that malware or compromise transmitted credentials; the bank argued that clicking the suspicious link constituted customer negligence and enabled credential misuse.

## Primary evidentiary gap

Technical forensic examination of the device/link and attacker infrastructure sufficient to determine how credentials and OTPs were obtained and to identify the operator.

## Legal / procedural notes

RBI Circular dated 06.07.2017 on customer liability for unauthorised electronic banking transactions

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

This is a civil/banking-liability case rather than a criminal prosecution, included because the underlying social-engineering incident and evidentiary uncertainty are richly documented.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
