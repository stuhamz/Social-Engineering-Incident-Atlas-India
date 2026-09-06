# Atlas UI Data Audit v0.1

Date: 2026-09-06

## Conclusion

The current audited Atlas is already sufficiently structured for a substantial public exploration interface without changing the authoritative research schema.

Current live research layers:

- 74 active incident rows in `data/cases.csv`
- 196 actor-role assessments in `data/actors.csv`
- 82 active registered sources in `references/sources.csv`

The public interface should therefore be a **derived read-only layer**, not a second manually maintained dataset.

## Fields that can power the interface immediately

### Identity and provenance

- `case_id`
- `record_status`
- `coding_version`
- `case_title`
- `primary_source_id`
- `primary_source_tier`
- `source_stage`
- `court_or_authority`
- `case_number`
- `case_status`

### Time and geography

- `incident_start_date`
- `incident_end_date`
- `incident_year`
- `state`
- `city`
- `cross_border_dimension`

The UI must preserve the dataset's date-precision rule. Blank exact dates are not to be backfilled from judgment, FIR or procedural dates.

### Attack structure

- `attack_category_primary`
- `attack_category_secondary`
- `contact_channel_primary`
- `contact_channels_other`
- `platform_primary`
- `impersonated_identity_category`
- `impersonated_identity_detail`
- `target_type`
- `target_sector`
- `initial_contact_summary`
- `pretext_summary`
- `requested_action`
- `victim_action`

These fields support filters, case reconstruction cards and attack-anatomy views.

### Psychological mechanisms

- `authority_mechanism`
- `fear_mechanism`
- `urgency_mechanism`
- `trust_mechanism`
- `scarcity_mechanism`
- `reciprocity_mechanism`
- `isolation_mechanism`
- `repeated_contact_mechanism`
- `other_psychological_mechanism`

These are suitable for comparative visualization because they are already normalized as separate fields.

### Outcome and financial path

- `credential_compromise`
- `device_compromise`
- `remote_access_tool`
- `financial_loss_inr`
- `payment_method`
- `money_mule_reported`
- `known_account_count`

The interface must not calculate or present corpus averages as national estimates.

### Evidence

- `phone_or_sim_evidence`
- `cdr_evidence`
- `bank_evidence`
- `ip_or_login_evidence`
- `device_evidence`
- `chat_message_evidence`
- `email_evidence`
- `social_media_evidence`
- `cctv_evidence`
- `platform_provider_records`
- `forensic_examination_reported`
- `other_evidence`
- `electronic_evidence_authentication_discussed`
- `chain_of_custody_discussed`
- `evidence_integrity_issue_reported`

These fields are strong enough for a dedicated Evidence Explorer.

### Attribution

- `attribution_target`
- `attribution_basis_primary`
- `attribution_basis_secondary`
- `attribution_strength`
- `attribution_limitations`
- `alternative_explanation`
- `primary_evidentiary_gap`

These should be displayed prominently rather than hidden in methodology pages because conservative attribution is one of the Atlas's central intellectual contributions.

## Actor layer

The actor table is already suitable for a public Actor Explorer.

Important fields:

- `actor_id`
- `case_id`
- `actor_label`
- `identity_resolution`
- `role_layer`
- `victim_facing_function`
- `financial_function`
- `function_assignment_basis`
- `role_primary`
- `role_secondary`
- `conduct_assessed`
- `direct_victim_contact`
- `attribution_basis_primary`
- `attribution_basis_secondary`
- `attribution_strength`
- `attribution_limitations`
- `alternative_explanation`
- `source_ids`
- `relationship_note`

The UI must preserve the distinction between identity resolution and conduct attribution. An identified person can still have limited attribution for a particular conduct, while an actor cluster can have stronger evidence for a role without resolving every individual.

## Source layer

`references/sources.csv` is strong enough for a public source registry and case-level source panels.

Useful fields:

- `source_id`
- `case_id`
- `source_tier`
- `source_stage`
- `source_type`
- `title`
- `publisher_or_authority`
- `court_or_body`
- `case_number`
- `publication_date`
- `accessed_date`
- `url`
- `archive_url`
- `claim_scope`
- `notes`

## What should not be added merely for UI convenience

Do not add synthetic exact dates, guessed geolocations, inferred offender identities, inferred victim demographics, normalized loss values from unstated totals, or manually inferred network edges simply because a visualization would look better with them.

Unknown and not-reported values are analytically meaningful.

## What the current data cannot yet support well

### 1. True entity-relationship network visualization

The current actor model distinguishes conduct but does not represent every phone number, bank account, device, social account, IP address and transfer as a reusable entity with evidence-backed edges.

A later pilot could introduce:

`entities.csv`

- `entity_id`
- `case_id`
- `entity_type`
- `display_label`
- `resolution_status`
- `source_ids`

`relationships.csv`

- `relationship_id`
- `case_id`
- `source_entity_id`
- `relationship_type`
- `target_entity_id`
- `evidence_basis`
- `confidence_or_status`
- `source_ids`
- `limitation`

This should be piloted on five cases before corpus-wide coding.

### 2. Precise spatial mapping below state/city

The Atlas records state and city but not verified latitude/longitude. A public map can therefore safely operate at state level, or city level only after a separate verified geocoding layer is introduced.

### 3. Full evidence lifecycle reconstruction

The present evidence flags record whether evidence is discussed, but not every acquisition, preservation, transfer, authentication and courtroom step as a structured event.

A future evidence-lifecycle extension could code original-device availability, acquisition method, forensic extraction, hash/authentication discussion, certificate discussion, chain-of-custody issue, admissibility objection and evidentiary consequence.

## Public interface architecture

```text
Authoritative research CSVs
        |
        v
analysis/scripts/build_public_atlas.py
        |
        v
atlas/data/atlas.json
        |
        v
Public Atlas UI
```

`atlas/data/atlas.json` is generated and must never become an independently edited research source.

## v0.1 UI scope

Implemented now:

- Overview
- interactive attack-category chart
- state/UT representation ranking
- source-stage chart
- evidence visibility chart
- function-level human-resolution view
- incident-year chart
- case search and combined filters
- detailed case reconstruction modal
- actor-role explorer
- evidence explorer
- source registry
- mobile-responsive layout
- permanent sampling and attribution interpretation notices

Deliberately deferred:

- geographic boundary map
- entity network graph
- evidence-lifecycle graph
- user accounts / backend
- automated claims or AI summaries

The deferred features require either verified geometry or additional research structure, not merely frontend work.
