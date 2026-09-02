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

## Cloud Agent environment

The Cloud Agent development environment is defined in
[`.cursor/environment.json`](.cursor/environment.json): it installs dependencies
with `npm ci` and runs the dev server (`npm run dev`) on port `5173`.
