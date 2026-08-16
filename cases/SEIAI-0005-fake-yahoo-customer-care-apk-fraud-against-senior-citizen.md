# SEIAI-0005: Fake Yahoo customer care APK fraud against senior citizen

## Record status

- Case ID: `SEIAI-0005`
- Coding version: `0.1`
- Coder: Hamzah
- Date coded: 2026-08-16
- Status: **reviewed**

> This is a research reconstruction from public material. Allegations in bail, investigation, or procedural records are not converted into findings of guilt.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0005-01 | T1 | bail_order | Sahil Khan v. State Govt. of NCT of Delhi, 14 January 2026 |

Full source URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: FIR No.4/2025, PS Cyber South-West
- Public status coded: `investigation`
- Disposition in reviewed source: Anticipatory bail denied on 14 January 2026; investigation continuing.

## Neutral case summary

A Delhi senior citizen searching online for Yahoo support contacted a fraudulent customer-care number, downloaded an APK and disclosed card information. The reported loss eventually reached about INR 26 lakh after linked fixed deposits were accessed. Investigation used bank KYC and transactions, CDR/IPDR/IMEI/location data and ATM CCTV to map an inter-State mule and cash-out network. The case illustrates the evidentiary separation between the social-engineering entry point and downstream financial actors.

## Reconstruction

### Target

- Target type: `elderly_person`
- Sector/context: not reported
- Target selection known: `no`

### Reconnaissance

- Coded: `no`
- Detail: No specific reconnaissance process is documented in the public source.

### Initial contact

A senior citizen searching online for help with a Yahoo email problem contacted a purported customer-care number found through an online search.

### Pretext

The purported support operator induced the complainant to download an APK and persuaded him to provide debit-card details while ostensibly resolving the email problem.

### Social-engineering mechanisms

- **Authority:** yes.
- **Fear:** no.
- **Urgency:** no.
- **Trust / legitimacy:** yes.
- **Scarcity:** no.
- **Reciprocity:** no.
- **Isolation:** no.
- **Repeated contact:** unknown.
- **Other documented mechanism:** Search-result trust transfer: the victim treated a number surfaced through online search as legitimate customer support.

### Requested action

Download an APK and provide debit-card information.

### Victim action

The complainant downloaded the APK and disclosed debit-card details; about INR 14 lakh was initially siphoned and linked fixed deposits were later accessed/liquidated, raising the reported total loss to about INR 26 lakh.

### Consequence

- Financial loss recorded for this incident/victim: INR 2600000
- Credential compromise: `yes`
- Device compromise: `yes`
- Payment method: `multiple`
- Reported mule/intermediary accounts: `yes`

## Evidence map

| Evidence | What it can support in this record | What it does not establish by itself |
|---|---|---|
| Phone / SIM / subscriber records | Association between a number/SIM/subscriber/device and the investigation | Who authored a specific communication or possessed the device at every relevant moment |
| CDR / telecom records | Communication relationships, timing, frequency, and sometimes location context | The content of communications or criminal intent by themselves |
| Bank / transaction records | Movement of funds, beneficiary accounts, timing, and financial linkage | Who conducted the original social-engineering interaction or every account holder's knowledge |
| IP / login records | Access from a network/address or account at a given time | Human identity or exclusive control by themselves |
| CCTV / video evidence | Physical presence or cash-out activity where the image and time are sufficiently linked | Participation in earlier online communications by itself |
| Other reported evidence | KYC/account-opening documents, transaction statements, CDRs, IPDRs, IMEI data, location charts, ATM CCTV and NCRP-linked account information. | Its probative value depends on source, provenance, and corroboration |

## Attribution analysis

### Attribution target

Sahil Khan's alleged cash-out / beneficiary role within an inter-State fraud network, separate from the fake customer-care operator.

### Primary basis

`cctv_or_location`

Secondary basis: `bank_account_or_money_flow`

### Attribution strength

**moderate**

### Limitations

The public order strongly links the applicant to cash withdrawals, location data and receipt of funds but does not establish that he operated the fake customer-care number or APK.

### Alternative explanation

The applicant denied any role and argued that location coincidence was insufficient; original social-engineering and malware operators remain distinct from downstream cash-out actors.

## Primary evidentiary gap

Direct forensic attribution of the fake customer-care number/APK infrastructure and proof linking that operator layer to the downstream financial network.

## Legal / procedural notes

BNS 318(4); BNS 319(2); BNS 61(2); BNS 3(5)

These are source-reported provisions and should not be treated as a fresh legal characterisation by this project.

## Coding decisions / research notes

One of the strongest cases in the pilot for combining human manipulation, malicious software installation and layered digital/physical attribution evidence.

## Manual review checklist

- [x] Re-open the primary T1 source
- [x] Confirm the incident chronology and loss figure
- [x] Confirm the procedural stage
- [x] Confirm that social-engineering mechanisms are source-supported
- [x] Re-check every attribution statement
- [x] Re-check source-stage language for allegations versus findings
- [x] Change `record_status` after the review standard is satisfied
