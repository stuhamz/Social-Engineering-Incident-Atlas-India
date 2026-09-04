# SEIAI-0013: Stan Chart Dialogue Forum L7 fake investment app fraud

## Record status

- Case ID: `SEIAI-0013`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0013-01 | T1 | `interim_order` | Monika Devi v. State (NCT of Delhi) & Anr., 20 April 2026 | https://indiankanoon.org/doc/8817759/ |

## Procedural posture

**Case status:** `bail_or_interim`. On 20 April 2026 the Delhi High Court issued notice in the anticipatory-bail application; no final bail determination is contained in this source.

## Neutral case summary

A Delhi complainant reported losing INR 2.27 million after being added to a WhatsApp investment group and induced to use an application called SCHNW. The source documents progressive investment and withdrawal restrictions but is procedurally limited: it is a notice-stage order and does not provide a developed attribution record.

## Reconstruction

### 1. Target

Target type: `investor`. Sector/context: retail investment.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

The complainant was added to a WhatsApp group named Stan Chart Dialogue Forum L7 where admins discussed share investments.

### 4. Pretext

An admin offered an investment plan through the SCHNW application; the complainant was encouraged to make progressively larger transfers and later faced withdrawal restrictions and additional conditions.

### 5. Social-engineering mechanisms

- Authority: **No**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: App-based account display and staged escalation made the scheme appear like an ordinary investment service.

### 6. Requested action

Download the investment application and transfer funds in repeated transactions.

### 7. Victim action

The complainant transferred INR 22,70,000 in 11 transactions before access was blocked.

### 8. Consequence

Financial loss field: **INR 2,270,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0013-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0013-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0013-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0013-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Applicant and operators of the WhatsApp group/SCHNW scheme.

### Primary basis

`unclear`.

### Alternative explanation

Applicant-specific role and technical control of the group/application are not established in the public order reviewed.

### Attribution strength

**`unclear`**

### Limitations

The source is a notice-stage interim bail order and provides the victim narrative but little applicant-specific evidentiary analysis.

### v0.2.0 functional actor coding

- **Stan Chart Dialogue Forum L7 group operator(s)**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **SCHNW application operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Bail applicant with undeveloped alleged role**: identity `identified`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function

## Primary evidentiary gap

Applicant-specific bank, device, platform-account or communications evidence linking a person to operation of the WhatsApp group and SCHNW application.

## Legal / procedural notes

Source-reported provisions: BNS 318(4), 340.

The source stage is `interim_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `investment_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Included because attack reconstruction is sufficiently detailed; attribution is intentionally coded unclear because this specific source is preliminary.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
