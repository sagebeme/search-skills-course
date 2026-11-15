---
name: Find It Free, the course site
colors:
  paper: "oklch(96.4% 0.006 60)"      # white: the page
  paper-2: "oklch(92.6% 0.012 55)"    # lesson header band
  paper-3: "oklch(99.3% 0.003 60)"    # cards
  ink: "oklch(20% 0.018 45)"          # black: text, nav, footer, hard shadows
  ink-2: "oklch(30% 0.025 45)"
  muted: "oklch(47% 0.03 50)"
  rule: "oklch(86% 0.025 60)"
  white: "oklch(99.5% 0.004 75)"      # die-cut borders
  vermilion: "oklch(53% 0.19 33)"     # red-orange: things you click or earn
  vermilion-deep: "oklch(46% 0.17 33)"
  marigold: "oklch(81% 0.15 68)"      # orange: things that point something out
  brown: "oklch(33% 0.06 45)"         # the refusals band
  indigo: "oklch(42% 0.17 285)"       # purple-blue: the search field, the focus ring
typography:
  display:
    fontFamily: "'Bowlby One SC', 'Arial Black', sans-serif"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: 0.005em
  body:
    fontFamily: "'Sofia Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: 1rem to 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Sofia Sans'"
    fontSize: 0.875rem
    fontWeight: 700
  code:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: 0.92em
rounded:
  card: 18px
  photo: 22px
  pill: 999px
spacing:
  scale: 2 4 8 12 16 24 40 64 96 144
  frame-phone: 16px
  frame: 64px
components:
  diecut: "6px {colors.white} border, {rounded.card}, hard offset shadow 5px 6px 0 {colors.ink}"
  button-primary: "{colors.vermilion} pill, white text, 5px white ring + hard shadow; pressed: pushed onto its shadow"
  button-ghost: "pill, inset 2px {colors.ink} ring, transparent"
  stamp: "{colors.vermilion} pill, white text, rotated -6deg, the date it was earned"
  search-mark: "{colors.marigold} fill behind each matched word"
---

# Find It Free, the course site

Built with two skills: **design-art** (inventory, idea, DESIGN.md first, real pictures)
and **Hallmark** (theme Sticker, dealt 2 of 3, genre playful, the Floor and `sloplint`).

## The idea

**On this site, a library card becomes the course.** A library card is the oldest
free pass to knowledge there is, the opposite of a paywall. The home page *is* your
card: nine lines, one per lesson, and each finished lesson gets a red-orange date stamp.
The card is also the main navigation, so the thing that looks fun is the thing you
click.

Competitor test: a paid course platform could never use this idea, because a
library card says "free". That's why it's this course's idea and not the category's.

**The one live thing:** a search box over the whole course that understands the
same tricks Lesson 01 teaches (`"exact phrase"`, `-word`, `OR`). Learners practise
the skill just by finding their way around.

## Inventory (things only this course has)

The name "Find It Free". The library card and its date stamps. The search box and
its operators. The real free tools it teaches (Google Advanced Search, the Wayback
Machine, Marginalia, Telegram's web preview, a subreddit wiki, VirusTotal, OpenStax).
Real public reading rooms. A magnifying glass. A card catalogue. The three things it
refuses to teach. Nine lessons with an exercise each. 73 free sites in one list.

## Signature moves (non-negotiable)

1. **Die-cut stickers.** Every raised thing (a card, a picture, the primary button, a
   stamp) has a thick white border and a hard, unblurred ink shadow, tilted between
   -3 and 3 degrees, never all one way. Don't: soft blurred shadows, thin borders.
2. **Vermilion acts, marigold marks.** Colours chosen by the course owner: red-orange,
   orange, brown, white, black and purple-blue. Vermilion (red-orange) is only for things
   that do something (the primary button, a stamp you earned). Marigold (orange) only
   points something out (a lesson number disc, a search match, the exercise box edge).
   Brown carries the refusals band; indigo (purple-blue) is the search field and the
   focus ring. Harmony: warm analogous reds, oranges and browns, with indigo as the one
   cool complement. Don't: vermilion text on paper, marigold behind body text.
3. **Bowlby capitals for titles only.** Every heading is Bowlby One SC; everything
   you read is Sofia Sans. Never a paragraph in Bowlby.
4. **Real pictures only.** Screenshots of the actual free tools a lesson teaches,
   and real library photos from Wikimedia Commons, credited in the footer. Don't:
   drawn mascots, doodles, clip art, stock people.
5. **The card is the map.** Every page shows where you are on your card: the home
   hero, and the sticky card on each lesson page.

## Layout

- One container: max 1440px, 64px gutters (24px under 60rem, 16px under 40rem).
- Home: card hero → live search on an indigo field → the nine lessons as stickered
  cards with real screenshots → ink band with the three refusals → library photo
  split with the resource list → footer with the name large.
- Lesson: header with the lesson number disc and title → two columns: the lesson
  (max 68ch) and a sticky side column (stamp button, "on this page", notes, next
  lesson). Under 60rem the side column moves below the lesson; "next" stays.

## Responsive

| Width | What changes |
|---|---|
| ≥ 1100px | Hero is text 5 cols + card 7 cols; lessons 3 across |
| 700–1100px | Hero stacks (text, then card); lessons 2 across; lesson side column below |
| < 700px | Everything one column; tilts reduced to ±1deg; touch targets ≥ 44px |

## Motion

- Hover on a clickable sticker: lifts 2px and turns 1deg, 120ms ease-out.
- Press: pushed onto its shadow.
- Stamping a lesson: the stamp lands (scale 1.25 → 1, 220ms) so you see it arrive.
- Nothing moves on scroll. `prefers-reduced-motion` turns all of it off.

## Do's and don'ts

- Do keep every colour and font behind a token in `tokens.css` / the `:root` in
  `style.css`.
- Do keep the page readable with JavaScript off: the home page lesson list and
  card are plain HTML written by `build.mjs`.
- Don't add icons in coloured tiles, gradients, glass, eyebrows, or tracked capitals.
- Don't invent numbers. Counts (lessons, sites) are computed from the Markdown.

## Checks run

- `node ~/.claude/skills/hallmark/scripts/sloplint.mjs site/index.html site/lesson.html site/assets/style.css --genre playful`: 0 FAIL. One WARN dismissed: the straight quotes in the example chips are search syntax.
- design-art `inspect.mjs` at 1440, 768 and 390px. Kept on purpose against its generic rules: the hard sticker shadows (Hallmark's Sticker material), indigo (asked for), the lesson numbers (real identifiers), the card's rules (it is a card), the three-line refusals heading (one refusal per line).
- Hallmark's `--render` tier needs `puppeteer-core`, which is not installed, so it was not run.

## Known gaps

- Fonts load from Google Fonts. Offline, the site falls back to Arial Black and
  the system sans, which still works but looks plainer.
- No dark mode yet.
- Progress, notes and your name live in this browser only (localStorage). A
  different browser or device starts with a blank card.
