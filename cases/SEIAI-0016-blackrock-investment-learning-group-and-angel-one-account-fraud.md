# SEIAI-0016: BlackRock investment-learning group and Angel One account fraud

## Record status

- Case ID: `SEIAI-0016`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0016-01 | T1 | `bail_order` | Rajveer v. State NCT of Delhi, 28 April 2026 | https://indiankanoon.org/doc/173218702/ |

## Procedural posture

**Case status:** `investigation`. Regular bail dismissed on 28 April 2026; ongoing investigation noted.

## Neutral case summary

A Delhi investor observed a BlackRock-branded WhatsApp investment group for around 15 days, then submitted identity details and invested INR 4.96 million through a purported Angel One institutional-account workflow. Withdrawal was conditioned on a 30% commission. INR 4.2 million of the cheated amount was traced to the applicant’s proprietorship account, but direct victim-facing inducement by the applicant was not shown.

## Reconstruction

### 1. Target

Target type: `investor`. Sector/context: retail investment.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 9 January 2024 the complainant encountered a social-media advertisement and link for an Indian Stock Investment Learning Group allegedly founded by BlackRock Capital.

### 4. Pretext

After joining the El BlackRock Stocks Pull Up Group on WhatsApp and observing activity for about 15 days, the complainant was invited to open an institutional account in Angel One, upload identity details and invest; withdrawal later required a 30% commission paid separately.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Brand borrowing and a 15-day observation period created legitimacy and social proof before financial commitment.

### 6. Requested action

Open the purported institutional investment account, submit identity details, invest progressively, and later pay a 30% withdrawal commission.

### 7. Victim action

The complainant invested INR 49,60,000 and refused the additional commission demand.

### 8. Consequence

Financial loss field: **INR 4,960,000**

Credential compromise: **No**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0016-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0016-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0016-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0016-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Applicant-linked proprietorship account that received INR 42 lakh from the focal cheated amount.

### Primary basis

`bank_account_or_money_flow`.

### Alternative explanation

The applicant claimed he was himself duped and that no WhatsApp chat connected him to the scheme.

### Attribution strength

**`moderate`**

### Limitations

The source states the applicant did not directly communicate with the complainant and may have occupied a downstream financial role; original group/app operators remain separate.

### v0.2.0 functional actor coding

- **BlackRock-branded group/social-ad operator(s)**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Purported Angel One institutional-account operator(s)**: identity `unknown`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Applicant-linked proprietorship account actor**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Direct control evidence for the BlackRock-branded group, linked website/application and purported Angel One account, plus knowledge evidence for downstream account holders.

## Legal / procedural notes

Source-reported provisions: IPC 420.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `investment_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Credential_compromise is coded yes in the limited sense that Aadhaar/PAN and login-related personal details were submitted to the fake workflow; the source does not establish misuse beyond collection.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.


### Identity/KYC data disclosure note

The complainant submitted Aadhaar/PAN information and a mobile number to the fraudulent workflow. Under the Atlas data dictionary this is recorded as identity/KYC data disclosure, not `credential_compromise`, because the source does not establish disclosure of a password, OTP, PIN or other authentication secret.
