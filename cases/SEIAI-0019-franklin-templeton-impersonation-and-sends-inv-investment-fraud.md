# SEIAI-0019: Franklin Templeton impersonation and SENDS INV investment fraud

## Record status

- Case ID: `SEIAI-0019`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0019-01 | T1 | `bail_order` | Hemant Dayaram Barkade v. State of Gujarat, 3 August 2026 | https://indiankanoon.org/doc/17847652/ |

## Procedural posture

**Case status:** `trial`. Successive regular-bail application after charge sheet dismissed on 3 August 2026.

## Neutral case summary

A Gujarat complainant was added to a Franklin Templeton-branded WhatsApp investment group, induced to install SENDS INV and transferred INR 8.72 million. The court record links INR 975,000 from the complainant to an NGO account associated with the applicant and notes many NCRP complaints against that account, but victim-facing operator identity remains separate.

## Reconstruction

### 1. Target

Target type: `investor`. Sector/context: retail investment.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

The complainant was added to a WhatsApp group named A13 Stock Sharing Group by persons allegedly impersonating employees of Franklin Templeton Group.

### 4. Pretext

The group promised high returns from stock-market trading and induced the complainant to download the SENDS INV application and transfer funds into designated accounts.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Use of a well-known investment brand and a dedicated app created institutional legitimacy.

### 6. Requested action

Download SENDS INV and transfer investment funds to supplied accounts.

### 7. Victim action

The complainant transferred INR 87.20 lakh and received neither the amount nor the promised benefit.

### 8. Consequence

Financial loss field: **INR 8,720,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0019-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0019-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0019-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0019-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Applicant-associated NGO bank account that allegedly received INR 9.75 lakh from the focal complainant and commission from cyber-fraud proceeds.

### Primary basis

`bank_account_or_money_flow`.

### Alternative explanation

The account was jointly operated by NGO office bearers and the applicant disputed knowledge/connection to the broader fraud.

### Attribution strength

**`moderate`**

### Limitations

The source provides direct financial linkage to the applicant-associated account but does not establish that the applicant operated the Franklin Templeton identity, WhatsApp group or SENDS INV application.

### v0.2.0 functional actor coding

- **Franklin Templeton/A13 group impersonation operator(s)**: identity `partially_identified`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **SENDS INV application operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **NGO-linked beneficiary-account actor**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

App/WhatsApp control records and device/platform evidence connecting the victim-facing identities to the downstream recipient network.

## Legal / procedural notes

Source-reported provisions: BNS 318(4); IT Act 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `investment_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- The source reports 21 NCRP complaints connected with the NGO account; these are contextual and are not counted as separate Atlas incidents here.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
