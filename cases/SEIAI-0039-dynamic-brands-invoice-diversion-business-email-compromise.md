# SEIAI-0039: Dynamic Brands invoice-diversion business email compromise

## Record status

- Case ID: `SEIAI-0039`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0039-01 | T1 | final_judgment | Dynamic Brands Pvt. Ltd. v. Plus Max Group of Companies & Ors., 8 April 2024 |

Source URL: https://indiankanoon.org/doc/43387872/

## Procedural posture

- Court / authority: District Judge, Commercial Court-01, South, Saket Courts, Delhi
- Case / FIR: CS (Comm) No.13/2024
- Public status coded: `judgment`
- Disposition: Commercial suit decreed on 8 April 2024 in favour of the supplier for USD 124,956 or rupee equivalent; the judgment found the buyer had paid the wrong person after following fraudulent email instructions.

## Neutral case summary

Unknown operators inserted themselves into an international supplier-payment workflow using similar email addresses, forged authorization/invoice documents and substituted Hong Kong bank details. The buyer transferred USD 124,806 to the wrong account. A final Delhi commercial judgment included expert analysis of email trails and PST/metadata, but the fraudster’s human identity remained unresolved.

## Reconstruction

### Target

- Target type: `business`
- Context: international trade / accounts payable
- Target selection: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: The fraudster used details of an existing supplier relationship, invoice/payment workflow, similar email addresses, a forged authorization letter and altered beneficiary/bank information.

### Initial contact

On 4 August 2020 the buyer side received an email appearing to originate from the established supplier relationship and directing payment through changed bank details.

### Pretext

The sender claimed the supplier’s regular bank account faced tax-related restrictions and supplied forged authorization/invoice documents directing payment to “Nippon Tinplate (Asia) Ltd.” at an HSBC Hong Kong account.

### Social-engineering mechanisms

- Authority: `no`
- Fear: `no`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Email-thread continuity, lookalike reply/CC addresses, forged commercial documents and beneficiary-name substitution exploited routine accounts-payable trust.

### Requested action

Pay the outstanding commercial invoice to the substituted Hong Kong beneficiary account.

### Victim action / consequence

The buyer-side defendants transferred USD 124,806 to the fraudulent beneficiary account on 13 August 2020.

- Financial loss in INR: not coded
- Credential compromise: `unknown`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

Reported evidence categories in the structured row:

- Bank / transaction evidence
- Email evidence
- Forensic examination

Other evidence / source note: The commercial court considered forged authorization/invoice documents, a long email trail, email metadata/PST analysis and expert cyber-security evidence.

## Attribution analysis

### Incident-level attribution target

Unknown BEC operator(s) who diverted the email conversation and substituted the fraudulent beneficiary account.

### Attribution strength

**unclear**

### Limitations

The final civil judgment established that the buyer followed fraudulent email instructions and paid the wrong person, but it did not identify or adjudicate the criminal identity of the unknown fraudster.

### Alternative explanation

The civil parties disputed which side bore responsibility for the compromise; the court resolved payment liability between them rather than offender identity.

#### v0.2.0 functional actor coding

- **Invoice-diversion email operator(s)**: identity `unknown`; victim-facing function `yes`; financial function `yes`. paper functional override: victim-facing conduct; paper functional override: financial conduct
- **Hong Kong beneficiary-account controller**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Provider/server logs and beneficiary-account KYC/control evidence sufficient to identify the unknown email operator and recipient controller.

## Actor-role decomposition

- **Invoice-diversion email operator(s)** — `moderate` for: Diverting a live supplier email/payment thread using similar/reply-to addresses and forged authorization/invoice documents to substitute bank details. Limitation: The final civil judgment and expert evidence establish that unknown persons operated the fraudulent email chain, but the human identity of those operators remains unresolved.
- **Hong Kong beneficiary-account controller** — `limited` for: Receiving/controlling the substituted HSBC Hong Kong account to which USD 124,806 was transferred. Limitation: The judgment establishes payment to the wrong beneficiary but does not provide KYC/control evidence identifying the fraudster behind that account.

## Legal / procedural notes

Commercial civil recovery / electronic and expert evidence context

## Coding decisions / research notes

Included as the first completed-payment BEC record and a final commercial judgment. financial_loss_inr is intentionally blank because the source amount is in USD and the Atlas does not researcher-convert foreign currency. Second-pass source-to-code audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
