# SEIAI-0004: Canada relative and medical emergency impersonation fraud

## Record status

- Case ID: `SEIAI-0004`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0004-01 | T1 | bail_order | Ratan Lal v. State of Haryana, 21 January 2026 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: FIR No.14 dated 22.04.2025
- Public status coded: `trial`
- Disposition in reviewed source: Regular bail granted on 21 January 2026; trial ongoing.

## Neutral case summary

A Haryana victim was contacted on WhatsApp by a person impersonating a real relative living in Canada. The scheme used a forged transfer receipt and a second caller posing as an Axis Bank official to make the fake INR 16.15 lakh incoming transfer appear genuine. The relative then invoked a medical emergency and a crying third caller to induce an urgent INR 400,000 transfer. The victim detected the fraud by asking personal family questions the impersonator could not answer.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: not reported
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `unknown`
- Detail: The impersonator used the name of a real relative, Satpal, who lived in Canada, and the pretext incorporated the victim's bank details. The public source does not establish how those details were obtained, so a separate reconnaissance stage is not inferred.

### Initial contact

The complainant received a WhatsApp call from a person claiming to be his Canada-based relative Satpal.

### Pretext

The impersonator claimed he would send INR 16.15 lakh to the complainant before returning to India, sent a fake transfer receipt, and a separate caller posed as an Axis Bank head-office employee to corroborate the transfer. The fake relative then requested urgent funds for a purported associate's hospitalized wife.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** no.
- **Urgency:** yes.
- **Trust / legitimacy:** yes.
- **Scarcity:** no.
- **Reciprocity:** yes.
- **Isolation:** no.
- **Repeated contact:** yes.
- **Other documented mechanism:** Layered corroboration using an apparent bank official; emotional pressure through a crying caller and medical emergency; exploitation of kinship and reciprocity after a fake incoming transfer.

### Requested action

Provide bank details/blank cheque image and urgently transfer INR 400,000, followed by a request for an additional INR 200,000.

### Victim action

The complainant sent a blank cheque image and transferred INR 400,000 before challenging the impersonator with family-verification questions.

### Consequence

- Financial loss recorded for this incident/victim: INR 400000
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`
- Reported mule/intermediary accounts: `yes`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Phone / SIM / subscriber records | Association between a number/SIM/subscriber/device and the investigation | Who authored a specific communication or possessed the device at every relevant moment |
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| Chat / message evidence | Content, sequence, personas, requests, or coordination described in messages | Human authorship unless account/device attribution is independently supported |
| Other reported evidence | Fake INR 16.15 lakh transfer receipt sent on WhatsApp; beneficiary account belonged to petitioner's mother and had petitioner's mobile number registered. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Petitioner Ratan Lal's alleged downstream role connected to the beneficiary account and registered mobile number.

### Primary basis

`bank_account_or_money_flow`

Secondary basis: `sim_or_subscriber_record`

### Attribution strength

**limited**

### Limitations

The order does not establish that the petitioner made the relative, bank-official, or medical-emergency calls. The bank account was in his mother's name and the petitioner disputed inducement.

### Alternative explanation

The petitioner may have been associated with the beneficiary account without being the social-engineering caller; knowledge and commission allegations remained prosecution claims.

## Primary evidentiary gap

Direct linkage of the impersonating WhatsApp/phone numbers to the human operators and authenticated device/platform records showing coordination with the beneficiary account.

## Legal / procedural notes

BNS 318(4); BNS 319; BNS 336(3); BNS 338; BNS 340; BNS 61(B) as reported in source

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

This case is especially valuable for studying layered corroboration, emotional urgency, and family-knowledge verification as a defensive social-engineering countermeasure.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
