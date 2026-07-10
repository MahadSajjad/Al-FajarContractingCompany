# Al Fajr Contracting Company — Website

Marketing & lead-generation website for **Al Fajr Contracting Company** (Arabic: شركة الفجر للمقاولات), a Saudi Arabia–based general contracting and industrial-services company.

> **Tagline:** _Together We Can._
> **Positioning:** industrial & civil contracting, MEP, manpower supply and equipment/fleet
> services for the KSA market (residential is a secondary line).

Static, prerendered (SSG), SEO/GEO-optimised, mobile-first. Content is data-driven — editing a
service means editing a data file, never a component.

---

## Tech stack

| Area | Choice |
|---|---|
| Framework | React 18 + Vite 5 |
| Static generation | **vite-react-ssg** (real prerendered HTML per route) |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 (single token source) |
| UI library | Ant Design v5 — **selectively** (contact form only), themed from the same tokens |
| Icons | react-icons (Tabler / Game Icons / Font Awesome 6) |
| SEO meta | react-helmet-async (via vite-react-ssg `Head`) |
| Forms / validation | Ant Design form controls + **zod** |
| Lead capture | Supabase (insert-only table) |
| Hosting | Vercel (static output) |
| Tooling | ESLint + Prettier, conventional commits |

---

## Quick start

```bash
npm install
cp .env.example .env       # add your Supabase keys (optional for local dev)
npm run dev                # http://localhost:5173
```

### Scripts

| Script | Description |
|---|---|
| `npm run dev` | Vite dev server (CSR, fast HMR) |
| `npm run build` | Generate SEO files → prerender all routes (SSG) → write `dist/404.html` |
| `npm run build:csr` | Plain CSR build (fallback / debugging) |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | ESLint (0 warnings allowed) |
| `npm run format` | Prettier |
| `npm run generate:seo` | Regenerate `sitemap.xml`, `robots.txt`, `llms.txt` |

> **Local preview note:** `npm run preview` (vite preview) doesn't resolve clean URLs to nested
> `index.html` files, so `/about` falls back to the home HTML and you'll see a hydration warning
> **locally only**. Use the dev server, or visit `/about/` (trailing slash) to preview. Production
> (Vercel) serves the correct file per route via `cleanUrls` — no such issue.

---

## Environment variables

The contact form writes leads to Supabase. The anon key is **public-safe** because the table is
insert-only under RLS (no read access for anonymous users).

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

Set these locally in `.env` and in **Vercel → Project → Settings → Environment Variables**.
Without them the form still validates and shows a friendly "call/WhatsApp us" message (it never
breaks the build).

### Supabase table (run once in the SQL editor)

```sql
create table public.contact_submissions (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text not null,
    phone text,
    company text,
    service_interest text,
    message text not null,
    source text default 'website',
    created_at timestamptz default now()
);

alter table public.contact_submissions enable row level security;

-- public site can INSERT only; no SELECT for anon
create policy "anon can insert leads"
    on public.contact_submissions for insert
    to anon
    with check (true);
```

Read leads from the Supabase dashboard (Table editor) or with the service-role key in a private
backend — never expose SELECT to `anon`.

---

## Project structure

```
src/
  assets/images/                # real-image slots (drop files here; see "Swapping in real images")
  components/
    layout/                     # Navbar, Footer, Layout, MobileMenu, Logo, ScrollToTop
    ui/                         # Button, Container, Section, SectionHeading, Eyebrow, Card, Badge,
                                 # Stat, iconMap
    sections/                   # Hero, ServiceGrid, cards, CTASection, ContactForm, CredentialStrip,
                                 # PageHeader, Breadcrumbs, WhatsAppButton, Figure &
    seo/                        # SEO (head), StructuredData (JSON-LD)
  config/
    siteConfig.js                # company facts (phones, emails, offices, social)
    theme.js                     # SINGLE SOURCE OF DESIGN TOKENS (Tailwind + antd)
    navigation.js                # primary nav
    structuredData.js            # JSON-LD builders
  data/                          # ALL CONTENT: services, sectors, features, clients, credentials,
                                 # about, stats
  hooks/                         # useScrollPosition, useMediaQuery, useHydrated
  lib/supabase.js                # guarded Supabase client
  services/contactApi.js         # zod schema + insert API
  pages/                         # Home, About, Services, ServiceDetail, Sectors, Clients, Contact, NotFound
  routes/AppRoutes.jsx           # route tree (lazy chunks + getStaticPaths)
scripts/                         # generate-seo.mjs (prebuild), post-build.mjs (404.html)
```

