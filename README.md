# FS Pinoy Dental Clinic Website

A static marketing site for FS Pinoy Dental Clinic built with Next.js and Tailwind CSS.

## Overview

This project is designed to showcase the clinic's services, team, contact details, and location. It includes:

- Landing page with hero section and featured services
- About, Services, Team, and Contact pages
- Google Maps embed for clinic location
- Static contact links using `mailto:` and WhatsApp
- Modern responsive design with animations powered by GSAP

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- GSAP for scroll animations
- Lucide React for icons

## Available Scripts

From the project root, run:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run build
npm run start
npm run lint
```

## Project Structure

- `src/app/` — Next.js App Router pages and layout
- `src/components/` — reusable UI components
- `public/` — static assets
- `tailwind.config.cjs` — Tailwind CSS config
- `package.json` — dependencies and scripts

## Contact Page Note

Since this is a static site, the contact page uses direct links instead of a backend form:

- `mailto:hello@fspinoydental.com`
- `tel:+971542575730`
- WhatsApp chat link

If you want a working form later, you can integrate a static form service like Formspree, Netlify Forms, or a custom API.

## Deployment

This site can be deployed on any static hosting platform that supports Next.js, such as Vercel, Netlify, or AWS Amplify.

## License

This repository is private. Please update license and project details as needed.
