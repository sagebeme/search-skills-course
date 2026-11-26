# Lesson 02: Free Official Sources with Google

**Goal:** use what you learned in Lesson 01 to find four kinds of free, legal,
high-quality information: official reports, research papers, old web pages, and
public data.

**Time:** about 45 minutes.

---

## Why "official" sources matter

Many paid courses and "premium" newsletters simply repackage information that
governments, universities and international bodies already publish for free.
If you go to the source, you get it **free, first, and unchanged**.

---

## Part 1: Official reports and publications

Governments, central banks, the UN, the WHO, the World Bank and universities
publish thousands of reports every year, almost always as free PDFs.

**Search recipes:**

```
site:.int filetype:pdf "annual report" <topic>
site:go.ke filetype:pdf <topic>          ← swap in your country's ending
site:worldbank.org filetype:pdf <topic>
site:.edu filetype:pdf "working paper" <topic>
"<organisation name>" "annual report" 2025 filetype:pdf
```

**Tip:** many official sites have a terrible built-in search. Use Google with
`site:` instead. It's usually far better at finding things on their own site
than they are.

---

## Part 2: Research papers (without paying)

Scientists usually aren't paid by journals. In fact, journals charge readers.
But most research is now also available legally for free somewhere, because
many funders require it. This is called **open access**.

### Step 1: Search Google Scholar

[scholar.google.com](https://scholar.google.com) is Google, but only for
research. Look on the **right side** of each result: a link marked **[PDF]** or
**[HTML]** means there's a free copy. Also click **"All versions"** under a
result: one of the versions is often free.

### Step 2: Use open-access search engines

| Site | What it does |
|---|---|
| [CORE](https://core.ac.uk) | Millions of free full-text papers from university collections. |
| [DOAJ](https://doaj.org) | A list of journals that are completely free to read. |
| [BASE](https://www.base-search.net) | A huge search engine for academic documents; you can filter to "open access". |
| [Semantic Scholar](https://www.semanticscholar.org) | Search with AI-made summaries and links to free PDFs. |
| [OpenAlex](https://openalex.org) | A free catalogue of almost all published research. |
| [arXiv](https://arxiv.org) | Free early versions ("preprints") in physics, maths, computer science, economics. |
| [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc/) | Free full-text health and medical research. |

### Step 3: Install Unpaywall

[Unpaywall](https://unpaywall.org) is a free browser extension. When you land on
a paywalled paper, a green tab appears on the side **if a legal free copy
exists** anywhere. One click and you're reading it.

### Step 4: Look for the author's copy

Many researchers post their own papers on their university page. Search:

```
"<exact paper title>" filetype:pdf
```

Or simply email the author. Researchers are almost always **happy** to send you
their paper for free. It's normal and polite to ask.

> **Preprint warning:** "preprints" haven't been checked by other experts yet.
> They're useful, but treat them as "probably right, not proven".

---

## Part 3: The Internet Archive and the Wayback Machine

[archive.org](https://archive.org) is a non-profit library of the internet. It
holds:

- **The Wayback Machine** ([web.archive.org](https://web.archive.org)): saved
  copies of websites from the past. Paste in a web address and pick a date on
  the calendar to see what the page looked like then.
- Public-domain books, old films, audio, software manuals and lectures.
- **Open Library** ([openlibrary.org](https://openlibrary.org)): a catalogue of
  books, many readable for free.

**When the Wayback Machine helps:**

- A link is **dead** ("404 not found"). Paste it into the Wayback Machine, and
  there's a good chance an old copy exists.
- A page **changed** and you want to see what it said before (great for
  fact-checking).
- A free resource **disappeared** from the original site.

> Older guides tell you to use Google's `cache:` command or "Cached" link to see
> a saved copy of a page. Google removed both in 2024, so use the Wayback
> Machine instead.

**Save pages yourself:** on the Wayback Machine home page, use **"Save Page
Now"** to make a permanent copy of something important before it vanishes.

**Search the archive with Google:**

```
site:archive.org "<book or topic>" "public domain"
site:archive.org "lecture" <topic>
```

---

## Part 4: Public datasets

Raw data lets you check claims yourself instead of trusting someone's chart.

| Site | Good for |
|---|---|
| [Google Dataset Search](https://datasetsearch.research.google.com) | A search engine just for datasets. |
| [Our World in Data](https://ourworldindata.org) | Clear charts and downloadable data on health, money, energy, education. |
| [World Bank Open Data](https://data.worldbank.org) | Country statistics: population, income, schooling, and much more. |
| [UNdata](https://data.un.org) | United Nations statistics. |
| [Humanitarian Data Exchange](https://data.humdata.org) | Data on crises, refugees, disasters. |
| [data.gov](https://data.gov) / [data.gov.uk](https://data.gov.uk) | US and UK government data. |
| Your national statistics office | e.g. [KNBS](https://www.knbs.or.ke) for Kenya. Search `national bureau of statistics <country>`. |
| [Kaggle Datasets](https://www.kaggle.com/datasets) | Community-shared data, great for practice (check where each dataset came from!). |

**Search recipes:**

```
filetype:csv <topic> <country>
site:.gov filetype:xlsx <topic>
"open data" portal <city or country>
```

---

## Exercise

Choose one topic you care about (it can be the same as Lesson 00).

1. Find one **official report** (PDF) on it from a government or international
   body. Write down who published it and when.
2. Find one **research paper** on it and get a **free, legal** full-text copy
   using Google Scholar, CORE, or Unpaywall. Write down which tool worked.
3. Pick any website you used to visit that has changed a lot (or a news page
   from a few years ago). Look at an **old version** in the Wayback Machine.
   What's different?
4. Find a **dataset** (a `csv` or `xlsx` file, or a chart you can download) with
   real numbers on your topic. Write down one surprising number from it.