### Editing content

- **Company details** (phones, emails, offices, WhatsApp, social): `src/config/siteConfig.js`
- **Services** (add/edit/remove, copy, SEO): `src/data/services.js` — pages & sitemap update
  automatically
- **Sectors / Why-us / Credentials / About copy / Stats:** the matching file in `src/data/`
- **Client logos:** `src/data/clients.js` — see the gating note below

Nothing visible is hard-coded in components; the layer is i18n-ready (an Arabic/RTL layer can be
added later via i18next without touching components).

---

## Design system

All tokens live once in [`src/config/theme.js`](src/config/theme.js) and are consumed by both
`tailwind.config.js` and Ant Design's `ConfigProvider`, so brand colours are defined a single time.

- **Palette:** `steel-navy #0E1C2B`, `blueprint-blue #1E4E79`, `safety-orange #EE6C12`,
  `concrete #F4F6F8`, slate (Tailwind default). Safety-orange is functional (CTAs/active/key data).
- **Type:** Saira (display) · IBM Plex Sans (body) · IBM Plex Mono (data/eyebrows/labels).
- **Signature:** "spec-sheet" device — tracked uppercase mono eyebrows with a thin rule,
  hairline grids, restrained orange accents, slightly squared (industrial) radii.

---

## Swapping in real images

Images are intentionally **branded icon-tile placeholders** (not fake project photos). To add real
photography:

1. Export optimised images (WebP/JPG, ~1600×1000) and drop them at:
   - Services: `public/images/services/<service-slug>.jpg`
   - Sectors: `public/images/sectors/<sector-slug>.jpg`
2. Set the `image` field for that entry in `src/data/services.js` / `src/data/sectors.js`
   (e.g. `image: '/images/services/civil-work.jpg'`).

The `<Figure>` component renders the real image (lazy-loaded, fixed aspect ratio → no layout
shift) when `image` is set, and the placeholder tile otherwise.

`public/og-image.png` (referenced by `siteConfig.ogImage`) currently ships a **branded placeholder**
(dark spec-sheet card built from the same theme tokens — no project photography, no fabricated
claims). Swap it for a real 1200×630 share image whenever the client supplies one; the path/field
stay the same.

---

## SEO / GEO

- Per-page `<SEO>`: unique title, description, canonical, Open Graph, Twitter card, `lang`.
- JSON-LD: `GeneralContractor`/`LocalBusiness` (with a full `hasOfferCatalog` of services) +
  `WebSite` site-wide, `BreadcrumbList` on inner pages, `Service` on each service page.
- `public/sitemap.xml`, `public/robots.txt` (allows GPTBot/PerplexityBot/ClaudeBot) and
  `public/llms.txt` — **auto-generated** from the data on every build (`prebuild`).
- All of the above ships in **prerendered static HTML** (verified), so crawlers and AI answer
  engines see complete content without executing JS.
- After deploy: submit `sitemap.xml` in Google Search Console.
- Open: `geo` coordinates for the Riyadh HQ (Organization JSON-LD) still need the exact Maps pin —
  the address is a Plus Code that free geocoders can't resolve precisely. Arabic/hreflang not yet
  decided (see "Open items" below).

---

## Deployment (Vercel)

`vercel.json` is preconfigured: build command `npm run build`, output `dist`, `cleanUrls`,
`trailingSlash: false`, long-cache for `/assets`, security headers, and old-slug redirects.

1. Import the repo into Vercel (framework preset: **Other** / leave default — `vercel.json` drives it).
2. Add the two `VITE_SUPABASE_*` env vars.
3. Deploy. Unmatched routes serve the branded `dist/404.html` (real 404 status).

