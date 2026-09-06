# Atlas UI installation

This is an **additive patch** for the existing `Social-Engineering-Incident-Atlas-India` repository. It does not replace `data/cases.csv`, `data/actors.csv`, case narratives, methodology files, validators, or the source registry.

## Add these files to the repository

Copy the patch contents into the repository root, preserving folders:

```text
.github/workflows/deploy-atlas.yml
analysis/scripts/build_public_atlas.py
atlas/index.html
atlas/styles.css
atlas/app.js
atlas/data/atlas.json
docs/atlas_interface.md
```

## Validate before committing

From the repository root run:

```powershell
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
python analysis/scripts/build_public_atlas.py
python analysis/scripts/update_readme_for_atlas.py
```

Expected research validation remains:

```text
74 active cases
196 actors
82 sources
96 screening candidates
0 errors
0 warnings
```

The public-data builder should print:

```text
Cases: 74 | Actors: 196 | Sources: 82
```

## Commit and push

```powershell
git add atlas analysis/scripts/build_public_atlas.py analysis/scripts/update_readme_for_atlas.py docs/atlas_interface.md docs/atlas_ui_data_audit_v0.1.md .github/workflows/deploy-atlas.yml README.md
git commit -m "Add public Atlas exploration interface"
git push origin main
```

## Enable GitHub Pages

On GitHub:

1. Open the repository.
2. Open **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Open the **Actions** tab and confirm that `Deploy public Atlas` succeeds.

Expected public URL:

`https://stuhamz.github.io/Social-Engineering-Incident-Atlas-India/`

## Important architecture rule

Never edit `atlas/data/atlas.json` by hand. It is derived from the authoritative research CSV files. After changing research data, run `python analysis/scripts/build_public_atlas.py` or let the Pages workflow rebuild it automatically.
