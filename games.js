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
 * onHome: false   hides a game from the homepage grid (its page stays online)
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
    related: ['turbo-drift', 'dungeon-rei'],
  },

  {
    id: 'garden-viper',
    title: 'Garden Viper',
    slug: 'garden-viper',
    tagline: 'Eat. Grow. Don\'t bite.',

    descEn: 'The classic snake game, made smooth and modern. 3 modes, combos up to ×5 and golden bonuses!',
    descHe: 'משחק הנחש הקלאסי, חלק ומודרני. 3 מצבים, קומבו עד ×5 ובונוסים של זהב!',

    description: 'A modern snake game with smooth movement, three modes, combos and golden bonuses.',
    longDescription: 'Garden Viper is the classic snake game rebuilt with smooth gliding movement. Eat apples to grow, chain them fast for up to a ×5 combo, and grab the golden star before it fades. Play Classic with deadly walls, Portal where the edges wrap around, or Maze with stones in your way. The faster you eat, the faster it gets.',

    emoji: '🐍',
    thumbBg: 'linear-gradient(135deg, #1d3d30 0%, #0e1c17 100%)',
    thumbnail: '/garden-viper/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',

    category: 'arcade',
    difficulty: 'easy',
    status: 'live',
    releaseDate: '2026-11',
    version: '1.0',

    url: 'garden-viper/index.html',

    controls: {
      keyboard: ['Arrow keys / WASD — Turn', 'SPACE — Start / Pause', '1 / 2 / 3 — Mode', 'M — Sound'],
      touch:    ['Swipe the board or use the pad — Turn'],
    },
    tags: ['arcade', 'snake', 'classic', 'casual', 'score-attack'],
    seo: {
      title:       'Garden Viper — REI Games Studio',
      description: 'A smooth, modern snake game with three modes, combos and golden bonuses. Free browser game by REI Games Studio.',
      canonical:   'https://reis.games/garden-viper/',
    },
    related: ['gem-rush', 'rei-arena'],
  },

  {
    id: 'gem-rush',
    onHome: false,   // hidden from the homepage grid (still playable at /gem-rush/). Delete this line to show it again.
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
    related: ['zombie-slayer', 'turbo-drift'],
  },

  {
    id: 'rei-arena',
    title: 'Rei Arena',
    slug: 'rei-arena',
    tagline: '3 vs 3 Gem Grab. Pick a hero. Hold the gems.',

    descEn: '3 vs 3 hero battles! Grab 10 gems and hold them for 10 seconds to win.',
    descHe: 'קרבות גיבורים 3 נגד 3! אספו 10 אבני חן והחזיקו אותן 10 שניות כדי לנצח.',

    description: 'A top-down 3v3 hero arena game. Pick a hero, team up with bots, and battle for gems.',
    longDescription: 'Rei Arena is a fast team battle game. Choose Spark, Boulder or Frost, each with their own attack and Super. Grab gems from the mine in the middle, hide in bushes, knock out the red team and hold 10 gems for 10 seconds to win. New heroes designed by Rei are coming soon!',

    emoji: '🦸',
    thumbBg: 'linear-gradient(135deg, #2b5a2f 0%, #16202b 100%)',
    thumbnail: '/rei-arena/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',

    category: 'action',
    difficulty: 'medium',
    status: 'live',
    releaseDate: '2026-11',
    version: '0.1',

    url: 'rei-arena/index.html',

    controls: {
      keyboard: ['WASD — Move', 'Mouse — Aim', 'Click — Shoot', 'SPACE / Right-click — Super', 'ESC — Pause'],
      touch:    ['Left thumb — Move', 'Right thumb — Aim, release to shoot (tap = auto-aim)', 'Yellow button — Super'],
    },
    tags: ['action', 'arena', 'team', 'heroes', 'multiplayer-style'],
    seo: {
      title:       'Rei Arena — REI Games Studio',
      description: '3 vs 3 hero arena battles in your browser. Pick a hero, grab gems and win. Free game by REI Games Studio.',
      canonical:   'https://reis.games/rei-arena/',
    },
    related: ['zombie-slayer', 'gem-rush'],
  },

  {
    id: 'turbo-drift',
    title: 'Turbo Drift',
    slug: 'turbo-drift',
    tagline: 'Drift. Charge. BOOST.',

    descEn: '3D racing at sunset! Drift through corners to charge your turbo and beat 5 rivals over 3 laps.',
    descHe: 'מרוץ תלת־ממד בשקיעה! עשו דריפט בפניות כדי לטעון טורבו, ונצחו 5 יריבים ב־3 הקפות.',

    description: 'A 3D arcade drift racer. Drift to charge the turbo, boost past 5 rivals and win the race.',
    longDescription: 'Turbo Drift is a 3D arcade racing game on the Sunset Circuit. Pick your paint, line up on the grid and race 5 rivals over 3 laps. Hold drift through the corners to charge your turbo from blue to orange to purple, then let go for a massive BOOST. Tire smoke, skid marks, sparks and confetti for the podium.',

    emoji: '🏎️',
    thumbBg: 'linear-gradient(135deg, #c2386b 0%, #2a1150 100%)',
    thumbnail: '/turbo-drift/thumb.svg',
    ogImage: 'https://reis.games/logo-white.png',

    category: 'racing',
    difficulty: 'medium',
    status: 'live',
    releaseDate: '2026-11',
    version: '0.1',

    url: 'turbo-drift/index.html',

    controls: {
      keyboard: ['↑ — Gas', '↓ — Brake', '← → — Steer', 'SPACE (hold) — Drift, release to Boost', 'R — Back on track', 'ESC — Pause'],
      touch:    ['Gas is automatic', '◀ ▶ — Steer', 'DRIFT (hold) — Drift, release to Boost', 'BRAKE — Brake'],
    },
    tags: ['racing', '3d', 'drift', 'cars', 'arcade'],
    seo: {
      title:       'Turbo Drift — REI Games Studio',
      description: 'A 3D drift racing game in your browser. Drift to charge your turbo, beat 5 rivals over 3 laps. Free game by REI Games Studio.',
      canonical:   'https://reis.games/turbo-drift/',
    },
    related: ['rei-arena', 'garden-viper'],
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
    related: ['zombie-slayer', 'turbo-drift'],
  },
];

if (typeof module !== 'undefined') module.exports = GAMES;
