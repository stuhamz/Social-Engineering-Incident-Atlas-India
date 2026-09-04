# SEIAI-0060: OLX buyer QR and UPI payment-manipulation fraud

## Record status

- Case ID: `SEIAI-0060`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0060-01 | T1 | appellate_judgment | State Bank of India v. Rajesh Garg, 30 September 2024 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: State Consumer Disputes Redressal Commission, U.T. Chandigarh
- Case / proceeding: not normalized
- Public status coded: `appeal`
- Disposition: State consumer appeal upheld refund-related relief concerning the unauthorized transactions.

## Neutral case summary

A Chandigarh consumer appeal records a marketplace payment fraud in which an OLX contact persuaded the seller to share UPI information/scan a code under a payment-receipt pretext, followed by unauthorized debits totalling INR 64,000.

## Reconstruction

### Target

- Target type: `online_seller_or_buyer`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

An OLX buyer contacted the complainant, who was expecting to receive INR 8,000 for a marketplace transaction.

### Pretext

The purported buyer asked the complainant to share UPI details or scan a code on the representation that this would facilitate receipt of the payment.

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Share UPI/payment information and interact with the supplied payment flow.

### Victim action / consequence

The complainant shared UPI details through WhatsApp and ultimately suffered unauthorized transactions totalling INR 64,000.

- Financial loss coded: `64000`
- Payment method: `upi`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: WhatsApp chat; UPI transaction sequence; bank dispute records.

## Attribution analysis

### Attribution target

Unknown OLX/WhatsApp marketplace operator

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The consumer record resolves banking liability but does not identify the marketplace contact or beneficiary-account operator.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **OLX buyer / WhatsApp payment manipulator**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Contacting the seller through OLX/WhatsApp and presenting QR/UPI sharing as a way to receive the purchase payment. Limitation: The consumer record does not identify the marketplace/WhatsApp operator.
- **UPI transaction recipient(s)**: `financial` / `bank_account_controller`; strength `unclear`. Conduct assessed: Receiving or facilitating the unauthorized UPI debits totalling INR 64,000. Limitation: Beneficiary-account identity and knowing participation are not developed in the public source.

## Primary evidentiary gap

OLX account records, WhatsApp identifiers, UPI beneficiary KYC and device/IP records connecting the marketplace contact to the payment recipient.

## Coding decisions / research notes

v0.1.5 corrective expansion; source-to-code review completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
