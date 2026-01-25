# Restaurant Template (Next.js)

Modern single-page restaurant landing built with Next.js (App Router), Tailwind CSS v4, and lucide icons.

## Quick start

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000.

## Scripts

- pnpm dev – run the dev server
- pnpm build – production build
- pnpm start – start built app
- pnpm lint – Next.js lint rules

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (inline theme tokens)
- lucide-react icons
- Inter font via next/font

## Project notes

- Main page content lives in app/page.tsx
- Global theme tokens/colors are in app/globals.css
- 404 route is handled by app/not-found.tsx
