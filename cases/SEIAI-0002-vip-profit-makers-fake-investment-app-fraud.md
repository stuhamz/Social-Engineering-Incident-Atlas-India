# SEIAI-0002: VIP Profit Makers fake investment app fraud

## Record status

- Case ID: `SEIAI-0002`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0002-01 | T1 | bail_order | Shivam Goyal v. State of Haryana, 27 February 2026 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: FIR No.378 dated 18.10.2025
- Public status coded: `trial`
- Disposition in reviewed source: Regular bail granted on 27 February 2026; trial pending and merits left open.

## Neutral case summary

A Gurugram complainant was approached on WhatsApp by a purported representative of an investment company, added to a large group displaying apparent investment success, and induced to install a fake investment app. He transferred INR 8,248,021 to multiple bank accounts. When withdrawal was attempted, further money was demanded. The public bail order provides a rich social-engineering reconstruction but limited accused-specific attribution evidence.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: retail investor
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance process is documented in the public source.

### Initial contact

In August 2025, the complainant received a WhatsApp call from a person claiming association with MUNOTH CAPITAL LTD and offering investment plans.

### Pretext

The caller claimed membership in a SEBI-listed investment company, added the complainant to a WhatsApp group named VIP PROFIT MAKERS with about 100 members, showed apparent examples of money doubling, and induced him to install an ALFA NAVIGATOR app and transfer funds to accounts supplied through the app.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** no.
- **Urgency:** no.
- **Trust / legitimacy:** yes.
- **Scarcity:** no.
- **Reciprocity:** no.
- **Isolation:** no.
- **Repeated contact:** yes.
- **Other documented mechanism:** Social proof through a large WhatsApp group and apparent examples of profitable investments; legitimacy borrowing from a claimed SEBI-listed company and an app-store link.

### Requested action

Join the investment group, install/register on ALFA NAVIGATOR, and transfer investment funds to designated bank accounts.

### Victim action

The complainant transferred multiple amounts to several bank accounts and later attempted to withdraw his funds.

### Consequence

- Financial loss recorded for this incident/victim: INR 8248021
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`
- Reported mule/intermediary accounts: `yes`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| Chat / message evidence | Content, sequence, personas, requests, or coordination described in messages | Human authorship unless account/device attribution is independently supported |
| Other reported evidence | FIR reproduces the WhatsApp contact, app URL, named group, and detailed beneficiary bank accounts and transfer amounts. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Petitioner Shivam Goyal and any operators of the WhatsApp group / app infrastructure.

### Primary basis

`not specified`

Secondary basis: `not specified`

### Attribution strength

**unclear**

### Limitations

The bail order reproduces a detailed victim narrative but gives little detail explaining how the petitioner was technically or financially linked to the original inducement, beyond the fact that he was arrested and prosecuted in the FIR.

### Alternative explanation

The petitioner claimed that he had himself been duped by another person and was falsely implicated.

## Primary evidentiary gap

Specific digital or financial evidence connecting the petitioner to operation of the WhatsApp identity, ALFA NAVIGATOR infrastructure, or beneficiary accounts.

## Legal / procedural notes

BNS 318(4); BNS 61(2)

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

Useful example of social proof and legitimacy engineering in fake-investment fraud. The FIR excerpt lists nine transfers across seven distinct beneficiary account numbers. `known_account_count` is therefore coded as 7.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
