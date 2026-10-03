# SEIAI-0087: LOXAM fake French-MNC investment app fraud and virtual-account laundering trail

## Record status

- Case ID: `SEIAI-0087`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-03
- Status: **reviewed**

> This note separates the focal cyber-fraud incident from later PMLA allegations and from aggregate account throughput. Bail-stage findings are not treated as final guilt findings.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0087-01 | T1 | bail_order | Bhupesh Arora v. Directorate of Enforcement, 23 February 2026 |

Source URL: https://indiankanoon.org/doc/40530048/

## Procedural posture

The Delhi High Court was considering Bhupesh Arora's regular-bail application in ECIR/HYZO/46/2022 under the PMLA. The judgment reproduces the predicate Hyderabad cyber-fraud complaint and charge-sheet payment trail. The predicate FIR was charge-sheeted against 50 accused with 10 persons shown absconding and was later quashed on compromise. The High Court granted Bhupesh Arora bail in the related PMLA proceeding on 23 February 2026 after identifying material gaps at the bail stage.

## Neutral case summary

A Hyderabad complainant reported losing INR 116,000 to unknown persons operating an investment app called LOXAM that claimed association with a reputed French MNC group and promised unrealistically high returns. The predicate charge sheet traced the focal transfer through Paytm and Razor payment gateways into virtual accounts associated with Xindai Technologies and then described a much larger downstream account network. The later PMLA bail judgment scrutinised allegations against Bhupesh Arora but noted that he was not named or charge-sheeted in the predicate offence and that key links were materially contested.

## Reconstruction

### Pretext
Unknown persons operated the LOXAM investment app, represented it as connected with a reputed French MNC group bearing the same name and offered unrealistically high returns.

### Requested action and outcome
The complainant was induced to invest and **INR 116,000** was transferred through Paytm and Razor payment gateways to virtual accounts.

## Evidence map

The predicate charge-sheet account describes settlement into a my ePocket virtual account associated with Xindai Technologies and a larger trail through multiple virtual and physical accounts. The later PMLA material contains much larger aggregate figures. Those figures describe network throughput/alleged proceeds and are not the focal victim's loss.

## Actor and attribution analysis

### SEIAI-0087-A01: LOXAM investment-app operator cluster
- Identity resolution: `actor_cluster`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution strength: `moderate`
- Limitation: the human operators are unresolved and the reviewed judgment does not reproduce app/device attribution.

### SEIAI-0087-A02: Xindai virtual-account controller network
- Identity resolution: `actor_cluster`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution strength: `moderate`
- Limitation: network-level account tracing does not resolve every human controller or establish operation of the LOXAM deception.

### SEIAI-0087-A03: Bhupesh Arora
- Identity resolution: `identified`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Attribution strength: `limited`
- Limitation: the High Court noted that he was neither named in the predicate FIR nor charge-sheeted there, key witnesses had not initially named him, and the alleged nexus contained material gaps.

## Primary evidentiary gap

App/platform registration and device records identifying the LOXAM operators, plus transaction-level tracing connecting the focal INR 116,000 to specific human-controlled endpoints without relying on aggregate network figures.

## Coding decisions

- `financial_loss_inr` is **116000** only.
- INR 152.62 crore pay-in, INR 18.85 crore payout and approximately INR 311 crore in broader account flows are not treated as focal loss.
- Exact incident dates and the original first-contact channel are not supplied in the reviewed source.
- Cross-border dimension is `suspected`, not `yes`, because the judgment characterises the wider matter as Chinese investment fraud and describes alleged foreign/hawala routing without resolving a focal foreign operator.
