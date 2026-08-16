# GitHub Push Guide

Repository target:

`https://github.com/stuhamz/Social-Engineering-Incident-Atlas-India`

## First push into an empty remote repository

Open a terminal inside the extracted project folder and run:

```bash
git init
git branch -M main
git remote add origin https://github.com/stuhamz/Social-Engineering-Incident-Atlas-India.git
git add .
git status
git commit -m "Release v0.1.0 ten-case methodology pilot"
git push -u origin main
```

Before the commit, inspect `git status`.

The local Excel workbook under `working/` is intentionally ignored by `.gitignore`. The authoritative public dataset is `data/cases.csv`.

## Tag the release

After the push succeeds:

```bash
git tag -a v0.1.0 -m "Social Engineering Incident Atlas India v0.1"
git push origin v0.1.0
```

Then create a GitHub Release from tag `v0.1.0`.

Suggested release title:

`Social Engineering Incident Atlas India v0.1`

Suggested release summary:

`First public methodology-pilot release containing 10 reviewed social-engineering-enabled cybercrime incident records, 16 registered public sources, case reconstructions, coding methodology, evidence and attribution frameworks, controlled vocabularies, and validation tooling.`

The Excel coding workbook can be attached to the GitHub Release as a binary asset rather than committed to the repository.

## If the remote is not empty

If GitHub already contains a commit that is not in the local folder, do not force-push.

Use:

```bash
git pull origin main --rebase
```

Resolve any conflict, then:

```bash
git push -u origin main
```

## Recommended repository topics

- `digital-forensics`
- `social-engineering`
- `cybercrime`
- `osint`
- `dfir`
- `cybercrime-investigation`
- `electronic-evidence`
- `incident-reconstruction`
- `threat-intelligence`
- `india`
