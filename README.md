# Home Inspection Landing Page Template

A reusable React + TypeScript + Vite landing page template for AI Home Inspection style products.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router

## 1. Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

Open: `http://localhost:5173`

## 2. Environment Variables

Set these in `.env`:

```bash
VITE_API_BASE_URL=https://your-api-domain.com
```

Used by contact API calls in `src/services/contactApi.ts`.

## 3. Project Structure

```text
src/
  components/   # UI sections and reusable component
  content/      # Static content/config for sections
  pages/        # Route-level pages
  services/     # API integration
  assets/       # Images/icons
  utils/        # Validation and helpers
```

## 4. How To Use This Template

### Update text/content only

Edit files in `src/content/`:

- `header.ts`
- `hero.ts`
- `howItWorks.ts`
- `features.ts`
- `testimonials.ts`
- `faqs.ts`
- `downloadBanner.ts`
- `contact.ts`
- `footer.ts`
- `footerbottombar.ts`

This lets you reuse layout/components without touching UI logic.

### Update images

- Replace files in `src/assets/images/...`
- Keep import names in content files (or update imports there).

### Update theme globally

Edit `src/index.css`:

- `--font-family-sans`
- color tokens in `:root` and `@theme`

Font is globally controlled from theme tokens, so changing it there updates the full app.

### Section order on homepage

Edit `src/pages/HomePage.tsx` to add/remove/reorder sections.

## 5. Main Reusable Components

- `StoreButtons.tsx` (used in hero, download banner, footer)
- `FooterBottomBar.tsx` (used in footer + legal pages)
- Section blocks:
  - `Hero.tsx`
  - `HowItWorks.tsx`
  - `Feature.tsx`
  - `Testimonial.tsx`
  - `Faqs.tsx`
  - `ContactUs.tsx`
  - `DownloadBanner.tsx`
  - `Footer.tsx`

## 6. Routes

Configured in `src/App.tsx`:

- `/` Home page
- `/terms` Terms of Use
- `/content-terms` Terms of Content

## 7. Contact Form (Backend)

Contact form submits to backend via:

- `submitContactFormApi()` in `src/services/contactApi.ts`
- endpoint: `POST /contact-us`

Current payload:

- `name`
- `email`
- `subject`
- `message`

## 8. Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Type-check + production build
npm run preview  # Preview production build
npm run lint     # Run eslint
```

## 9. Deployment

Template is Vite-standard and can be deployed to Vercel/Netlify/static hosting.

Recommended flow:

1. Set env vars in hosting dashboard (`VITE_API_BASE_URL`)
2. Build command: `npm run build`
3. Output directory: `dist`
