# SEIAI-0025: Facebook-to-Telegram hotel-rating task fraud

## Record status

- Case ID: `SEIAI-0025`
- Coding version: `0.1.1`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0025-01 | T1 | `bail_order` | Mandeep v. State of Haryana, 23 April 2026 | https://indiankanoon.org/doc/170299623/ |

## Procedural posture

**Case status:** `trial`. Anticipatory bail dismissed on 23 April 2026; charges had been framed against several co-accused.

## Neutral case summary

A Facebook advertisement moved a Haryana victim into Telegram hotel-rating tasks. Free tasks and a successful small payout built trust before paid tasks escalated and a false account-freeze claim triggered further deposits, producing INR 65,200 loss. The applicant was linked to procurement of bank accounts and related access materials rather than the original social-engineering identities.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: online rating tasks.

### 2. Reconnaissance

**No.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 1 June 2025 the complainant clicked a Facebook advertisement and was moved into Telegram groups offering payment for five-star hotel-rating tasks.

### 4. Pretext

Tasks 1–6 were free; later tasks required investment. A supposed teacher and stock-exchange group offered predictable profits, made a successful small payout, and then claimed an investment mistake had frozen the account and required additional deposits.

### 5. Social-engineering mechanisms

- Authority: **No**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Successful small returns and structured numbered tasks created procedural legitimacy; a false account-freeze problem converted sunk cost into further payments.

### 6. Requested action

Complete rating tasks and make staged investments/deposits to continue and unfreeze the account.

### 7. Victim action

The complainant transferred a total of INR 65,200 before realizing the fraud.

### 8. Consequence

Financial loss field: **INR 65,200**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0025-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0025-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0025-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0025-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Petitioner’s alleged role arranging bank accounts, ATM cards and linked mobile numbers for the fraud network.

### Primary basis

`bank_account_or_money_flow`; secondary: `co_accused_link`.

### Alternative explanation

The applicant disputed involvement and relied on the documentary nature of the transactions; direct victim-facing communication was not attributed to him.

### Attribution strength

**`moderate`**

### Limitations

The applicant-specific evidence concerns account procurement/facilitation, not direct operation of the Facebook ad or Telegram task identities.

## Primary evidentiary gap

Device/chat evidence directly linking the account-procurement layer to the Telegram operators and showing knowledge of the fraud purpose.

## Legal / procedural notes

Source-reported provisions: BNS 318(4), 61.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `job_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- A useful lower-loss case showing the same trust-seeding/sunk-cost mechanism seen in much larger task scams.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
