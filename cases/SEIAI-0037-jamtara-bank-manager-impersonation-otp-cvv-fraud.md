# SEIAI-0037: Jamtara bank-manager impersonation and OTP-CVV fraud

## Record status

- Case ID: `SEIAI-0037`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0037-01 | T1 | appellate_judgment | Iqbal Rashid v. State of Jharkhand, 5 December 2025 |

Source URL: https://indiankanoon.org/doc/32072499/

## Procedural posture

- Court / authority: Jharkhand High Court
- Case / FIR: Cr. Appeal (SJ) No.13/2025; Cyber Case No.10/2019
- Public status coded: `appeal`
- Disposition: Jharkhand High Court dismissed the criminal appeal on 5 December 2025 and affirmed the conviction and sentence.

## Neutral case summary

A Jamtara group posed as bank managers to obtain ATM-card details, OTPs and CVVs from multiple victims. Phones, forged/irregular SIMs, e-wallets, certified bank records and victim transactions supported the conviction. The High Court affirmed the appellant’s conviction, making this one of the Atlas’s strongest adjudicated attribution records.

## Reconstruction

### Target

- Target type: `individual`
- Context: retail banking customers
- Target selection: `no`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is established in the reviewed source.

### Initial contact

The prosecution proved a group-based cybercrime operation in which callers posed as bank managers and contacted multiple victims by mobile phone.

### Pretext

The callers used bank-manager personation to induce victims to disclose ATM-card details, OTPs and CVV information and then moved stolen value through online/e-wallet and bank-account channels.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `not_reported`
- Other: Institutional trust in a purported bank manager.

### Requested action

Disclose ATM-card details, OTPs and CVV information to the purported bank manager.

### Victim action / consequence

At least eight victims were found to have parted with money; the appellate judgment discusses certified bank records tying victim transactions to accounts used by the appellant/network.

- Financial loss in INR: not coded
- Credential compromise: `yes`
- Device compromise: `no`
- Payment method: `multiple`

## Evidence map

Reported evidence categories in the structured row:

- Phone / SIM / subscriber evidence
- CDR / telecom evidence
- Bank / transaction evidence
- Device evidence

Other evidence / source note: Two phones with active SIMs were recovered from the appellant; additional phones/SIMs and 19 e-wallets were found, and bank records for eight victims were supported by statutory certificates.

## Attribution analysis

### Incident-level attribution target

Convicted appellant’s participation in the bank-manager impersonation group and use of phones/e-wallets/accounts to cheat victims.

### Attribution strength

**strong**

### Limitations

The appellate judgment establishes the appellant’s criminal participation beyond reasonable doubt but does not map every individual victim call to a specific handset/session or identify which group member spoke on each call.

### Alternative explanation

Not applicable to the conviction-level role assessment; victim-specific speaker attribution remains more granular than the appellate finding.

#### v0.2.0 functional actor coding

- **Convicted bank-manager impersonation operator**: identity `identified`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Appellant phone/e-wallet/account operation role**: identity `identified`; victim-facing function `no`; financial function `yes`. paper functional override: financial conduct
- **Co-accused/commission-payment network**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Victim-by-victim mapping of individual call sessions and operators, beyond the conviction-level circumstantial and financial evidence establishing the group operation.

## Actor-role decomposition

- **Convicted bank-manager impersonation operator** — `strong` for: Participating in a group that posed as bank managers and induced victims to disclose ATM, OTP and CVV details. Limitation: The appellate conviction establishes participation in the cybercrime group beyond reasonable doubt, while individual speaker attribution for every victim call is not separately mapped.
- **Appellant phone/e-wallet/account operation role** — `strong` for: Using/possessing phones, SIMs, multiple e-wallets and accounts through which fraud-linked funds were handled. Limitation: The appellate court relied on recovered devices/e-wallets and certified transaction evidence, but not every account transaction is mapped to a particular victim-facing call.
- **Co-accused/commission-payment network** — `moderate` for: Providing accounts/debit-card/cash-out capacity for the group in exchange for commission, as described in the prosecution evidence. Limitation: The appeal primarily adjudicates Iqbal Rashid; role-specific guilt of every other network member is outside this source’s final holding.

## Legal / procedural notes

IPC 419; IPC 420; IPC 120B; IT Act 66D

## Coding decisions / research notes

Included to add a final criminal appellate source, bank impersonation and stronger electronic-evidence authentication material. No single aggregate financial_loss_inr is coded because the source describes multiple victims and several account amounts rather than one focal victim total. Second-pass source-to-code audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
