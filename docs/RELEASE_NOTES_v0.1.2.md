# Release Notes v0.1.2

## Actor-role attribution layer

v0.1.2 is a schema-extension release. It retains all 30 reviewed v0.1.1 incident records and adds `data/actors.csv` with **90 reviewed actor-role attribution records**.

The new companion table separates victim-facing, financial, technical and organisational conduct so that downstream evidence is not silently treated as proof of who performed the original social-engineering interaction.

### Added

- `data/actors.csv`
- `data/actor_data_dictionary.md`
- `methodology/actor_coding_protocol_v0.1.2.md`
- `schemas/actor_record.schema.json`
- `schemas/actor_controlled_vocabulary.json`
- `analysis/scripts/validate_actors.py`
- `docs/v0.1.2_actor_model_full_audit.md`

### Methodological rule

**Attribution strength applies to `conduct_assessed`, not to a person generally.**

A person may therefore have moderate evidence for control of a beneficiary account while evidence that the same person operated the victim-facing impersonation remains limited or unclear.

### Compatibility

No v0.1.1 case IDs, source IDs or incident fields were removed or redefined. The actor table is additive and linked by `case_id`.

The dataset remains a methodology/schema-validation resource and is not a representative sample of cybercrime in India.
