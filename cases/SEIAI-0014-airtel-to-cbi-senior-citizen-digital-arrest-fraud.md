# SEIAI-0014: Airtel-to-CBI senior-citizen digital-arrest fraud

## Record status

- Case ID: `SEIAI-0014`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0014-01 | T1 | `bail_order` | Ashok Kumar v. State of NCT of Delhi, 22 April 2026 | https://indiankanoon.org/doc/14673339/ |

## Procedural posture

**Case status:** `investigation`. Four bail applications, including regular and anticipatory bail pleas, were dismissed on 22 April 2026.

## Neutral case summary

A Delhi senior citizen was moved from an Airtel impersonation call into a sustained digital-arrest narrative involving Mumbai Police and CBI identities, a purported arrest warrant and terror-funding accusations. He transferred INR 229.2 million. The order provides strong evidence of downstream bank/SIM/account infrastructure while leaving original-caller identity separate.

## Reconstruction

### 1. Target

Target type: `elderly_person`. Sector/context: retired/senior citizen.

### 2. Reconnaissance

**Unknown.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 1 August 2025 a senior citizen in his late seventies received a landline call from people posing as Airtel officials.

### 4. Pretext

The callers claimed his Aadhaar had been used to open a fraudulent Mumbai bank account, threatened telecom suspension, connected him to supposed Mumbai Police, shifted him to WhatsApp video, then claimed CBI involvement, a large bank fraud and terror funding while presenting an arrest warrant.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Yes**
- Repeated contact: **Yes**
- Other: Telecom-service threat created the entry point; multiple government identities, terror-funding allegations and isolation sustained coercion.

### 6. Requested action

Isolate, remain on video contact and make transfers to numerous accounts under the purported investigation.

### 7. Victim action

The complainant made repeated transfers between 4 August and 4 September 2025 totalling INR 22.92 crore.

### 8. Consequence

Financial loss field: **INR 229,200,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0014-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0014-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0014-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0014-01 |

Additional evidence recorded: Beneficiary-company records, linked mobile numbers, WhatsApp chats, alleged account/SIM procurement and same-day withdrawals.

## Attribution analysis

### Attribution target

Applicants alleged to have supplied/controlled or operated beneficiary account infrastructure used to siphon funds.

### Primary basis

`multiple_independent_sources`; secondary: `bank_account_or_money_flow`.

### Alternative explanation

Applicants disputed whether they were victims, peripheral account holders or active participants; the court treated those role questions as matters for continued investigation/trial.

### Attribution strength

**`moderate`**

### Limitations

The public order develops evidence concerning account infrastructure and communications among downstream actors but does not establish that the applicants made the Airtel/Mumbai Police/CBI calls.

### v0.2.0 functional actor coding

- **Airtel/Mumbai Police/CBI impersonation operator(s)**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Beneficiary-company account controller actor(s)**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer
- **Account/SIM procurement and coordination actor(s)**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Direct evidence linking the original caller identities and WhatsApp video accounts to identified operators.

## Legal / procedural notes

Source-reported provisions: BNS 308, 318(4), 319, 340.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `digital_arrest`; secondary: `government_impersonation`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Large-loss case retained despite category cap because it offers rich downstream communications and mule-account evidence.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
