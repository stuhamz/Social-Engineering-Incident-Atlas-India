# SEIAI-0030: Microsoft and Amazon tech-support remote-access fraud network

## Record status

- Case ID: `SEIAI-0030`
- Coding version: `0.1.1`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0030-01 | T1 | `bail_order` | Abhinav Kalra v. Directorate of Enforcement, 17 August 2026 | https://indiankanoon.org/doc/129094584/ |

## Procedural posture

**Case status:** `investigation`. Anticipatory-bail petition dismissed on 17 August 2026; the applicant had been declared a proclaimed person in the underlying proceedings.

## Neutral case summary

An alleged Delhi/NCR tech-support network targeted U.S. victims with Microsoft/Amazon-branded pop-ups, VoIP support calls and remote-access tools such as TeamViewer and AnyDesk. Victims were told their systems and identities were compromised and were induced to move money to supposed Federal Reserve accounts. The order alleges about US$15 million in losses and a layered international laundering path, while applicant-specific guilt remains unadjudicated at this stage.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: U.S. consumers.

### 2. Reconnaissance

**Not reported.** The reviewed public source does not describe a pre-contact reconnaissance process.

### 3. Initial contact

Foreign victims were exposed to fake pop-up alerts purporting to be from Microsoft and prompted to call VoIP-based support numbers.

### 4. Pretext

Call-centre operators allegedly posed as Microsoft/Amazon support staff, persuaded victims to install TeamViewer or AnyDesk, falsely claimed computers and identities were compromised, and told victims to move funds to accounts purportedly managed by the Federal Reserve for protection.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Yes**
- Trust: **Yes**
- Isolation: **Not reported**
- Repeated contact: **Yes**
- Other: Technical-support authority and fabricated account-compromise risk converted remote access into financial coercion.

### 6. Requested action

Call the support number, install remote-access software, grant computer access and transfer funds to purported protective Federal Reserve accounts.

### 7. Victim action

Multiple U.S. victims allegedly granted remote access and transferred funds; the network was alleged to have defrauded victims of about US$15 million overall.

### 8. Consequence

Financial loss field: **Not normalized in `financial_loss_inr` for this record.**

Credential compromise: **Not reported**. Device compromise: **Yes**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0030-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0030-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0030-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0030-01 |

Additional evidence recorded: Call-centre search material, IPDR/FBI corroboration, financial/shell-entity trail, Hong Kong accounts, cryptocurrency and hawala allegations.

## Attribution analysis

### Attribution target

Applicant’s alleged leadership/beneficiary role in the organized call-centre and money-laundering network.

### Primary basis

`multiple_independent_sources`; secondary: `bank_account_or_money_flow`.

### Alternative explanation

Applicant contested ED allegations and sought pre-arrest protection; procedural findings about abscondence/proclamation do not substitute for final adjudication of the substantive fraud allegations.

### Attribution strength

**`moderate`**

### Limitations

The source is an anticipatory-bail/PMLA proceeding and describes allegations against a network; the Atlas does not treat those allegations as final findings of the applicant’s exact operational role.

## Primary evidentiary gap

Final trial-stage findings tying specific victim-facing calls, remote sessions and financial movements to identified operators/roles across the network.

## Legal / procedural notes

Source-reported provisions: PMLA 2002; underlying CBI FIR references IPC 120B, 420, 467, 468, 471 and IT Act 66D.

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `tech_support_fraud`; secondary: `customer_support_fraud`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- financial_loss_inr intentionally blank because the source states losses in U.S. dollars and the Atlas does not convert currency using researcher-selected exchange rates. Cross-border dimension coded yes.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.


### Forensic-examination coding note

The source reports FBI/IP data, malware-related findings, searches and seized digital records. It does not clearly state that a formal forensic examination was conducted, so `forensic_examination_reported` is coded `not_reported` rather than inferred from the presence of digital evidence.
