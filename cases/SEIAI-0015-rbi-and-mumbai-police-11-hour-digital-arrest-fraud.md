# SEIAI-0015: RBI and Mumbai Police 11-hour digital-arrest fraud

## Record status

- Case ID: `SEIAI-0015`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0015-01 | T1 | `bail_order` | Mohammad Mohsin Siddiqui v. State of Haryana, 30 March 2026 | https://indiankanoon.org/doc/69532000/ |

## Procedural posture

**Case status:** `trial`. Regular bail dismissed on 30 March 2026; observations expressly not to influence trial.

## Neutral case summary

A Haryana complainant was first contacted by a fake RBI official and then kept on a Mumbai Police WhatsApp video call for about 11 hours 37 minutes under a digital-arrest pretext. Threats, a forged official-looking document and later ED impersonation induced INR 10 million in transfers. The order describes a downstream bank-account facilitation trail distinct from the original callers.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal banking.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 7 December 2024 the complainant received a phone call from a person falsely representing himself as an RBI official.

### 4. Pretext

The caller said a credit card had been fraudulently issued using the complainant’s documents in a INR 2 crore fraud; a later WhatsApp video caller posed as Mumbai Police, placed him under digital arrest, used threats and a forged National Emblem document, and later callers also impersonated Enforcement Directorate officials.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Yes**
- Repeated contact: **Yes**
- Other: Approximately 11 hours 37 minutes of video surveillance plus threats to the complainant and family amplified coercion.

### 6. Requested action

Remain under video surveillance and transfer INR 1 crore to avoid purported arrest/consequences.

### 7. Victim action

The complainant made three RTGS transfers of INR 65 lakh, INR 23 lakh and INR 12 lakh.

### 8. Consequence

Financial loss field: **INR 10,000,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0015-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0015-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0015-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0015-01 |

Additional evidence recorded: Bank records, account-holder investigation, allegations of forged account-opening signatures and account-credential facilitation.

## Attribution analysis

### Attribution target

Applicant’s alleged role in facilitating or manipulating beneficiary-account infrastructure, not original digital-arrest callers.

### Primary basis

`bank_account_or_money_flow`; secondary: `witness_or_statement`.

### Alternative explanation

One beneficiary account holder alleged a bank relationship manager used his account without knowledge and forged signatures, illustrating possible separation between nominal account holder and actual controller.

### Attribution strength

**`moderate`**

### Limitations

The source provides a developed financial/account-facilitation case but does not directly identify the applicant as the RBI, police or ED impersonator.

### v0.2.0 functional actor coding

- **Fake RBI caller**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Mumbai Police/ED video-call impersonation operator(s)**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Beneficiary-account manipulation/facilitation actor**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Provider/device attribution for the digital-arrest WhatsApp numbers and direct evidence tying victim-facing identities to the downstream account network.

## Legal / procedural notes

Source-reported provisions: BNS 308(2), 318(2), 318(4), 336(2), 336(3), 351(4), 61(2); BNS 238(a), 241 added later.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `digital_arrest`; secondary: `bank_impersonation`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- The source itself distinguishes victim-facing impersonation from account-opening and bank-facilitation roles.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
