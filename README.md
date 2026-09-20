# Five Star Auto Tint & Glass: concept website

A concept redesign made by Web Studio to show the owner. It is **not** the company's live site, and a yellow
banner at the top of the page says so on every screen size.

Every fact on the page comes from fivestarautotint.com or their two Google listings, read on 2026-09-19:
the four film prices ($179 / $279 / $379 / $599), the 4.9 rating from 359 reviews, both shop addresses, the
phone number, and the booking links, which point at their real vcita scheduler. Anything their site does not
state — how long a job takes, whether you can wait, cure time — is deliberately absent rather than guessed.

**The car is AI-generated and labelled "Illustration" on the page.** Before this is ever used as their real
site, it should be replaced with a photo of a real car from their bay. Only the rear side window darkens in
the shade picker, because California restricts tint on the windshield and front side windows.

The logo is a concept the owner has not approved.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page |
| `styles.css` | The look |
| `site.js` | Shade picker, section reveals, sticky-header measurement |
| `car-dirty.jpg` · `car-tinted.jpg` · `car-clear.jpg` | The hero sweep and the shade picker |
| `icon.svg` | Browser tab icon |

Everything sits at the top level on purpose: GitHub's drag-and-drop uploader silently drops folders, which
breaks every image path. No build step, no server code, nothing to install.

The hero animation is pure CSS — the dirty car cleans itself left to right on load. The page works fine
without JavaScript: if `site.js` never arrives, everything still renders.

## Putting it on GitHub Pages

1. Make a new repository with a **lowercase** name, e.g. `five-star-auto-tint`. Pages URLs are
   case-sensitive, and a capital letter is what caused the 404 on iPhone last time.
2. Tick **Add a README file** so the repo is not empty, then **Add file → Upload files**.
3. Drag in **all seven files from this folder at once**, including this README. Do not drag the folder itself.
4. Commit.
5. **Settings → Pages →** Source `Deploy from a branch`, Branch `main`, folder `/ (root)`. Save.
6. Wait two or three minutes for the first build, then open
   `https://<your-username>.github.io/<repo-name>/`. If it 404s, give it another minute and check the
   capitalisation of the URL matches the repo name exactly.
