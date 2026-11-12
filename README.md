# ⚡ Thunderbolt Times — School Newspaper Website

A free, static, mobile-friendly newspaper website designed for GitHub Pages. No npm, build tools, hosting bill, or database needed.

> **Important:** All article names, bylines, and stories included in this starter site are **fictional sample content**. Replace with approved student contributions before publicly sharing.

## Pages included

- `index.html` — homepage with featured story, categories, newest articles, and calls to action
- `section.html?category=articles` — category landing and nested topic filters
- `article.html?slug=welcome-to-thunderbolt-times` — article template
- `archive.html` — edition archive
- `issue.html?id=2026-11-11` — all stories in an edition
- `about.html` — club information
- `submit.html` — idea / suggestion box, activated by linking to a school-approved form

**No separate article HTML files required:** the templates automatically create the right views from `js/content.js`.

## 1. Publish on GitHub Pages

1. Sign in to GitHub and create a **public** repository named `thunderbolt-times` (or another name).
2. Upload **all** site files and folders to the repository root. On GitHub: **Add file → Upload files → Commit changes**. If you downloaded the ZIP, **extract it first**; upload the extracted files, **not** the ZIP.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, and click **Save**.
5. Your site will be at `https://YOUR-USERNAME.github.io/thunderbolt-times/` (replace the username and repository name as appropriate).
6. Changes typically publish after GitHub finishes deployment. Check the Actions tab if it fails.

> To publish from `https://YOUR-USERNAME.github.io/` directly, name the repository `YOUR-USERNAME.github.io` instead. All internal links are relative and support either setup.

## 2. Add a new story

Save an article draft in the folder for its homepage section (for example, `reviews/our-favorite-books.md`). Draft files are for organizing your uploads; GitHub Pages does not publish them automatically. To show a story on the site, add it as an object inside the `articles` array in **`js/content.js`**. For example:

```js
{
  slug: 'science-fair-recap', // unique, lowercase, hyphenated
  title: 'Our Science Fair Recap',
  category: 'articles', // category id from categories array
  topic: 'School News', // one of that category's topics
  issue: '2026-11-25', // id of an issue from issues array
  author: 'Newspaper Club',
  date: '2026-11-25',
  minutes: 3,
  emoji: '🔬',
  theme: 'sky', // electric, sky, peach, lavender, mint, or gold
  excerpt: 'A short description of the article.',
  image: 'assets/photos/science-fair.jpg', // optional (or use image: '')
  body: [
    { type: 'p', text: 'Here is the first paragraph.' },
    { type: 'h2', text: 'What happened?' },
    { type: 'p', text: 'Here is another paragraph.' },
    { type: 'quote', text: 'A short quote here.' },
    { type: 'list', items: ['First point', 'Second point'] }
  ]
},
```

- Add photos to `assets/photos/` and use their relative path in `image`.
- If the story needs images in its body, add `{ type: 'image', src: 'assets/photos/photo.jpg', alt: 'Describe image', caption: 'Optional caption' }`.
- Each article automatically appears in its category and its assigned issue, and recent stories appear on the homepage.
- The homepage **Featured Story** looks for `feature: true` on an article. Keep that setting on **only one** article, or the first marked one will be used.
- Dates must be `YYYY-MM-DD`.
- Existing stories can stay in the content file, so older issues remain accessible.

The section folders match the homepage categories: `articles/`, `reviews/`, `interviews/`, `comic-strip/`, `games/`, and `looking-back/`. Put article photos in `assets/photos/`.

## 3. Publish a new bi-weekly issue

Edit the `issues` array near the top of **`js/content.js`** and add a new issue **at the beginning**:

```js
{ id: '2026-11-25', label: 'Issue 03', title: 'The November Edition', date: '2026-11-25', note: 'Our newest student stories.' },
```

Then add articles whose `issue` is exactly `2026-11-25`. The homepage will now link to Issue 03 as its latest edition, and older issues remain in the archive.

## 4. Change categories, topics, look and feel

- **Navigation and category buttons:** edit the `categories` array in `js/content.js`. IDs should stay lowercase and use hyphens.
- **School name, meeting text, tagline:** edit the `site` object in `js/content.js`.
- **Colors:** edit variables near the start of `css/styles.css`, including `--navy`, `--yellow`, and `--paper`.
- **Layout:** edit `js/site.js` and `css/styles.css`.
- **Google Fonts:** the site uses DM Sans and DM Serif Display. If those fonts do not load, system font fallbacks still work.

## 5. Set up the suggestion box

GitHub Pages cannot process private submissions by itself. Ask a school faculty adviser to approve a Google Form, Microsoft Form, or other school-allowed solution. Configure it for the school's desired access, moderation, and privacy settings. Then paste the published form URL into `site.suggestionFormUrl` in `js/content.js`:

```js
suggestionFormUrl: 'https://forms.gle/EXAMPLE',
```

Until a URL is added, the site deliberately shows **“Suggestion form coming soon”**; it does not falsely claim to collect messages or promise anonymity.

If using an external form, avoid promising anonymity without verifying its actual settings (some forms record accounts or email addresses). Have an adviser moderate submissions and set clear expectations about publishing student names/photos.

## 6. Preview before publishing

Double-click `index.html` to open it in a browser. Pages use standard `.html` files and relative links, so basic navigation works locally. Optionally, use a local server (for instance, `python -m http.server 8000`) and open `http://localhost:8000`.

## Recommended editorial workflow

1. Gather and review student submissions.
2. Get school approval for images, bylines, and any identifying details.
3. Add the newest issue and approved articles to `js/content.js`.
4. Preview the site on desktop and mobile.
5. Commit to GitHub to publish.

## Project structure

```
thunderbolt-times/
├── index.html
├── section.html
├── article.html
├── issue.html
├── archive.html
├── about.html
├── submit.html
├── articles/          ← article drafts for Articles
├── reviews/           ← article drafts for Reviews
├── interviews/        ← article drafts for Interviews
├── comic-strip/       ← article drafts for Comic Strip
├── games/             ← article drafts for Games
├── looking-back/      ← article drafts for Looking Back
├── css/
│   └── styles.css
├── js/
│   ├── content.js      ← edit this each issue
│   └── site.js         ← page templates and navigation
├── assets/
│   ├── favicon.svg
│   └── photos/         ← put article images here
└── README.md
```

Built with HTML, CSS and vanilla JavaScript. No dependencies, analytics, cookies, database, or backend are included. Fonts load from Google Fonts unless unavailable; all other visuals are local CSS/SVG/emoji.
