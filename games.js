/**
 * GAMES REGISTRY — single source of truth for all game data.
 *
 * HOW TO ADD A NEW GAME:
 *  1. Add an object to the GAMES array below.
 *  2. Create the game folder: /your-game-slug/index.html
 *  3. Add the game's thumbnail SVG: /your-game-slug/thumb.svg
 *  4. That's it — the portal grid auto-renders from this file.
 *
 * STATUS VALUES: 'live' | 'coming-soon'
 * DIFFICULTY:    'easy' | 'medium' | 'hard'
 */

const GAMES = [
  {
    id: 'zombie-slayer',
    title: 'Zombie Slayer',
    slug: 'zombie-slayer',
    tagline: 'Survive the dark forest. Slay the Boss.',

    // Portal card text (both languages)
    descEn: 'Survive the forest, find treasure, defeat the Boss! WASD to move, click to swing.',
    descHe: 'שרוד את היער, מצא אוצרות והביס את הבוס! WASD לתנועה, לחיצה להחרבה.',

    description: 'A top-down action survival game. Fight waves of zombies, loot treasure chests and defeat the Boss to win.',
    longDescription: 'Zombie Slayer drops you into a dark forest teeming with the undead. Survive wave after wave of zombies, search for hidden treasure chests to unlock powerful upgrades, and fight your way to the Boss. Only the most skilled survivors will claim the legendary Rei Sword and live to tell the tale.',

    // Portal card visual (emoji + gradient; real image used when available)
    emoji: '🧟',
    thumbBg: 'linear-gradient(135deg, #0d1a06 0%, #1a0a08 100%)',
    thumbnail: '/zombie-slayer/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',

    category: 'action',
    difficulty: 'medium',
    status: 'live',
    releaseDate: '2026-06',
    version: '0.4',

    url: 'zombie-slayer/index.html',

    controls: {
      keyboard: ['WASD — Move', 'Mouse — Aim', 'Click — Attack', 'SPACE / E — Open Chest', 'ENTER — Start / Restart'],
      touch:    ['Left joystick — Move', 'Tap right side — Aim & Attack', 'Chest button 📦 — Open Chest'],
    },
    tags: ['action', 'survival', 'horror', 'zombies'],
    seo: {
      title:       'Zombie Slayer — REI Games Studio',
      description: 'Survive waves of zombies in a dark forest. Loot chests, find the Rei Sword, and defeat the Boss. Free browser game by REI Games Studio.',
      canonical:   'https://reis.games/zombie-slayer/',
    },
    related: ['turbo-pixel', 'dungeon-rei'],
  },

  {
    id: 'gem-rush',
    title: 'Gem Rush',
    slug: 'gem-rush',
    tagline: 'Catch gems. Keep the combo. Beat the clock.',

    descEn: 'Collect glowing gems before they vanish. Keep your combo alive for 60 seconds!',
    descHe: 'אסוף אבני חן לפני שנעלמות. שמור על הקומבו למשך 60 שניות!',

    description: 'A fast-paced arcade game. Gems spawn and disappear — collect them before time runs out and keep your combo multiplier alive.',
    longDescription: 'Gems appear across the arena and vanish after a few seconds. Miss one and your combo resets to ×1. Chain collections to build a multiplier and rack up the highest score you can in 60 seconds. Simple to learn, hard to master.',

    emoji: '💎',
    thumbBg: 'linear-gradient(135deg, #050510 0%, #0a0a28 100%)',
    thumbnail: '/gem-rush/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',

    category: 'arcade',
    difficulty: 'easy',
    status: 'live',
    releaseDate: '2026-07',
    version: '0.1',

    url: 'gem-rush/index.html',

    controls: {
      keyboard: ['WASD / Arrow keys — Move', 'ENTER — Start / Restart'],
      touch:    ['Left joystick — Move', 'Tap — Start / Restart'],
    },
    tags: ['arcade', 'casual', 'score-attack', 'combo'],
    seo: {
      title:       'Gem Rush — REI Games Studio',
      description: 'Collect gems before they vanish. Keep your combo alive. 60 seconds of pure flow. Free browser game by REI Games Studio.',
      canonical:   'https://reis.games/gem-rush/',
    },
    related: ['zombie-slayer', 'turbo-pixel'],
  },

  {
    id: 'turbo-pixel',
    title: 'Turbo Pixel',
    slug: 'turbo-pixel',
    tagline: 'Coming Soon',
    descEn: 'Pixel-art racing across eight tracks with turbo upgrades.',
    descHe: 'מירוץ פיקסל-ארט בשמונה מסלולים שונים עם שדרוגי טורבו.',
    description: 'A high-speed pixel racing game.',
    longDescription: '',
    emoji: '🏎️',
    thumbBg: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a08 100%)',
    thumbnail: '/turbo-pixel/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',
    category: 'racing',
    difficulty: 'easy',
    status: 'coming-soon',
    releaseDate: null,
    version: null,
    url: null,
    controls: { keyboard: [], touch: [] },
    tags: ['racing', 'pixel'],
    seo: {
      title:       'Turbo Pixel — REI Games Studio',
      description: 'A high-speed pixel racing game. Coming soon to reis.games.',
      canonical:   'https://reis.games/turbo-pixel/',
    },
    related: ['zombie-slayer', 'dungeon-rei'],
  },

  {
    id: 'dungeon-rei',
    title: 'Dungeon REI',
    slug: 'dungeon-rei',
    tagline: 'Coming Soon',
    descEn: 'A tile-based dungeon crawler with monsters and legendary victories.',
    descHe: 'dungeon crawler עם אריחים, מפלצות וניצחונות אגדיים.',
    description: 'Explore procedurally generated dungeons.',
    longDescription: '',
    emoji: '⚔️',
    thumbBg: 'linear-gradient(135deg, #0d0008 0%, #100a00 100%)',
    thumbnail: '/dungeon-rei/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',
    category: 'rpg',
    difficulty: 'hard',
    status: 'coming-soon',
    releaseDate: null,
    version: null,
    url: null,
    controls: { keyboard: [], touch: [] },
    tags: ['rpg', 'dungeon', 'adventure'],
    seo: {
      title:       'Dungeon REI — REI Games Studio',
      description: 'Explore procedurally generated dungeons. Coming soon to reis.games.',
      canonical:   'https://reis.games/dungeon-rei/',
    },
    related: ['zombie-slayer', 'space-pixel'],
  },

  {
    id: 'space-pixel',
    title: 'Space Pixel',
    slug: 'space-pixel',
    tagline: 'Coming Soon',
    descEn: 'Classic space shooter with waves, bosses and advanced weapons.',
    descHe: 'ירי חלל קלאסי עם גלים, בוסים ונשק מתקדם.',
    description: 'A pixel space shooter with retro vibes.',
    longDescription: '',
    emoji: '🌌',
    thumbBg: 'linear-gradient(135deg, #000510 0%, #050020 100%)',
    thumbnail: '/space-pixel/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',
    category: 'shooter',
    difficulty: 'medium',
    status: 'coming-soon',
    releaseDate: null,
    version: null,
    url: null,
    controls: { keyboard: [], touch: [] },
    tags: ['shooter', 'space', 'pixel'],
    seo: {
      title:       'Space Pixel — REI Games Studio',
      description: 'Retro space shooter. Coming soon to reis.games.',
      canonical:   'https://reis.games/space-pixel/',
    },
    related: ['zombie-slayer', 'turbo-pixel'],
  },
];

if (typeof module !== 'undefined') module.exports = GAMES;
