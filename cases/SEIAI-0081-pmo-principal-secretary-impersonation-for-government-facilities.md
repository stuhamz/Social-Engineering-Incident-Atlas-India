# SEIAI-0081: PMO Principal Secretary impersonation for government facilities

## Record status

- Case ID: `SEIAI-0081`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0081-01 | T1 | procedural_order | Vivek Keshavan v. Central Bureau of Investigation, 20 February 2024 |

Source URLs:

- SRC-SEIAI-0081-01: https://indiankanoon.org/doc/148513037/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: CRL.M.C. 6503/2022; Case No.11/2021
- Primary source stage: `procedural_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Delhi High Court dismissed Vivek Keshavan's petition challenging the charge-stage orders; charges and merits remained for trial.

## Neutral case summary

Government officials in Puducherry received calls from a person representing himself as the Principal Secretary to the Prime Minister, a special secretary or a close PMO-linked authority. The caller sought contact information and protocol support for a purported PA/relative, including a vehicle and accommodation. Some officials became suspicious and refused assistance, while the prosecution alleged that a government vehicle was in fact used by the second accused. The charge-stage record contains e-KYC/customer application forms, subscriber evidence, witness statements, WhatsApp messages and CDRs showing communication among the relevant numbers. The High Court held that the material was sufficient to proceed to trial but did not finally determine guilt. The case expands the Atlas beyond financial fraud into authority-based social engineering designed to obtain government resources and preferential treatment.

## Reconstruction

### 1. Target

- Target type: `government_official`
- Sector/context: public administration / protocol facilities
- State/UT: Puducherry
- City: Puducherry
- Incident year: 2019
- Cross-border dimension: `no`

### 2. Reconnaissance

- Present: `yes`
- Detail: The calls targeted named government offices and officials able to provide contacts, vehicles, accommodation and protocol support.

### 3. Initial contact

Government officials in Puducherry received calls from a person claiming to be the Principal Secretary to the Prime Minister or a close relative/special secretary.

### 4. Pretext

The caller said a daughter or relative/PA had official or personal work in Puducherry and requested contact details, a vehicle, accommodation and protocol assistance.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `no`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`

- Other mechanism: Hierarchical deference to senior central-government authority was used to obtain assistance from state/UT officials.

### 6. Requested action

Provide official contact details, accommodation, transport and related protocol facilities to a purported PMO-linked visitor.

### 7. Victim/target action

Officials exchanged contact information; a government vehicle was allegedly sent and used for local movement, while some officials became suspicious and refused further facilities.

### 8. Consequence

- Reported financial loss: No quantified focal loss coded
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `not_applicable`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | yes |
| CDR/telecom | yes |
| Bank/transaction | no |
| IP/login | not_reported |
| Device | not_reported |
| Chats/messages | yes |
| Email | not_reported |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: e-KYC/customer application forms, subscriber evidence, Section 161 witness statements and CDRs connecting relevant phone numbers.

## Actor and attribution analysis

### SEIAI-0081-A01 — Pramod Kumar Singh

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Conduct assessed: Impersonating the Principal Secretary/PMO-linked authority and seeking official contacts, vehicle, accommodation and protocol assistance.
- Attribution basis: `cdr_or_telecom_record` + `witness_or_statement`
- Attribution strength: **moderate**
- Limitation: The High Court assessed only charge-stage prima facie material; voice authorship and conspiracy remained for trial.

### SEIAI-0081-A02 — Vivek Keshavan

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Conduct assessed: Confirming the PA identity during calls and allegedly availing transport obtained through PMO impersonation.
- Attribution basis: `witness_or_statement` + `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Limitation: The defence claimed his name/number were misused; the High Court left identity/intention issues for trial and did not finally determine guilt.
- Alternative explanation: He argued he paid his own hotel costs and that accused no.1 misused his identity.


### Incident-level attribution assessment

- Attribution target: Pramod Kumar Singh's alleged PMO impersonation and Vivek Keshavan's alleged PA/beneficiary role.
- Primary basis: `cdr_or_telecom_record`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The High Court was reviewing a challenge to framing of charges and assessed only prima facie material. Identity and conspiracy issues remained for trial, and the defence argued that the petitioner's name/number had been misused.
- Alternative explanation: Vivek Keshavan argued that accused no.1 used his name and number without criminal participation and that he paid for his own hotel stay.

## Primary evidentiary gap

Trial-tested evidence resolving who spoke on each call and proving or disproving coordinated intent beyond subscriber/CDR association and witness recognition.

## Legal/procedural notes

IPC Section 120-B; IPC Section 419; IPC Section 420

## Coding decisions

State coded Puducherry because the principal induced actions and government facilities occurred there, although the reviewing court was Delhi High Court. No financial_loss_inr is coded because the consequence was alleged use of government facilities rather than a quantified monetary loss.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
