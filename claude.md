# NetSparta — web

Instructions for Claude and other AI assistants working in this repository.

## What this is

Public/marketing web presence for my IT NetSparta.com The repo is early-stage: active app code is expected under `src/` and shared media under `assets/`. A **legacy static site** (HTML, CSS, jQuery) lives under `old-site/` for reference, screenshots, and migration source material.

## Layout

| Path | Purpose |
|------|---------|
| `src/` | New site or app source (currently empty — add the chosen stack here). |
| `assets/` | Shared static assets for the new site. |
| `old-site/site/` | Legacy NetSparta pages (`index.html`, `css/`, `images/`, `js/`). Treat as read-mostly unless explicitly modernizing in place. |
| `old-site/screenshots/` | Archived page/screenshot images. |

## Working conventions

- **Prefer changes in `src/` and `assets/`** for new work. Do not replace or delete `old-site/` without an explicit request.
- **Match the stack** once it exists (framework, package manager, linter). If no `package.json` is present yet, propose minimal scaffolding only when the user asks.
- **Accessibility and performance**: prefer semantic HTML, meaningful alt text, and lean assets when building the new site.
- **Scope**: make the smallest change that satisfies the task; avoid drive-by refactors and unrelated file churn.

## Stack

| Item | Value |
|------|-------|
| Framework | Vite 5 + vanilla JS (no framework) |
| Node | v22.x |
| Package manager | npm |
| Dev server | `npm run dev` → http://localhost:5173 |
| Production build | `npm run build` → `dist/` |
| Deployment | Cloudflare Pages (auto-deploy from `main` branch) |

Source lives in `src/` (single-page site). Build output goes to `dist/` (git-ignored).

### Cloudflare Pages settings (set in dashboard)
| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root) |
| Environment variable | `NODE_VERSION = 22` |

## Product context

Legacy titles and branding reference **NetSparta**; preserve tone and factual claims when migrating copy. Verify any product or legal statements with the project owner before changing them.
