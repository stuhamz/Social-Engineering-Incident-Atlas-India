# SEIAI-0031: Canada-relative and escalating emergency family impersonation fraud

## Record status

- Case ID: `SEIAI-0031`
- Coding version: `0.1.3`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0031-01 | T1 | bail_order | Ritik Kumar v. State of Haryana, 30 August 2024 |

Source URL: https://indiankanoon.org/doc/18537992/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: FIR No.26/2023, Police Station Cyber Crime Hansi
- Public status coded: `trial`
- Disposition: Regular bail granted on 30 August 2024; merits reserved for trial.

## Neutral case summary

A Haryana complainant was approached by a caller exploiting a real Canada-based family connection. A false incoming-transfer image and a sequence of medical, death, debt and overseas-custody emergencies induced repeated transfers totalling INR 3,037,699. The bail record links the petitioner to recovered phones, SIMs and ATM cards but does not identify him as the family-impersonation caller.

## Reconstruction

### Target

- Target type: `individual`
- Context: household / family network
- Target selection: `unknown`

### Reconnaissance

- Coded: `unknown`
- Detail: The caller knew that the complainant had a niece in Canada and used that real family connection, but the public order does not establish how the information was obtained.

### Initial contact

On 6 November 2023 the complainant received a phone call from a person claiming to be the father-in-law of his niece who lived in Canada.

### Pretext

The caller first claimed to be sending INR 10 lakh and supplied a false transaction image, then introduced repeated medical-emergency, death/body-release, debt-repayment and overseas-police-custody stories to obtain escalating transfers.

### Social-engineering mechanisms

- Authority: `no`
- Fear: `yes`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `yes`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Kinship trust, sympathy, fabricated proof of an incoming transfer, repeated crisis escalation and persistent calling every few minutes.

### Requested action

Transfer money to bank accounts, UPI identifiers and wallet destinations supplied by the callers to meet successive purported family emergencies.

### Victim action / consequence

The complainant made repeated bank, UPI and wallet transfers over several weeks, reporting a total loss of INR 3,037,699.

- Financial loss in INR: 3037699
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `multiple`

## Evidence map

Reported evidence categories in the structured row:

- Phone / SIM / subscriber evidence
- Bank / transaction evidence
- Device evidence
- Chat / message evidence

Other evidence / source note: The bail order records recovery of mobile phones, SIM cards and ATM cards from the petitioner and a co-accused disclosure naming him.

## Attribution analysis

### Incident-level attribution target

Petitioner’s alleged downstream role in the family-impersonation fraud network, distinct from the unidentified caller persona.

### Attribution strength

**limited**

### Limitations

Recovered phones/SIMs/ATM cards and a co-accused disclosure associate the petitioner with the investigation but the order does not establish that he operated the family persona or made the victim-facing calls.

### Alternative explanation

Possession of communication or payment artefacts can reflect a downstream or facilitation role rather than authorship of the original impersonation.

### Primary evidentiary gap

Telecom/platform and device artefacts tying the specific victim-facing numbers and WhatsApp accounts to identified human operators and to the receiving-account network.

## Actor-role decomposition

- **Family-impersonation caller(s)** — `unclear` for: Operating the false Canada-family identity and successive emergency pretexts used to solicit transfers. Limitation: The complaint reconstructs the caller conduct but the public order does not identify the human operator behind the numbers/WhatsApp accounts.
- **Beneficiary and payment-routing network** — `limited` for: Receiving/routing the complainant’s repeated transfers through multiple bank, UPI and wallet destinations. Limitation: The complaint identifies payment destinations but the bail order does not develop account-holder knowledge/control for each destination or connect them to the original caller.
- **Petitioner linked through recovered devices/payment artefacts** — `limited` for: Alleged downstream participation reflected by recovered phones, SIM cards and ATM cards and a co-accused disclosure. Limitation: The source does not explain an incident-specific forensic link from the recovered artefacts to the complainant’s calls or prove operation of the family persona.

## Legal / procedural notes

IPC 406; IPC 420; IPC 467; IPC 468; IPC 471; IPC 120B

## Coding decisions / research notes

Included to strengthen family-impersonation coverage and to preserve the distinction between victim-facing identity fraud and downstream device/payment association. Second-pass source-to-code audit completed 2026-08-26.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
