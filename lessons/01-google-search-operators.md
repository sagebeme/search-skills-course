# Lesson 01: Google Search Operators

**Goal:** learn the special commands ("operators") that tell Google exactly what
you want, so you can skip ads, spam and clickbait.

**Time:** about 45 minutes. Have Google open while you read and try each one.

---

## What is an "operator"?

An operator is a small command you type into the search box along with your
words. It's like giving Google an extra instruction: *"only from this website"*,
*"only PDF files"*, *"not this word"*.

A few rules that apply to all of them:

- **No space after the colon.** `site:who.int` works. `site: who.int` doesn't.
- You can **combine** as many as you like in one search.
- Operators are **not case-sensitive**, except `OR`, which must be in capitals.

---

## 1. Quotes `" "` — exact phrase

Google normally mixes your words up and even swaps in similar words. Quotes
force it to find those exact words, in that exact order.

```
"open textbook" biology
"introduction to statistics" lecture notes
```

Use it for: names of things, exact error messages, titles of books or courses.

> **Tip:** if Google still ignores your words, click **Tools → All results →
> Verbatim**. Verbatim tells Google to search exactly what you typed, without
> "helpful" guesses.

## 2. Minus `-` — remove a word

Put `-` right before a word (no space) to throw out pages that contain it.

```
python tutorial -snake
free course -udemy -coursera
jaguar speed -car
```

Use it for: removing the wrong meaning of a word, or removing sites that keep
showing up and aren't helpful.

## 3. `site:` — search only one website (or one kind of website)

```
site:who.int malaria report
site:reddit.com best free way to learn excel
site:.edu "lecture notes" economics
site:.gov statistics unemployment
```

The last two are powerful. They search a whole **type** of website:

| Ending | Who uses it |
|---|---|
| `.edu` | US universities |
| `.ac.uk`, `.ac.ke`, `.ac.za` ... | Universities in the UK, Kenya, South Africa, etc. |
| `.gov` | US government |
| `.go.ke`, `.gov.uk`, `.gov.za` ... | Governments of Kenya, UK, South Africa, etc. |
| `.int` | International bodies (WHO, UN agencies) |
| `.org` | Non-profits (but anyone can buy one, so still check!) |

You can also **remove** a site: `-site:pinterest.com`.

## 4. `filetype:` — only a certain kind of file

```
filetype:pdf "introduction to economics"
filetype:pptx photosynthesis
filetype:csv population kenya
filetype:xlsx budget template
```

Why it's useful:

- `pdf` → books, reports, research papers, lecture notes.
- `pptx` / `ppt` → lecture slides (teachers often upload these).
- `xlsx` / `csv` → raw data tables you can open in a spreadsheet.
- `docx` → worksheets, forms, templates.

> **Safety note:** a PDF or slide file from a university or government site is
> generally fine. Never download `.exe`, `.apk`, `.zip` or `.rar` files from a
> site you don't know. Lesson 06 explains why.

## 5. `intitle:` — word must be in the page title

The title is the bold blue headline in the results. Pages with your word in the
title are usually *about* that thing, not just mentioning it.

```
intitle:syllabus "data science"
intitle:"reading list" history
intitle:index.of "lecture notes"   ← see the note below
```

`allintitle:` makes **all** the following words appear in the title:

```
allintitle: free statistics course
```

> **About `intitle:"index of"`:** you'll see this trick in some online
> communities. It finds raw file folders on web servers. Universities sometimes
> publish course material this way, and that's fine to browse. But it's also how
> people find files that were never meant to be public, and those folders are a
> common place for malware. Stick to well-known university and government sites.

## 6. `inurl:` — word must be in the web address

The URL is the address in your browser bar. Organised sites put useful words in
it.

```
inurl:syllabus biology
inurl:course "machine learning" site:.edu
inurl:opendata transport
```

`allinurl:` works like `allintitle:`.

## 7. `intext:` — word must be in the page's main text

```
intext:"creative commons" chemistry textbook
```

Useful for finding pages that contain a licence statement or a specific term in
the body, not just the title.

## 8. `OR` — either word (must be CAPITALS)

```
"free textbook" OR "open textbook" physics
(syllabus OR "course outline") accounting
```

You can also use `|` instead of `OR`.

## 9. `*` — wildcard (fill in the blank)

Inside quotes, `*` stands for "any word here".

```
"the best way to learn * is"
"how to * a cv"
```

Good for finding common phrases when you can't remember a word.

## 10. `before:` and `after:` — by date

```
climate report after:2023
smartphone review before:2020-01-01
"exam timetable" after:2025-06-01 before:2025-12-31
```

Write dates as **year-month-day** (`2025-06-01`) or just a year.

You can also use **Tools → Any time** under the search box to pick
"Past year", "Past month", or a custom range.

---

## Putting them together

Real searches combine operators. Read each one slowly and say out loud what it
asks for:

```
site:.edu filetype:pdf "introduction to psychology" syllabus
```
*University PDFs with that exact phrase and the word syllabus.*

```
"open textbook" (biology OR chemistry) -amazon after:2022
```
*Open textbooks in biology or chemistry, no Amazon, made after 2022.*

```
site:go.ke filetype:pdf "economic survey"
```
*Kenyan government PDFs called "economic survey".*

---

