// --- Apple 2026 Pro Portfolio Engine ---

const appRoot = document.getElementById('app-root');

// SVG Icon System (Apple SF Symbols style: 1.75px stroke, monoline)
const ICONS = {
    terminal: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`,
    docker: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="13" rx="2"></rect><path d="M17 7V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3"></path><line x1="6" y1="11" x2="6.01" y2="11"></line><line x1="10" y1="11" x2="10.01" y2="11"></line><line x1="14" y1="11" x2="14.01" y2="11"></line></svg>`,
    git: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    network: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`,
    cloud: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`,
    sparkles: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    vr: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"></rect><circle cx="8" cy="12" r="2.5"></circle><circle cx="16" cy="12" r="2.5"></circle><path d="M10.5 14.5a2 2 0 0 0 3 0"></path></svg>`,
    briefcase: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    graduation: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    trophy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`,
    mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    pin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    arrowUpRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
    check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    book: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

// Map emojis or names to SVG icons
function resolveIcon(str) {
    if (!str) return ICONS.terminal;
    const s = String(str).toLowerCase();
    if (s.includes('gear') || s.includes('⚙') || s.includes('devops') || s.includes('ansible')) return ICONS.server;
    if (s.includes('docker') || s.includes('🐳')) return ICONS.docker;
    if (s.includes('python') || s.includes('🐍') || s.includes('script')) return ICONS.terminal;
    if (s.includes('linux') || s.includes('🐧') || s.includes('bash')) return ICONS.cpu;
    if (s.includes('git') || s.includes('📦')) return ICONS.git;
    if (s.includes('network') || s.includes('🌐') || s.includes('cctv') || s.includes('comptia')) return ICONS.network;
    if (s.includes('vr') || s.includes('xr') || s.includes('ar') || s.includes('unity') || s.includes('3d') || s.includes('🥽') || s.includes('🏛')) return ICONS.vr;
    if (s.includes('ai') || s.includes('cursor') || s.includes('codex') || s.includes('🎬')) return ICONS.sparkles;
    if (s.includes('cloud') || s.includes('vpn') || s.includes('hosting')) return ICONS.cloud;
    if (s.includes('education') || s.includes('course') || s.includes('📚')) return ICONS.graduation;
    if (s.includes('trophy') || s.includes('award') || s.includes('1st') || s.includes('🏆')) return ICONS.trophy;
    if (s.includes('briefcase') || s.includes('💼') || s.includes('management') || s.includes('📊')) return ICONS.briefcase;
    return ICONS.terminal;
}

// Markdown parser
function parseMarkdown(text) {
    if (!text) return '';
    let html = text.trim();
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    html = html.replace(/`(.*?)`/gim, '<code>$1</code>');
    html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1">');
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    html = html.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^[0-9]+\. (.*$)/gim, '<ol><li>$1</li></ol>');
    html = html.replace(/<\/ul>\n<ul>/gim, '\n');
    html = html.replace(/<\/ol>\n<ol>/gim, '\n');
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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Page Renderers ---

function renderHome() {
    const techSkills = [
        { name: "Docker & Containers", domain: "Infrastructure & CI/CD", tier: "Production", fill: "95%", icon: ICONS.docker },
        { name: "Linux Server Administration", domain: "Core System Operations", tier: "Core Stack", fill: "92%", icon: ICONS.cpu },
        { name: "Python Automation", domain: "Scripting & Tool Dev", tier: "Production", fill: "88%", icon: ICONS.terminal },
        { name: "CI/CD & Workflows", domain: "Deployment Pipelines", tier: "Core Stack", fill: "90%", icon: ICONS.server },
        { name: "Git & Version Control", domain: "Repository Strategy", tier: "Advanced", fill: "95%", icon: ICONS.git },
        { name: "Network Infrastructure", domain: "VPN, Routing & CCTV", tier: "Operational", fill: "85%", icon: ICONS.network },
        { name: "AI Tool Integration", domain: "Cursor, Codex & Copilots", tier: "Workflow", fill: "96%", icon: ICONS.sparkles },
        { name: "XR & Interactive Systems", domain: "Unity, 3D & Virtual Spaces", tier: "Specialized", fill: "82%", icon: ICONS.vr }
    ];

    let html = `
        <!-- Apple Bento Grid -->
        <div class="bento-grid">
            <!-- Hero Card -->
            <div class="bento-item hero-card">
                <div>
                    <div class="status-badge">
                        <span class="status-dot"></span>
                        <span>Available for DevOps & Infrastructure Roles</span>
                    </div>
                    <h1 class="hero-title">${DB.hero.name}</h1>
                    <p class="hero-subtitle">${DB.hero.intro}</p>
                </div>
                <div class="hero-actions">
                    <a href="#/projects" class="btn-primary">
                        <span>Explore Projects</span>
                        ${ICONS.arrowRight}
                    </a>
                    <a href="#/contact" class="btn-secondary">Get in Touch</a>
                </div>
            </div>

            <!-- Profile Image Card -->
            <div class="bento-item profile-card">
                <img src="${localStorage.getItem('user_custom_avatar') || 'assets/images/profile.jpg'}" alt="${DB.hero.name}" id="main-profile-img" class="profile-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\' viewBox=\\'0 0 24 24\\' fill=\\'%2316161A\\'><rect width=\\'24\\' height=\\'24\\' fill=\\'%23111114\\'/><circle cx=\\'12\\' cy=\\'9\\' r=\\'4\\' fill=\\'%23D4AF37\\' opacity=\\'0.4\\'/><path d=\\'M4 20c0-4 4-6 8-6s8 2 8 6\\' fill=\\'%23D4AF37\\' opacity=\\'0.4\\'/></svg>'">
                <button type="button" class="photo-upload-btn" onclick="document.getElementById('profile-file-input').click()" title="انتخاب مستقیم عکس از سیستم">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                    <span>تغییر عکس</span>
                </button>
                <input type="file" id="profile-file-input" accept="image/*" style="display:none;" onchange="handleProfilePhotoUpload(event)">
                <div class="profile-overlay">
                    <div class="profile-name">${DB.hero.name}</div>
                    <div class="profile-role">
                        ${ICONS.terminal}
                        <span>${DB.hero.role}</span>
                    </div>
                </div>
            </div>

            <!-- Companies Card (Apple 2026 Rotating Infinite Marquee) -->
            <div class="bento-item companies-card">
                <div class="companies-topbar">
                    <div class="companies-header">
                        <span class="status-dot" style="width: 7px; height: 7px; margin-right: 2px;"></span>
                        <span>Collaborations & Engagements</span>
                    </div>
                    <div class="companies-subtext">Selected organizations, studios, and production enterprises</div>
                </div>
                <div class="marquee-wrapper">
                    <div class="marquee-track">
                        ${[...DB.companies, ...DB.companies].map(company => `
                            <div class="company-vcard" title="${company.name}">
                                <div class="company-logo-box">
                                    <img src="${company.logo}" alt="${company.name}" class="company-logo-img" onerror="this.onerror=null; this.src='${company.fallbackLogo || company.logo}';" />
                                </div>
                                <div class="company-vtitle">${company.name}</div>
                                <div class="company-vdomain">${company.domain || 'Technology Partner'}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Metric 1 -->
            <div class="bento-item metric-card">
                <div class="metric-number">
                    <span>${DB.experience.length}+</span>
                </div>
                <div class="metric-label">Professional Engineering Roles</div>
            </div>

            <!-- Metric 2 -->
            <div class="bento-item metric-card">
                <div class="metric-number">
                    <span>${DB.projects.length + DB.experience.length}+</span>
                </div>
                <div class="metric-label">Delivered Systems & Production Deployments</div>
            </div>
        </div>

        <!-- Featured Projects Section -->
        <div class="section-header">
            <div class="section-eyebrow">
                ${ICONS.terminal}
                <span>Featured Deployments</span>
            </div>
            <h2 class="section-title">Selected Projects</h2>
            <p class="section-subtitle">Real-world technical projects spanning infrastructure, automated workflows, and spatial computing.</p>
        </div>

        <div class="cards-grid-3">
            ${DB.projects.map(project => `
                <div class="apple-card">
                    <div class="card-icon-box">
                        ${resolveIcon(project.icon || project.title)}
                    </div>
                    <h3 class="card-title">${project.title}</h3>
                    <div class="card-meta">
                        <span>${project.period || 'Recent'}</span>
                    </div>
                    <p class="card-desc">${project.desc}</p>
                    <div class="tag-cluster">
                        ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Technical Capabilities (Apple Skills Matrix) -->
        <div class="section-header">
            <div class="section-eyebrow">
                ${ICONS.cpu}
                <span>Competency Architecture</span>
            </div>
            <h2 class="section-title">Technical Capabilities</h2>
            <p class="section-subtitle">Core engineering stack, system utilities, and automated production tooling.</p>
        </div>

        <div class="skills-grid">
            ${techSkills.map(s => `
                <div class="skill-item">
                    <div class="skill-top">
                        <div class="skill-icon-wrap">${s.icon}</div>
                        <span class="skill-tier">${s.tier}</span>
                    </div>
                    <div class="skill-name">${s.name}</div>
                    <div class="skill-domain">${s.domain}</div>
                    <div class="skill-meter">
                        <div class="skill-meter-fill" style="width: ${s.fill};"></div>
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
            <div class="section-eyebrow">
                ${ICONS.briefcase}
                <span>Career Architecture</span>
            </div>
            <h2 class="section-title">Professional Experience</h2>
            <p class="section-subtitle">Practical track record in DevOps, cloud management, and full-lifecycle technical support.</p>
        </div>

        <div class="cards-grid-2">
            ${DB.experience.map(exp => `
                <div class="apple-card">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
                        <div class="card-icon-box" style="margin-bottom: 0;">
                            ${resolveIcon(exp.icon || exp.title)}
                        </div>
                        ${exp.current ? `
                            <div class="status-badge" style="margin: 0; padding: 4px 10px; font-size: 11px;">
                                <span class="status-dot"></span>
                                <span>Active Role</span>
                            </div>
                        ` : ''}
                    </div>

                    <h3 class="card-title">${exp.title}</h3>
                    <div class="card-company">${exp.company}</div>
                    <div class="card-meta">
                        <span>${exp.period}</span>
                    </div>

                    <p class="card-desc">${exp.description}</p>

                    ${exp.responsibilities && exp.responsibilities.length ? `
                        <ul class="card-bullets">
                            ${exp.responsibilities.map(r => `
                                <li>
                                    ${ICONS.check}
                                    <span>${r}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}

                    <div class="tag-cluster">
                        ${exp.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Education & Credentials -->
        <div class="section-header" style="margin-top: 60px;">
            <div class="section-eyebrow">
                ${ICONS.graduation}
                <span>Certifications & Education</span>
            </div>
            <h2 class="section-title">Credentials & Training</h2>
            <p class="section-subtitle">Academic foundations and continuous professional education.</p>
        </div>

        <div class="cards-grid-3">
            ${DB.education.map(edu => `
                <div class="apple-card">
                    <div class="card-icon-box">
                        ${ICONS.graduation}
                    </div>
                    <h3 class="card-title">${edu.title}</h3>
                    <div class="card-company">${edu.institution}</div>
                    ${edu.period ? `<div class="card-meta">${edu.period}</div>` : ''}
                    ${edu.desc ? `<p class="card-desc">${edu.desc}</p>` : ''}
                </div>
            `).join('')}
        </div>

        <!-- Recognition & Awards -->
        ${DB.achievements && DB.achievements.length > 0 ? `
            <div class="section-header" style="margin-top: 60px;">
                <div class="section-eyebrow">
                    ${ICONS.trophy}
                    <span>Distinctions</span>
                </div>
                <h2 class="section-title">Honors & Awards</h2>
            </div>

            <div class="cards-grid-2">
                ${DB.achievements.map(ach => `
                    <div class="apple-card" style="border-color: rgba(212, 175, 55, 0.4);">
                        <div class="card-icon-box" style="background: rgba(212, 175, 55, 0.15);">
                            ${ICONS.trophy}
                        </div>
                        <h3 class="card-title">${ach.title}</h3>
                        <div class="card-meta">${ach.date}</div>
                        <p class="card-desc">${ach.desc}</p>
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
            <div class="section-eyebrow">
                ${ICONS.terminal}
                <span>Engineering Showcase</span>
            </div>
            <h2 class="section-title">Featured Work</h2>
            <p class="section-subtitle">Production deployments, automation projects, and innovative digital creations.</p>
        </div>

        <div class="cards-grid-3">
            ${DB.projects.map(project => `
                <div class="apple-card">
                    <div class="card-icon-box">
                        ${resolveIcon(project.icon || project.title)}
                    </div>
                    <h3 class="card-title">${project.title}</h3>
                    <div class="card-meta">
                        <span>${project.period || 'Completed'}</span>
                    </div>
                    <p class="card-desc">${project.desc}</p>
                    <div class="tag-cluster" style="margin-bottom: 20px;">
                        ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                    ${project.link && project.link !== '#' ? `
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="read-action" style="text-decoration: none;">
                            <span>Inspect Release</span>
                            ${ICONS.arrowUpRight}
                        </a>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
    appRoot.innerHTML = html;
}

function renderBlog() {
    let html = `
        <div class="section-header">
            <div class="section-eyebrow">
                ${ICONS.book}
                <span>Engineering Insights</span>
            </div>
            <h2 class="section-title">Technical Notes & Articles</h2>
            <p class="section-subtitle">Reflections on DevOps transition, automated tool design, and modern infrastructure workflows.</p>
        </div>

        <div class="cards-grid-3">
            ${DB.blog.posts.map(post => `
                <a href="#/blog/${post.slug}" class="blog-card">
                    <div class="blog-header-image">
                        ${ICONS.terminal}
                    </div>
                    <div class="blog-body">
                        <div class="blog-meta-line">
                            <span>${post.date}</span>
                            <span>•</span>
                            <span>${post.readTime}</span>
                        </div>
                        <h3 class="blog-headline">${post.title}</h3>
                        <p class="blog-summary">${post.excerpt}</p>
                        <div class="tag-cluster" style="margin-bottom: 16px;">
                            ${post.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                        </div>
                        <span class="read-action">
                            <span>Read Article</span>
                            ${ICONS.arrowRight}
                        </span>
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
            <div class="article-wrap" style="text-align: center; padding: 80px 0;">
                <h1 class="article-title">Article Not Found</h1>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">The article requested is currently unavailable or has been relocated.</p>
                <a href="#/blog" class="btn-primary">Return to Articles</a>
            </div>
        `;
        return;
    }

    let content = post.content || '';
    let html = `
        <div class="article-wrap">
            <a href="#/blog" class="article-back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                <span>Back to Insights</span>
            </a>

            <div class="article-kicker">${post.tags[0] || 'Technical Note'}</div>
            <h1 class="article-title">${post.title}</h1>

            <div class="article-meta-bar">
                <span>Published on ${post.date}</span>
                <span>•</span>
                <span>${post.readTime}</span>
                <span>•</span>
                <span>By ${post.author || 'Seyed Mohammad Fakhri'}</span>
            </div>

            <div class="article-prose">
                ${parseMarkdown(content)}
            </div>

            <div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center;">
                <a href="#/blog" class="btn-secondary">
                    <span>All Articles</span>
                </a>
                <a href="#/contact" class="btn-primary">
                    <span>Discuss This Topic</span>
                    ${ICONS.arrowRight}
                </a>
            </div>
        </div>
    `;
    appRoot.innerHTML = html;
}

function renderContact() {
    let html = `
        <div class="section-header">
            <div class="section-eyebrow">
                ${ICONS.mail}
                <span>Communications</span>
            </div>
            <h2 class="section-title">Initiate Contact</h2>
            <p class="section-subtitle">Open to DevOps engineering roles, technical workflow consultation, and infrastructure projects.</p>
        </div>

        <div class="bento-grid">
            <div class="bento-item" style="grid-column: span 7;">
                <div class="card-icon-box" style="margin-bottom: 24px;">
                    ${ICONS.mail}
                </div>
                <h3 class="card-title" style="font-size: 24px; margin-bottom: 12px;">Direct Inquiries</h3>
                <p class="card-desc" style="margin-bottom: 28px;">Feel free to reach out directly via email. I am based in Qom, Iran (UTC+3:30) and fully available for remote worldwide collaboration.</p>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div class="skill-icon-wrap">${ICONS.mail}</div>
                        <div>
                            <div style="font-size: 12px; color: var(--text-tertiary);">Direct Email</div>
                            <a href="mailto:${DB.hero.email}" style="color: #FFFFFF; font-size: 16px; font-weight: 500; text-decoration: none;">${DB.hero.email}</a>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div class="skill-icon-wrap">${ICONS.pin}</div>
                        <div>
                            <div style="font-size: 12px; color: var(--text-tertiary);">Location</div>
                            <div style="color: #FFFFFF; font-size: 16px; font-weight: 500;">${DB.hero.location} · Remote Ready</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bento-item" style="grid-column: span 5; justify-content: space-between;">
                <div>
                    <div class="card-icon-box" style="margin-bottom: 24px;">
                        ${ICONS.globe}
                    </div>
                    <h3 class="card-title" style="font-size: 24px; margin-bottom: 12px;">Channels</h3>
                    <p class="card-desc" style="margin-bottom: 24px;">Explore my repositories, code commits, and professional networks.</p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <a href="https://github.com/mrsmf2006" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="justify-content: space-between; padding: 14px 20px;">
                        <span>GitHub Profile</span>
                        ${ICONS.arrowUpRight}
                    </a>
                    <a href="mailto:${DB.hero.email}" class="btn-primary" style="justify-content: space-between; padding: 14px 20px;">
                        <span>Send Message</span>
                        ${ICONS.arrowRight}
                    </a>
                </div>
            </div>
        </div>
    `;
    appRoot.innerHTML = html;
}

// --- Router Engine ---
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

// Router Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// User Profile Photo Upload Handler
window.handleProfilePhotoUpload = function(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        try {
            localStorage.setItem('user_custom_avatar', dataUrl);
        } catch (err) {
            console.warn('Storage quota exceeded:', err);
        }
        const img = document.getElementById('main-profile-img');
        if (img) {
            img.src = dataUrl;
        }
    };
    reader.readAsDataURL(file);
};
