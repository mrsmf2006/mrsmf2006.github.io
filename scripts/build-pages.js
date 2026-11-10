import fs from 'fs';
import path from 'path';

const root = process.cwd();
const postsDir = path.join(root, 'blog/posts');
const blogDir = path.join(root, 'blog');

function parseValue(raw) {
    const value = raw.trim();
    if (value.startsWith('[')) {
        const inner = value.slice(1, value.lastIndexOf(']'));
        if (!inner.trim()) return [];
        return inner.split(',').map((part) => {
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
    }
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        try {
            return JSON.parse(value.startsWith("'") ? `"${value.slice(1, -1).replace(/"/g, '\\"')}"` : value);
        } catch (err) {
            return value.slice(1, -1);
        }
    }
    return value;
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
        meta[match[1]] = parseValue(match[2]);
    });
    return { meta, body };
}

const grouped = new Map();
for (const file of fs.readdirSync(postsDir)) {
    const match = file.match(/^(.+)\.(en|fa)\.md$/);
    if (!match) continue;
    const slug = match[1];
    const lang = match[2];
    const parsed = parseFrontmatter(fs.readFileSync(path.join(postsDir, file), 'utf8'));
    if (!grouped.has(slug)) grouped.set(slug, { slug, date: parsed.meta.date || '1970-01-01' });
    const entry = grouped.get(slug);
    if (parsed.meta.date) entry.date = parsed.meta.date;
    entry[lang] = {
        title: parsed.meta.title || slug,
        excerpt: parsed.meta.excerpt || '',
        readTime: parsed.meta.readTime || '',
        tags: Array.isArray(parsed.meta.tags) ? parsed.meta.tags : [],
        author: parsed.meta.author || ''
    };
}

const list = [...grouped.values()].sort((a, b) => String(b.date).localeCompare(String(a.date)));
fs.writeFileSync(path.join(blogDir, 'posts.json'), JSON.stringify(list, null, 2) + '\n');

const shellPath = path.join(blogDir, 'index.html');
if (!fs.existsSync(shellPath)) {
    console.error('blog/index.html is missing; create it before building pages.');
    process.exit(1);
}
const shell = fs.readFileSync(shellPath, 'utf8');
const keep = new Set(list.map((post) => post.slug));

for (const dirent of fs.readdirSync(blogDir, { withFileTypes: true })) {
    if (!dirent.isDirectory() || dirent.name === 'posts') continue;
    if (!keep.has(dirent.name)) {
        fs.rmSync(path.join(blogDir, dirent.name), { recursive: true, force: true });
    }
}

for (const slug of keep) {
    const dir = path.join(blogDir, slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), shell);
}

console.log(`Blog index: ${list.length} notes`);
for (const post of list) console.log(`  /blog/${post.slug}/`);
