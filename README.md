# Seyed Mohammad Fakhri - Portfolio Website

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-gold)](https://mrsmf.github.io)
[![Email](https://img.shields.io/badge/Email-mf0682073@gmail.com-red)](mailto:mf0682073@gmail.com)

## 🎨 About This Project

A modern, minimalist portfolio website built with pure vanilla JavaScript, featuring a **Bento Box** design aesthetic inspired by contemporary UI trends. No frameworks, no build tools—just clean, performant code.

## ✨ Features

- ⚡ **Zero Dependencies** - Pure vanilla JavaScript
- 🎨 **Bento Box Layout** - Modern grid-based design
- 🎭 **Smooth Animations** - CSS transitions and keyframes
- 📱 **Fully Responsive** - Mobile-first approach
- 📝 **Markdown Blog System** - Write posts in markdown
- 🎯 **Fast Performance** - No heavy frameworks
- 🌙 **Elegant Dark Theme** - Easy on the eyes
- ♿ **Accessible** - Semantic HTML structure

## 🎨 Design System

### Color Palette
```css
--bg-main: #0D0D0D       /* Main background - Deep black */
--bg-warm: #F2EFE8       /* Warm white for contrast cards */
--accent-gold: #C8A45D   /* Golden accent */
--text-light: #F2EFE8    /* Light text */
--text-muted: #6B6B6B    /* Muted text */
```

### Typography
- **Headings**: Space Grotesk (Modern geometric sans-serif)
- **Body**: Inter (Clean, readable)

## 📁 Project Structure

```
.
├── index.html              # Main HTML with inline CSS
├── app.js                  # Router and rendering logic
├── config.js               # All content and data
├── assets/
│   └── images/
│       ├── profile.jpg     # Your profile photo
│       ├── companies/      # Company logos (grayscale)
│       │   ├── amline.png
│       │   ├── jamshidbar.png
│       │   ├── afagh.png
│       │   └── didafzar.png
│       └── projects/       # Project images (optional)
└── blog/
    └── posts/              # Markdown blog posts
        └── sample-post.md
```

## 🚀 Getting Started

### 1. Add Your Profile Photo

Place your photo at `assets/images/profile.jpg`
- **Recommended size**: 800x800px (square)
- **Format**: JPG or PNG
- **Quality**: High resolution for retina displays

### 2. Add Company Logos

Place company logos in `assets/images/companies/` with these names:
- `amline.png`
- `jamshidbar.png`
- `afagh.png`
- `didafzar.png`

**Note**: Logos will automatically have a grayscale filter applied. Use transparent backgrounds (PNG) for best results.

### 3. Customize Content

Edit `config.js` to update:
- Personal information (hero section)
- Work experience
- Projects
- Skills
- Education
- Blog posts

### 4. Run Locally

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Option 3: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

Visit `http://localhost:8000`

## 📝 Writing Blog Posts

### Method 1: Inline Content (Recommended)

Add posts directly in `config.js`:

```javascript
blog: {
    posts: [
        {
            slug: "your-post-slug",
            title: "Your Post Title",
            excerpt: "Brief description...",
            date: "Month Day, Year",
            readTime: "5 min read",
            tags: ["Tag1", "Tag2"],
            author: "Your Name",
            content: `
                # Your Markdown Content

                Write your post here using markdown syntax.
                
                ## Subheading
                
                - List item
                - Another item
                
                **Bold text** and *italic text*.
                
                \`\`\`python
                # Code blocks
                print("Hello, World!")
                \`\`\`
            `
        }
    ]
}
```

### Method 2: External Markdown Files

1. Create a `.md` file in `blog/posts/`
2. Add metadata to `config.js`
3. Load content dynamically (requires additional code)

### Supported Markdown Features

- Headers (`#`, `##`, `###`)
- **Bold** (`**text**`)
- *Italic* (`*text*`)
- `Inline code` (backticks)
- Code blocks (triple backticks)
- Links (`[text](url)`)
- Images (`![alt](url)`)
- Lists (`-` or `1.`)
- Blockquotes (`>`)

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `index.html`:

```css
:root {
    --bg-main: #YourColor;
    --accent-gold: #YourAccent;
    /* ... other variables */
}
```

### Modify Layout

The site uses a **12-column grid**. To change card sizes, edit the `grid-column` property:

```css
.hero-card {
    grid-column: span 8;  /* Takes 8 of 12 columns */
}
```

### Add New Sections

1. Update `config.js` with new data
2. Create a render function in `app.js`
3. Add route to the router

### Animation Settings

Adjust timing in CSS:

```css
:root {
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎯 Performance Tips

1. **Optimize Images**
   - Compress with tools like TinyPNG
   - Use WebP format for better compression
   - Lazy load images if adding many

2. **Minimize Code**
   - Inline critical CSS (already done)
   - Remove unused JavaScript
   - Compress HTML/CSS/JS for production

3. **Loading Speed**
   - Current loading animation: 1.5s
   - Adjust in the inline script at bottom of `index.html`

## 🔧 Troubleshooting

### Images Not Showing

1. Check file paths are correct
2. Ensure images exist in `assets/images/`
3. Check browser console for errors
4. Verify image formats (JPG, PNG, WebP)

### Navigation Not Working

1. All links should start with `#/`
2. Check router paths in `app.js`
3. Verify nav links in `index.html`

### Blog Posts Not Rendering

1. Check `slug` matches URL
2. Verify markdown syntax
3. Ensure post exists in `config.js`

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main`)
4. Save and wait for deployment

### Custom Domain

1. Add `CNAME` file with your domain
2. Configure DNS with your provider:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```

### Other Platforms

Works on any static hosting:
- Netlify
- Vercel
- CloudFlare Pages
- AWS S3 + CloudFront

## 📊 SEO Optimization

Add to `<head>` in `index.html`:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Your description">
<meta name="keywords" content="DevOps, Engineer, Portfolio">
<meta name="author" content="Seyed Mohammad Fakhri">

<!-- Open Graph -->
<meta property="og:title" content="Seyed Mohammad Fakhri">
<meta property="og:description" content="Your description">
<meta property="og:image" content="assets/images/profile.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

## 🎓 Learning Resources

Built this site? Here's what to learn next:

1. **JavaScript**: [javascript.info](https://javascript.info)
2. **CSS Grid**: [css-tricks.com/snippets/css/complete-guide-grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
3. **Markdown**: [markdownguide.org](https://www.markdownguide.org/)
4. **DevOps**: Start with Docker and CI/CD

## 📧 Contact

- **Email**: mf0682073@gmail.com
- **Phone**: 09035095990
- **Location**: Qom, Iran

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Credits

Design inspired by modern portfolio trends and the Bento Box layout aesthetic.

---

**Built with curiosity and passion.** 💛

*Last updated: August 2026*
