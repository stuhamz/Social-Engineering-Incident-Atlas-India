# SEIAI-0020: Multi-agency family digital-arrest fraud with account credential elicitation

## Record status

- Case ID: `SEIAI-0020`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0020-01 | T1 | `bail_order` | Sandip Gautam Pagare v. State of Gujarat, 14 July 2026 | https://indiankanoon.org/doc/162966297/ |

## Procedural posture

**Case status:** `trial`. Regular bail after charge sheet dismissed on 14 July 2026; trial court directed to expedite trial.

## Neutral case summary

A Gujarat complainant, his wife and daughter were kept under WhatsApp video surveillance while fraudsters impersonated telecom, police, ED and CBI officials and used forged documents. Banking credentials and stock information were elicited and INR 23.07 million was lost. The applicant was linked through a beneficiary account, OTP forwarding, CDRs and a seized phone/SIM, but not directly to the original impersonation.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: household / personal finance.

### 2. Reconnaissance

**Unknown.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

The complainant and family were drawn into WhatsApp communications with people impersonating multiple government and law-enforcement bodies.

### 4. Pretext

The perpetrators used forged law-enforcement and financial-crime documents, purported PMLA/FEMA action and continuous WhatsApp video surveillance to claim the complainant was under investigation and digital arrest.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Yes**
- Repeated contact: **Yes**
- Other: The complainant, wife and daughter were kept under sustained digital surveillance; the scheme escalated to eliciting banking credentials and stock details.

### 6. Requested action

Remain under video surveillance, disclose banking credentials and investment information, sell shares, and transfer funds under purported official control.

### 7. Victim action

The family complied with surveillance and financial instructions; the complainant’s accounts/stocks were used to transfer or extort INR 2,30,70,620.

### 8. Consequence

Financial loss field: **INR 23,070,620**

Credential compromise: **Yes**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0020-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0020-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0020-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0020-01 |

Additional evidence recorded: OTP forwarding allegations, transaction SMS, CDR showing repeated co-accused contact, seized phone/SIM sent to FSL and suspicious account turnover.

## Attribution analysis

### Attribution target

Applicant’s alleged control/operation of an Amigo Marine Services bank account and OTP forwarding to co-accused.

### Primary basis

`multiple_independent_sources`; secondary: `cdr_or_telecom_record`.

### Alternative explanation

Forwarding OTPs/account association may establish a financial facilitation role without proving participation in the initial social-engineering interaction; knowledge and intent remain trial issues.

### Attribution strength

**`moderate`**

### Limitations

The source itself notes no material showing the applicant made the WhatsApp calls, impersonated officers, sent forged documents or directly induced the complainant; his alleged role is downstream financial facilitation.

### v0.2.0 functional actor coding

- **Multi-agency WhatsApp impersonation operator(s)**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Amigo Marine account/OTP facilitation actor**: identity `identified`; victim-facing function `no`; financial function `yes`. paper functional override: financial conduct
- **Downstream fund-siphoning actor cluster**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Direct platform/device attribution of the victim-facing WhatsApp accounts and evidence linking those operators to the financial-facilitation layer.

## Legal / procedural notes

Source-reported provisions: BNS 308(6), 127(2), 127(4), 336(3), 337, 340(2), 61(2); IT Act 66C, 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `digital_arrest`; secondary: `government_impersonation`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- This case is especially useful for the Atlas hypothesis that downstream financial/telecom evidence may be substantially richer than original social-engineering operator attribution.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
