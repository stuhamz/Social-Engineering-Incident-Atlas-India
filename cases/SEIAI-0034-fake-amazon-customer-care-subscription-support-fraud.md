# SEIAI-0034: Fake Amazon customer-care subscription-support fraud

## Record status

- Case ID: `SEIAI-0034`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0034-01 | T1 | appellate_judgment | State Bank of India v. P.V. Sukumaran, 26 May 2026 |

Source URL: https://indiankanoon.org/doc/121236827/

## Procedural posture

- Court / authority: Karnataka State Consumer Disputes Redressal Commission, Bengaluru
- Case / FIR: Appeal No.1242/2023; CC No.152/2021
- Public status coded: `judgment`
- Disposition: The State Consumer Commission allowed SBI’s appeal on 26 May 2026, set aside the District Commission order and dismissed the consumer complaint.

## Neutral case summary

A 74-year-old Mangalore consumer searching for Amazon Prime support was redirected to another phone number and subsequently saw five INR 20,000 debits from an SBI account. The appellate consumer judgment preserves the manipulation and liability dispute but contains no offender attribution.

## Reconstruction

### Target

- Target type: `elderly_person`
- Context: retail consumer / online subscription
- Target selection: `no`

### Reconnaissance

- Coded: `no`
- Detail: The complainant sought a support number through Google; the public order does not report targeted reconnaissance.

### Initial contact

A 74-year-old Mangalore consumer sought help for an Amazon Prime Video subscription issue using a customer-care number found through Google and was redirected to another number.

### Pretext

The interaction was presented as Amazon technical/customer support. During the conversation the complainant’s SBI account was allegedly compromised and five debits followed.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `no`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `no`
- Other: Search-result and brand-support legitimacy.

### Requested action

Engage with the redirected support interaction to resolve the Amazon Prime Video issue; the order does not establish the precise technical step used to authorize the debits.

### Victim action / consequence

The complainant continued the support interaction; five debits of INR 20,000 each were made from the SBI account.

- Financial loss in INR: 100000
- Credential compromise: `unknown`
- Device compromise: `unknown`
- Payment method: `bank_transfer`

## Evidence map

Reported evidence categories in the structured row:

- Bank / transaction evidence

Other evidence / source note: The consumer proceedings relied on the disputed transaction record and complaint history; the complainant denied approving OTPs.

## Attribution analysis

### Incident-level attribution target

Unknown Amazon-support impersonator and unknown transaction operator.

### Attribution strength

**not_assessed**

### Limitations

The appellate consumer decision addresses bank/customer liability and does not identify the support caller, beneficiary controller or compromise mechanism.

### Alternative explanation

The bank argued customer negligence, while the complainant maintained that he did not approve the OTPs.

#### v0.2.0 functional actor coding

- **Fake Amazon support operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Unknown transaction/beneficiary operator**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Attacker-side telecom, device, beneficiary-account and authentication/session evidence sufficient to determine the compromise mechanism and operator.

## Actor-role decomposition

- **Fake Amazon support operator** — `unclear` for: Operating the redirected customer-support interaction preceding the five unauthorized debits. Limitation: The consumer appeal does not identify the human support caller or the precise compromise step.
- **Unknown transaction/beneficiary operator** — `not_assessed` for: Causing or receiving five INR 20,000 transactions from the complainant’s SBI account. Limitation: The appellate consumer decision does not provide offender-side beneficiary/account-control evidence sufficient to assess a human role.

## Legal / procedural notes

Consumer Protection Act / RBI customer-liability context

## Coding decisions / research notes

Included to broaden both source stage and geography. The case is coded for incident reconstruction, not as a finding that a particular technical compromise theory was proven. Second-pass source-to-code audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
