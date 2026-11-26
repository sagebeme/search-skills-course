# Cheat Sheet

## Google operators (Lesson 01)

| Type this | It means | Example |
|---|---|---|
| `"words"` | Exact phrase | `"open textbook" biology` |
| `-word` | Leave out pages with this word | `python -snake` |
| `site:` | Only this site or site type | `site:.edu`, `site:who.int` |
| `-site:` | Not this site | `-site:pinterest.com` |
| `filetype:` | Only this file type | `filetype:pdf`, `filetype:csv` |
| `intitle:` | Word in page title | `intitle:syllabus` |
| `allintitle:` | All words in title | `allintitle: free statistics course` |
| `inurl:` | Word in web address | `inurl:course` |
| `intext:` | Word in page text | `intext:"creative commons"` |
| `OR` or `\|` | Either word (capitals) | `biology OR chemistry` |
| `( )` | Group words | `(syllabus OR "course outline")` |
| `*` | Any word (inside quotes) | `"how to * a cv"` |
| `after:` / `before:` | By date (YYYY-MM-DD) | `after:2024-01-01` |

Also: **Tools → Verbatim**, **Tools → Any time**, **More → Web**, **More → Forums**.

## When search answers with AI first (Lessons 01, 03)

An AI answer is a summary, not a source: open its links and run SIFT on them.

| To get plain links on | Do this |
|---|---|
| Google | Click **Web** (or **More → Web**), or add `&udm=14` to the results address |
| Google, every time | Custom search engine in Chrome or Firefox: `https://www.google.com/search?q=%s&udm=14` |
| Bing | Add `-ai` to your search |
| DuckDuckGo | Search Settings → AI Features → Search Assist: **Never**, or use `noai.duckduckgo.com` |

Google has no off switch, and `-ai` or swear words on Google don't work reliably.

## Useful site endings

`.edu` `.ac.ke` `.ac.uk` → universities · `.gov` `.go.ke` `.gov.uk` → governments ·
`.int` → international bodies

## Reddit search (Lesson 05)

`subreddit:` `title:` `selftext:` `author:` `flair:` `site:` `self:yes` `AND` `OR` `NOT`

Through Google: `site:reddit.com/r/<name> <words>` or add `reddit` to any search.

Wiki: `reddit.com/r/<name>/wiki/index`

## Telegram (Lesson 04)

- Search bar → **Global search** for public channels and groups.
- Preview without joining: `https://t.me/s/<username>`
- Through Google: `site:t.me <topic>`
- Inside a chat: **Search**, filter **by member**, **calendar** to jump to a date, tap
  **#hashtags**, read **pinned** messages.

## Recipes

| I want | Try |
|---|---|
| A university syllabus | `site:.edu filetype:pdf intitle:syllabus <subject>` |
| Lecture slides | `site:.edu filetype:pptx <subject>` |
| A government report | `site:go.ke filetype:pdf <topic> after:2023` |
| An open textbook | `"open textbook" <subject>` |
| Raw data | `filetype:csv <topic> <country>` |
| Reviews of a paid course | `site:reddit.com "<course>" worth it` |
| Free alternatives | `site:reddit.com "<course>" free alternative` |
| A free copy of a paper | Google Scholar → **[PDF]** / **All versions**, or Unpaywall |
| A dead link | Paste it into `web.archive.org` |

## Trust in four letters: SIFT (Lesson 00)

**S**top · **I**nvestigate the source · **F**ind better coverage · **T**race to the original

## Scam alarms (Lesson 06)

Pay to unlock · "DM the admin" · urgency · copied brand names · `.exe` `.apk`
or password-protected `.zip` · "disable your antivirus" · anyone asking for a
login code or PIN · a link where the real owner (just before the first `/`)
isn't who it claims.
