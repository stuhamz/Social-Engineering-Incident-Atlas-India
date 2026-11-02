# SEIAI-0035: WhatsApp sextortion with fake police and YouTube callers

## Record status

- Case ID: `SEIAI-0035`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0035-01 | T1 | bail_order | Soukin v. The NCT State New Delhi, 24 April 2024 |

Source URL: https://indiankanoon.org/doc/97546365/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN.177/2024 and connected matters; FIR No.368/2022, P.S. Special Cell Delhi
- Public status coded: `investigation`
- Disposition: Connected anticipatory-bail applications dismissed on 24 April 2024; observations expressly confined to bail.

## Neutral case summary

A WhatsApp sexual-video lure was followed by callers impersonating police and YouTube personnel who threatened publication and false criminal consequences, inducing INR 1.6 million in payments. CDR, IMEI, SIM and bank-account evidence connected particular applicants to parts of the alleged network but did not resolve every victim-facing persona.

## Reconstruction

### Target

- Target type: `individual`
- Context: personal / private individual
- Target selection: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is established in the reviewed source.

### Initial contact

On 10 October 2022 the complainant received a WhatsApp video call from an unknown woman who initiated a private video interaction that was recorded.

### Pretext

Subsequent callers posing as police officers and YouTube employees claimed they could remove the video or resolve false criminal allegations, including a purported murder accusation and settlement with the woman’s family, while demanding money.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Sexual shame, reputational threat and pseudo-official criminal pressure.

### Requested action

Make repeated payments to prevent publication/removal of the recorded video and avoid purported police/criminal consequences.

### Victim action / consequence

The complainant made payments totalling INR 1,600,000.

- Financial loss in INR: 1600000
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

Reported evidence categories in the structured row:

- Phone / SIM / subscriber evidence
- CDR / telecom evidence
- Bank / transaction evidence
- Device evidence
- Chat / message evidence

Other evidence / source note: CDR location analysis, SIM-registration information, IMEI reuse, bank-account linkage and multiple complaint patterns were described in the bail order.

## Attribution analysis

### Incident-level attribution target

Applicants’ alleged device/SIM and financial roles in the sextortion network, distinct from unresolved persona-level attribution for every victim-facing call.

### Attribution strength

**moderate**

### Limitations

The order provides strong prima facie digital/financial linkage for particular applicants but remains a bail-stage source and does not map every lure, police persona and YouTube persona to a specific human operator.

### Alternative explanation

A SIM/device/account association can establish a network role without proving authorship of each communication; the applicants contested the prosecution case.

#### v0.2.0 functional actor coding

- **Initial sexual-video lure operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Fake police/YouTube extortion caller cluster**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Soukin-linked SIM/device and receiving-account role**: identity `identified`; victim-facing function `no`; financial function `yes`. paper functional override: financial conduct
- **Talim-linked contact-device and beneficiary role**: identity `identified`; victim-facing function `yes`; financial function `yes`. paper functional override: victim-facing conduct; paper functional override: financial conduct

## Primary evidentiary gap

Victim-specific end-to-end mapping of the initial video lure, subsequent extortion personas, devices/SIMs and beneficiary accounts to identified operators.

## Actor-role decomposition

- **Initial sexual-video lure operator** — `unclear` for: Initiating and recording the private WhatsApp video interaction used to create coercive material. Limitation: The unknown woman/persona is not human-attributed in the reviewed order.
- **Fake police/YouTube extortion caller cluster** — `unclear` for: Impersonating police/YouTube personnel, threatening publication/false criminal consequences and demanding money. Limitation: CDR/location evidence reconstructs a caller cluster but does not assign every persona/call to a specific human operator.
- **Soukin-linked SIM/device and receiving-account role** — `moderate` for: Alleged use/association of a mobile number linked through IMEI/SIM analysis and to an account that received INR 400,000 from the complainant. Limitation: The bail-stage record provides corroborated device/subscriber/account linkage but does not prove that this actor performed each victim-facing extortion call.
- **Talim-linked contact-device and beneficiary role** — `moderate` for: Alleged use of an IMEI-linked mobile number to contact victims and association with a number used to open an account receiving INR 200,000. Limitation: The bail-stage material connects device/communication/account layers but does not resolve every persona or establish final guilt.

## Legal / procedural notes

IPC 419; IPC 420; IPC 388; IPC 170

## Coding decisions / research notes

Included for unusually rich telecom/device evidence in a sextortion case. Attribution remains role-specific and bail-stage allegations are not treated as final guilt findings. Second-pass source-to-code audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
