# AyitiGo — Landing Page

Static site (HTML/CSS/JS, no build step). Trilingual (EN/FR/HT), with waitlist signup, roadmap, and investor sections.

## Deploy to Vercel (~3 minutes)

**Option A — drag and drop (fastest):**
1. Go to https://vercel.com/new
2. Drag this whole folder onto the page
3. Done. You get a live `.vercel.app` URL immediately.

**Option B — via GitHub (better for a team):**
1. Push this folder to a GitHub repo
2. In Vercel: New Project → Import the repo → Framework preset: "Other" → Deploy
3. Every push to `main` auto-deploys.

**Custom domain:** Vercel dashboard → project → Settings → Domains → add `ayitigo.com` and follow the DNS instructions.

## IMPORTANT: Capture real waitlist signups

Right now the form runs in demo mode (shows a success message, saves nothing).
To collect real signups:

1. Create a free account at https://formspree.io
2. Create a form; copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`)
3. Open `script.js` and set the first line:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   ```
4. Redeploy. Signups (name, phone, email, role) will arrive in your Formspree inbox and email, and can be exported to CSV.

The free Formspree tier covers 50 submissions/month. If the waitlist takes off, upgrade or swap in Google Sheets via an Apps Script endpoint, or a small Vercel serverless function + database — the form code won't need to change, just the endpoint.

## Before you launch — checklist

- [ ] Set the real WhatsApp business number (currently `wa.me/19544043762` in `index.html`, two places)
- [ ] Confirm `hello@ayitigo.com` email exists and is monitored (investor CTA points there)
- [ ] Set `FORM_ENDPOINT` (see above)
- [ ] Replace the founder initials in the avatar stack if desired (`F`, `M`, `J` in the hero)
- [ ] Add a favicon and Open Graph image so links look good when shared on WhatsApp
