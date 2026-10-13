# Temitope Ayegbusi Ministry

A responsive Next.js App Router website with TypeScript, Tailwind CSS, and Sanity CMS. The public site only queries Sanity's **published** perspective; draft content is not intentionally shown to visitors. No fake biography, ministry history, articles, testimonials, or community invitation links are included.

## Requirements

- Node.js 20 or newer
- A Sanity account and project
- GitHub account for source control
- Vercel account for deployment (or another compatible Next.js host)
- A domain registered by you, if you want a custom domain

## 1. Run locally

```bash
npm install
cp .env.example .env.local
```

Create a project at https://www.sanity.io/manage. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` to its project ID and `NEXT_PUBLIC_SANITY_DATASET=production` in `.env.local`. Set `NEXT_PUBLIC_SITE_URL=http://localhost:3000` for local work. Then run:

```bash
npm run dev
```

Open http://localhost:3000. If Sanity is not configured or has no published content, the site intentionally displays empty states and placeholders.

## 2. Open Sanity Studio

This project includes a Sanity Studio configuration. Once the project ID and dataset are set in `.env.local`, run:

```bash
npx sanity dev
```

The schemas include Articles, Resources, Categories, and Site settings. For a hosted Studio, run `npx sanity deploy` and follow the prompts to choose a Studio hostname. Sign in with your Sanity account. The first time, confirm the dataset exists in Sanity Manage; if it does not, create a dataset named `production`.

### Add site settings first

In Studio, create one **Site settings** document. The website reads the most recently updated Site settings document, so keep only one canonical settings document. Fill only verified facts. Add the real WhatsApp/Telegram invite URL, contact email, social URLs, biography, vision and canonical site URL. Do not leave the community button without its actual invitation URL.

## 3. Publish your first article

1. Open Studio and choose **Articles → Create new**.
2. Enter a title, excerpt, and slug (generate the slug from the title).
3. Add the article body. Use the style selector for Heading 2 / Heading 3, use the quotation style for blockquotes, and use the link annotation for URLs. Scripture references can be entered in the text as supplied by the author; check quotations against the intended Bible translation before publishing.
4. Add categories and tags if relevant. Add a cover image and meaningful alternative text if available.
5. Set the publication date, author, SEO title/description, and optionally Featured.
6. Save as a draft while reviewing. Drafts are not returned by the public site's published-perspective queries.
7. Use Sanity's preview/review workflow if configured, then choose **Publish**. The live site fetches published content; the article should appear at `/articles/your-slug`.

## 4. Add your first resource

1. Create a Resource document and enter title, slug, description, type, and category.
2. For audio, enter a public HTTPS URL from Spotify, SoundCloud, YouTube, or a direct MP3 URL. Only recognized providers are embedded; unsupported providers are linked only where a safe link is available.
3. For an e-book/PDF, add the public HTTPS download URL. Check that you own the rights or have permission to distribute the file. This release links to the externally hosted file; it does not upload files to the website server.
4. Mark Featured if it should appear on the homepage, save, then Publish.

## 5. Connect GitHub and deploy to Vercel

1. Create a new **private or public** GitHub repository. From this directory run:
   ```bash
   git init
   git add .
   git commit -m "Build ministry website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```
2. In Vercel, choose **Add New → Project**, import that repository, and keep the Next.js framework preset.
3. Add environment variables in Vercel Project Settings → Environment Variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET` — `production`
   - `NEXT_PUBLIC_SITE_URL` — final HTTPS website URL
   - `SANITY_API_READ_TOKEN` — optional, only if you intentionally use a read token. Keep tokens server-only; never prefix them with `NEXT_PUBLIC_`.
4. Deploy. Check the deployment logs and test all pages. Add the final domain in Vercel Settings → Domains. Follow the exact DNS records Vercel gives you at your domain registrar; do not guess DNS values. HTTPS is provisioned by Vercel after DNS resolves.
5. If the domain changes, update `NEXT_PUBLIC_SITE_URL` and the Sanity Site settings `siteUrl`, redeploy, and test canonical URLs/sitemap.

## 6. Domain and Search Console

Check the registrar's live search for your preferred `.com` first, then `.org` and relevant alternatives. Domain availability and prices change, so no availability is asserted by this project. Purchase only after you choose the exact name and understand renewal pricing. In Google Search Console, add the final domain property, verify ownership using the DNS TXT record Google provides, then submit `https://YOUR-DOMAIN/sitemap.xml`.

## 7. Checks

```bash
npm run typecheck
npm run lint
npm run build
```

Run these after installing dependencies and configuring environment variables. External account connection, production build, and live URL verification must be performed in your environment; this source package itself does not claim those actions have already succeeded.

## Notes / limitations

- Homepage content and article/resource cards come from Sanity queries, not a hardcoded publication array.
- Public queries use Sanity's published perspective. Never add a public token or write token to a `NEXT_PUBLIC_` variable.
- The contact page uses a `mailto:` link rather than a pretend nonfunctional form.
- Audio embeds are limited to recognized providers. Test each provider URL in production; direct media URLs should be public and served over HTTPS.
- Resource download URLs are external. Confirm permissions and test them before launch.
- The rich-text image renderer is a minimal implementation; review image sizing and alternative text on actual content before launch.
- Sanity, Vercel, domain, and external media providers can change their plans and terms. Review current plan limits before relying on a feature.
