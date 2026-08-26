# SEIAI-0023: COS Telegram work-from-home investment task fraud

## Record status

- Case ID: `SEIAI-0023`
- Coding version: `0.1.1`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0023-01 | T1 | `bail_order` | Abhishek Chandel v. State of Odisha, 6 May 2026 | https://indiankanoon.org/doc/73947853/ |

## Procedural posture

**Case status:** `trial`. Bail granted in the order dated 6 May 2026; charge sheet had been filed on 15 April 2026.

## Neutral case summary

An Odisha victim was recruited over Telegram into a COS work-from-home scheme, saw apparent earnings by others and successfully withdrew a small initial profit. He then transferred INR 7.356 million in 14 transactions before an additional INR 3.6 million fee was demanded for withdrawal. Attribution remains unclear in this source because applicant-specific evidence is sparse.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: work-from-home tasks.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

On 23 August 2025 the victim received a Telegram work-from-home offer and was introduced to COS through a Telegram identity and referral code.

### 4. Pretext

The victim joined a group displaying others’ earnings, invested INR 10,000, successfully withdrew INR 38,800, and was then encouraged to transfer much larger amounts while the platform displayed profits exceeding INR 1.2 crore.

### 5. Social-engineering mechanisms

- Authority: **No**
- Fear: **No**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Social proof plus a successful initial withdrawal created strong trust before escalation; withdrawal of the larger balance was conditioned on an undisclosed VIP secure-transfer payment.

### 6. Requested action

Register, invest in repeated task/investment transactions, and finally pay an additional INR 36 lakh to release the displayed balance.

### 7. Victim action

The victim transferred INR 73,56,354 in 14 transactions and did not pay the additional INR 36 lakh demand.

### 8. Consequence

Financial loss field: **INR 7,356,354**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0023-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0023-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0023-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0023-01 |

Additional evidence recorded: No additional evidence category was separately coded.

## Attribution analysis

### Attribution target

Petitioner’s role in the charged network; the brief bail order contains limited accused-specific evidence.

### Primary basis

`unclear`.

### Alternative explanation

The petitioner was not named in the FIR and asserted false implication; the source does not allow a granular role assessment.

### Attribution strength

**`unclear`**

### Limitations

The public bail order contains a rich victim narrative but little detail describing the evidentiary basis for the petitioner’s role.

## Primary evidentiary gap

Applicant-specific bank/device/platform evidence and control records for the COS/Telegram identities.

## Legal / procedural notes

Source-reported provisions: BNS 318(2), 318(4), 319(2), 336(2), 336(3), 338, 340(2), 61(2), 3(5); IT Act 66C, 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `job_fraud`; secondary: `investment_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- The order header contains an internal date artefact showing 06.05.2025, while the case number, digital signature and Indian Kanoon publication identify the order as 6 May 2026; publication_date coded 2026-05-06.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
