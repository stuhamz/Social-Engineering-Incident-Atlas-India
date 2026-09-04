# SEIAI-0024: Bajaj Finance HR impersonation and review-task fraud

## Record status

- Case ID: `SEIAI-0024`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0024-01 | T1 | `bail_order` | Mayank Gupta v. State of Haryana, 19 February 2026 | https://indiankanoon.org/doc/126842226/ |

## Procedural posture

**Case status:** `investigation`. Anticipatory bail petition dismissed on 19 February 2026; investigation described as ongoing.

## Neutral case summary

A Haryana victim was recruited through a WhatsApp identity claiming Bajaj Finance HR, shifted to Telegram, paid small sums for five-star review tasks and then induced into progressively larger paid tasks. The source lists numerous deposits and a direct INR 35,000 payment into the applicant’s account, but no single loss total was normalized for the Atlas because the public order does not state one clean aggregate.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: part-time online work.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 10 August 2025 a WhatsApp message offered part-time work from a person identifying herself as HR recruitment staff for Bajaj Finance.

### 4. Pretext

The scheme offered INR 210 for simple five-star restaurant/hotel reviews and daily earnings of INR 4,000–14,000, then moved the victim to Telegram, paid a small amount, and escalated to merchant/welfare tasks requiring deposits.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Brand impersonation, scripted task rules and small real salary payments created employer-like legitimacy before payment escalation.

### 6. Requested action

Complete rating tasks, register with Telegram receptionists/tutors and make deposits for higher-value task orders.

### 7. Victim action

The victim completed tasks, received small payments and then made multiple deposits; the court record enumerates many payments but does not provide a single reliable normalized total in the passages coded.

### 8. Consequence

Financial loss field: **Not normalized in `financial_loss_inr` for this record.**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0024-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0024-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0024-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0024-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Applicant’s alleged downstream account role; INR 35,000 from the complainant was stated to have been sent directly to his account.

### Primary basis

`bank_account_or_money_flow`.

### Alternative explanation

Account receipt can support a financial-role inference without establishing authorship of the social-engineering communications.

### Attribution strength

**`limited`**

### Limitations

The applicant is linked to a payment account, but the source does not establish he was the Bajaj Finance recruiter or Telegram operator who induced the victim.

### v0.2.0 functional actor coding

- **Fake Bajaj Finance HR recruiter**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Telegram receptionist/tutor/task operator cluster**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Applicant-linked beneficiary-account actor**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Complete money-flow reconstruction plus device/platform evidence connecting the recruiter/receptionist/tutor identities to downstream recipients.

## Legal / procedural notes

Source-reported provisions: BNS 316(2), 318(4).

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `job_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- financial_loss_inr intentionally left blank rather than researcher-summing a long enumerated complaint. This preserves source discipline and tests whether missing loss remains workable in the schema.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
