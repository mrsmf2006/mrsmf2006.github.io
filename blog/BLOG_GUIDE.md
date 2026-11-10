# Blog

`/blog` is a separate site. It is not linked from the landing page. Each note is a pair of Markdown files:

```
blog/posts/my-note.en.md
blog/posts/my-note.fa.md
```

Frontmatter:

```markdown
---
title: "Note title"
excerpt: "One or two sentences."
date: 2026-08-10
readTime: "5 min read"
tags: ["DevOps", "Tools"]
author: "Seyed Mohammad Fakhri"
---

# Note title

Body in Markdown.
```

The Persian file uses the same `date` and its own title, excerpt, readTime, tags, and author. If the Persian file is missing, the English note is shown.

Publish the index and the `/blog/<slug>/` pages:

```bash
node scripts/build-pages.js
```

`npm run build` runs this before copying the static site into `dist/`.
