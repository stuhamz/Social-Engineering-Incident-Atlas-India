# Atlas UI v0.2 implementation note

## Purpose

v0.2 moves the public site from a browseable dashboard toward a research exploration instrument without changing any research coding.

## Additions

### Geographic corpus coverage

A schematic India map plots represented states/UTs using approximate state centroids. Marker size reflects the number of reviewed Atlas incidents coded to that state/UT. The interface repeatedly states that this is corpus coverage, not cybercrime prevalence.

### Stable case routes

Every case can be linked directly with a route such as:

`#case/SEIAI-0043`

Case dialogs provide copy-link, copy-citation, primary-source and GitHub case-note actions.

### Procedural posture

The case view now places a standardized source-stage warning immediately below the case header. Bail, interim, procedural, final and appellate records are not presented as equivalent evidentiary objects.

### Advanced exploration

The case explorer adds year-range, target, payment, psychological-mechanism, cross-border, attribution-strength, credential-compromise and device-compromise filters. Filtered case sets can be exported as CSV.

### Case comparison

Users can select two to four cases and compare attack structure, evidence, human resolution, source stage and evidentiary gaps side by side. Comparisons have shareable routes.

### Evidence matrix

The Evidence page now includes a primary attack category × evidence-type matrix. Cell values are counts within the reviewed corpus. Clicking a non-zero cell opens the matching case subset.

### Method page

The public interface now explains inclusion logic, sampling limitations, source hierarchy, incident/actor separation, human identity resolution, attribution scale and reproducibility.

## No research-data changes

v0.2 changes only the exploration layer and derived JSON structure. It does not alter `cases.csv`, `actors.csv`, `sources.csv`, the screening history, codebooks or case narratives.
