# Public Atlas Interface

The public interface is a read-only exploration layer over the Social Engineering Incident Atlas India research repository.

## Source of truth

The website does not maintain a second manually edited dataset. `analysis/scripts/build_public_atlas.py` derives `atlas/data/atlas.json` from:

- `data/cases.csv`
- `data/actors.csv`
- `references/sources.csv`

The authoritative CSVs, codebooks, source registry, case narratives and validators remain the research layer.

## Interface v0.2

The interface includes:

- corpus summary and navigation charts
- schematic India corpus-coverage map with state/UT markers
- case explorer with basic and advanced filters
- shareable permanent case routes such as `#case/SEIAI-0043`
- case-level procedural-posture warnings
- copy-link and copy-citation actions
- filtered CSV export
- comparison of two to four cases with shareable `#compare/...` routes
- actor-role explorer
- evidence explorer
- attack-type × evidence matrix
- source registry
- a dedicated Method page explaining sampling, source hierarchy, identity resolution and attribution

## Interpretation boundary

The Atlas is purposively sampled and retrieval-driven. Corpus counts must not be read as national prevalence, state rankings, average-loss estimates, conviction rates or demographic risk estimates.

Map markers show the state or UT coded for reviewed incidents. Marker placement uses approximate state centroids for interface navigation. They are not incident coordinates.

## Deployment

The existing GitHub Pages workflow rebuilds `atlas/data/atlas.json` before deploying the `atlas/` directory. When research CSVs change, the public interface is therefore regenerated from the same authoritative data.
