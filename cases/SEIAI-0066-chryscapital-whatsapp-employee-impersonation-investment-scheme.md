# SEIAI-0066: ChrysCapital WhatsApp employee impersonation investment scheme

## Record status

- Case ID: `SEIAI-0066`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0066-01 | T1 | final_judgment | ChrysCapital Advisors LLP v. Raj Lal Kumari & Ors., 19 December 2025 |
| SRC-SEIAI-0066-02 | T1 | interim_order | ChrysCapital Advisors LLP v. Raj Lal Kumari & Ors., 29 May 2024 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / proceeding: CS(COMM) 475/2024
- Public status coded: `judgment`
- Disposition: Suit disposed with permanent/blocking directions against infringing WhatsApp/phone identities.

## Neutral case summary

The Delhi High Court's final order records a scheme in which defendants used WhatsApp, a fraudulent website and the identities of ChrysCapital senior personnel to solicit investments and collect money under promises of bumper returns.

## Reconstruction

### Target

- Target type: `investor`
- Sector/context: retail investment
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

Members of the public were contacted or added to WhatsApp groups using ChrysCapital branding and the names/photos of senior personnel.

### Pretext

The operators claimed to be ChrysCapital employees, promised high investment returns, used fake registration forms/seals and operated a fraudulent investment website.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Join the purported ChrysCapital investment service and transfer money for trading/investment.

### Victim action / consequence

Victims were induced to transfer various sums believing they were investing through the genuine firm; individual loss totals were not normalized in the judgment.

- Financial loss coded: `not normalized / not reported`
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `not_reported`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `yes`
- CCTV evidence: `not_reported`
- Platform-provider records: `yes`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: WhatsApp screenshots; fake registration forms/seal; fraudulent website; phone-account blocking/KYC directions.

## Attribution analysis

### Attribution target

Identified/linked WhatsApp and phone-account operators described as infringing defendants

### Basis

- Primary: `message_or_email_content`
- Secondary: `platform_provider_record`

### Incident-level attribution strength

**moderate**

### Limitations

The civil proceedings identify and restrain account/phone defendants but do not provide a criminal-grade reconstruction of each financial recipient's knowledge or role.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **ChrysCapital WhatsApp impersonation operator cluster**: `victim_facing` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Using senior-personnel names/photos and WhatsApp groups to solicit investments under the ChrysCapital identity. Limitation: The final civil record identifies accounts/phone defendants and their conduct but does not criminally resolve every natural-person operator.
- **Fraudulent investment website / payment operator(s)**: `technical` / `technical_infrastructure_operator`; strength `limited`. Conduct assessed: Operating the fake investment registration/website/payment layer used to convert impersonation into financial transfers. Limitation: The judgment describes the website/forms and money solicitation but provides limited beneficiary-account attribution.

### v0.2.0 functional actor coding

- **ChrysCapital WhatsApp impersonation operator cluster**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Fraudulent investment website / payment operator(s)**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. paper functional override: financial conduct

## Primary evidentiary gap

Beneficiary-account records and device/IP/provider logs mapping each victim-facing WhatsApp identity to its human operator and money flow.

## Coding decisions / research notes

v0.2.0 full re-audit: exact day-level dates removed. Source establishes activity beginning in April 2024 but does not establish 1 April as the incident start or the judgment date as the incident end. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
