# My Portfolio

This repository is my personal portfolio website.

I use it to showcase selected projects, experience, and contact information in a single place.  
It is built to be easy to maintain, with content centralized and deployment automated.

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS with design tokens (CSS variables)
- Reusable UI components inspired by Magic UI and React Bits patterns
- Lucide icons
- GitHub Actions deployment to GitHub Pages

## Running Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the local dev server

```bash
npm run dev
```

## Useful Commands

Run code quality checks:

```bash
npm run lint
npm run format:check
npm run build
```

## Where to Edit Content

Most portfolio content lives in:

`src/data/portfolio.ts`

Update this file to change:

- Intro and bio text
- Experience
- Projects
- Contact links

## Deployment (GitHub Pages)

I set this project up to deploy automatically to GitHub Pages using GitHub Actions.

What I configured:

- Deployment workflow: `.github/workflows/deploy.yml`
- Trigger branch: `main`
- Vite base path: `base: '/'` for a GitHub user site deployment

This means every push to `main` triggers a new production build and publishes the latest version of the portfolio.

If I ever move this to a project site (`<username>.github.io/<repo>`), the main change needed is updating `vite.config.ts` to `base: '/<repo>/'`.
