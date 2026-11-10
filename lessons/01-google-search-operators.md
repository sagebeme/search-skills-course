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

## Other handy Google tricks

- **The "Web" filter:** under the search box, click **More → Web** (or "Web" if
  you see it). It shows just plain links, without AI summaries or extra boxes.
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
