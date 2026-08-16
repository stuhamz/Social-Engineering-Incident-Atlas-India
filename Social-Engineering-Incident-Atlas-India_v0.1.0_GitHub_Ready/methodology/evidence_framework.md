# Evidence Framework

This project records the evidentiary structure described in public sources. It does not independently authenticate evidence it has not examined.

## Three separate questions

For each evidence type ask:

1. **Existence**: does the source report that the evidence exists?
2. **Proposition**: what fact does the source say or imply it supports?
3. **Limitation**: what does it not establish by itself?

## Examples

### Bank record

May support:

- receipt or movement of funds
- account linkage
- timing of a transaction

Does not by itself establish:

- who made the social-engineering call
- who controlled the account at the relevant moment
- who planned the offence

### SIM subscriber record

May support:

- subscriber registration

Does not by itself establish:

- physical possession at the relevant moment
- authorship of a message
- identity of the caller

### IP or login record

May support:

- access from an address or network at a given time

Does not by itself establish:

- human identity
- exclusive control of the connection

### Device forensic examination

Potentially stronger when the source reports artefacts tying the device to relevant communications, accounts, files, or actions. Record exactly what the source says was recovered.

## Legal provisions

Record provisions exactly as stated by the source in `legal_provisions`.

If the project later normalises statutory references, that should be done in a separate versioned field after checking official current legal text.
