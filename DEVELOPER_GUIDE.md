# REI Games Studio — Developer Guide

## 1. Adding a New Game

**Step 1** — Add an entry to `games.js`:

```js
{
  id: 'my-game',               // unique slug, no spaces
  title: 'My Game',
  slug: 'my-game',
  tagline: 'One-line hook for the game',
  descEn: 'English description shown on the portal card.',
  descHe: 'תיאור בעברית שמוצג על כרטיס הפורטל.',
  description: 'Short description (used elsewhere)',
  emoji: '🎮',                 // shown on card if no thumb image
  thumbBg: 'linear-gradient(135deg, #000510 0%, #050020 100%)',
  thumbnail: '/my-game/thumb.svg',
  ogImage: 'https://reis.games/logo-white.png',
  category: 'action',          // action | racing | rpg | shooter | puzzle
  difficulty: 'medium',        // easy | medium | hard
  status: 'live',              // live | coming-soon
  releaseDate: '2026-09',
  version: '0.1',
  url: 'my-game/index.html',   // null for coming-soon
  controls: {
    keyboard: ['WASD — Move', 'Click — Attack'],
    touch:    ['Joystick — Move', 'Tap — Attack'],
  },
  tags: ['action', 'fun'],
  seo: {
    title:       'My Game — REI Games Studio',
    description: 'SEO description for Google.',
    canonical:   'https://reis.games/my-game/',
  },
  related: ['zombie-slayer'],
}
```

**Step 2** — Create the game folder:
```
rei-games/
  my-game/
    index.html   ← game page (copy zombie-slayer/index.html as a template)
    thumb.svg    ← 400×300 thumbnail (shown in the portal grid)
```

**Step 3** — Deploy: `git add . && git commit -m "add my-game" && git push`

The portal grid renders automatically from `games.js` — no HTML edits needed.

---

## 2. AdSense — Where to Put the Code

When you're approved for AdSense, replace the placeholder divs with real ad units.

**Portal page (`index.html`)** — search for `ad-placeholder`:
- Hero banner (728×90): below the nav
- Below games grid (728×90)
- Sidebar (300×250) if you add a sidebar later

**Game pages (e.g. `zombie-slayer/index.html`)** — search for `ad-placeholder`:
- Top banner (728×50): below the topbar, above the canvas
- Rectangle (300×250): below the game, in the related-games section (two slots)

**AdSense snippet to paste** (replace the placeholder div):
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="YYYYYYYYYY"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

> **Important:** Only load AdSense after the user accepts advertising cookies.
> Wrap the `<ins>` + `<script>` block in the `applyPrefs()` function under the
> `if(p.advertising)` check — the same pattern as GA4/Clarity.

---

## 3. Changing Cookie Preferences (from any page)

**Method A — Cookie Settings link in the footer**
Every page has a "Cookie Settings" link in the footer that opens the preferences modal.

**Method B — JavaScript console (for testing)**
```js
// See current preferences
JSON.parse(localStorage.getItem('cookie_prefs'))

// Reset banner (will show banner again on next reload)
localStorage.removeItem('cookie_banner_dismissed')
localStorage.removeItem('cookie_prefs')
location.reload()

// Force-accept all
openCookieSettings()  // then click Save
```

**Method C — Directly from JS**
```js
openCookieSettings()   // opens the modal from any page that has the consent system
```

---

## 4. Analytics Consent Flow

Both **Google Analytics 4** (`G-0DXQGP2520`) and **Microsoft Clarity** (`xdfhcbeuy2`) are consent-gated:

- Scripts are **never** loaded until the user clicks "Accept All" or enables Analytics in preferences.
- Preference is stored in `localStorage` under key `cookie_prefs` as JSON:
  ```json
  { "essential": true, "analytics": true, "advertising": false }
  ```
- On every page load, `applyPrefs()` reads this key and loads scripts only if consented.
- If the key is missing, the cookie banner is shown.

To verify in browser DevTools:
1. Open Network tab, filter by `googletagmanager` or `clarity.ms`
2. Hard-refresh with banner not yet accepted — **neither should load**
3. Click "Accept All" — **both should load**

---

## 5. Deployment

```bash
cd /Users/yaelbilitzky/Documents/CLAUDE/rei-games
git add .
git commit -m "describe what changed"
git push
```

GitHub Pages serves from the `main` branch root → `https://reis.games/`
