# SEIAI-0208: SBI fraudulent telecaller OTP dispute

## Record status

- Case ID: `SEIAI-0208`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0208-01 | T1 | final_judgment | Mrs. Kiran Tewary v. The Banking Ombudsman, 24 November 2021 |
| SRC-SEIAI-0208-02 | T1 | procedural_order | Mrs. Kiran Tewary v. The Banking Ombudsman, correction order, 10 December 2021 |

Source URL(s):
- https://indiankanoon.org/doc/84343087/
- https://indiankanoon.org/doc/176576156/

## Procedural posture

- Court / authority: Calcutta High Court
- Case / FIR: WPA No. 14390 of 2021
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The cited final civil/consumer/telecom or writ judgment resolves the proceeding before that forum but does not necessarily adjudicate criminal offender identity.

## Neutral case summary

A Kolkata SBI customer challenged the handling of an unauthorized debit following a fraudulent telephone call. The public order records a dispute over whether she shared an OTP with the caller. A correction order dated 10 December 2021 amended the amount in the judgment from INR 65,000 to INR 166,500. Because the exact incident date and detailed pretext are not stated in the available order, Atlas leaves those fields unresolved.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal banking.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The petitioner received a fraudulent telephone call in connection with her SBI account.

### 4. Pretext

The precise pretext is not reproduced in the public writ order; the Banking Ombudsman relied on an FIR statement suggesting an OTP was shared with the telecaller, while the petitioner disputed that characterization.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

The publicly available order does not reliably state the exact request beyond the disputed OTP allegation.

### 7. Victim action

Following the fraudulent call, unauthorized funds were deducted from the petitioner’s SBI account.

### 8. Consequence

- Reported focal financial loss: INR 166500
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| not_reported | Initial or earliest documented phase of focal incident | SRC-SEIAI-0208-01 | Source-limited; exact date is left blank where not stated |
| not_reported | Financial consequence / detection / complaint period | SRC-SEIAI-0208-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0208-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0208-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0208-01 |

## Actor and attribution analysis

### SEIAI-0208-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0208-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

The underlying FIR and bank transaction records, including the caller number, exact pretext and disputed OTP interaction.

## Legal/procedural notes

Writ proceeding concerning Banking Ombudsman decision

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

A supplementary correction order changes the monetary amount to INR 166,500. The incident necessarily predates the Banking Ombudsman order of 17 March 2021, but the exact year is not stated in the primary public order and is not inferred.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
