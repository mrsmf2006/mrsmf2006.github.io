(function () {
    const page = document.getElementById('page');
    if (!page) return;

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function inline(value) {
        let text = escapeHtml(value);
        text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        return text;
    }

    function renderMarkdown(raw) {
        const lines = String(raw).replace(/\r\n/g, '\n').split('\n');
        let html = '';
        let i = 0;
        let skippedTitle = false;
        while (i < lines.length) {
            const line = lines[i];
            if (line.startsWith('```')) {
                const buf = [];
                i += 1;
                while (i < lines.length && !lines[i].startsWith('```')) {
                    buf.push(escapeHtml(lines[i]));
                    i += 1;
                }
                i += 1;
                html += `<pre><code>${buf.join('\n')}</code></pre>`;
                continue;
            }
            if (!line.trim()) {
                i += 1;
                continue;
            }
            if (!skippedTitle && line.startsWith('# ')) {
                skippedTitle = true;
                i += 1;
                continue;
            }
            if (line.startsWith('### ')) {
                html += `<h3>${inline(line.slice(4))}</h3>`;
                i += 1;
                continue;
            }
            if (line.startsWith('## ')) {
                html += `<h2>${inline(line.slice(3))}</h2>`;
                i += 1;
                continue;
            }
            if (line.startsWith('# ')) {
                html += `<h2>${inline(line.slice(2))}</h2>`;
                i += 1;
                continue;
            }
            if (line.startsWith('> ')) {
                const quote = [line.slice(2)];
                i += 1;
                while (i < lines.length && lines[i].startsWith('> ')) {
                    quote.push(lines[i].slice(2));
                    i += 1;
                }
                html += `<blockquote>${inline(quote.join(' '))}</blockquote>`;
                continue;
            }
            if (line.startsWith('- ') || line.startsWith('* ')) {
                html += '<ul>';
                while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
                    html += `<li>${inline(lines[i].slice(2))}</li>`;
                    i += 1;
                }
                html += '</ul>';
                continue;
            }
            if (/^\d+\.\s/.test(line)) {
                html += '<ol>';
                while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
                    html += `<li>${inline(lines[i].replace(/^\d+\.\s/, ''))}</li>`;
                    i += 1;
                }
                html += '</ol>';
                continue;
            }
            html += `<p>${inline(line)}</p>`;
            i += 1;
        }
        return html;
    }

    function parseFrontmatter(text) {
        if (!text.startsWith('---')) return { meta: {}, body: text };
        const end = text.indexOf('\n---', 3);
        if (end === -1) return { meta: {}, body: text };
        const raw = text.slice(3, end).trim();
        const body = text.slice(end + 4).replace(/^\n/, '');
        const meta = {};
        raw.split('\n').forEach((line) => {
            const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
            if (!match) return;
            let value = match[2].trim();
            if (value.startsWith('[') && value.endsWith(']')) {
                meta[match[1]] = value.slice(1, -1).split(',').map((part) => {
                    const item = part.trim();
                    if (item.startsWith('"') || item.startsWith("'")) {
                        try {
                            return JSON.parse(item.startsWith("'") ? `"${item.slice(1, -1)}"` : item);
                        } catch (err) {
                            return item.replace(/^['"]|['"]$/g, '');
                        }
                    }
                    return item;
                }).filter(Boolean);
                return;
            }
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                try {
                    meta[match[1]] = JSON.parse(value);
                } catch (err) {
                    meta[match[1]] = value.slice(1, -1);
                }
                return;
            }
            meta[match[1]] = value;
        });
        return { meta, body };
    }

    function slugFromPath() {
        const parts = location.pathname.split('/').filter(Boolean);
        const index = parts.indexOf('blog');
        const rest = (index === -1 ? parts : parts.slice(index + 1)).filter((part) => part !== 'index.html');
        return rest[0] || '';
    }

    function formatDate(iso) {
        if (!iso) return '';
        const date = new Date(`${iso}T00:00:00`);
        if (Number.isNaN(date.getTime())) return iso;
        const locale = SiteLang.current() === 'fa' ? 'fa-IR' : 'en-US';
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    function metaFor(post, lang) {
        return post[lang] || post.en || post.fa || {
            title: post.slug,
            excerpt: '',
            readTime: '',
            tags: [],
            author: ''
        };
    }

    async function loadIndex() {
        const response = await fetch('/blog/posts.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('index');
        return response.json();
    }

    async function loadPost(slug, lang) {
        const response = await fetch(`/blog/posts/${slug}.${lang}.md`, { cache: 'no-cache' });
        if (response.ok) return parseFrontmatter(await response.text());
        if (lang !== 'en') {
            const fallback = await fetch(`/blog/posts/${slug}.en.md`, { cache: 'no-cache' });
            if (fallback.ok) return parseFrontmatter(await fallback.text());
        }
        return null;
    }

    function shell(inner) {
        page.innerHTML = inner;
    }

    async function render(isCurrent) {
        const lang = SiteLang.current();
        const slug = slugFromPath();
        const t = SiteLang.t;
        if (!slug) document.title = `${t('blog_title')} — ${t('brand_name')}`;

        if (!slug) {
            shell(`<p class="standalone-lead">${t('blog_loading')}</p>`);
            try {
                const posts = await loadIndex();
                if (!isCurrent()) return;
                if (!posts.length) {
                    shell(`
                        <p class="standalone-kicker">${t('blog_kicker')}</p>
                        <h1 class="standalone-title">${t('blog_title')}</h1>
                        <p class="standalone-lead">${t('blog_empty')}</p>
                    `);
                    return;
                }
                shell(`
                    <p class="standalone-kicker">${t('blog_kicker')}</p>
                    <h1 class="standalone-title">${t('blog_title')}</h1>
                    <p class="standalone-lead">${t('blog_lead')}</p>
                    <div class="cards-grid-3 blog-index">
                        ${posts.map((post) => {
                            const meta = metaFor(post, lang);
                            return `
                                <a class="blog-card" href="/blog/${post.slug}/">
                                    <div class="blog-body">
                                        <div class="blog-meta-line">
                                            <span>${formatDate(post.date)}</span>
                                            <span>·</span>
                                            <span>${meta.readTime || ''}</span>
                                        </div>
                                        <h2 class="blog-headline">${meta.title}</h2>
                                        <p class="blog-summary">${meta.excerpt || ''}</p>
                                        <div class="tag-cluster" style="margin-bottom: 16px;">
                                            ${(meta.tags || []).map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
                                        </div>
                                        <span class="read-action"><span>${t('blog_read')}</span></span>
                                    </div>
                                </a>
                            `;
                        }).join('')}
                    </div>
                `);
            } catch (err) {
                if (!isCurrent()) return;
                shell(`<p class="standalone-lead">${t('blog_error')}</p>`);
            }
            return;
        }

        shell(`<p class="standalone-lead">${t('blog_loading')}</p>`);
        const post = await loadPost(slug, lang);
        if (!isCurrent()) return;
        if (!post) {
            document.title = `${t('blog_missing_title')} — ${t('brand_name')}`;
            shell(`
                <a class="article-back" href="/blog/">${t('blog_back')}</a>
                <h1 class="article-title">${t('blog_missing_title')}</h1>
                <p class="standalone-lead">${t('blog_missing_body')}</p>
            `);
            return;
        }

        const title = post.meta.title || slug;
        document.title = `${title} — ${t('brand_name')}`;
        const tags = Array.isArray(post.meta.tags) ? post.meta.tags : [];
        shell(`
            <article class="article-wrap" style="padding-top: 0;">
                <a class="article-back" href="/blog/">
                    <svg class="dir-flip" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    <span>${t('blog_back')}</span>
                </a>
                <div class="article-kicker">${tags[0] || t('blog_kicker')}</div>
                <h1 class="article-title">${title}</h1>
                <div class="article-meta-bar">
                    <span>${formatDate(post.meta.date)}</span>
                    ${post.meta.readTime ? `<span>·</span><span>${post.meta.readTime}</span>` : ''}
                    ${post.meta.author ? `<span>·</span><span>${post.meta.author}</span>` : ''}
                </div>
                <div class="article-prose">${renderMarkdown(post.body)}</div>
            </article>
        `);
    }

    let token = 0;
    function safeRender() {
        const current = ++token;
        render(() => current === token);
    }

    document.addEventListener('langchange', () => {
        safeRender();
    });
    safeRender();
})();
