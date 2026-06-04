# Contributing

## Branching

| Branch | Purpose |
|--------|---------|
| **`develop`** | Integration branch — **all PRs must target `develop`** |
| **`main`** | Production releases — updated only via PR from `develop` (or release merge) |

**Do not open PRs against `main` for feature work.**

## Workflow

1. Branch from `develop`:
   ```bash
   git fetch origin
   git checkout develop
   git pull origin develop
   git checkout -b feat/your-change
   ```

2. Open a pull request with **base: `develop`**.

3. After review, merge into `develop`. CI runs on push/PR to `develop` (see `.github/workflows/deploy.yml`).

4. When ready for production, open a PR **`develop` → `main`** (release PR).

## Commands

```bash
bun install
bun run dev
bun run type-check
bun run build
```
