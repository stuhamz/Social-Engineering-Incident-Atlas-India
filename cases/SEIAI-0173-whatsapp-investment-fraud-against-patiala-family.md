# SEIAI-0173: WhatsApp investment fraud against Patiala family

## Record status

- Case ID: `SEIAI-0173`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0173-01 | T1 | bail_order | Shrikant Arvind Kulkarni and another v. State of Punjab, 24 February 2026 |

Source URL: https://indiankanoon.org/doc/36416554/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: CRM-M-40454-2025; FIR No.23 dated 06.06.2025, Cyber Crime P.S. Patiala
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail granted on 24 February 2026 after conclusion of investigation, subject to conditions.

## Neutral case summary

A Patiala family was induced through WhatsApp and social-media communications to make investment transfers on the promise of high profits. From 5 to 28 May 2025 they transferred INR 8,800,051 across eleven bank accounts and were asked for still more money when they tried to obtain returns. The petitioners were linked principally to alleged mule-account arrangement and related financial infrastructure.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `household / retail investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

Manjit Singh and his son Amaybir were approached through WhatsApp/social-media investment communications.

### 4. Pretext

The operators promised handsome investment profits and directed repeated transfers into multiple accounts.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Transfer funds into the supplied accounts for the purported investments.

### 7. Victim action

Between 5 and 28 May 2025 the complainants transferred INR 8,800,051 across eleven bank accounts; when they sought returns, they were asked to invest more.

### 8. Consequence

- Reported focal financial loss: INR 8800051
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `yes`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `yes`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: CDR/location and bank-account investigation regarding alleged mule-account arrangers.

## Actor and attribution analysis

### SEIAI-0173-A01: Unresolved victim-facing investment operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0173-A02: Shrikant Arvind Kulkarni and connected petitioner
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged arrangement or supply of mule accounts and coordination in the downstream financial network.
- Limitation: The bail source does not establish that the petitioners delivered the original investment solicitations.
- Alternative explanation: The victim-facing and account-supply layers may have been handled by different people.

### Incident-level attribution assessment

- Attribution target: Unresolved investment operators and petitioners alleged to have arranged or supplied mule accounts.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Limitations: The source supports financial/account-facilitation allegations but does not establish that the petitioners delivered the original investment pitch.
- Alternative explanation: Account arrangement and victim-facing persuasion may have been performed by different members of the network.

## Primary evidentiary gap

Messaging-account and device records identifying the people who directly solicited the complainants.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The eleven beneficiary accounts are part of the focal payment path; broader network activity is not added to the victim loss.
