# Webpack Boilerplate

I am doing exercises A modern **Webpack 5 boilerplate** using **ESM**, **Babel**, **CSS**, **PostCSS (Autoprefixer)**, with development server (HMR) and production optimizations (asset hashing, code splitting, minification).

---

## Project Structure

```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 dist/ 🚫 (auto-hidden)
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 public/
│   └── 🌐 index.html
├── 📁 src/
│   ├── 📄 index.js
│   └── 🎨 style.css
├── 📄 .babelrc 🚫 (auto-hidden)
├── 📄 .browserslistrc
├── 🚫 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.cjs
├── 📖 readme.md
└── 📄 webpack.config.mjs
```

## Installation

```bash
# Clone Repository
git clone https://github.com/ryzmdn/webpack-boilerplate.git

# Open default code editor
code webpack-boilerplate

# Install dependencies
npm install

# Start build
npm run build

# Start localhost
npm run preview
```

- Starts webpack-dev-server at `http://localhost:3000`.
- Supports Hot Module Replacement (HMR).
- Serves the `dist` folder locally (requires `serve` package, already included via `npx`).

| Script            | Summart                               |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start dev server with HMR             |
| `npm run build`   | Build production-ready app in `/dist` |
| `npm run preview` | Preview the production build locally  |

## Customization

1. **Add environment variables**: Use `DefinePlugin` in `webpack.config.mjs` or add `.env` + `dotenv-webpack`.
2. **Add TypeScript**: Install `ts-loader` + `typescript` and update resolve.extensions.
3. **Linting/Formatting**: Add ESLint + Prettier for better DX.

## All Dependencies

```bash
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin mini-css-extract-plugin css-loader sass sass-loader postcss postcss-loader autoprefixer babel-loader @babel/core @babel/preset-env cross-env
```
