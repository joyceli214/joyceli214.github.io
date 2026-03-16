# Joyce Li Portfolio

Professional portfolio website built with React + Vite + TypeScript using a liquid-glass visual system.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS with CSS variable design tokens
- Local reusable components inspired by Magic UI and React Bits interaction patterns
- Lucide icons
- GitHub Actions deployment to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
npm run format:check
```

## Deploy to GitHub Pages (user site)

This repo is configured for a user site (`https://<username>.github.io`) with `base: '/'`.

1. Push this repo to `<username>/<username>.github.io`.
2. In GitHub repo settings, open `Pages` and set source to `GitHub Actions`.
3. Ensure your default branch is `main` (or adjust workflow trigger).
4. Push to `main` and the workflow in `.github/workflows/deploy.yml` will publish automatically.

## If this is a project site instead of user site

If repo is `https://github.com/<username>/<repo>` and URL should be `https://<username>.github.io/<repo>`:

1. Update `vite.config.ts`:

```ts
export default defineConfig({
  base: '/<repo>/',
  plugins: [react()],
})
```

2. Keep the same GitHub Actions workflow.

## Content source

All portfolio content is centralized in `src/data/portfolio.ts`.
Update this file to change copy, experience, projects, and contact links.

