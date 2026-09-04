# SEIAI-0047: SIM-swap identity theft and pension-account takeover fraud

## Record status

- Case ID: `SEIAI-0047`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0047-01 | T1 | interim_order | Paresh Chandra Deka v. State of Assam & Ors., 28 May 2024 |
| SRC-SEIAI-0047-02 | T1 | final_judgment | Paresh Chandra Deka v. State of Assam & Ors., 17 February 2025 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Gauhati High Court
- Case / proceeding: WP(C)/875/2021; Rangia P.S. Case No.944/2020
- Public status coded: `investigation`
- Disposition: On 28 May 2024 the Gauhati High Court ordered CID Cyber Crime further investigation and directed banking relief subject to the applicable liability framework; a later 17 February 2025 order closed the writ after settlement while expressly allowing the criminal investigation to continue.

## Neutral case summary

A retired teacher’s pension account was taken over after offenders allegedly elicited the identity of the mobile subscriber linked to his account, used a fake electoral ID to obtain a SIM swap and activated internet/YONO banking. INR 895,024 was withdrawn/transferred. The case is unusually useful for connecting human information elicitation to identity theft, telecom compromise and downstream financial routing.

## Reconstruction

### Target

- Target type: `elderly_person`
- Sector/context: pensioner / retail banking
- Target selection known: `yes`

### Reconnaissance

- Coded: `yes`
- Detail: The investigation described obtaining debit-card/PIN details, identifying the mobile subscriber linked to the victim’s account, eliciting the daughter’s name from the victim and using that identity to procure a replacement SIM.

### Initial contact

Investigators reported that callers told the senior citizen that money would be deposited into his account and asked whose mobile number was linked to the account.

### Pretext

After learning the linked subscriber was the victim’s daughter, the offenders allegedly used a fake electoral identity card in her name to obtain a replacement SIM, activated internet/YONO banking and transferred/withdrew the victim’s pension funds.

### Social-engineering mechanisms

- Authority: `no`
- Fear: `no`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `yes`
- Isolation: `no`
- Repeated contact: `not_reported`
- Other: Benign incoming-payment pretext used for information elicitation, followed by identity-document fraud and telecom-account takeover.

### Requested action

Disclose the identity of the person whose mobile number was registered to the bank account; the subsequent SIM-swap and banking actions were conducted without the victim’s authorization.

### Victim action / consequence

The victim disclosed the linked subscriber’s identity. Investigators later described SIM swap, internet/YONO activation and fraudulent withdrawal/transfer of INR 895,024 from his pension account.

## Evidence map

- Phone/SIM evidence: `yes`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `yes`
- Device evidence: `not_reported`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform-provider records: `yes`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `yes`
- Other reported evidence: The court reviewed SIM-swap applications/identity documents, failed SMS-delivery information, internet-banking/YONO activity and investigation reports describing gift-card/dark-net routing.

## Attribution analysis

### Attribution target

Arrested accused persons’ alleged SIM-swap/account-takeover and financial-routing roles, plus an unidentified downstream facilitator.

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `bank_account_or_money_flow`

### Attribution strength

**moderate**

### Limitations

The court itself called the initial police charge-sheet unsatisfactory and ordered specialist cybercrime further investigation; role descriptions therefore remain investigative rather than final criminal findings.

### Alternative explanation

The court separated customer/bank/telco responsibility from criminal attribution and did not treat possession of account information alone as proof of every downstream act.

### v0.2.0 functional actor coding

- **Information-elicitation caller(s)**: identity `actor_cluster`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **SIM-swap identity-impersonation actor(s)**: identity `actor_cluster`; victim-facing function `no`; financial function `no`. no paper-specific evidence assigning either primary function
- **Arrested financial-routing actor cluster**: identity `actor_cluster`; victim-facing function `no`; financial function `yes`. Atlas financial layer
- **Unidentified gift-card/dark-net facilitator**: identity `unknown`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Technically complete specialist investigation mapping the SIM-swap identity documents, subscriber process, internet/YONO sessions, gift-card routing and individual actors end to end.

## Coding decisions / research notes

First primary `identity_theft_deception` record in the Atlas. A second source is registered for the later writ closure; closure of the civil/writ dispute did not terminate the criminal investigation. Second-pass source-to-code and privacy audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
