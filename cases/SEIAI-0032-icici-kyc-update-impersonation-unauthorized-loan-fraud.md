# SEIAI-0032: ICICI KYC-update impersonation and unauthorized-loan fraud

## Record status

- Case ID: `SEIAI-0032`
- Coding version: `0.1.3`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0032-01 | T1 | final_judgment | Meenu Khare and Another v. ICICI Bank & Others, 6 July 2023 |

Source URL: https://indiankanoon.org/doc/19275742/

## Procedural posture

- Court / authority: State Consumer Disputes Redressal Commission, Uttar Pradesh, Lucknow
- Case / FIR: Complaint No.21/2022; FIR No.0125/2021, P.S. Kaiserbagh
- Public status coded: `judgment`
- Disposition: Consumer complaint allowed; the Commission directed reversal of the INR 700,000 loan and related charges and directed recovery efforts against recipient accounts.

## Neutral case summary

An elderly Lucknow joint account holder received a phone call framed as a KYC update and disclosed authentication/account information. A personal loan of INR 700,000 was generated in the account and at least INR 398,000 was transferred to newly registered payees. The final consumer order is rich in authentication and transaction evidence but does not identify the fraud operator.

## Reconstruction

### Target

- Target type: `elderly_person`
- Context: retail banking
- Target selection: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is established in the reviewed source.

### Initial contact

An imposter called the joint account holders on 21 June 2021 and requested an OTP on the pretext of updating KYC.

### Pretext

The caller presented the request as a genuine bank KYC update. During the interaction, the elderly joint account holder disclosed PAN, user ID, OTP and debit-card grid information according to the bank-side account reproduced by the Commission.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `no`
- Other: Institutional trust in a bank/KYC process.

### Requested action

Provide authentication and account information purportedly required for KYC updation.

### Victim action / consequence

The elderly joint account holder disclosed authentication/account information; a INR 700,000 personal loan was credited and at least INR 398,000 was transferred out in two major transactions described in the order.

- Financial loss in INR: 398000
- Credential compromise: `yes`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

Reported evidence categories in the structured row:

- Bank / transaction evidence
- IP / login evidence

Other evidence / source note: The Commission reviewed detailed OTP-generation timestamps, internet-banking activity, loan disbursal, payee registration and transaction records.

## Attribution analysis

### Incident-level attribution target

Unknown KYC impersonator and unknown operator of the internet-banking session.

### Attribution strength

**not_assessed**

### Limitations

The consumer proceeding reconstructs the impersonation and transaction sequence but does not identify the attacker or establish who controlled the beneficiary accounts.

### Alternative explanation

The parties disputed customer negligence and bank responsibility; those liability questions do not resolve offender identity.

### Primary evidentiary gap

Attacker-side telecom, device, login/IP and beneficiary-account-control evidence connecting the KYC caller to the internet-banking activity.

## Actor-role decomposition

- **KYC-update impersonation caller** — `unclear` for: Posing as a bank/KYC representative and eliciting authentication/account information. Limitation: The consumer order establishes the interaction but does not identify the caller or link a number/device to a human operator.
- **Internet-banking authentication/session operator** — `unclear` for: Using compromised authentication information to create/operate internet-banking access, register payees and execute transfers. Limitation: Detailed bank-side authentication records reconstruct the session, but the human operator/device/IP attribution is not resolved in the public judgment.
- **Recipient/payee account layer** — `limited` for: Receiving the two major transfers of INR 200,000 and INR 198,000. Limitation: The recipient accounts are identified in the banking record, but the judgment does not establish who controlled them for the fraud or whether the holders operated the KYC call.

## Legal / procedural notes

Consumer Protection Act context; FIR No.0125/2021 referenced in the order

## Coding decisions / research notes

Included to add bank-impersonation coverage and a final consumer adjudication. Financial_loss_inr uses the two major transferred amounts expressly identified as INR 200,000 and INR 198,000 rather than treating the entire loan as confirmed victim loss. Second-pass source-to-code audit completed 2026-08-26.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
