# SEIAI-0038: Lumikai lookalike-domain investor payment-diversion attempt

## Record status

- Case ID: `SEIAI-0038`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0038-01 | T1 | interim_order | Lumikai Interactive II LLP & Ors. v. Registrant of lumlkai.com & Ors., 21 April 2026 |

Source URL: https://indiankanoon.org/doc/165207654/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: CS(COMM) 419/2026
- Public status coded: `bail_or_interim`
- Disposition: Delhi High Court granted interim directions on 21 April 2026, including locking/suspending the lookalike domain and disclosure of registrant details; proceedings remained pending.

## Neutral case summary

A lookalike Lumikai domain and spoofed senior-management email were used to target a limited partner and request a transfer to a deceptively named Wells Fargo beneficiary account. The public order records an attempted BEC-style payment diversion and provider-facing preservation/disclosure relief, but no completed transfer or resolved human operator.

## Reconstruction

### Target

- Target type: `investor`
- Context: venture-capital limited partner / investor
- Target selection: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: The scheme used a lookalike domain, copied the fund’s identity/senior-management context, targeted a specific limited partner and supplied a deceptively similar beneficiary name.

### Initial contact

An operator using the lookalike domain lumlkai.com approached a limited partner/investor while impersonating Lumikai and its senior management.

### Pretext

The operator requested a transfer to a Wells Fargo account with a beneficiary name deceptively similar to the legitimate fund entity and sent a follow-up spoofed management email containing a passcode to reinforce legitimacy.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Lookalike-domain deception, executive identity borrowing and beneficiary-name mimicry.

### Requested action

Transfer investment-related funds to the fraudulent/deceptively named Wells Fargo beneficiary account.

### Victim action / consequence

The public interim order describes an attempted fraud; it does not establish that the targeted limited partner completed the requested transfer.

- Financial loss in INR: not coded
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

Reported evidence categories in the structured row:

- Email evidence
- Platform/provider records

Other evidence / source note: The order identifies the lookalike domain, spoofed management email, fake beneficiary account and registrar/provider disclosure process.

## Attribution analysis

### Incident-level attribution target

Unknown registrant/operator of the lookalike domain and spoofed management email.

### Attribution strength

**unclear**

### Limitations

The court found a prima facie case sufficient for interim relief and ordered domain suspension/disclosure, but the human operator behind the domain/email was not identified in the public order.

### Alternative explanation

The infrastructure and communications support an attempted impersonation scheme, but registrant/provider data still had to be disclosed and human attribution remained unresolved.

#### v0.2.0 functional actor coding

- **Lookalike-domain and spoofed-email operator**: identity `unknown`; victim-facing function `yes`; financial function `yes`. paper functional override: victim-facing conduct; paper functional override: financial conduct
- **Deceptively named Wells Fargo beneficiary-account controller**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Verified registrar/provider, email-header, login/IP and beneficiary-account-control records identifying the human operator behind the lookalike domain.

## Actor-role decomposition

- **Lookalike-domain and spoofed-email operator** — `unclear` for: Operating lumlkai.com and impersonating Lumikai senior management to induce a limited partner to redirect funds. Limitation: The interim order finds a prima facie scheme but registrant disclosure was still being ordered and the human operator was unresolved.
- **Deceptively named Wells Fargo beneficiary-account controller** — `not_assessed` for: Controlling the beneficiary account supplied to the targeted limited partner for the attempted transfer. Limitation: The source describes the account/name used in the attempted scheme but provides no KYC/control evidence identifying its human controller.

## Legal / procedural notes

Commercial/trademark passing-off and interim-injunction context

## Coding decisions / research notes

Included as the Atlas’s first attempted BEC record. Financial loss is intentionally blank because the order does not establish that the target transferred funds. Cross-border dimension is coded suspected rather than yes because foreign banking infrastructure is described but the operator/target geography is not fully resolved. Second-pass source-to-code audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
