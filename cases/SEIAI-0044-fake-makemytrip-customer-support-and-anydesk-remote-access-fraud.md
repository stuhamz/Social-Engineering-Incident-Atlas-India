# SEIAI-0044: Fake MakeMyTrip customer support and AnyDesk remote-access fraud

## Record status

- Case ID: `SEIAI-0044`
- Coding version: `0.1.4`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0044-01 | T1 | appellate_judgment | HDFC Bank Ltd. v. Fawia Menezes Mesquita, 28 November 2024 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Goa State Consumer Disputes Redressal Commission
- Case / proceeding: First Appeal No.27/2024; Consumer Complaint No.70/2023
- Public status coded: `appeal`
- Disposition: Goa State Commission allowed HDFC Bank’s appeal on 28 November 2024 and set aside the consumer relief on the basis that the complainant had authorized third-party device access through AnyDesk.

## Neutral case summary

A Goa consumer awaiting a MakeMyTrip refund called a fake support number found online, installed AnyDesk and shared an access code. Two INR 10,000 debits followed and a third debit attempt failed. The case broadens the Atlas with a remote-access customer-support fraud where the manipulation is well documented but offender attribution is absent.

## Reconstruction

### Target

- Target type: `individual`
- Sector/context: online travel / retail banking
- Target selection known: `no`

### Reconnaissance

- Coded: `no`
- Detail: No separate reconnaissance process is reported in the reviewed source.

### Initial contact

While awaiting a MakeMyTrip refund, the complainant located and called a fake customer-care number surfaced through an online search.

### Pretext

The purported support representative instructed her to take a second call, download AnyDesk and share the displayed code on the pretext of processing the MakeMyTrip refund.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `yes`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`
- Other: Search-result trust transfer and technical-support authority.

### Requested action

Download AnyDesk, share the session/access code and continue the purported refund-support process.

### Victim action / consequence

The complainant downloaded AnyDesk and shared the code. Two unauthorized INR 10,000 debits followed; a third attempted INR 15,000 debit failed after internet connectivity was lost.

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `yes`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Other reported evidence: The consumer record directly discusses AnyDesk access, Paytm wallet activity, HDFC internet-banking credentials/OTPs and the disputed transactions.

## Attribution analysis

### Attribution target

Unknown fake customer-support and remote-access operator(s).

### Basis

- Primary: `not specified`
- Secondary: `not specified`

### Attribution strength

**not_assessed**

### Limitations

The consumer appeal addressed bank/customer liability and did not identify the human fraud operator, receiving-account controller or remote session origin.

### Alternative explanation

The adjudication focused on whether granting AnyDesk access made the customer liable; it did not resolve offender identity.

## Primary evidentiary gap

AnyDesk/session, device, telecom, Paytm and beneficiary-account records tying the support persona and remote-control session to a human operator.

## Coding decisions / research notes

No inference is made that the consumer’s decision to install AnyDesk identifies the fraud operator or technical path. Second-pass source-to-code and privacy audit completed 2026-08-26.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
