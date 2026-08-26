# SEIAI-0011: Fake surveillance officer, CBI and judge digital-arrest fraud

## Record status

- Case ID: `SEIAI-0011`
- Coding version: `0.1.1`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0011-01 | T1 | `bail_order` | Oma Kant Gupta v. State of NCT of Delhi Through SHO, 12 March 2026 | https://indiankanoon.org/doc/93611794/ |

## Procedural posture

**Case status:** `investigation`. Anticipatory bail application dismissed on 12 March 2026; merits expressly left open.

## Neutral case summary

A Delhi complainant was subjected to a layered digital-arrest scheme using a purported surveillance officer, CBI involvement, a fake judge and a forged Supreme Court order. She was isolated and induced to transfer INR 11,010,010. The bail order describes substantial downstream bank, subscriber, location and CDR evidence, but does not directly identify the original impersonating operators.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: household / personal finance.

### 2. Reconnaissance

**Unknown.** The public source does not establish how the fraudsters selected the complainant or obtained the personal details used in the money-laundering pretext.

### 3. Initial contact

On 15 March 2025 the complainant received a WhatsApp call from a person identifying himself as a surveillance officer who said her bank accounts were under court-ordered surveillance.

### 4. Pretext

The caller said a CBI officer was present, alleged the complainant was involved in money laundering linked to a Canara Bank account, sent a purported Supreme Court order, and introduced a person posing as a judge who said a non-bailable warrant had issued.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Yes**
- Repeated contact: **Yes**
- Other: Layered official identities and a forged judicial document created legitimacy; the complainant was instructed not to speak to anyone or leave home.

### 6. Requested action

Remain isolated, submit to purported monitoring, and transfer funds to accounts specified for the supposed investigation.

### 7. Victim action

The complainant transferred INR 30,00,000 and INR 80,10,010 before reporting the fraud.

### 8. Consequence

Financial loss field: **INR 11,010,010**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0011-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0011-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0011-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0011-01 |

Additional evidence recorded: KYC/address verification, location correlation, SIM/device changes, transaction alerts and other NCRP complaints linked to the beneficiary account.

## Attribution analysis

### Attribution target

Applicant-linked first-layer beneficiary account and downstream financial/telecom activity, distinct from the original impersonating callers.

### Primary basis

`bank_account_or_money_flow`; secondary: `cdr_or_telecom_record`.

### Alternative explanation

The applicant claimed his email was hacked and suspicious logins originated from Singapore, presenting an alternative account-control explanation that remained disputed at bail stage.

### Attribution strength

**`moderate`**

### Limitations

The order contains meaningful bank, subscriber, location and CDR links to the applicant but does not establish that he was the surveillance officer, CBI officer or fake judge who conducted the original manipulation.

## Primary evidentiary gap

Authenticated WhatsApp/provider and device-level evidence tying the original impersonation accounts to identified human operators.

## Legal / procedural notes

Source-reported provisions: BNS 308(2), 318(4), 319(2), 204, 61(2), 3(5).

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `digital_arrest`; secondary: `police_impersonation`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Expanded-validation retrieval protocol case. Judicial material accessed through Indian Kanoon; all accused-specific statements are treated as bail-stage allegations/observations unless expressly stated otherwise.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
