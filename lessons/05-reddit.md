# Lesson 05: Reddit

**Goal:** use Reddit to find honest advice and free resources from real people,
search it properly, and avoid being fooled by hidden advertising.

**Time:** about 40 minutes.

---

## Why Reddit?

Reddit is thousands of discussion boards, each about one topic. Each board is
called a **subreddit** and written `r/<name>` (for example `r/learnmath`).

It's useful because people share **real experiences**: "I tried this free
course, here's what happened", "this paid course is a copy of a free YouTube
playlist". Many subreddits also keep carefully built lists of the best free
resources on their subject.

You can read almost everything **without an account**.

---

## Part 1: Start with the wiki and FAQ

Before searching, check whether the community already wrote the answer.
Popular learning subreddits keep a **wiki** (a set of guide pages the community
maintains) or an **FAQ**.

How to find it:

- **Website:** look in the right-hand sidebar for "Wiki", "FAQ", or
  "Resources". Or type the address directly:
  `https://www.reddit.com/r/<name>/wiki/index`
- **App:** open the subreddit, tap **About** (or the "i" button), and look for
  links and rules.
- **Pinned posts** at the top of a subreddit (often marked "Announcement" or
  with a pin icon) usually hold the beginner guide.

Some famous examples of strong wikis/FAQs:

| Subreddit | Topic |
|---|---|
| r/learnprogramming | Where to start coding, free resources |
| r/learnpython | Python for beginners |
| r/languagelearning | Learning any language |
| r/learnmath | Maths at every level |
| r/personalfinance | Managing money step by step |
| r/AskHistorians | History. Answers must cite sources, and weak answers get removed |
| r/askscience | Science questions answered by people with verified expertise |
| r/datasets | People sharing and requesting public data |

> Wikis go out of date. Check the "last revised" date at the bottom of the page.

---

## Part 2: Reddit's own search

Use the search bar at the top. On a subreddit page, you can choose to search
**only that subreddit**.

### Sorting and time

After searching, change the sort options:

- **Top + Past year / All time:** the posts people found most valuable. Best for
  "what's the best free resource for X".
- **New:** latest posts. Best for news or checking if something still works.
- **Comments:** posts with the most discussion.

### Reddit search operators

These work in Reddit's search box (they work most reliably on
`old.reddit.com`, the older, simpler version of the site):

| Operator | Meaning | Example |
|---|---|---|
| `subreddit:` | Only in one subreddit | `subreddit:learnmath calculus free` |
| `title:` | Word must be in the post title | `title:"free resources" statistics` |
| `selftext:` | Word must be in the post's main text | `selftext:syllabus` |
| `author:` | Posts by one user | `author:<username>` |
| `flair:` | Posts with a certain label | `flair:Resource` |
| `site:` / `url:` | Posts linking to a website | `site:youtube.com subreddit:learnpython` |
| `self:yes` / `self:no` | Text posts only / link posts only | `self:yes advice` |
| `AND`, `OR`, `NOT` | Combine words (CAPITALS) | `excel OR spreadsheet NOT macro` |
| `" "` | Exact phrase | `"complete beginner"` |

Example:

```
subreddit:languagelearning title:free (swahili OR kiswahili)
```

---

## Part 3: Search Reddit through Google (often better!)

Reddit's own search has a reputation for being weak. Google usually finds
Reddit posts better. Use Lesson 01 skills:

```
site:reddit.com "best free" course statistics
site:reddit.com/r/learnprogramming "free" "roadmap"
site:reddit.com "is it worth it" <paid course name>
site:reddit.com <topic> after:2025
```

Or just add the word `reddit` to the end of a normal search:
`best free way to learn excel reddit`.

**Tip:** Google also has a **Forums** filter (under **More** below the search
box) that shows results from Reddit and other discussion sites.

### The "is it worth paying for?" search

Before you pay for **any** course, search:

```
site:reddit.com "<course name>" worth it
site:reddit.com "<course name>" free alternative
```

You'll often find people explaining that the same material exists for free,
and exactly where.

---

## Part 4: Don't believe everything (even with lots of upvotes)

Upvotes show what's **popular**, not what's **true**. Watch for:

- **Hidden ads.** A brand-new account posts "I found this AMAZING course, link
  below!" Click the username: if the account is a few days old or only ever
  talks about one product, it's probably marketing.
- **Old answers.** A great answer from 2016 may be wrong now. Check the date.
- **Confident strangers.** Anyone can claim to be a doctor or engineer. In
  general subreddits, check what the user usually posts about.
- **The crowd effect.** Early upvotes attract more upvotes. A correct reply
  posted late may sit at the bottom. Sort comments by **"Best"** or **"New"** and
  read a few.

**Checking a user:** click their name to see how old the account is, their
"karma" (points earned from other users), and their post history.

---

## Exercise

1. Find a subreddit for your topic and open its **wiki, FAQ or pinned
   beginner post**. Write down the **three free resources** it recommends most.
2. Use **Reddit search with operators** (at least `subreddit:` and `title:`) to
   find a discussion of the best free resources. Sort by **Top → All time**.
3. Do the same search through **Google with `site:reddit.com`**. Which method
   gave better results?
4. Pick any paid course or app related to your topic and search
   `site:reddit.com "<its name>" free alternative`. What free options did
   people suggest?
5. Find one comment recommending a product. Check the commenter's account
   (age, history). Real person or hidden ad? Explain why.
