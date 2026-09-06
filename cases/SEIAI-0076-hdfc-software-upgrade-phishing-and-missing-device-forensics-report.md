# SEIAI-0076: HDFC software-upgrade phishing and missing device-forensics report

## Record status

- Case ID: `SEIAI-0076`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0076-01 | T1 | appellate_judgment | Freeman Anosike Aluma v. CBI, 16 October 2018 |

Source URLs:

- SRC-SEIAI-0076-01: https://indiankanoon.org/doc/103968718/

## Procedural posture

- Court / authority: Delhi District Court, Special Judge-07 (Central)
- Case / FIR: Criminal Appeal No.241/2017; CNR DLCT01-017416-2017
- Primary source stage: `appellate_judgment`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Trial conviction and sentence were set aside on 16 October 2018 and the matter was remanded for fresh appreciation after obtaining/considering the GEQD expert report.

## Neutral case summary

A bank customer received a fake HDFC software-upgrade email, followed a link and disclosed net-banking credentials. Three beneficiaries were added and INR 223,960 was transferred. The investigation produced bank records, subscriber forms, CDRs, login/IP evidence, Section 65-B certificates and CERT-In analysis showing infrastructure routed through multiple countries. Witness evidence linked the appellant to arrangement and receipt of cash from a beneficiary account. However, three mobile phones and two SIM cards had been sent for GEQD examination and the resulting expert report was never placed before the trial court. The appellate court treated that omission as sufficiently important to set aside the conviction and remand the case. The record therefore combines a rich phishing reconstruction with a major evidentiary gap at the human-attribution layer.

## Reconstruction

### 1. Target

- Target type: `individual`
- Sector/context: retail banking
- State/UT: Delhi
- City: New Delhi
- Incident year: 2008
- Cross-border dimension: `yes`

### 2. Reconnaissance

- Present: `not_reported`
- Detail: No source-supported reconnaissance detail coded.

### 3. Initial contact

The complainant received an email on 23 August 2008 purporting to come from HDFC Bank NET Banking and directing him to a software-upgrade link.

### 4. Pretext

The message represented that HDFC Bank was conducting a software upgrade and induced the complainant to use a linked page that captured his customer ID and I-Pin password.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`

- Other mechanism: Institutional legitimacy was borrowed from HDFC branding and normal net-banking maintenance language.

### 6. Requested action

Visit the linked HDFC-looking page and enter net-banking credentials.

### 7. Victim/target action

The complainant followed the link and entered his customer ID and I-Pin; unauthorized beneficiaries were later added and INR 223,960 was transferred.

### 8. Consequence

- Reported financial loss: INR 223,960
- Credential compromise: `yes`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | yes |
| CDR/telecom | yes |
| Bank/transaction | yes |
| IP/login | yes |
| Device | yes |
| Chats/messages | not_reported |
| Email | yes |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | yes |
| Electronic-evidence authentication | yes |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: CERT-In phishing-infrastructure analysis; Section 65-B certificates; account-opening forms; ATM/debit card and cheque evidence; three mobile phones and two SIM cards sent to GEQD Hyderabad.

## Actor and attribution analysis

### SEIAI-0076-A01 — Unknown HDFC phishing email/site operator(s)

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Conduct assessed: Sending/operating the fake HDFC software-upgrade email and credential-capture page.
- Attribution basis: `message_or_email_content` + `ip_or_login_record`
- Attribution strength: **unclear**
- Limitation: International IP/domain evidence reconstructs infrastructure but does not resolve the human operator.
- Relationship note: May overlap with later financial actors, but the record does not establish that overlap.

### SEIAI-0076-A02 — Freeman Anosike Aluma

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `uncertain`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Alleged coordination of beneficiary-account use and receipt of cash from the fraudulent transfer.
- Attribution basis: `witness_or_statement` + `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitation: The conviction was set aside and the missing GEQD report was treated as vital; the source does not establish that he sent the phishing email or ran the site.
- Alternative explanation: He denied involvement and argued the actual beneficiaries were witnesses rather than accused.
- Relationship note: Human identity is resolved, but conduct attribution remains non-final after remand.

### SEIAI-0076-A03 — Downstream beneficiary/cash-out network

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Receiving, withdrawing and handing over proceeds from the compromised HDFC account.
- Attribution basis: `bank_account_or_money_flow` + `financial_withdrawal_or_cashout`
- Attribution strength: **strong**
- Limitation: Strong evidence exists for the transaction/cash-out sequence, but individual knowledge of the phishing scheme and full role equivalence are not established.
- Relationship note: Cluster avoids treating every account/cash-out participant as the phishing operator.


### Incident-level attribution assessment

- Attribution target: Freeman Anosike Aluma's alleged coordination/receipt role and the unresolved phishing operator(s).
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The trial conviction was set aside because a potentially vital GEQD expert report on three phones and two SIM cards had not been placed before the trial court. The public appellate record does not establish that the appellant personally sent the phishing email or operated the phishing website.
- Alternative explanation: The appellant denied involvement and argued that actual beneficiaries had been treated as witnesses; the missing expert report could materially affect the technical linkage.

## Primary evidentiary gap

The GEQD expert report and device-level evidence capable of connecting a specific human to the phishing infrastructure and relevant communications.

## Legal/procedural notes

IPC Section 379; IPC Section 120-B; Information Technology Act Section 66

## Coding decisions

Wave 1A corrective expansion. Exact incident dates are supported by the appellate record. Cross-border coding reflects documented US/France/Germany/Canada infrastructure, not a finding about offender nationality. Conviction status is not_yet_adjudicated because the trial conviction was set aside and the case remanded.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
