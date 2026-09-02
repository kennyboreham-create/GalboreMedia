# GalboreMedia

Marketing site for **GalboreMedia**, a creative media studio. Built with
[Vite](https://vitejs.dev/), [React](https://react.dev/), and TypeScript.

## Requirements

- Node.js 20+ (developed on Node 22)
- npm 10+

## Getting started

```bash
npm ci        # install dependencies (uses package-lock.json)
npm run dev   # start the dev server at http://localhost:5173
```

If you do not have a lockfile yet, use `npm install` instead of `npm ci`.

## Available scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server on port `5173`.          |
| `npm run build`     | Type-check and build the production bundle to `dist`. |
| `npm run preview`   | Preview the production build on port `4173`.        |
| `npm run lint`      | Lint the project with ESLint.                      |
| `npm run typecheck` | Run the TypeScript compiler with no emit.          |
| `npm test`          | Run the unit/component tests with Vitest.          |

## Project structure

```
src/
  components/   Reusable UI (contact form, icons)
  data/         Static site content (services, projects, stats)
  lib/          Pure helpers (form validation) + unit tests
  test/         Test setup
  App.tsx       Page composition
  main.tsx      App entry point
```

## Deployment & custom domain (`galbore.ca`)

The site is a static bundle hosted for free on **GitHub Pages** and served at the
custom domain **`galbore.ca`** (registered on GoDaddy). The
[`Deploy to GitHub Pages`](.github/workflows/deploy.yml) workflow builds the site
and publishes it on every push to `main`. The domain is bound via the committed
[`public/CNAME`](public/CNAME) file, which Vite copies to `dist/CNAME` at build
time — no per-repo variable is needed. To use a different domain later, just edit
that file.

### 1. Enable GitHub Pages (one time)

In the repository, go to **Settings → Pages** and set **Source** to
**GitHub Actions**. The next push to `main` (or a manual _Run workflow_) publishes
the site. After the first deploy, confirm `galbore.ca` appears under
**Settings → Pages → Custom domain**, and enable **Enforce HTTPS** once GitHub has
issued the TLS certificate.

### 2. Point `galbore.ca` at GitHub Pages (GoDaddy DNS)

In GoDaddy: **My Products → `galbore.ca` → DNS → Manage DNS**.

For the **apex/root domain** (`galbore.ca`) add four `A` records on host `@`:

| Type | Host | Value           |
| ---- | ---- | --------------- |
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

(Optionally also add `AAAA` records for IPv6: `2606:50c0:8000::153`,
`2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.)

To also serve **`www.galbore.ca`** add a `CNAME` record (GoDaddy does not allow a
`CNAME` on the apex, so the apex uses the `A` records above):

| Type  | Host | Value                          |
| ----- | ---- | ------------------------------ |
| CNAME | www  | kennyboreham-create.github.io. |

Remove any default GoDaddy "Parked"/forwarding `A` record on `@` first. DNS changes
can take up to ~1 hour to propagate; GitHub then issues the TLS certificate
automatically.

## Cloud Agent environment

The Cloud Agent development environment is defined in
[`.cursor/environment.json`](.cursor/environment.json): it installs dependencies
with `npm ci` and runs the dev server (`npm run dev`) on port `5173`.
