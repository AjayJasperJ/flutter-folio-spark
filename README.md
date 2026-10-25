# Ajay Jasper J — Portfolio

A responsive React + TypeScript portfolio built with Vite. Content reflects Ajay's resume and selected public GitHub projects: LIKE, Wondertail, and Flutter Calendars. The project illustrations are decorative, not screenshots of the applications.

## Local development

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

```sh
npx tsc --noEmit -p tsconfig.app.json
npm run build
npm run preview
```

## Publish runner

`.github/workflows/publish.yml` builds on pull requests, publishes every push to `main`, and supports **Actions → Build and publish portfolio → Run workflow** for manual publishing. The workflow runs on GitHub-hosted Ubuntu runners, checks TypeScript, builds, verifies the output and favicon, and deploys the Pages artifact with OIDC. No personal access token is stored.

Live URL: https://ajayjasperj.github.io/flutter-folio-spark/

For the first deployment, set **Settings → Pages → Build and deployment → Source → GitHub Actions** if Pages is not already enabled. GitHub's automatic enablement step may require administrator permissions beyond the workflow token; selecting the source once resolves that. Subsequent pushes deploy automatically.

Vite's base is `/flutter-folio-spark/`. Update `vite.config.ts` and canonical metadata if you rename the repository or use a custom domain.

## Content updates

- Profile, projects, experience, and contact links: `src/App.tsx`
- Visual design and responsive layouts: `src/portfolio.css`
- Search and social metadata: `index.html`

Project descriptions are curated from repository documentation; filters work locally and do not require API access. Client work is summarized from the supplied resume without exposing private repository contents.
