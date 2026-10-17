# Timilehin Falade — Portfolio

[![CI](https://github.com/faladetimilehin/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/faladetimilehin/portfolio/actions/workflows/ci.yml)

**Senior Software Engineer · React, TypeScript, Node.js, AWS, Fintech, AI**
Birmingham, UK · [Live site](https://timilehinfaladeportfolio.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/faladetimilehin/) · faladetimilehin@yahoo.com

## Stack
- **React 18 + TypeScript**, built with **Vite**
- **Framer Motion**: curtain-reveal hero name, rotating hero text, magnetic buttons, an infinite company marquee, count-up stats, an expandable experience accordion and hover-animated project covers. Animations turn off automatically for visitors who ask their OS for reduced motion.
- **Light theme by default**, with a dark-mode toggle that remembers each visitor's choice
- **Headshot:** add `public/assets/timi.jpg` and set `photo` in `src/data/profile.ts`. Until then, the hero shows a TF monogram
- **Freelance booking**: an enquiry form saved through Netlify Forms, then a Calendly link pre-filled with the visitor's name, email and project details
- **Vitest + Testing Library** unit tests; **GitHub Actions** runs type checks, tests and the production build on every push

## Project structure
```
src/
  data/profile.ts      ← all content (jobs, projects, skills, Calendly link)
  components/          ← Nav, Hero, Sections, HireMe, Contact
  hooks/useTheme.ts    ← light/dark toggle, saved per visitor
  lib/booking.ts       ← Calendly pre-fill + Netlify form helpers (tested)
  lib/year.ts          ← footer year updates automatically
public/assets/Timi-Falade-CV.pdf
```

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm test           # unit tests
npm run build      # production build in dist/
```
