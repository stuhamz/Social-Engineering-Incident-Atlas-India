# SEIAI-0007: Sangam.com NRI matrimonial impersonation fraud

## Record status

- Case ID: `SEIAI-0007`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0007-01 | T1 | bail_order | Paul Onyeji Atuh v. State NCT of Delhi, 11 July 2025 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: FIR No.07/2022 dated 31.03.2022
- Public status coded: `trial`
- Disposition in reviewed source: Regular bail denied in July 2025; charges had been framed and supplementary charge sheet/FSL material placed on record.

## Neutral case summary

A woman communicating with a purported Canadian doctor through a matrimonial site and WhatsApp was told that he had been detained at IGI Airport with foreign currency. A fake Customs official demanded payment, resulting in INR 55,900 loss before a second demand exposed the fraud. Investigation later identified 17 victims with combined losses of INR 3,373,800 and recovered multiple devices, fake profiles, forged identity material, spoof-calling tools, WhatsApp chats and banking data. The case provides unusually rich forensic attribution material for relationship-based social engineering.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: matrimonial platform user
- Target selection known: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: Victims were approached through fake matrimonial profiles tailored to relationship expectations; devices later contained multiple fictitious identities, scripts, victim photographs and passports.

### Initial contact

The complainant met 'Dr. Ankit Verma', purportedly from Canada, through Sangam.com and continued communication on WhatsApp.

### Pretext

After relationship-building, the victim was told the supposed Canadian contact had arrived at IGI Airport and was detained by Customs for excessive foreign currency. A second caller impersonating Customs demanded INR 55,900 as a penalty and later sought another INR 150,000 for Ministry of Finance clearance.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** yes.
- **Urgency:** yes.
- **Trust / legitimacy:** yes.
- **Scarcity:** no.
- **Reciprocity:** yes.
- **Isolation:** no.
- **Repeated contact:** yes.
- **Other documented mechanism:** Relationship grooming followed by crisis escalation and authority handoff to a fake Customs official.

### Requested action

Transfer an airport/customs penalty and then further clearance money.

### Victim action

The complainant transferred INR 55,900 in two instalments, then refused a further INR 150,000 demand and reported the fraud.

### Consequence

- Financial loss recorded for this incident/victim: INR 55900
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
| IP / login records | Access from a network/address or account at a given time | Human identity or exclusive control by themselves |
| Device evidence | Association with devices and any artefacts described in the public source | A particular role unless relevant artefacts and provenance support it |
| Chat / message evidence | Content, sequence, personas, requests, or coordination described in messages | Human authorship unless account/device attribution is independently supported |
| Email evidence | Email content, headers, account use, or communication sequence where described | Human authorship or device control without supporting attribution |
| Social-media / profile evidence | Use of an online persona or account in the incident | Who controlled the persona unless platform/device evidence supports it |
| CCTV / video evidence | Physical presence or cash-out activity where the image and time are sufficiently linked | Participation in earlier online communications by itself |
| Platform-provider records | Account metadata, registration, access, or provider-side linkage where described | Complete human attribution unless corroborated |
| Forensic examination | Artefacts recovered through the examination as reported by the source | Facts beyond the documented scope of the examination |
| Other reported evidence | Fake profiles, forged passports/identity material, DingTone spoof-calling app, FSL-recovered WhatsApp chats, bank screenshots, victim photographs, common account details, ATM CCTV and profile IP data. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Paul Onyeji Atuh's alleged operation of multiple fake identities and participation in a broader matrimonial/social-media fraud syndicate.

### Primary basis

`device_possession_or_forensics`

Secondary basis: `multiple_independent_sources`

### Attribution strength

**strong**

### Limitations

The case remains at trial stage and the applicant denied direct inducement of the complainant; strength reflects extensive FSL/device and cross-source linkage to the operational pattern, not a final conviction.

### Alternative explanation

The defence argued that none of the beneficiary accounts were in the applicant's name and that residence/location with co-accused did not prove direct participation.

## Primary evidentiary gap

Victim-specific end-to-end mapping of which seized device/account/user performed each interaction, beyond strong pattern and shared-account evidence.

## Legal / procedural notes

IPC 420; IPC 419; IPC 170; IPC 34; IPC 467; IPC 468; IPC 471; IPC 120B; IT Act 66D

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

Known account count of 26 is the number of bank accounts the order says were used by the accused network, not the number used in the single complainant's transaction.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
