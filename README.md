# Social Engineering Incident Atlas India

A structured research dataset and analytical framework for studying **social-engineering-enabled cybercrime, digital evidence, and attribution in India**.

## What is this project?

Many cybercrime incidents are not initiated through sophisticated technical exploitation.

Instead, offenders may rely on impersonation, deception, authority, urgency, fear, trust, or other forms of human manipulation to persuade a target to disclose information, transfer money, install software, reveal credentials, or perform some other consequential action.

The **Social Engineering Incident Atlas India** aims to systematically study these incidents.

Rather than treating each case simply as a fraud category, the project reconstructs the documented attack process and examines the digital evidence later used to investigate and attribute it.

The project asks a simple underlying question:

> **What does social-engineering-enabled cybercrime actually look like in India when documented cases are systematically reconstructed and compared?**

---

## Research Focus

The project studies three connected layers.

### 1. Social Engineering

How was the target approached and manipulated?

Possible dimensions include:

* impersonation
* authority
* fear
* urgency
* trust
* scarcity
* relationship building
* deception
* information elicitation
* isolation
* repeated compliance requests

### 2. Digital Forensics

What digital traces were available after the incident?

Examples may include:

* mobile devices
* SIM and subscriber records
* call detail records
* IP logs
* email records
* chat messages
* social media accounts
* bank transaction records
* browser artefacts
* seized devices
* forensic examination reports
* CCTV
* platform records

### 3. Attribution

What does the available evidence actually establish about the people, accounts, devices, phone numbers, infrastructure, and financial accounts connected with the incident?

The project deliberately distinguishes between:

* association
* investigative lead
* corroboration
* strong attribution evidence
* judicial finding

An account, SIM card, IP address, or bank account associated with a person is not automatically treated as proof that the person performed every act in the incident.

---

## Incident Reconstruction Model

Where sufficient information exists, cases are reconstructed through the following sequence:

```text
TARGET
   |
   v
RECONNAISSANCE
   |
   v
INITIAL CONTACT
   |
   v
PRETEXT
   |
   v
TRUST / AUTHORITY / PRESSURE
   |
   v
VICTIM ACTION
   |
   v
DIGITAL OR FINANCIAL CONSEQUENCE
   |
   v
CONCEALMENT / CONTINUATION
   |
   v
INVESTIGATION
   |
   v
ATTRIBUTION
```

Not every incident contains evidence for every stage.

Missing information is recorded as missing rather than inferred.

---

## Initial Research Questions

The first phase of the project asks:

1. Which forms of social engineering appear most frequently in documented Indian cybercrime cases?

2. Which identities and institutions are most commonly impersonated?

3. Which communication channels are used to initiate and sustain these incidents?

4. Which psychological mechanisms are documented in successful attacks?

5. What actions are victims persuaded to perform?

6. What types of digital evidence are subsequently used during investigation?

7. What types of evidence are used to connect suspects to accounts, devices, phone numbers, infrastructure, or financial transactions?

8. Where do significant attribution gaps remain?

9. How frequently does publicly documented attribution rely on indirect identifiers such as SIM ownership or bank-account ownership?

10. How does the available evidence differ across different categories of social-engineering-enabled cybercrime?

---

## Initial Case Categories

The taxonomy is expected to evolve as the dataset develops.

Initial categories include:

* digital arrest scams
* phishing
* vishing
* smishing
* Business Email Compromise
* bank impersonation
* police impersonation
* government impersonation
* customer-support fraud
* investment fraud
* job fraud
* romance fraud
* social-media impersonation
* account takeover involving social engineering
* identity theft involving deception
* other social-engineering-enabled cybercrime

---

## Sources

The project uses publicly available material.

Sources are assigned a source category so that judicial findings, allegations, investigative claims, and journalistic reporting are not treated as equivalent.

The initial source hierarchy is:

### Tier 1

Judgments and judicial orders.

### Tier 2

Official police, government, regulatory, or investigative-agency material.

### Tier 3

Credible journalistic reporting containing substantive incident details.

Where multiple independent sources describe the same incident, they may be linked to the same case record.

---

## Important Evidentiary Distinction

This project records what sources establish.

It does not independently determine criminal guilt.

A court order describing a prosecution allegation is coded differently from a final judicial finding.

Similarly:

```text
Bank account ownership
does not automatically establish
control of the social-engineering interaction.

SIM registration
does not automatically establish
who physically used the device.

IP association
does not automatically establish
human identity.

Receipt of criminal proceeds
does not automatically establish
planning or execution of the initial deception.
```

These distinctions form a central part of the project's attribution methodology.

---

## Dataset Development

The dataset will be developed incrementally.

### Version 0.1

10 manually coded cases representing different forms of social-engineering-enabled cybercrime.

Purpose:

* test the schema
* identify ambiguous variables
* refine the taxonomy
* test inter-case comparability
* identify unavailable or unreliable fields

### Version 0.2

Approximately 50 cases using the revised coding framework.

### Version 0.3

Approximately 100 cases followed by preliminary descriptive analysis.

Larger-scale collection will only begin after the coding methodology has stabilised.

---

## Repository Structure

```text
Social-Engineering-Incident-Atlas-India/
|
|-- README.md
|
|-- data/
|   |-- cases.csv
|   |-- data_dictionary.md
|   `-- controlled_vocabulary.md
|
|-- cases/
|   `-- README.md
|
|-- methodology/
|   |-- inclusion_criteria.md
|   |-- coding_protocol.md
|   |-- attribution_framework.md
|   `-- source_quality.md
|
|-- analysis/
|   |-- notebooks/
|   `-- scripts/
|
|-- references/
|   `-- sources.csv
|
`-- docs/
    `-- research_questions.md
```

---

## Current Status

**Version 0.1 development**

The project is currently establishing its methodology, coding protocol, controlled vocabulary, and initial case schema.

No large-scale dataset analysis should be interpreted as complete at this stage.

---

## Planned Outputs

The project may eventually produce:

* an open structured dataset
* descriptive analyses of Indian social-engineering incidents
* attack-mechanism visualisations
* evidence and attribution maps
* state-level and temporal analyses
* research papers
* digital-forensics case studies
* educational cybercrime reconstruction exercises

---

## Relationship to CaseTrace

Some methodological ideas developed through this project may also inform **CaseTrace**, an experimental cybercrime reconstruction challenge focused on incident reconstruction, digital evidence, evidentiary reasoning, and conservative attribution.

The Incident Atlas is the empirical research project.

CaseTrace is the educational and competitive investigation format.

---

## Research Principle

> **Reconstruct broadly. Attribute conservatively.**

The objective is not to make the strongest possible accusation from limited information.

The objective is to determine the strongest conclusion that the available evidence can actually support.

---

## Author

**Hamzah**

MSc Digital Forensics and Information Security
National Forensic Sciences University, Bhopal

Research interests include social engineering, digital forensics, OSINT, cybercrime reconstruction, electronic evidence, and human-centric cybersecurity.
