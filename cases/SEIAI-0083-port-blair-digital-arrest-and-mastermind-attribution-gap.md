# SEIAI-0083: Port Blair digital-arrest fraud and co-accused-only mastermind allegation

## Record status

- Case ID: `SEIAI-0083`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0083-01 | T1 | bail_order | Muliyasiya Anil Sarman v. State (U.T. of A & N Islands), 5 February 2026 |

Source URLs:

- SRC-SEIAI-0083-01: https://indiankanoon.org/doc/23868947/

## Procedural posture

- Court / authority: Calcutta High Court, Circuit Bench at Port Blair
- Case / FIR: CRM (SB)/3/2026; FIR No.82/2024; G.R. Case No.454/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Calcutta High Court Circuit Bench at Port Blair granted bail on 5 February 2026, noting both arrest-procedure concerns and the absence of apparent independent material beyond a co-accused statement linking the petitioner.

## Neutral case summary

A woman in Andaman and Nicobar Islands was subjected to a digital-arrest scheme by unknown callers and transferred INR 1 crore into three accounts. Investigators apprehended one beneficiary-account holder associated with INR 20 lakh; two other account holders were described as absconding. The prosecution said that the arrested account holder's statement identified Muliyasiya Anil Sarman as the mastermind. In the bail order, however, the High Court expressly noted that investigators had not unearthed other apparent material, apart from that co-accused statement, showing the petitioner's involvement. The case is therefore unusually valuable for the Atlas because it sharply separates a strong reconstruction of financial endpoints from weak public evidence for a claimed organiser and from the still-unresolved identity of the original digital-arrest caller.

## Reconstruction

### 1. Target

- Target type: `individual`
- Sector/context: household / personal banking
- State/UT: Andaman and Nicobar Islands
- City: Port Blair
- Incident year: 2024
- Cross-border dimension: `not_reported`

### 2. Reconnaissance

- Present: `not_reported`
- Detail: No source-supported reconnaissance detail coded.

### 3. Initial contact

A woman in Andaman and Nicobar Islands received calls from unknown persons and was subjected to a digital-arrest scheme.

### 4. Pretext

The callers used a coercive digital-arrest scenario to compel transfers, but the bail order does not reproduce the full impersonated-agency script.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `unknown`
- Repeated contact: `unknown`

- Other mechanism: Coercive digital-arrest framing.

### 6. Requested action

Transfer funds to accounts specified by the unknown callers.

### 7. Victim/target action

The victim transferred INR 10,000,000 into three different accounts.

### 8. Consequence

- Reported financial loss: INR 10,000,000
- Credential compromise: `not_reported`
- Device compromise: `not_reported`
- Payment method: `bank_transfer`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | not_reported |
| CDR/telecom | not_reported |
| Bank/transaction | yes |
| IP/login | not_reported |
| Device | not_reported |
| Chats/messages | not_reported |
| Email | not_reported |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: One beneficiary-account holder was apprehended; the alleged mastermind theory was described as arising from that co-accused's statement.

## Actor and attribution analysis

### SEIAI-0083-A01 — Unknown digital-arrest caller(s)

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Conduct assessed: Conducting the phone-based digital-arrest coercion and directing transfers.
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitation: The bail order provides no telecom/platform/device linkage identifying the caller(s).

### SEIAI-0083-A02 — Beneficiary-account holder network

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Receiving the INR 1 crore loss through three accounts, including one account that received INR 20 lakh.
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitation: The public order does not resolve all account holders or establish equivalent knowledge of the digital-arrest scheme.

### SEIAI-0083-A03 — Muliyasiya Anil Sarman

- Identity resolution: `identified`
- Role layer: `organisational`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Conduct assessed: Alleged orchestration/mastermind role in the digital-arrest racket.
- Attribution basis: `co_accused_link`
- Attribution strength: **limited**
- Limitation: The High Court expressly noted the apparent absence of independent supporting material beyond the co-accused statement.
- Alternative explanation: He denied involvement and had cooperated with investigators before arrest.


### Incident-level attribution assessment

- Attribution target: Muliyasiya Anil Sarman's alleged coordinating/mastermind role and the beneficiary-account network.
- Primary basis: `co_accused_link`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The High Court expressly observed that, apart from the co-accused's statement, investigators had not unearthed other material apparently showing the petitioner's involvement. The original victim-facing caller(s) remained unresolved.
- Alternative explanation: The petitioner denied involvement, had cooperated before arrest and challenged the arrest process; the public order contains no independent digital linkage establishing a mastermind role.

## Primary evidentiary gap

Independent communications, device, telecom or financial evidence connecting the petitioner to the victim-facing callers or orchestration of the three beneficiary accounts.

## Legal/procedural notes

Information Technology Act Section 66D; IPC Section 419; IPC Section 420; IPC Section 120B

## Coding decisions

Exact incident date is not inferred from FIR date. Attribution strength is intentionally limited despite the prosecution's 'mastermind' label.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
