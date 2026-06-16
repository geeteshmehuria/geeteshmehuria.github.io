# Geetesh Mehuria — Portfolio

A modern, animated personal portfolio for **Geetesh Mehuria**, a Full Stack Developer
working with Svelte, FastAPI, Python, PostgreSQL, and AI-powered web apps.

### 🔗 Live: [geeteshmehuria.github.io](https://geeteshmehuria.github.io/)

## Features
- **Hero** with role typewriter, clear CTAs, and a scroll-reactive animated background
- **About**, grouped **Skills**, **Experience** timeline, **Projects** with a details modal,
  **Education**, and a **Contact** section
- Smooth scroll-reveal animations (respecting `prefers-reduced-motion`)
- Responsive, premium dark design with glassmorphism and gradient accents
- SEO meta (title, description, Open Graph / Twitter) and a manifest

## Tech Stack
- **React** (Create React App)
- **styled-components** for styling
- **react-icons** and **typewriter-effect**
- Deployed to **GitHub Pages**

## Getting Started
```bash
# Clone
git clone https://github.com/geeteshmehuria/geeteshmehuria.github.io.git
cd geeteshmehuria.github.io

# Install dependencies
npm install

# Run locally (http://localhost:3000)
npm start

# Production build
npm run build
```

## Deployment
The site is hosted on GitHub Pages from the `gh-pages` branch:
```bash
npm run deploy   # builds and publishes the build/ folder to gh-pages
```

## Editing Content
Most content (bio, skills, experience, education, projects) lives in
[`src/data/constants.js`](src/data/constants.js) — update it there.
