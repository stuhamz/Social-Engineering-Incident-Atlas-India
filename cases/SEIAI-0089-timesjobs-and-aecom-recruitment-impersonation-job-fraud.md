# SEIAI-0089: TimesJobs and AECOM recruitment impersonation job fraud

## Record status

- Case ID: `SEIAI-0089`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0089-01 | T1 | final_judgment | Abhishek Tiwari and Ors. v. State of U.T. Chandigarh and Anr., 22 August 2024 |

Source URL: https://indiankanoon.org/doc/109326161/

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / FIR: CRM-M-27614-2024; FIR No.107/2023
- Primary source stage: `final_judgment`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Punjab and Haryana High Court dismissed the petition to quash the cyber-fraud FIR on the basis of compromise on 22 August 2024, emphasizing the broader public character of the alleged cyber-fraud conduct; guilt remained for criminal proceedings.

## Neutral case summary

A Chandigarh job seeker was contacted by a caller presenting as a TimesJobs recruiter, paid a registration fee and was then moved through a staged AECOM interview and job-offer process. Successive emails and calls demanded fees for a compulsory course, document verification, medical testing, PRO, employment agreement and training/security steps. The complainant paid INR 645,224. Investigation linked several receiving accounts and subscriber records to petitioners, but the judgment does not equate those downstream links with authorship of every victim-facing communication.

## Reconstruction

### Initial contact

On 22 June 2023 the complainant, who was unemployed, received a phone call from a person calling himself Amit Kaushik and claiming to speak from TimesJobs.com, offering to schedule a job interview in return for a registration fee.

### Pretext

The scheme escalated through purported TimesJobs and AECOM communications, a staged interview/job offer, compulsory course, document verification, medical test, PRO and employment/security-related fees.

### Requested action

Pay successive recruitment, course, document-verification, medical, PRO, agreement and training/security fees to complete the purported hiring process.

### Victim action and consequence

The complainant made successive bank transfers beginning with INR 6,500 and ultimately paid INR 645,224 before reporting the matter as job fraud.

- Reported financial loss: INR 645224
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `yes`
- CDR/telecom: `yes`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `not_reported`
- Platform/provider records: `yes`
- Forensic examination: `not_reported`

Other evidence: CAF/CDR material, bank KYC and account statements, email records and Section 65B-supported bank/email material; requests for provider information were also described.

## Actor and attribution analysis

### SEIAI-0089-A01: TimesJobs/AECOM recruitment operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` + `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Operating the staged recruitment pretext, interview/job-offer communications and escalating fee demands.
- Limitation: The communications and pretext are detailed, but authorship of each phone/email identity is not mapped to a specific real-world human in the judgment.

### SEIAI-0089-A02: Satish Kushwaha
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged control of multiple bank accounts through which the job-fraud payments were routed.
- Limitation: Bank-account linkage supports a financial role, while the source does not establish that he authored the TimesJobs/AECOM communications or every transaction in the broader network.
- Alternative explanation: Account ownership/control can establish a financial endpoint without establishing authorship of the recruitment persona.
### SEIAI-0089-A03: Abhishek Tiwari
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `sim_or_subscriber_record` + `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Alleged subscriber/account-infrastructure association within the job-fraud network.
- Limitation: Subscriber registration and account association are meaningful links but do not substantially establish that he controlled the relevant accounts at the time or delivered the social-engineering interaction.
- Alternative explanation: A registered subscriber/account association may reflect a narrower infrastructure role or disputed control.


### Incident-level attribution assessment

- Attribution target: Purported TimesJobs/AECOM victim-facing operator cluster and petitioners linked to downstream bank/mobile infrastructure.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `sim_or_subscriber_record`
- Attribution strength: **moderate**
- Limitations: The High Court order records detailed victim communications and investigative links to bank accounts/mobile numbers, but the proceeding concerned quashing on compromise and did not finally adjudicate which petitioner authored each recruitment communication.
- Alternative explanation: Control or registration of a bank account or mobile number can establish a downstream association without proving authorship of the original TimesJobs/AECOM persona or every email/call.

## Primary evidentiary gap

Provider/device evidence mapping the TimesJobs/AECOM phone and email identities to specific operators, plus transaction-level proof of each petitioner's knowledge and control of the receiving accounts.

## Legal/procedural notes

IPC 419; IPC 420; IPC 467; IPC 468; IPC 471; IPC 120-B

## Coding decisions

The amount is the sum described in the complainant narrative reproduced in the judgment. Actor coding separates the recruitment-persona layer from identified downstream account/subscriber associations.
