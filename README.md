# Nuptse Brewing Co. — Website

A React website for Nuptse Brewing Co., Kathmandu, Nepal.

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Install & Run

```bash
npm install
npm start
```

The site will open at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Output goes to the `/build` folder — upload this to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

```
src/
  App.js                  Main app — imports all sections
  index.js                Entry point
  index.css               Global reset & CSS variables
  components/
    Navbar.js / .css      Sticky navigation with mobile menu
    Hero.js / .css        Full-height hero with mountain SVG
    About.js / .css       Story section + stat cards
    Menu.js / .css        Beer menu with filter tabs
    Events.js / .css      Upcoming events list
    Contact.js / .css     Contact info + form
    Footer.js / .css      Footer
```

## Customisation

- **Colors** — edit CSS variables in `src/index.css`
- **Beers** — edit the `beers` array in `src/components/Menu.js`
- **Events** — edit the `events` array in `src/components/Events.js`
- **Contact details** — edit the `details` array in `src/components/Contact.js`
- **Fonts** — swap Google Fonts link in `public/index.html`
