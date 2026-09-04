# SEIAI-0058: Poona Auto Ancillaries phishing and corporate account compromise

## Record status

- Case ID: `SEIAI-0058`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0058-01 | T1 | appellate_judgment | Punjab National Bank v. Poona Auto Ancillaries Pvt. Ltd., 19 November 2025 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Telecom Disputes Settlement & Appellate Tribunal
- Case / proceeding: Cyber Appeal No.4/2013
- Public status coded: `appeal`
- Disposition: TDSAT appellate judgment in a cyber appeal from the Maharashtra adjudicating officer.

## Neutral case summary

TDSAT reviewed a 2011 phishing-enabled corporate banking fraud involving INR 8.01 million in unauthorized transfers. The underlying adjudicating officer had found that the complainant responded to a phishing email and shared password/account information, while also awarding partial compensation against the bank.

## Reconstruction

### Target

- Target type: `business`
- Sector/context: auto components / corporate banking
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The corporate complainant responded to a phishing email before unknown persons gained unauthorized access to its computer/banking environment.

### Pretext

The phishing communication induced disclosure/use of banking credentials, after which unknown persons transferred funds from the corporate account.

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

Obtain banking access credentials and use them to execute unauthorized transfers.

### Victim action / consequence

The company suffered unauthorized transfers totalling INR 8,010,000; the adjudicating officer later awarded partial compensation while finding contributory negligence.

- Financial loss coded: `8010000`
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `not_reported`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Phishing-email admission; unauthorized computer/account access; bank transfer records.

## Attribution analysis

### Attribution target

Unknown phishing sender and banking intruder

### Basis

- Primary: `not_assessed`
- Secondary: `not_assessed`

### Incident-level attribution strength

**unclear**

### Limitations

The appellate record documents the phishing response and unauthorized account access but provides little public human-identity attribution for the original phishing operator.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Unknown phishing sender/operator**: `victim_facing` / `social_engineering_operator`; strength `unclear`. Conduct assessed: Sending/operating the phishing communication that elicited banking credentials from the corporate complainant. Limitation: The appellate record notes the phishing response but does not identify the sender or hosting/account controller.
- **Unknown online-banking intruder / beneficiary network**: `financial` / `bank_account_controller`; strength `limited`. Conduct assessed: Using compromised credentials to access the corporate bank account and transfer INR 8.01 million. Limitation: The unauthorized transfers are documented, but the human controller of the banking session and beneficiary accounts is not resolved.

### v0.2.0 functional actor coding

- **Unknown phishing sender/operator**: identity `unknown`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Unknown online-banking intruder / beneficiary network**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Original phishing email, authenticated headers, endpoint/browser artefacts and bank-login/IP records connecting the phishing infrastructure to a specific operator.

## Coding decisions / research notes

v0.2.0 full re-audit: focal unauthorized access/transfer conduct is source-supported on 23 August 2011; 24-25 August concern detection/reporting and are no longer coded as incident conduct dates. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
