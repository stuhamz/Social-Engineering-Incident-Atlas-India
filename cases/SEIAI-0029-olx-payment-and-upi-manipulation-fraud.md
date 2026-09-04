# SEIAI-0029: OLX payment and UPI manipulation fraud

## Record status

- Case ID: `SEIAI-0029`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0029-01 | T1 | `appellate_judgment` | State Bank of India v. Rajesh Garg, 30 September 2024 | https://indiankanoon.org/doc/170728383/ |

## Procedural posture

**Case status:** `judgment`. State Consumer Commission dismissed SBI’s appeal on 30 September 2024 and upheld refund of INR 64,000 with interest.

## Neutral case summary

An OLX counterparty asked a Chandigarh complainant to share UPI details or scan a code so an expected INR 8,000 payment could be received. A nominal INR 5 credit was followed by four unauthorized debits totalling INR 64,000. The appellate consumer decision is valuable for reconstructing the manipulation and banking evidence, but it contains no offender attribution, so attribution is marked not assessed.

## Reconstruction

### 1. Target

Target type: `online_seller_or_buyer`. Sector/context: online marketplace.

### 2. Reconnaissance

**No.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

The complainant expected an INR 8,000 payment from an individual who contacted him through OLX.

### 4. Pretext

The OLX counterparty asked for UPI details or a scan-code interaction to facilitate receipt of payment, moved the interaction to WhatsApp, and sent a nominal INR 5 credit before unauthorized debits followed.

### 5. Social-engineering mechanisms

- Authority: **No**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Not reported**
- Other: A small INR 5 credit functioned as a trust/verification signal immediately before larger unauthorized debits.

### 6. Requested action

Share UPI information/perform the requested scan-code interaction to receive an expected marketplace payment.

### 7. Victim action

The complainant performed the requested UPI interaction and then saw four debits of INR 8,000, INR 8,000, INR 24,000 and INR 24,000.

### 8. Consequence

Financial loss field: **INR 64,000**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0029-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0029-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0029-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0029-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Unknown OLX/WhatsApp counterparty; the adjudication focused on bank liability rather than offender identity.

### Primary basis

`not_assessed`.

### Alternative explanation

The bank argued customer negligence/authorization; the Commission found the complainant had not shared OTP or bank account details and had reported promptly.

### Attribution strength

**`not_assessed`**

### Limitations

The Commission did not identify or attribute the social-engineering interaction to a named offender; its decision concerned whether the disputed transactions were unauthorized and the bank’s customer-liability obligations.

### v0.2.0 functional actor coding

- **Unknown OLX/WhatsApp marketplace operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Unknown UPI transaction-beneficiary/controller actor(s)**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Offender-side platform, UPI beneficiary, device and account records sufficient to identify/control-attribution the OLX/WhatsApp counterparty.

## Legal / procedural notes

Source-reported provisions: Consumer-protection/banking liability context; RBI circular dated 06.07.2017 discussed in decision.

The source stage is `appellate_judgment`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `marketplace_fraud`; secondary: `phishing`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Included to broaden source stage and demonstrate that relevant social-engineering reconstruction can arise in civil/consumer adjudication, not only criminal bail orders.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.


### Taxonomy note

The focal case is coded as `marketplace_fraud` without a secondary `phishing` label. The adjudicatory record describes UPI/scan-code manipulation but does not establish credential harvesting, a deceptive login page, or disclosure of OTP/PIN/bank-account secrets.
