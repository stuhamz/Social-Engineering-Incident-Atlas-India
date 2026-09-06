# SEIAI-0082: Alliance Solution high-return investment and fake-office fraud

## Record status

- Case ID: `SEIAI-0082`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0082-01 | T1 | bail_order | Divya Pandey v. State of Bihar, 5 March 2025 |

Source URLs:

- SRC-SEIAI-0082-01: https://indiankanoon.org/doc/126748001/

## Procedural posture

- Court / authority: Patna High Court
- Case / FIR: CR. MISC. No.72271 of 2024; Khagaria (Cyber) P.S. Case No.20/2023
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Divya Pandey was granted bail on 5 March 2025; the merits of the prosecution case remained unresolved.

## Neutral case summary

A Bihar informant was introduced by phone to a purported share-market company called Alliance Solution. The operators supplied named executives, a URL, WhatsApp communications, email, forged agreement/KYC papers and office addresses in Bhopal and Bengaluru, while promising a 25.40% monthly return. The informant and spouse transferred INR 53.5 lakh and received several initial payouts totalling INR 5.83 lakh before payments stopped. Attempts to locate the advertised offices failed. The bail record also describes investigation of an account linked to the petitioner, who denied knowledge and said money had been deposited by her husband. The case is useful for separating a highly reconstructable victim-facing corporate façade from comparatively weak public attribution to individual downstream participants.

## Reconstruction

### 1. Target

- Target type: `investor`
- Sector/context: retail investment
- State/UT: Bihar
- City: Khagaria
- Incident year: 2023
- Cross-border dimension: `no`

### 2. Reconnaissance

- Present: `not_reported`
- Detail: No source-supported reconnaissance detail coded.

### 3. Initial contact

The informant received detailed information by phone about a purported share-market company called Alliance Solution.

### 4. Pretext

The scheme claimed a long operating history, named executives and support staff, promised 25.40% monthly returns, sent forged agreements/KYC material and provided fictitious Bhopal and Bengaluru office addresses.

### 5. Social-engineering mechanisms

- Authority: `no`
- Fear: `no`
- Urgency: `no`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `yes`
- Isolation: `no`
- Repeated contact: `yes`

- Other mechanism: Corporate-legitimacy theatre, forged contracts/office details and initial monthly payouts reinforced credibility and sunk-cost commitment.

### 6. Requested action

Complete KYC/agreement formalities and transfer investment funds to the Alliance Solution bank account.

### 7. Victim/target action

The informant and spouse transferred INR 5,350,000 and initially received INR 583,480 in purported monthly payouts before payments stopped.

### 8. Consequence

- Reported financial loss: INR 5,350,000
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | yes |
| CDR/telecom | not_reported |
| Bank/transaction | yes |
| IP/login | not_reported |
| Device | not_reported |
| Chats/messages | yes |
| Email | yes |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: Forged agreement papers, purported KYC/IDs, website link, bank account details and investigation of downstream accounts.

## Actor and attribution analysis

### SEIAI-0082-A01 — Alliance Solution victim-facing operator cluster

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Conduct assessed: Operating the purported investment company through calls, WhatsApp, email, website, forged agreements and false office representations.
- Attribution basis: `message_or_email_content` + `documentary_record`
- Attribution strength: **moderate**
- Limitation: Names may be personas or asserted company identities; the bail order does not establish human resolution for the victim-facing conduct.

### SEIAI-0082-A02 — Alliance Solution/downstream account network

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Receiving/routing the victim's investment payments and making initial payout transfers.
- Attribution basis: `bank_account_or_money_flow` + `documentary_record`
- Attribution strength: **limited**
- Limitation: The source does not establish that each account-linked person knew or participated in the victim-facing scheme; petitioner-specific figures are themselves reported inconsistently.
- Alternative explanation: The petitioner said deposits to her account came from her husband and she knew nothing of the scheme.


### Incident-level attribution assessment

- Attribution target: Victim-facing Alliance Solution operator cluster and downstream account-linked participants.
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: Names used by the purported company may be personas or asserted organisational identities. The bail order gives only limited actor-specific evidence regarding the petitioner and contains differing figures for deposits identified in her account.
- Alternative explanation: The petitioner said funds deposited to her account came from her husband and that she had no knowledge of the cybercrime or share-market scheme.

## Primary evidentiary gap

Authenticated platform/device records linking the named Alliance Solution personas and communications to specific real-world humans, plus complete transaction tracing across recipient accounts.

## Legal/procedural notes

IPC Section 419; IPC Section 420; IPC Section 379; IPC Section 467; IPC Section 468; IPC Section 471; IPC Section 120B; IPC Section 34; Information Technology Act Section 66D

## Coding decisions

Exact incident dates are left blank because the bail order supports the 2023 incident/FIR context but not a complete day-level attack interval. The petitioner-specific deposit amount is not used as the focal loss.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
