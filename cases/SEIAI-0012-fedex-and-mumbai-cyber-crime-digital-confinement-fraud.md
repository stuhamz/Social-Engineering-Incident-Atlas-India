# SEIAI-0012: FedEx and Mumbai Cyber Crime digital-confinement fraud

## Record status

- Case ID: `SEIAI-0012`
- Coding version: `0.1.1`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0012-01 | T1 | `bail_order` | Dilip Dayabhai Dhoriyani v. CBI, 9 February 2026 | https://indiankanoon.org/doc/127368432/ |

## Procedural posture

**Case status:** `trial`. Regular bail declined on 9 February 2026; further investigation described as ongoing.

## Neutral case summary

A Delhi business executive was digitally confined from 29 December 2023 to 1 January 2024 after FedEx and Mumbai Cyber Crime impersonation and was coerced into two transfers totalling INR 4,856,275. The order separates the victim-facing social-engineering operators from an alleged downstream financial arm and records SIM/device, WhatsApp and money-flow evidence against the applicant.

## Reconstruction

### 1. Target

Target type: `executive`. Sector/context: business executive / security-features supplier.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

The victim was approached through a scheme that impersonated FedEx and Mumbai Cyber Crime officials and moved into sustained digital confinement over WhatsApp/Skype.

### 4. Pretext

The victim was threatened with serious criminal charges and kept digitally confined while the perpetrators maintained an active video link and demanded transfers.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Yes**
- Repeated contact: **Yes**
- Other: Continuous remote presence and law-enforcement impersonation sustained coercion over several days.

### 6. Requested action

Remain digitally confined and transfer funds to accounts controlled by the purported investigators.

### 7. Victim action

The victim made two transfers totalling INR 48,56,275.

### 8. Consequence

Financial loss field: **INR 4,856,275**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0012-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0012-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0012-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0012-01 |

Additional evidence recorded: SIM recovered from applicant possession, IMEI/device linkage to account transactions, WhatsApp conversations regarding an account and cash conversion, fintech money-flow analysis.

## Attribution analysis

### Attribution target

Applicant’s alleged role in the financial arm of a transnational network, not the original FedEx/police impersonation.

### Primary basis

`multiple_independent_sources`; secondary: `device_possession_or_forensics`.

### Alternative explanation

The applicant disputed evidentiary weight of co-accused disclosure and argued that chargesheet filing and custody reduced the need for detention.

### Attribution strength

**`moderate`**

### Limitations

The source materially links the applicant to financial-account operation, a recovered SIM/device and chats, but does not show that he conducted the original victim-facing impersonation.

## Primary evidentiary gap

Direct provider/device evidence connecting the victim-facing FedEx and law-enforcement identities to identified operators.

## Legal / procedural notes

Source-reported provisions: BNS 127, 308, 318; IT Act 66D; charge sheet also records IPC 170, 419, 420, 343, 346, 388, 120B, 411, 414 and corresponding BNS provisions.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `digital_arrest`; secondary: `police_impersonation`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Source expressly describes the network as transnational; cross_border_dimension coded yes. Focal victim loss is used rather than the approximately INR 4.80 crore aggregate across ten Delhi victims.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
