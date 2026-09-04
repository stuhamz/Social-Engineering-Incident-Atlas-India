# GitHub Update Guide for v0.1.5

Repository:

`https://github.com/stuhamz/Social-Engineering-Incident-Atlas-India`

This package updates the audited 50-case v0.1.4 Atlas to the 75-case corrective validation release v0.1.5.

## Before replacing files

Use your existing local clone. Do not create a new repository and do not copy the outer extracted folder into the repository.

If your local working tree has changes you want to keep, stop and save them first. Otherwise, from the repository folder run:

```powershell
git status
```

If the working tree is clean, update your local branch before copying the package:

```powershell
git pull --rebase origin main
```

Do not force-push.

## Replace the repository contents

Extract the v0.1.5 GitHub-ready ZIP. Open the extracted folder and copy **everything inside it** into your existing local repository folder.

Choose **Replace files in destination** when Windows asks.

Preserve your local `.git/` directory. Do not copy an outer package directory into the repository root.

The repository root should directly contain items such as:

```text
README.md
CHANGELOG.md
cases/
data/
docs/
methodology/
references/
schemas/
analysis/
```

## Stage and push v0.1.5

Run:

```powershell
git status
git add -A
git status
git commit -m "Expand Atlas to 75 reviewed cases"
git push origin main
```

The second `git status` should show all intended v0.1.5 changes under **Changes to be committed**.

If `git push origin main` is rejected because the remote moved after your earlier pull, do not force-push. Run:

```powershell
git pull --rebase origin main
git push origin main
```

If the rebase reports a conflict, stop and resolve the conflict before pushing.

## Verify GitHub before tagging

On GitHub, confirm that:

- `README.md` says v0.1.5 and 75 reviewed incidents
- `data/cases.csv` contains SEIAI-0001 through SEIAI-0075
- `data/actors.csv` contains 198 actor-role records
- `references/sources.csv` contains 83 registered sources
- `references/screening_log.csv` contains 96 candidates
- `docs/v0.1.5_75_case_expansion_audit.md` is present
- `docs/v0.1.5_validation_result.txt` reports zero incident and actor errors/warnings

Do not create the release tag until the pushed repository is correct.

## Create the v0.1.5 tag

The current latest public release before this update is v0.1.4, so v0.1.5 is the next release version.

Run:

```powershell
git tag -a v0.1.5 -m "Social Engineering Incident Atlas India v0.1.5"
git push origin v0.1.5
```

## Create the GitHub release

On GitHub, go to **Releases** and create a release from tag `v0.1.5`.

Release title:

`Social Engineering Incident Atlas India v0.1.5`

Suggested release description:

```markdown
75-case corrective validation release of the Social Engineering Incident Atlas India.

This release expands the Atlas from 50 to 75 reviewed social-engineering-enabled cybercrime incidents and from 148 to 198 reviewed actor-role attribution records. Cases 51–75 were selected in response to the v0.1.4 analytical-stability audit rather than by a simple case-count target.

The release includes:

- 75 reviewed incident records
- 198 reviewed actor-role attribution records
- 83 registered public sources
- 96 logged screening candidates
- 25 new narrative case reconstructions
- stronger final and appellate source-stage coverage
- expanded phishing, smishing, SIM-swap/account-takeover, customer-support, job/government impersonation and deepfake/social-media impersonation coverage
- updated 75-case expansion audit and metrics
- validation tooling with zero incident and actor errors/warnings

The corrective expansion reduces bail-order primary-source dependence from 33/50 (66%) to 37/75 (49.3%), while final and appellate judgments together rise from 13/50 (26%) to 33/75 (44%). Independent source corroboration remains limited, with 71/75 incidents currently supported by exactly one registered source.

The dataset remains a methodology and schema-validation resource. It should not be treated as a representative sample of cybercrime in India or used to estimate national prevalence, category frequency, average losses or conviction rates.

Research principle:

Reconstruct broadly. Attribute conservatively.
```

Attach the reviewed workbook as the release asset:

`Incident_Atlas_Coding_Workbook_v0.1.5_75_cases_reviewed.xlsx`

Do not commit the Excel workbook to Git. The CSV datasets are already contained in the repository.

Set the release as the latest release and do not mark it as a pre-release.
