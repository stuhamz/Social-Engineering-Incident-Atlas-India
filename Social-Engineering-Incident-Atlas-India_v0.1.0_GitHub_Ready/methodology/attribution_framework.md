# Attribution Framework

Attribution is the central caution of this project.

## The attribution question

The dataset does not ask only:

> What person is associated with this artefact?

It asks:

> What specific conduct can the available evidence reasonably connect to a person, account, device, or role?

## Association is not conduct

The following may be important evidence, but none automatically proves who conducted the original social-engineering interaction:

- SIM registration
- bank-account ownership
- receipt of funds
- IP subscriber information
- possession of a device
- ownership of an email or social account
- presence in a contact list
- association with a co-accused

## Strength categories

### Strong

Multiple independent evidence streams connect the attribution target to the relevant conduct, or a judicial finding establishes the relevant role on the available record.

### Moderate

Evidence meaningfully connects the target to an important part of the incident, but a material step remains inferential or an alternative explanation remains plausible.

### Limited

The evidence establishes association with an artefact, account, transaction, device, or person but does not substantially establish the relevant conduct.

### Unclear

The public material is too incomplete or internally ambiguous to assess attribution reliably.

### Not assessed

The source does not provide enough attribution material for the project to evaluate.

## Required attribution notes

For any `strong`, `moderate`, or `limited` code, complete:

- `attribution_target`
- `attribution_basis_primary`
- `attribution_limitations`

Where plausible, record an `alternative_explanation`.

## Conservative rule

When uncertain between two strength levels, use the weaker level until stronger source support is located.
