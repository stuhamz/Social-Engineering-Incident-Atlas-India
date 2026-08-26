# SEIAI-0017: TRAI, Mumbai Police and fake CBI Court digital-arrest fraud

## Record status

- Case ID: `SEIAI-0017`
- Coding version: `0.1.1`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0017-01 | T1 | `bail_order` | Deepak v. State of Rajasthan, 10 June 2026 | https://indiankanoon.org/doc/180604468/ |

## Procedural posture

**Case status:** `trial`. Bail application dismissed on 10 June 2026.

## Neutral case summary

A Rajasthan complainant was moved from a fake TRAI call through supposed police and CBI authorities, shown a fraudulent CBI Court order and told he and his wife were under digital arrest. He transferred INR 2.78 million. The public bail record contains downstream bank/device evidence, but original caller attribution remains distinct.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: household / personal finance.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 28 September 2025 the complainant received a phone call from a woman claiming to be a TRAI officer.

### 4. Pretext

The caller said a SIM purchased in the complainant’s name had been used to threaten 24 people; he was escalated through a supposed New Delhi PRO to Mumbai Police, then told on WhatsApp video that a CBI case linked him to a INR 53 crore cybercrime. A fraudulent CBI Court order was shown.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Yes**
- Repeated contact: **Yes**
- Other: Not separately reported.

### 6. Requested action

Remain on the official-looking call with his wife and deposit funds pursuant to the purported CBI Court order.

### 7. Victim action

The complainant transferred INR 27,80,000.

### 8. Consequence

Financial loss field: **INR 2,780,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0017-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0017-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0017-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0017-01 |

Additional evidence recorded: Seized phone/SIM and net-banking documents, device/account associations and bank transfers into multiple second-layer accounts.

## Attribution analysis

### Attribution target

Applicant’s alleged device/account role in the financial and communications network, distinct from the original TRAI/police/CBI impersonators.

### Primary basis

`device_possession_or_forensics`; secondary: `bank_account_or_money_flow`.

### Alternative explanation

Association with a device/account or login does not by itself establish who spoke to the complainant or the scope of each participant’s knowledge.

### Attribution strength

**`moderate`**

### Limitations

The bail source supports downstream device/account association but does not directly establish that the applicant was a victim-facing caller.

## Primary evidentiary gap

Authenticated WhatsApp/provider records and forensic account artifacts linking the fake CBI Court communication to a human operator.

## Legal / procedural notes

Source-reported provisions: BNS 318(4); IT Act 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `digital_arrest`; secondary: `government_impersonation`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Known account count reflects seven accounts to which the focal amount was split according to the public court record.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
