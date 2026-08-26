# SEIAI-0018: Equity Hub 41 and ACT ALPHA fake investment fraud

## Record status

- Case ID: `SEIAI-0018`
- Coding version: `0.1.1`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0018-01 | T1 | `bail_order` | Aniket Roy & Anr. v. State of Odisha, 12 May 2026 | https://indiankanoon.org/doc/198978669/ |

## Procedural posture

**Case status:** `trial`. Bail granted on 12 May 2026 after investigation and charge sheet.

## Neutral case summary

An Odisha investor joined Equity Hub 41, where people claiming to represent ACT ALPHA and a SEBI-registered investment platform induced him to transfer INR 51.4 million in 54 transactions. The bail record provides a rich attack narrative but describes the petitioners mainly as account facilitators, so incident-level attribution is coded limited.

## Reconstruction

### 1. Target

Target type: `investor`. Sector/context: retail investment.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 23 February 2025 the complainant joined a WhatsApp group named Equity Hub 41.

### 4. Pretext

People in the group posed as stock-market experts and ACT ALPHA representatives, represented the platform as SEBI registered, promised high returns and displayed lucrative pre-trading/share allocations.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Borrowed regulatory legitimacy and displayed portfolio/share allocations encouraged continued investment using savings and loans.

### 6. Requested action

Invest through the purported platform and make repeated transfers to designated bank accounts.

### 7. Victim action

The informant initially invested INR 50,000 and ultimately transferred INR 5.14 crore in 54 transactions to eight bank accounts.

### 8. Consequence

Financial loss field: **INR 51,400,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0018-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0018-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0018-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0018-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Petitioners’ alleged role in opening/permitting use of accounts through which portions of the cheated funds were routed.

### Primary basis

`bank_account_or_money_flow`.

### Alternative explanation

Petitioners argued the accounts were opened at another person’s instigation and operated by others; same-day onward transfers are consistent with a mule-account role but do not establish victim-facing inducement.

### Attribution strength

**`limited`**

### Limitations

The High Court noted the specific allegation was mainly permitting use of accounts; there was no material showing personal withdrawal or direct pecuniary benefit by the petitioners.

## Primary evidentiary gap

Evidence establishing account control and knowledge, and direct linkage between the WhatsApp/ACT ALPHA operators and the downstream accounts.

## Legal / procedural notes

Source-reported provisions: BNS 318(2), 319(2), 336(2), 336(3), 338, 340(2), 61(2), 3(5); IT Act 66C, 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `investment_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- This case is retained specifically because it illustrates how a very large victim loss can coexist with relatively narrow accused-specific public evidence.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
