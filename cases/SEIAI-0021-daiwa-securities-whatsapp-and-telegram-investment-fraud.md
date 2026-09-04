# SEIAI-0021: Daiwa Securities WhatsApp and Telegram investment fraud

## Record status

- Case ID: `SEIAI-0021`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0021-01 | T1 | `bail_order` | Neeraj Sharma v. State of Haryana, 9 February 2026 | https://indiankanoon.org/doc/21530286/ |

## Procedural posture

**Case status:** `trial`. Pre-arrest bail petition dismissed on 9 February 2026.

## Neutral case summary

A Gurugram victim was approached by people claiming Daiwa Securities affiliation and moved into WhatsApp/Telegram groups and a dedicated website, ultimately transferring INR 19.8 million into eight accounts. The source offers a detailed financial trail but the applicant’s alleged role is downstream and account-based rather than direct inducement.

## Reconstruction

### 1. Target

Target type: `investor`. Sector/context: retail investment.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

The complainant was telephonically contacted by people claiming to be associated with Daiwa Securities.

### 4. Pretext

The callers created WhatsApp and Telegram groups under Reserve A3 Unifield Layout Plan for Bankers and directed the complainant to open an account on m.dwa-ai.com for stock-market investing.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Borrowed brokerage identity, multi-platform communication and a dedicated website created apparent legitimacy.

### 6. Requested action

Open the online account and transfer investment funds to accounts specified by the operators.

### 7. Victim action

The complainant transferred INR 1.98 crore from three bank accounts into eight receiving accounts.

### 8. Consequence

Financial loss field: **INR 19,800,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0021-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0021-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0021-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0021-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Applicant’s alleged downstream role through a business account that received a portion of the cheated funds.

### Primary basis

`bank_account_or_money_flow`.

### Alternative explanation

Applicant argued the business account was legitimate and was merely used by fraudsters, and that a settlement with the complainant reduced need for custody.

### Attribution strength

**`limited`**

### Limitations

The petition itself emphasized there was no allegation that the applicant induced the complainant; the public evidence places him in the financial trail rather than the victim-facing communications.

### v0.2.0 functional actor coding

- **Daiwa-branded phone/WhatsApp/Telegram operator(s)**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **m.dwa-ai.com / investment-interface operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Applicant business-account receipt/cash-out actor**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Evidence of knowledge/control showing how the applicant’s account came to be used and direct platform/device evidence for the Daiwa-branded operators.

## Legal / procedural notes

Source-reported provisions: BNS 318(4), 61(2); IT Act 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `investment_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Attribution coded limited because the order itself foregrounds the distinction between victim-facing inducement and downstream account use.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