## When Google answers with AI first

Many searches now show a box at the very top, **before any links**, written by
AI. ("AI" means "artificial intelligence": a computer program that writes text
by guessing which words are likely to come next, based on pages it has read.)

There are two kinds:

- **AI Overview:** a short summary at the top of the normal results page, with
  small links to the pages it used.
- **AI Mode:** a separate button or tab called **AI Mode** next to the search
  box or in the row of tabs (you can also go to `google.com/ai`). Here the whole
  page is an AI chat: you ask, it writes an answer, you ask more questions.

Both are shown in Kenya and in more than 200 other countries.

### Why you can't fully trust it

- **It can be wrong, and still sound sure.** Google itself says "AI responses
  may include mistakes". When AI Overviews first launched in 2024, one told
  people to add glue to pizza.
- **It mixes sources.** One sentence may come from a university, the next from a
  random forum post or a company selling something. The box doesn't make clear
  which is which.
- **It isn't a source.** It's a summary *of* sources. You can't check who "the
  AI" is, so you have to check the pages it used.

Use the AI box the way you'd use "People also ask": for **new words to search
with** (Lesson 00), not as the final answer.

### How to check an AI answer with SIFT

1. **Stop.** Treat the answer as a guess, not a fact. Be extra careful with
   health, money and law.
2. **Investigate the source.** Click the small link icons or cards next to the
   answer. Who made those pages? Are they a name you can look up?
3. **Find better coverage.** Search the claim yourself with operators, for
   example `site:go.ke` or `site:who.int`, and see if trusted sources agree.
4. **Trace it to the original.** Open the linked page and find the sentence the
   AI used (press **Ctrl+F**, or **Find in page** on a phone). Does the page
   really say that? Often it says something different, or nothing at all.

### How to get plain links instead

1. **The "Web" filter (easiest, and official).** After you search, look at the
   row of tabs under the search box (All, Images, News...). Click **Web**. If you
   don't see it, click **More**, then **Web**. Google says this shows only text
   links, without AI Overviews.
2. **The `udm=14` trick.** Clicking "Web" adds `&udm=14` to the web address of
   the results page. You can type it yourself at the end of any Google results
   address:

   ```
   https://www.google.com/search?q=open+textbook+biology&udm=14
   ```

   This is unofficial: Google doesn't explain it, so it could change one day.
3. **Make plain links your default (on a computer).** Tell your browser to send
   every search from the address bar to that "Web" address. You add a "custom
   search engine" with this address, where `%s` means "put my search words
   here":

   ```
   https://www.google.com/search?q=%s&udm=14
   ```

   - **Chrome:** Settings → Search engine → Manage search engines and site
     search. Next to "Site search", click **Add**. Give it a name (for example
     `Google Web`), a shortcut (for example `gw`), paste the address above, and
     click **Add**. Then click the three dots next to it → **Make default**.
   - **Firefox (version 140 or newer):** Settings → Search. Under "Search
     Shortcuts", click **Add**. Give it a name, paste the address above, and
     click **Add Engine**. Then pick it under "Default Search Engine".

   This only changes searches you type into the **address bar** at the top of
   the browser, not searches typed on the google.com page. On a phone, the
   easiest way is to tap **Web** after each search.

### What doesn't work

- **There's no off switch.** Google's help page says these features "cannot be
  turned off". Turning off "AI in Search" in Search Labs only stops Google's
  experiments, not AI Overviews.
- **Adding `-ai` or a swear word.** In early 2025 people noticed that a swear
  word, or `-ai` at the end of a search, often hid the AI box. These are not
  real features. Swearing was later reported to stop working, and `-ai` only
  works sometimes (and it also throws out good pages that mention "AI"). Don't
  rely on them: use the "Web" filter.
- **Operators are not an off switch either.** Quotes, `site:`, `-`, `filetype:`
  and `before:`/`after:` still work, and they still change the list of links.
  But an AI box can still appear above those links. For the cleanest page, use
  your operators **and** the "Web" filter together.

---

## Other handy Google tricks

- **The "Web" filter:** plain links only, without AI answers or extra boxes.
  See "When Google answers with AI first" above.
- **"People also ask"** boxes give you new words to search with (remember
  Lesson 00).
- **Google Lens / reverse image search:** upload a photo to find where else it
  appears. Great for checking if a photo is old or fake.
- **"About this result":** tap the three dots next to a result to see what Google
  knows about that website.

> Google changes features sometimes. If an operator stops working, search
> `google search operators` with `after:` the current year to see what's new.

---

## Exercise

Write down the exact search you used for each, and the best result you found.

1. Find a **PDF syllabus** (course outline) from a university for a subject you
   like. *(Hint: `site:` + `filetype:` + `intitle:` or `inurl:`)*
2. Find a **lecture slides** file (`pptx`) on any topic from a university site.
3. Search for `free course <your topic>`, then do it again but **remove two big
   paid platforms** with `-`. What changed?
4. Find one official **government report** from your country, published **after
   2023**.
5. Challenge: build one search that uses **at least four** different operators
   and still returns good results.
6. Search a question you care about until you get an **AI Overview** at the top.
   Write down one thing it claims. Then click one of its links and find that
   claim on the page (SIFT step T). Did the page really say it? Finally, click
   **Web** and write down how the page changed.
