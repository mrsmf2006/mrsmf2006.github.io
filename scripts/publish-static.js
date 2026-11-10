import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const items = [
    'index.html',
    '404.html',
    'config.js',
    'app.js',
    'CNAME',
    '.nojekyll',
    'assets',
    'blog',
    'vr',
    'ai'
];

for (const item of items) {
    const source = path.resolve(item);
    if (!fs.existsSync(source)) {
        console.error(`Missing ${item}`);
        process.exit(1);
    }
    fs.cpSync(source, path.join(dist, item), { recursive: true });
}

console.log('Published static site to dist/');
