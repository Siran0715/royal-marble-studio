# Royal Marble Studio

A premium marble & granite showroom website built with React, React Router, Tailwind CSS and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- All stone textures are generated procedurally in `src/components/MarbleSlab.jsx` using SVG `feTurbulence` filters — no external photography is required, so the site works fully offline and never has a broken image.
- Swap in real photography at any time by replacing `<MarbleSlab variant="..." />` usages with `<img>` tags — the component API (`variant`, `className`) makes this a drop-in change per section.
- Dark/light mode is persisted to `localStorage` and toggled from the navbar.
- Update contact details, address and map query in `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
- Product, gallery, testimonial, team and process data live in `src/data/` — edit those files to update content without touching components.

## Folder Structure

```
src/
 ├── components/   Reusable UI (Navbar, Footer, MarbleSlab, ProductCard, ContactForm, ...)
 ├── pages/        Home, Products, Gallery, About, Contact, NotFound
 ├── hooks/        useTheme, useScrollPosition, useLockBodyScroll
 ├── data/         products.js, gallery.js, content.js
 ├── styles/       globals.css
 ├── App.jsx
 └── main.jsx
```
