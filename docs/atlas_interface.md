# Public Atlas Interface

The `atlas/` directory is a read-only public exploration layer for the Social Engineering Incident Atlas India.

## Design rule

The website is **not a second dataset**. The authoritative research files remain:

- `data/cases.csv`
- `data/actors.csv`
- `references/sources.csv`

`analysis/scripts/build_public_atlas.py` derives `atlas/data/atlas.json` from those files. Do not hand-edit `atlas/data/atlas.json`.

## What the interface includes

- overview metrics and interactive charts
- case explorer with combined filters
- individual case reconstruction views
- actor-role explorer
- evidence explorer
- public source registry
- permanent sampling and attribution warnings
- responsive mobile layout

## Rebuild locally

From the repository root:

```bash
python analysis/scripts/build_public_atlas.py
```

Then serve the repository locally, for example:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/atlas/`.

## GitHub Pages

The included workflow `.github/workflows/deploy-atlas.yml` rebuilds the public JSON and deploys the `atlas/` directory to GitHub Pages.

In GitHub, open **Settings → Pages** and set the source to **GitHub Actions** if it is not already enabled.

## Interpretation boundary

The corpus is purposively sampled and retrieval-driven. Interface counts describe the reviewed Atlas corpus and must not be interpreted as prevalence estimates for Indian cybercrime. Actor-level records assess source-supported conduct and identity resolution, not guilt.
