# SEIAI-0077: Hacked-email impersonation and NRE transfer fraud

## Record status

- Case ID: `SEIAI-0077`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0077-01 | T1 | appellate_judgment | M/s Canara Bank & 2 Ors. v. Vijayakumaran Raghavan, 4 December 2019 |
| SRC-SEIAI-0077-02 | T1 | final_judgment | Vijayakumaran Raghavan v. Chairman and MD, Canara Bank, 28 September 2015 |

Source URLs:

- SRC-SEIAI-0077-01: https://indiankanoon.org/doc/128023255/
- SRC-SEIAI-0077-02: https://indiankanoon.org/doc/190768987/

## Procedural posture

- Court / authority: National Consumer Disputes Redressal Commission
- Case / FIR: First Appeal No.52 of 2016; CC No.21/2013
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: NCDRC partly allowed the Bank's appeal only to remove the separate mental-agony compensation while confirming the substantive reimbursement order and other relief.

## Neutral case summary

An NRI account holder told Canara Bank that his registered email had been hacked and asked that instructions from it not be acted upon. Months later, fraudulent transfer instructions associated with the compromised/imitated email identity were processed, and USD 86,500 was transferred from his NRE funds to banks abroad. State and national consumer proceedings examined the emails, bank statements, transfer requests and the bank's verification practices. They ultimately imposed liability on the bank, while leaving the criminal identity of the unknown email operator unresolved. The case adds a non-WhatsApp form of social engineering in which the directly manipulated humans were banking personnel rather than the account holder himself.

## Reconstruction

### 1. Target

- Target type: `employee`
- Sector/context: banking / NRE account operations
- State/UT: Kerala
- City: Thiruvananthapuram
- Incident year: 2012
- Cross-border dimension: `yes`

### 2. Reconnaissance

- Present: `yes`
- Detail: Unknown operators had access to or imitated the complainant's email identity and used transaction-style instructions and scanned signed requests in the banking workflow.

### 3. Initial contact

After the account holder's registered email had been compromised, fraudulent email instructions were sent to the Canara Bank branch handling his NRE accounts.

### 4. Pretext

Unknown operators represented themselves as the account holder and issued apparently routine transfer instructions, relying on the compromised/imitated email identity and transaction documents.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `no`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`

- Other mechanism: Business-process familiarity and identity continuity were used to make fraudulent transfer instructions appear routine.

### 6. Requested action

Process transfer instructions represented as coming from the NRE account holder.

### 7. Victim/target action

Bank personnel processed disputed instructions, closing fixed-deposit funds and transferring a total of USD 86,500 abroad.

### 8. Consequence

- Reported financial loss: INR 4,825,671
- Credential compromise: `yes`
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
| Email | yes |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: Bank statements, disputed email instructions, scanned signed requests, FIR and consumer-forum evidence.

## Actor and attribution analysis

### SEIAI-0077-A01 — Compromised-email impersonator(s)

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Conduct assessed: Impersonating the NRE customer in email instructions to bank personnel.
- Attribution basis: `message_or_email_content` + `documentary_record`
- Attribution strength: **unclear**
- Limitation: Consumer records do not resolve the sender, device, login origin or relationship to receiving accounts.
- Relationship note: Victim-facing function is toward bank employees who were induced to process instructions.

### SEIAI-0077-A02 — Overseas beneficiary/controller network

- Identity resolution: `unknown`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Receiving/control of the overseas endpoints to which the NRE funds were transferred.
- Attribution basis: `bank_account_or_money_flow` + `documentary_record`
- Attribution strength: **limited**
- Limitation: Transfer destinations are documented, but public material reviewed does not resolve the humans controlling them.


### Incident-level attribution assessment

- Attribution target: Unknown operator(s) of the compromised/spoofed email instructions and overseas transfer endpoints.
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitations: The consumer proceedings establish the disputed transfers and bank-handling failures but do not identify the human operator who compromised or imitated the email account or controlled the overseas receiving endpoints.
- Alternative explanation: The bank argued that the account holder had not properly replaced the registered email and that the transfer requests appeared consistent with his prior practice; the consumer fora rejected the bank's liability position but did not resolve criminal authorship.

## Primary evidentiary gap

Provider/login records and authenticated device/IP evidence linking the fraudulent email instructions to a specific operator and the destination accounts.

## Legal/procedural notes

Consumer Protection Act, 1986 Section 19

## Coding decisions

Primary source is the 2019 NCDRC appeal; the 2015 Kerala State Commission judgment is registered as a supporting T1 source. Amount uses the figure repeatedly stated in the adjudicatory record. Cross-border=yes reflects Doha context and overseas bank transfers.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
