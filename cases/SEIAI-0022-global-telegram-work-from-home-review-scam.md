# SEIAI-0022: Global Telegram work-from-home review scam

## Record status

- Case ID: `SEIAI-0022`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0022-01 | T1 | `bail_order` | Upendra Kumar Singh v. State of Chhattisgarh, 19 February 2026 | https://indiankanoon.org/doc/4428573/ |

## Procedural posture

**Case status:** `trial`. Second regular-bail application allowed on 19 February 2026 after compromise/refund and filing of charge sheet.

## Neutral case summary

A Chhattisgarh victim was recruited over Telegram for no-fee review work, received real initial bonuses, and then was required to deposit progressively larger sums to withdraw earnings, losing INR 313,444. The applicant was linked to bank-account and SIM supply rather than the original recruiter identity, illustrating separation of social-engineering and financial roles.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: work-from-home tasks.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 12 March 2025 the complainant received a Telegram message from Chaya P offering work-from-home review/rating work with INR 800–1,200 daily earnings and no joining fee.

### 4. Pretext

The complainant registered through a link with a company called Global, received an initial INR 10,000 bonus and INR 5,000 task payment, and was then told to make successive deposits to withdraw the displayed earnings.

### 5. Social-engineering mechanisms

- Authority: **No**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Real initial payouts and bonuses seeded trust before the withdrawal path was converted into escalating deposit requirements.

### 6. Requested action

Complete online tasks and make increasingly large deposits to unlock withdrawal of the displayed balance.

### 7. Victim action

The complainant deposited INR 3,13,444 and stopped when asked for another INR 5 lakh.

### 8. Consequence

Financial loss field: **INR 313,444**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0022-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0022-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0022-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0022-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Applicant’s alleged role supplying his own and other people’s bank accounts/SIMs for receipt and routing of cheated amounts.

### Primary basis

`bank_account_or_money_flow`; secondary: `sim_or_subscriber_record`.

### Alternative explanation

A financial-facilitation role could be narrower than design or operation of the social-engineering workflow.

### Attribution strength

**`moderate`**

### Limitations

The source connects the applicant to account/SIM facilitation but does not establish he operated the Telegram recruiter identity or Global task interface.

### v0.2.0 functional actor coding

- **“Chaya P” Telegram recruiter/operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **“Global” task-system operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Account/SIM supply and routing actor**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Direct platform/device evidence for the recruiter and task-system identities and communications tying those operators to the mule-account supply chain.

## Legal / procedural notes

Source-reported provisions: BNS 318(4), 336(3), 338, 340(2), 61; IT Act 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `job_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Refund/compromise affected bail outcome but does not alter coding of the original incident mechanics.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
