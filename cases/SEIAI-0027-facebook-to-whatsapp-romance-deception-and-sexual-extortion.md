# SEIAI-0027: Facebook-to-WhatsApp romance deception and sexual extortion

## Record status

- Case ID: `SEIAI-0027`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0027-01 | T1 | `appellate_judgment` | Suji @ Kasi v. Inspector of Police, 14 July 2026 | https://indiankanoon.org/doc/14670342/ |

## Procedural posture

**Case status:** `appeal`. Criminal appeal dismissed on 14 July 2026; trial-court conviction and sentence dated 14 June 2023 confirmed.

## Neutral case summary

A Madras High Court appellate judgment describes a social-engineering sequence beginning with persistent Facebook contact, false employment and marriage assurances, migration to private WhatsApp communication, and later coercion using clandestinely recorded intimate material. Unlike most Atlas cases, attribution is supported by a final conviction plus extensive seized-device and forensic evidence whose authenticity and preservation were expressly litigated and upheld.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: personal relationship / employment.

### 2. Reconnaissance

**Yes.** The appellate court found that after Facebook contact the accused gathered information about the victim’s family background and personal circumstances and exploited her employment-related vulnerability.

### 3. Initial contact

The accused initiated contact through Facebook and persisted after the victim initially declined the friend request.

### 4. Pretext

He offered help securing employment while presenting himself as a genuine romantic suitor intending marriage, shifted communication to WhatsApp, and later used clandestinely recorded intimate material for coercion and threats of social-media publication.

### 5. Social-engineering mechanisms

- Authority: **No**
- Fear: **Yes**
- Urgency: **No**
- Trust: **Yes**
- Isolation: **Yes**
- Repeated contact: **Yes**
- Other: Persistent contact, employment assistance, marriage assurance, migration to private messaging and intimate-material threats created progressive emotional control.

### 6. Requested action

Maintain private communication/relationship and comply with demands under threats that intimate material would be circulated.

### 7. Victim action

The victim accepted communication after repeated persuasion and later complied under coercion; no focal monetary loss is normalized.

### 8. Consequence

Financial loss field: **Not normalized in `financial_loss_inr` for this record.**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0027-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0027-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0027-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0027-01 |

Additional evidence recorded: Seized Apple MacBook and other devices, FSL cloning/extraction, expert reports, victim identification of recovered material and judicial discussion of authenticity/tampering/Section 65B.

## Attribution analysis

### Attribution target

Convicted appellant as the social-engineering and coercive actor.

### Primary basis

`multiple_independent_sources`; secondary: `device_possession_or_forensics`.

### Alternative explanation

The defence challenged consent, device/evidence chain, possible manipulation and Section 65B issues; the appellate court rejected these arguments after detailed evidentiary analysis.

### Attribution strength

**`strong`**

### Limitations

The judgment provides unusually strong adjudicated attribution, but the Atlas still limits the record to what this judgment establishes and avoids republishing sensitive source material.

### v0.2.0 functional actor coding

- **Convicted relationship-deception and coercion actor**: identity `identified`; victim-facing function `yes`; financial function `no`. paper functional override: victim-facing conduct

## Primary evidentiary gap

No major attribution gap remains at the level of the convicted appellant; platform-side records could add source redundancy but are not necessary to the final judicial finding.

## Legal / procedural notes

Source-reported provisions: IPC 376(2)(n), 417, 354A, 294(b), 354C; IT Act 66E and other charged provisions as discussed in judgment.

The source stage is `appellate_judgment`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `romance_fraud`; secondary: `sextortion`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- Sensitive sexual details and unnecessary identifiers are deliberately omitted. This case is included for its exceptionally rich electronic-evidence authentication analysis and final adjudicatory posture.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
