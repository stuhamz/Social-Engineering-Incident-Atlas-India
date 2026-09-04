# SEIAI-0033: Fake Paytm customer-care callback fraud

## Record status

- Case ID: `SEIAI-0033`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0033-01 | T1 | procedural_order | Achal Rana v. Govt. of NCT of Delhi & Anr., 13 September 2023 |

Source URL: https://indiankanoon.org/doc/79267879/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: W.P.(CRL.) 685/2023; FIR No.101/2022, Cyber Police Station South East Delhi
- Public status coded: `investigation`
- Disposition: Delhi High Court dismissed the petition to quash the FIR on 13 September 2023; investigation remained incomplete and no charge sheet had yet been filed.

## Neutral case summary

A Delhi professional searching Google for Paytm support received a callback from a purported customer-care executive and lost INR 50,000 during the interaction. The money was traced to a proprietorship account associated with the quashing petitioner, but the public order does not establish that the account-linked person was the victim-facing caller.

## Reconstruction

### Target

- Target type: `professional`
- Context: legal professional / retail payments
- Target selection: `no`

### Reconnaissance

- Coded: `no`
- Detail: The victim initiated contact after finding a purported Paytm support number through Google; no targeted pre-contact reconnaissance is reported.

### Initial contact

The complainant searched Google for a Paytm customer-care number, called it, and after the call disconnected received a callback from another number.

### Pretext

The callback caller claimed to be a Paytm support executive and kept the complainant engaged in conversation while three unauthorized debits totalling INR 50,000 occurred.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `no`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `no`
- Other: Search-result trust transfer and immediate callback continuity made the caller appear connected to the support request.

### Requested action

Continue the purported customer-support interaction; the public order does not specify the exact technical action or credential requested.

### Victim action / consequence

The complainant engaged with the purported support caller; INR 50,000 was debited in three instalments.

- Financial loss in INR: 50000
- Credential compromise: `unknown`
- Device compromise: `unknown`
- Payment method: `bank_transfer`

## Evidence map

Reported evidence categories in the structured row:

- Bank / transaction evidence
- Platform/provider records

Other evidence / source note: Paytm transaction information and IDFC Bank KYC records traced the cheated amount directly to a proprietorship account associated with the petitioner.

## Attribution analysis

### Incident-level attribution target

Petitioner’s role as proprietor of the account that directly received the focal cheated amount, distinct from the unidentified Paytm-support caller.

### Attribution strength

**limited**

### Limitations

Direct receipt of the cheated amount in the petitioner’s business account does not establish that he made the support call, controlled the victim’s device, or knew the origin of every credit; investigation was incomplete.

### Alternative explanation

The petitioner asserted that the money reached his account without his knowledge and later returned it.

#### v0.2.0 functional actor coding

- **Fake Paytm support caller**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Proprietorship account recipient**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Telecom/device evidence identifying the fake support caller and technical evidence explaining the alleged mobile compromise and connecting that operator to the receiving account.

## Actor-role decomposition

- **Fake Paytm support caller** — `unclear` for: Calling back after the victim’s Google-sourced support attempt and impersonating Paytm customer support during the unauthorized-debit event. Limitation: No telecom/device evidence in the public order identifies the callback caller.
- **Proprietorship account recipient** — `moderate` for: Receiving the focal INR 50,000 cheated amount in a proprietorship account associated with the petitioner. Limitation: The receipt/account association is directly documented and not disputed, but knowledge of the fraud and any role in the support call/mobile compromise are not established.

## Legal / procedural notes

IPC 420

## Coding decisions / research notes

Included as a compact customer-support case with a clear financial association versus caller-attribution gap. The source reports a much larger volume of credits to the petitioner account, but the Atlas codes only the focal INR 50,000 incident. Second-pass source-to-code audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
