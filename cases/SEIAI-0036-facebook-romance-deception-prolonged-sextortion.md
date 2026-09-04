# SEIAI-0036: Facebook romance deception and prolonged sextortion

## Record status

- Case ID: `SEIAI-0036`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note is a research reconstruction from public material. Procedural, bail, consumer, civil and appellate sources are coded according to their actual posture. Allegations are not converted into findings of guilt, and civil/consumer findings are not treated as criminal attribution.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0036-01 | T1 | bail_order | Priyanka Ch. Sangma v. State of Haryana, 12 June 2026 |

Source URL: https://indiankanoon.org/doc/99004545/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: CRM-M-33681-2026; FIR No.17/2026, P.S. Sector-53 Gurugram
- Public status coded: `investigation`
- Disposition: Anticipatory-bail petition dismissed on 12 June 2026; investigation ongoing and observations limited to bail.

## Neutral case summary

A Facebook relationship begun in 2020 allegedly used a false Emirates-air-hostess identity, emotional grooming and later sexual/reputational threats to extract approximately INR 60 million. More than INR 40.8 million was alleged to have reached the petitioner’s account, but the public bail order does not reproduce technical proof that she controlled the original Facebook persona.

## Reconstruction

### Target

- Target type: `individual`
- Context: personal relationship
- Target selection: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No separate reconnaissance process is established in the reviewed source.

### Initial contact

The complainant reported coming into contact through Facebook in 2020 with a person using the identity “Kim” and presenting herself as an Emirates air hostess living in Dubai.

### Pretext

A close online relationship was allegedly developed through false representations and later used for repeated financial demands and coercion, including threats to circulate sexually explicit photographs and videos.

### Social-engineering mechanisms

- Authority: `no`
- Fear: `yes`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `no`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Long-term relationship grooming, emotional manipulation, sexual/reputational coercion and fear of social stigma.

### Requested action

Make repeated monetary transfers and continue complying under threat of dissemination of intimate material.

### Victim action / consequence

The complainant allegedly transferred approximately INR 60,000,000 over the relationship; the prosecution stated INR 40,803,415 was credited to the petitioner’s bank account.

- Financial loss in INR: 60000000
- Credential compromise: `no`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

Reported evidence categories in the structured row:

- Bank / transaction evidence
- Chat / message evidence
- Social-media evidence

Other evidence / source note: The bail order refers to documentary and electronic evidence held by investigators and substantial bank credits alleged to have reached the petitioner.

## Attribution analysis

### Incident-level attribution target

Petitioner’s alleged relationship-persona, sextortion and direct financial-recipient roles, assessed separately from the bare fact of account receipt.

### Attribution strength

**moderate**

### Limitations

The order is an anticipatory-bail decision. The prosecution alleges that the petitioner operated the relationship identity, while the defence denied any connection to the complainant or social-media account; the public order does not reproduce platform/device attribution for the Facebook persona.

### Alternative explanation

Documented/alleged receipt of funds can support a financial role more strongly than authorship of the online persona or every extortion communication.

#### v0.2.0 functional actor coding

- **“Kim” Facebook relationship persona operator**: identity `partially_identified`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Sexual/reputational extortion communicator(s)**: identity `partially_identified`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Petitioner-linked direct financial recipient**: identity `identified`; victim-facing function `no`; financial function `yes`. Atlas financial layer

## Primary evidentiary gap

Platform account records, device artefacts and message provenance tying the Facebook identity and coercive communications to the human operator across the multi-year period.

## Actor-role decomposition

- **“Kim” Facebook relationship persona operator** — `limited` for: Operating the Facebook relationship identity presented as an Emirates air hostess in Dubai. Limitation: The prosecution identifies the persona with the petitioner, but the petitioner denies any connection to the social-media account and the order does not reproduce platform/device records establishing account control.
- **Sexual/reputational extortion communicator(s)** — `limited` for: Threatening dissemination of sexually explicit material to coerce repeated transfers. Limitation: The bail order describes the alleged sustained coercion but does not provide message-by-message authorship/device provenance for the petitioner.
- **Petitioner-linked direct financial recipient** — `moderate` for: Receiving more than INR 40.8 million allegedly transferred by the complainant over the prolonged scheme. Limitation: The prosecution’s bail-stage account strongly describes direct receipt, but final trial findings on knowledge, purpose and broader conspiracy remain outstanding.

## Legal / procedural notes

BNS 308(2); BNS 316(2); BNS 351(2); BNS 61(2)

## Coding decisions / research notes

Included because it exposes a sharp difference between financial attribution and persona authorship within a long-duration relationship/sextortion scheme. Second-pass source-to-code audit completed 2026-08-26. v0.2.0 full-corpus source-to-code re-audit completed 2026-09-04.

## Manual review checklist

- [x] Open the registered T1 source
- [x] Confirm incident mechanics and procedural posture
- [x] Re-check financial amount coding or intentional blank
- [x] Separate victim-facing conduct from downstream financial/technical association
- [x] Re-check actor-role attribution strength and limitations
- [x] Confirm no unnecessary personal identifiers are reproduced in the public research note
- [x] Mark reviewed after source-to-code second pass
