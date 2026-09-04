# Actor-Level Data Dictionary

`data/actors.csv` is a companion table to `data/cases.csv`.

## Unit of analysis

**One row is one analytically distinct actor-role attribution assessment.**

It is not necessarily one named person and it is not a finding of guilt. A single human may be represented by more than one actor-role record when different alleged conduct has materially different evidentiary support.

The central field is `conduct_assessed`. `attribution_strength` applies to that conduct, not to a person generally.

| Field | Definition |
|---|---|
| `actor_id` | Unique actor-role record ID, e.g. `SEIAI-0009-A02`. |
| `case_id` | Parent incident in `data/cases.csv`. |
| `record_status` | `draft`, `reviewed`, or `verified`. Migration rows remain draft until source-audited. |
| `coding_version` | Actor-coding methodology version. |
| `coder` / `date_coded` | Coding provenance. |
| `actor_label` | Neutral role label. Names are not used by default. |
| `identity_resolution` | `identified`, `partially_identified`, `unknown`, or `actor_cluster`. |
| `role_layer` | `victim_facing`, `financial`, `technical`, `organisational`, `hybrid`, or `unknown`. |
| `role_primary` / `role_secondary` | Controlled operational roles. |
| `conduct_assessed` | Specific conduct to which the attribution score applies. |
| `direct_victim_contact` | Whether the role directly interacted with the victim. |
| `attribution_basis_primary/secondary` | Existing Atlas attribution-basis vocabulary. |
| `attribution_strength` | `strong`, `moderate`, `limited`, `unclear`, or `not_assessed`. |
| `attribution_limitations` | What the evidence does not establish for this conduct. |
| `alternative_explanation` | Plausible narrower/non-culpable interpretation where relevant. |
| `source_ids` | Semicolon-separated IDs from `references/sources.csv`. |
| `relationship_note` | Possible overlap/distinction with other actor-role records. |

## Important distinction

`identity_resolution` and `attribution_strength` answer different questions. An actor can be identified while attribution of a specific conduct remains limited or unclear. An actor cluster can also have strong evidence for a class of conduct without resolving every individual.

## v0.2.0 functional fields

### `victim_facing_function`
Non-exclusive functional flag. `yes` when the source links the actor to direct delivery or operation of the focal deception/pretext/coercive interaction. Values: `yes`, `no`, `uncertain`, `not_assessed`.

### `financial_function`
Non-exclusive functional flag. `yes` when the source links the actor to receipt/control/routing/withdrawal/cash-out of proceeds or operation/supply of the payment endpoint/path. Values: `yes`, `no`, `uncertain`, `not_assessed`.

### `function_assignment_basis`
Short source-grounded explanation for the two functional flags. The legacy `role_layer` remains a descriptive storage taxonomy and is not treated as mutually exclusive functional membership.

### Identity-resolution clarification
A persona, alias, first name, account label, bank endpoint, SIM subscriber, device, IP or broad conspiracy allegation does not by itself resolve a specific real-world human. See `methodology/human_identity_resolution_codebook_v0.2.0.md`.
