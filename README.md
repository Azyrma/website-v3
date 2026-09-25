# website-v3

My personal website. It has pages for About, Teaching, Projects and Experience, plus the course page for the Information Retrieval (FS26) exercise sessions with weekly slides.

Built with React, TypeScript, Vite, Tailwind and daisyUI. Pages use hash routing (`#/about`, `#/teaching/information-retrieval`, ...), so the build is plain static files.

## Setup

Needs Node.js and npm.

```sh
sudo pacman -S nodejs npm   # Arch
npm install
```

## Commands

```sh
npm run dev       # local dev server
npm run build     # build to dist/
npm run preview   # serve the build
npm run lint      # eslint
```

## Structure

- `src/App.tsx`: routes
- `src/Portfolio.tsx`: main site pages
- `src/courses/`: course pages
- `src/assets/`: slides (PDF) and images