---

## Migration & domain reputation (do not skip)

The previous `alfajrcontractingco.com` was a WordPress/Elementor site that is **injected with
casino/gambling SEO spam** (a compromised install). At cutover:

1. **Fully remove** the old WordPress install, plugins, themes and database from the host — do not
   overlay the new site on top of it.
2. Spam URLs return **HTTP 410 Gone** via [`middleware.js`](middleware.js) (scoped to
   `/archives/*`, `/wp-admin/*`, `/wp-content/*`, `/wp-includes/*`, `/wp-login.php`, `/xmlrpc.php`).
   **Add the exact spam slugs** reported in Search Console to the middleware `matcher`.
3. In **Google Search Console**: submit the new sitemap, request removal of spam URLs, check
   **Security Issues / Manual Actions**, and request a review if flagged.
4. Preserve legitimate routes with redirects (below).

### Redirect map (in `vercel.json` — confirm against the real old URLs)

| Old (WordPress) | New |
|---|---|
| `/home`, `/index.html` | `/` |
| `/about-us` | `/about` |
| `/our-services`, `/service` | `/services` |
| `/contact-us` | `/contact` |
| `/our-clients` | `/clients` |
| `/power-solutions` (indexed without `/services/` prefix) | `/services/power-solutions` |

> Service-detail slug redirects: add `{"source":"/old-service-slug","destination":"/services/new-slug","permanent":true}`
> entries once the old URLs are known.

---

## Open items requiring client confirmation

1. **Name spelling** — ~~confirmed~~ **"Al Fajr Contracting Company"** is canonical (2026-07-10).
   The Google Business Profile listing is still spelled "Al Fajar" — this is a real NAP mismatch
   that only Google Business Profile access can fix (not something this repo controls): sign in to
   [Google Business Profile Manager](https://business.google.com), edit the business name to
   "Al Fajr Contracting Company", and expect a review cycle since name changes can trigger
   re-verification. In the meantime, `structuredData.js` lists "Al Fajar Contracting Company" as
   an `alternateName` on the Organization schema so search engines can resolve both to one entity.
2. **Office address(es)** — ~~sources conflict~~ resolved to the single Riyadh HQ (2026-07-10);
   `geo` lat/long added to `siteConfig.js` and the Organization JSON-LD from the confirmed Google
   Maps pin.
3. **"Years of experience"** — CR dated 2024; any "25 years" claim must be reframed honestly
   (e.g. "combined team experience"). No numeric experience claim is published yet.
4. **Client logos / partners** — written permission required before publishing any third-party
   logo. Currently rendered as a neutral "sectors served" treatment; no logos shipped
   (`src/data/clients.js`).
5. **Credential numbers** — only credential **types + issuers** are shown; confirm which (if any)
   CR/VAT/licence numbers are safe to publish. Never publish personal ID / national-address proof.
6. **Arabic / RTL** — decided out of scope for now (2026-07-10); revisit if the client wants it
   later — the build stays i18n-ready either way. Multi-city landing pages (Jeddah, Dammam, etc.)
   were also decided out of scope on the same date — the single Riyadh HQ with
   `areasServed: Saudi Arabia` covers this without speculative city pages.
7. **WhatsApp line & socials** — confirm which phone is WhatsApp; provide social profile URLs
   (`siteConfig.social`).
8. **Real images** — provide cleaned, optimised project photos (see "Swapping in real images").

Also confirm: the **mission** wording (kept manpower-aware but contracting-coherent — flagged in
`src/data/about.js`) and which phone line is the monitored WhatsApp number.

---

## Notes / tradeoffs

- **Ant Design** is loaded **only on `/contact`** (the form). The rest of the site is pure
  Tailwind, so the home page ships ~96 KB gzipped JS. antd component styles on the contact page
  hydrate client-side (CSS-in-JS) — acceptable as antd is below-the-fold there.
- `react-helmet-async` is used via vite-react-ssg's `Head` wrapper (same library, wired for SSG
  head collection) — this is what gets meta/JSON-LD into the static HTML.
