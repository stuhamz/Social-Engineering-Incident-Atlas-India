# SEIAI-0006: Tekku Samurai cross-border tech-support fraud

## Record status

- Case ID: `SEIAI-0006`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0006-01 | T1 | bail_order | Komal Kumar v. Central Bureau of Investigation, 2 February 2026 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court / CBI
- Case / FIR: RC221/2025/E0006
- Public status coded: `trial`
- Disposition in reviewed source: Regular bail denied on 2 February 2026; supplementary charge sheet had been filed.

## Neutral case summary

CBI alleged that an India-based call centre in Varanasi targeted Japanese computer users through malicious virus pop-ups and phishing prompts, then impersonated Microsoft or Apple personnel to induce remote access and payment. Searches recovered devices containing fake IDs, victim banking images, gift-card data, Japanese call lists, scripts and VoIP logs. Partnership, KYC, rent and bank records linked the applicant to the call-centre business. This is the pilot's clearest example of social engineering embedded in an organised technical infrastructure.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: Japanese computer users
- Target selection known: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: Call-centre devices contained lists of Japanese telephone numbers and scripts/quotations, indicating systematic targeting of Japanese victims.

### Initial contact

Victims encountered fake virus alerts/phishing prompts on malicious URLs and were instructed to call a displayed number.

### Pretext

Callers impersonating Microsoft or Apple claimed the victim's computer had technical problems, induced installation of remote-access software or purchase of antivirus/service packages, and obtained access to sensitive financial information.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** yes.
- **Urgency:** yes.
- **Trust / legitimacy:** yes.
- **Scarcity:** no.
- **Reciprocity:** no.
- **Isolation:** unknown.
- **Repeated contact:** yes.
- **Other documented mechanism:** Panic induction through fake virus alerts and brand impersonation, followed by scripted technical authority and remote-assistance framing.

### Requested action

Call the displayed number, install remote-access software or purchase purported technical services, and provide/payment-sensitive information.

### Victim action

Victims installed remote-access software and/or paid through gift cards or other channels; four Japanese victims were specifically identified in the FIR.

### Consequence

- Financial loss recorded for this incident/victim: not coded as a single amount
- Credential compromise: `yes`
- Device compromise: `yes`
- Payment method: `gift_card_or_voucher`
- Reported mule/intermediary accounts: `unknown`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Phone / SIM / subscriber records | Association between a number/SIM/subscriber/device and the investigation | Who authored a specific communication or possessed the device at every relevant moment |
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| Device evidence | Association with devices and any artefacts described in the public source | A particular role unless relevant artefacts and provenance support it |
| Chat / message evidence | Content, sequence, personas, requests, or coordination described in messages | Human authorship unless account/device attribution is independently supported |
| Platform-provider records | Account metadata, registration, access, or provider-side linkage where described | Complete human attribution unless corroborated |
| Forensic examination | Artefacts recovered through the examination as reported by the source | Facts beyond the documented scope of the examination |
| Other reported evidence | SSDs, call logs, Japanese phone-number lists, fake Microsoft identity cards, victim banking screenshots, gift-card screenshots/codes, pitching scripts and quotations, partnership/rent/KYC records and bank profit transfers. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Tekku Samurai call-centre operation and Komal Kumar's alleged ownership/management role.

### Primary basis

`device_possession_or_forensics`

Secondary basis: `multiple_independent_sources`

### Attribution strength

**strong**

### Limitations

The order concerns bail and does not finally adjudicate guilt. It does not establish that the applicant personally made each victim call; the strength code concerns ownership/operational linkage to the documented call-centre system.

### Alternative explanation

The applicant argued he was merely an owner and that financial transfers from Bidder Media were legitimate commercial transactions unrelated to victim fraud.

## Primary evidentiary gap

Victim-specific linkage between particular call-centre agents/sessions and each fraudulent loss, plus complete foreign payment and remote-access logs.

## Legal / procedural notes

BNS 61(2); BNS 308; BNS 318(4); BNS 319(2); IT Act 66C; IT Act 66D; IT Act 66 read with 43

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

Cross-border case included because the investigated operation and evidence were materially situated in India even though the named victims were in Japan.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
