// --- Core Engine & Router ---

const appRoot = document.getElementById('app-root');

// Simple Markdown to HTML Parser (Enhanced)
function parseMarkdown(text) {
    if (!text) return '';
    let html = text.trim();
    
    // Code blocks (must be before other replacements)
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
    
    // Headers
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold, Italic, Inline Code
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    html = html.replace(/`(.*?)`/gim, '<code>$1</code>');
    
    // Links and Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1">');
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>');
    
    // Blockquotes
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Lists
    html = html.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^[0-9]+\. (.*$)/gim, '<ol><li>$1</li></ol>');
    html = html.replace(/<\/ul>\n<ul>/gim, '\n');
    html = html.replace(/<\/ol>\n<ol>/gim, '\n');
    
    // Paragraphs (lines that don't start with a tag)
    html = html.replace(/^(?!<[a-z\/])(.*$)/gim, '<p>$1</p>');
    
    return html;
}

// Update Active Nav Link
function updateNav(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('#/', '');
        const currentPath = path.split('/')[0];
        if (href === currentPath || (href === '' && currentPath === '')) {
            link.classList.add('active');
        }
    });
}

// Scroll to top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Page Renderers ---

function renderHome() {
    let html = `
        <!-- Bento Grid Hero -->
        <div class="bento-grid">
            <!-- Hero Card -->
            <div class="bento-item hero-card">
                <div>
                    <span class="hero-tag">Available for Opportunities</span>
                    <h1 class="hero-title">${DB.hero.name}</h1>
                    <p class="hero-subtitle">${DB.hero.intro}</p>
                </div>
                <div class="hero-buttons">
                    <a href="#/projects" class="btn-primary">
                        View My Work
                        <span>→</span>
                    </a>
                    <a href="#/contact" class="btn-secondary">Get in Touch</a>
                </div>
            </div>

            <!-- Profile Image Card -->
            <div class="bento-item profile-card">
                <img src="assets/images/profile.jpg" alt="${DB.hero.name}" class="profile-image" onerror="this.style.display='none'">
                <div class="profile-overlay">
                    <div class="profile-name">${DB.hero.name}</div>
                    <div class="profile-role">${DB.hero.role}</div>
                </div>
            </div>

            <!-- Stats Card 1 -->
            <div class="bento-item stats-card">
                <div class="stats-number">${DB.experience.length}+</div>
                <div class="stats-label">Years of Experience</div>
            </div>

            <!-- Companies Card -->
            <div class="bento-item companies-card">
                <div class="companies-title">Trusted by Companies</div>
                <div class="companies-grid">
                    ${DB.companies.map(company => `
                        <img src="assets/images/companies/${company.logo}" alt="${company.name}" class="company-logo" onerror="this.outerHTML='<div style=\\'text-align:center;color:var(--text-muted);font-size:14px\\'>${company.name}</div>'">
                    `).join('')}
                </div>
            </div>

            <!-- Stats Card 2 -->
            <div class="bento-item stats-card">
                <div class="stats-number">${DB.projects.length}+</div>
                <div class="stats-label">Projects Completed</div>
            </div>
        </div>

        <!-- Featured Work Section -->
        <div class="section-header">
            <span class="section-tag">Portfolio</span>
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-subtitle">A selection of my recent work in DevOps, XR development, and content creation</p>
        </div>

        <div class="projects-grid">
            ${DB.projects.slice(0, 3).map(project => `
                <a href="${project.link || '#/projects'}" class="project-card">
                    <div class="project-icon">${project.icon || '🚀'}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.desc}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </a>
            `).join('')}
        </div>

        <!-- Skills Section -->
        <div class="section-header">
            <span class="section-tag">Expertise</span>
            <h2 class="section-title">Technical Skills</h2>
            <p class="section-subtitle">Technologies and tools I work with on a daily basis</p>
        </div>

        <div class="skills-grid">
            ${DB.skills.technical.slice(0, 8).map(skill => `
                <div class="skill-card">
                    <div class="skill-icon">${skill.icon || '⚡'}</div>
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-level">
                        ${[1, 2, 3, 4].map(i => `<span class="skill-dot ${i <= skill.level ? 'active' : ''}"></span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    appRoot.innerHTML = html;
}

function renderExperience() {
    let html = `
        <div class="section-header">
            <span class="section-tag">Career</span>
            <h2 class="section-title">Work Experience</h2>
            <p class="section-subtitle">My professional journey in tech and development</p>
        </div>

        <div class="projects-grid">
            ${DB.experience.map(exp => `
                <div class="project-card">
                    <div class="project-icon">${exp.icon || '💼'}</div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                        <h3 class="project-title">${exp.title}</h3>
                        ${exp.current ? '<span class="hero-tag" style="margin: 0; padding: 4px 12px; font-size: 11px;">Current</span>' : ''}
                    </div>
                    <div style="color: var(--accent-gold); font-weight: 600; margin-bottom: 8px; font-size: 15px;">${exp.company}</div>
                    <div style="color: var(--text-muted); font-size: 13px; margin-bottom: 16px;">${exp.period}</div>
                    <p class="project-description">${exp.description}</p>
                    ${exp.responsibilities ? `
                        <ul style="margin: 16px 0; padding-left: 20px;">
                            ${exp.responsibilities.slice(0, 3).map(r => `<li style="color: var(--text-muted); font-size: 14px; margin-bottom: 8px;">${r}</li>`).join('')}
                        </ul>
                    ` : ''}
                    <div class="project-tags">
                        ${exp.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Education Section -->
        <div class="section-header" style="margin-top: 80px;">
            <span class="section-tag">Learning</span>
            <h2 class="section-title">Education & Certifications</h2>
        </div>

        <div class="projects-grid">
            ${DB.education.map(edu => `
                <div class="project-card">
                    <div class="project-icon">📚</div>
                    <h3 class="project-title">${edu.title}</h3>
                    <div style="color: var(--accent-gold); font-weight: 500; margin-bottom: 8px; font-size: 14px;">${edu.institution}</div>
                    ${edu.period ? `<div style="color: var(--text-muted); font-size: 13px; margin-bottom: 12px;">${edu.period}</div>` : ''}
                    ${edu.desc ? `<p class="project-description">${edu.desc}</p>` : ''}
                </div>
            `).join('')}
        </div>

        ${DB.achievements && DB.achievements.length > 0 ? `
            <div class="section-header" style="margin-top: 80px;">
                <span class="section-tag">Recognition</span>
                <h2 class="section-title">Achievements</h2>
            </div>

            <div class="projects-grid">
                ${DB.achievements.map(ach => `
                    <div class="project-card" style="border: 2px solid var(--accent-gold);">
                        <div class="project-icon">🏆</div>
                        <h3 class="project-title">${ach.title}</h3>
                        <div style="color: var(--text-muted); font-size: 13px; margin-bottom: 12px;">${ach.date}</div>
                        <p class="project-description">${ach.desc}</p>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
    appRoot.innerHTML = html;
}

function renderProjects() {
    let html = `
        <div class="section-header">
            <span class="section-tag">Portfolio</span>
            <h2 class="section-title">All Projects</h2>
            <p class="section-subtitle">A comprehensive look at my work across different domains</p>
        </div>

        <div class="projects-grid">
            ${DB.projects.map(project => `
                <a href="${project.link || '#'}" class="project-card">
                    <div class="project-icon">${project.icon || '🚀'}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <div style="color: var(--text-muted); font-size: 13px; margin-bottom: 12px;">${project.period}</div>
                    <p class="project-description">${project.desc}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </a>
            `).join('')}
        </div>
    `;
    appRoot.innerHTML = html;
}

function renderBlog() {
    let html = `
        <div class="section-header">
            <span class="section-tag">Writings</span>
            <h2 class="section-title">Blog</h2>
            <p class="section-subtitle">Thoughts on technology, development, and problem-solving</p>
        </div>

        <div class="projects-grid">
            ${DB.blog.posts.map(post => `
                <a href="#/blog/${post.slug}" class="blog-card">
                    <div class="blog-image"></div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span>${post.date}</span>
                            <span>•</span>
                            <span>${post.readTime}</span>
                        </div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <div class="project-tags" style="margin-bottom: 16px;">
                            ${post.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <span class="read-more">Read More →</span>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
    appRoot.innerHTML = html;
}

function renderBlogPost(slug) {
    const post = DB.blog.posts.find(p => p.slug === slug);
    
    if (!post) {
        appRoot.innerHTML = `
            <div class="article-container">
                <h1 class="article-title">Post Not Found</h1>
                <p style="color: var(--text-muted); margin-bottom: 24px;">The blog post you're looking for doesn't exist.</p>
                <a href="#/blog" class="btn-primary">Back to Blog</a>
            </div>
        `;
        return;
    }

    // Fetch markdown content if available
    let content = post.content || '';
    
    let html = `
        <div class="article-container">
            <div class="article-header">
                <span class="section-tag">${post.tags[0]}</span>
                <h1 class="article-title">${post.title}</h1>
                <div class="article-meta">
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.readTime}</span>
                    <span>•</span>
                    <span>${post.author || 'Seyed Mohammad Fakhri'}</span>
                </div>
            </div>

            <div class="markdown-content">
                ${parseMarkdown(content)}
            </div>

            <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid rgba(200, 164, 93, 0.1);">
                <a href="#/blog" class="btn-secondary">← Back to Blog</a>
            </div>
        </div>
    `;
    
    appRoot.innerHTML = html;
}

function renderContact() {
    let html = `
        <div class="section-header">
            <span class="section-tag">Contact</span>
            <h2 class="section-title">Let's Work Together</h2>
            <p class="section-subtitle">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
        </div>

        <div class="bento-grid" style="margin-top: 60px;">
            <div class="bento-item" style="grid-column: span 6; background: var(--bg-warm); color: var(--text-primary);">
                <h3 style="font-family: var(--font-heading); font-size: 28px; margin-bottom: 24px;">Contact Information</h3>
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <div style="font-weight: 600; margin-bottom: 8px; color: var(--accent-gold);">Email</div>
                        <a href="mailto:${DB.hero.email}" style="color: var(--text-primary); text-decoration: none; font-size: 18px;">${DB.hero.email}</a>
                    </div>
                    <div>
                        <div style="font-weight: 600; margin-bottom: 8px; color: var(--accent-gold);">Phone</div>
                        <a href="tel:${DB.hero.phone}" style="color: var(--text-primary); text-decoration: none; font-size: 18px;">${DB.hero.phone}</a>
                    </div>
                    <div>
                        <div style="font-weight: 600; margin-bottom: 8px; color: var(--accent-gold);">Location</div>
                        <div style="font-size: 18px;">${DB.hero.location}</div>
                    </div>
                </div>
            </div>

            <div class="bento-item" style="grid-column: span 6; background: var(--accent-gold); color: var(--bg-main);">
                <h3 style="font-family: var(--font-heading); font-size: 28px; margin-bottom: 16px;">Quick Links</h3>
                <p style="margin-bottom: 32px; opacity: 0.8;">Connect with me on social platforms</p>
                <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    <a href="#" style="padding: 12px 24px; background: var(--bg-main); color: var(--accent-gold); border-radius: 50px; text-decoration: none; font-weight: 600;">LinkedIn</a>
                    <a href="#" style="padding: 12px 24px; background: var(--bg-main); color: var(--accent-gold); border-radius: 50px; text-decoration: none; font-weight: 600;">GitHub</a>
                    <a href="#" style="padding: 12px 24px; background: var(--bg-main); color: var(--accent-gold); border-radius: 50px; text-decoration: none; font-weight: 600;">Twitter</a>
                </div>
            </div>
        </div>
    `;
    appRoot.innerHTML = html;
}

// --- Router Logic ---
function router() {
    let path = window.location.hash.replace(/^#\/?/, '');
    
    updateNav(path);
    scrollToTop();

    if (path === '' || path === '/') {
        renderHome();
    } else if (path === 'experience') {
        renderExperience();
    } else if (path === 'projects') {
        renderProjects();
    } else if (path === 'blog') {
        renderBlog();
    } else if (path.startsWith('blog/')) {
        const slug = path.split('/')[1];
        renderBlogPost(slug);
    } else if (path === 'contact') {
        renderContact();
    } else {
        renderHome();
    }
}

// Initialize
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
