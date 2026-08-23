# Cynosure documentation

End-user documentation for the Cynosure desktop app, built with VitePress.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run docs:dev
```

VitePress prints the local preview URL in the terminal. Changes to Markdown, navigation, or theme files reload automatically.

## Production build

```bash
npm run docs:build
npm run docs:preview
```

The static site is written to `.vitepress/dist`. The repository is self-contained: its logo lives in `public`, and all documentation screenshots live in `img`.

## Structure

```text
.vitepress/
  config.mts       # navigation, search, and site metadata
  theme/           # light/dark Cynosure theme
features/          # feature guides
guide/             # setup and administration guides
img/               # product screenshots
public/            # static brand assets
index.md            # landing page
```
