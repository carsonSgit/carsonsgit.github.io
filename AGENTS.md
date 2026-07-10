## Cursor Cloud specific instructions

This is a **statically-exported Next.js 16 portfolio site** (no backend, no database, no API routes). The only service is the Next.js dev server.

### Key commands

| Task | Command |
|---|---|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000) |
| Build (static export) | `pnpm build` |
| Format | `pnpm format` (Biome) |
| Lint unused code | `pnpm lint:unused` (knip) |
| Lint + format check | `pnpm biome check .` |

### Non-obvious notes

- Package manager is **pnpm 10.33.0** (declared via `packageManager` field in `package.json`). The environment ships with this version via nvm.
- `next.config.ts` uses `output: "export"` — the build produces static HTML in `./out`, not a Node.js server. `pnpm start` serves this via `npx serve`.
- Biome is used for both formatting and linting (not ESLint/Prettier). The config lives in `biome.json`.
- There are no automated test suites (no jest, vitest, or similar). `knip` is the closest lint-level check for dead code.
