const appRoot = document.getElementById('app-root');

const ICONS = {
    terminal: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`,
    docker: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="13" rx="2"></rect><path d="M17 7V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3"></path><line x1="6" y1="11" x2="6.01" y2="11"></line><line x1="10" y1="11" x2="10.01" y2="11"></line><line x1="14" y1="11" x2="14.01" y2="11"></line></svg>`,
    git: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    network: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`,
    sparkles: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    vr: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"></rect><circle cx="8" cy="12" r="2.5"></circle><circle cx="16" cy="12" r="2.5"></circle><path d="M10.5 14.5a2 2 0 0 0 3 0"></path></svg>`,
    briefcase: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    graduation: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    trophy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`,
    mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    pin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    arrowRight: `<svg class="dir-flip" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    arrowUpRight: `<svg class="dir-flip" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
    check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

function resolveIcon(key) {
    return ICONS[key] || ICONS.terminal;
}

function content() {
    const lang = window.SiteLang ? SiteLang.current() : 'en';
    return DB[lang] || DB.en;
}

function updateNav(path) {
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active');
        const href = (link.getAttribute('href') || '').replace('#/', '');
        const currentPath = path.split('/')[0];
        if (href === currentPath || (href === '' && currentPath === '')) {
            link.classList.add('active');
        }
    });
}

function renderHome(db) {
    const t = SiteLang.t;
    const digits = SiteLang.digits;
    appRoot.innerHTML = `
        <div class="bento-grid">
            <div class="bento-item hero-card">
                <div>
                    <div class="status-badge">
                        <span class="status-dot"></span>
                        <span>${t('hero_status')}</span>
                    </div>
                    <h1 class="hero-title">${db.hero.name}</h1>
                    <p class="hero-subtitle">${db.hero.intro}</p>
                </div>
                <div class="hero-actions">
                    <a href="#/projects" class="btn-primary">
                        <span>${t('hero_projects')}</span>
                        ${ICONS.arrowRight}
                    </a>
                    <a href="#/contact" class="btn-secondary">${t('hero_contact')}</a>
                </div>
            </div>

            <div class="bento-item profile-card">
                <img src="/assets/images/profile.jpg" alt="${db.hero.name}" class="profile-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 24 24%22><rect width=%2224%22 height=%2224%22 fill=%22%23111114%22/><circle cx=%2212%22 cy=%229%22 r=%224%22 fill=%22%23D4AF37%22 opacity=%220.4%22/><path d=%22M4 20c0-4 4-6 8-6s8 2 8 6%22 fill=%22%23D4AF37%22 opacity=%220.4%22/></svg>'">
                <div class="profile-overlay">
                    <div class="profile-name">${db.hero.name}</div>
                    <div class="profile-role">
                        ${ICONS.terminal}
                        <span>${db.hero.role}</span>
                    </div>
                </div>
            </div>

            <div class="bento-item companies-card">
                <div class="companies-topbar">
                    <div class="companies-header">
                        <span class="status-dot" style="width: 7px; height: 7px;"></span>
                        <span>${t('companies_kicker')}</span>
                    </div>
                    <div class="companies-subtext">${t('companies_sub')}</div>
                </div>
                <div class="marquee-wrapper">
                    <div class="marquee-track">
                        ${[...db.companies, ...db.companies].map((company) => `
                            <div class="company-vcard" title="${company.name}">
                                <div class="company-logo-box">
                                    <img src="${company.logo}" alt="${company.name}" class="company-logo-img" onerror="this.onerror=null; this.src='${company.fallbackLogo || company.logo}';" />
                                </div>
                                <div class="company-vtitle">${company.name}</div>
                                <div class="company-vdomain">${company.domain}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="bento-item metric-card">
                <div class="metric-number"><span>${digits(db.experience.length + '+')}</span></div>
                <div class="metric-label">${t('metric_roles')}</div>
            </div>
            <div class="bento-item metric-card">
                <div class="metric-number"><span>${digits((db.projects.length + db.experience.length) + '+')}</span></div>
                <div class="metric-label">${t('metric_systems')}</div>
            </div>
        </div>

        <div class="section-header">
            <div class="section-eyebrow">${ICONS.terminal}<span>${t('projects_kicker')}</span></div>
            <h2 class="section-title">${t('projects_title')}</h2>
            <p class="section-subtitle">${t('projects_sub')}</p>
        </div>
        <div class="cards-grid-3">
            ${db.projects.map((project) => `
                <div class="apple-card">
                    <div class="card-icon-box">${resolveIcon(project.icon)}</div>
                    <h3 class="card-title">${project.title}</h3>
                    <div class="card-meta"><span>${project.period}</span></div>
                    <p class="card-desc">${project.desc}</p>
                    <div class="tag-cluster">${project.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}</div>
                </div>
            `).join('')}
        </div>

        <div class="section-header">
            <div class="section-eyebrow">${ICONS.cpu}<span>${t('skills_kicker')}</span></div>
            <h2 class="section-title">${t('skills_title')}</h2>
            <p class="section-subtitle">${t('skills_sub')}</p>
        </div>
        <div class="skills-grid">
            ${db.capabilities.map((skill) => `
                <div class="skill-item">
                    <div class="skill-top">
                        <div class="skill-icon-wrap">${resolveIcon(skill.icon)}</div>
                        <span class="skill-tier">${skill.tier}</span>
                    </div>
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-domain">${skill.domain}</div>
                    <div class="skill-meter"><div class="skill-meter-fill" style="width: ${skill.fill};"></div></div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderExperience(db) {
    const t = SiteLang.t;
    appRoot.innerHTML = `
        <div class="section-header">
            <div class="section-eyebrow">${ICONS.briefcase}<span>${t('exp_kicker')}</span></div>
            <h2 class="section-title">${t('exp_title')}</h2>
            <p class="section-subtitle">${t('exp_sub')}</p>
        </div>
        <div class="cards-grid-2">
            ${db.experience.map((exp) => `
                <div class="apple-card">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; gap: 12px;">
                        <div class="card-icon-box" style="margin-bottom: 0;">${resolveIcon(exp.icon)}</div>
                        ${exp.current ? `
                            <div class="status-badge" style="margin: 0; padding: 4px 10px; font-size: 11px;">
                                <span class="status-dot"></span>
                                <span>${t('exp_active')}</span>
                            </div>
                        ` : ''}
                    </div>
                    <h3 class="card-title">${exp.title}</h3>
                    <div class="card-company">${exp.company}</div>
                    <div class="card-meta"><span>${exp.period}</span></div>
                    <p class="card-desc">${exp.description}</p>
                    ${exp.responsibilities && exp.responsibilities.length ? `
                        <ul class="card-bullets">
                            ${exp.responsibilities.map((item) => `<li>${ICONS.check}<span>${item}</span></li>`).join('')}
                        </ul>
                    ` : ''}
                    <div class="tag-cluster">${exp.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}</div>
                </div>
            `).join('')}
        </div>

        <div class="section-header" style="margin-top: 60px;">
            <div class="section-eyebrow">${ICONS.graduation}<span>${t('edu_kicker')}</span></div>
            <h2 class="section-title">${t('edu_title')}</h2>
            <p class="section-subtitle">${t('edu_sub')}</p>
        </div>
        <div class="cards-grid-3">
            ${db.education.map((edu) => `
                <div class="apple-card">
                    <div class="card-icon-box">${ICONS.graduation}</div>
                    <h3 class="card-title">${edu.title}</h3>
                    <div class="card-company">${edu.institution}</div>
                    ${edu.period ? `<div class="card-meta">${edu.period}</div>` : ''}
                    ${edu.desc ? `<p class="card-desc">${edu.desc}</p>` : ''}
                </div>
            `).join('')}
        </div>

        ${db.achievements && db.achievements.length ? `
            <div class="section-header" style="margin-top: 60px;">
                <div class="section-eyebrow">${ICONS.trophy}<span>${t('awards_kicker')}</span></div>
                <h2 class="section-title">${t('awards_title')}</h2>
            </div>
            <div class="cards-grid-2">
                ${db.achievements.map((item) => `
                    <div class="apple-card" style="border-color: rgba(212, 175, 55, 0.4);">
                        <div class="card-icon-box" style="background: rgba(212, 175, 55, 0.15);">${ICONS.trophy}</div>
                        <h3 class="card-title">${item.title}</h3>
                        <div class="card-meta">${item.date}</div>
                        <p class="card-desc">${item.desc}</p>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

function renderProjects(db) {
    const t = SiteLang.t;
    appRoot.innerHTML = `
        <div class="section-header">
            <div class="section-eyebrow">${ICONS.terminal}<span>${t('work_kicker')}</span></div>
            <h2 class="section-title">${t('work_title')}</h2>
            <p class="section-subtitle">${t('work_sub')}</p>
        </div>
        <div class="cards-grid-3">
            ${db.projects.map((project) => `
                <div class="apple-card">
                    <div class="card-icon-box">${resolveIcon(project.icon)}</div>
                    <h3 class="card-title">${project.title}</h3>
                    <div class="card-meta"><span>${project.period}</span></div>
                    <p class="card-desc">${project.desc}</p>
                    <div class="tag-cluster" style="margin-bottom: 20px;">
                        ${project.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                    ${project.link && project.link !== '#' ? `
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="read-action" style="text-decoration: none;">
                            <span>${t('work_link')}</span>
                            ${ICONS.arrowUpRight}
                        </a>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

function renderContact(db) {
    const t = SiteLang.t;
    appRoot.innerHTML = `
        <div class="section-header">
            <div class="section-eyebrow">${ICONS.mail}<span>${t('contact_kicker')}</span></div>
            <h2 class="section-title">${t('contact_title')}</h2>
            <p class="section-subtitle">${t('contact_sub')}</p>
        </div>
        <div class="bento-grid">
            <div class="bento-item" style="grid-column: span 7;">
                <div class="card-icon-box" style="margin-bottom: 24px;">${ICONS.mail}</div>
                <h3 class="card-title" style="font-size: 24px; margin-bottom: 12px;">${t('contact_direct_title')}</h3>
                <p class="card-desc" style="margin-bottom: 28px;">${t('contact_direct_body')}</p>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div class="skill-icon-wrap">${ICONS.mail}</div>
                        <div>
                            <div style="font-size: 12px; color: var(--text-tertiary);">${t('contact_email_label')}</div>
                            <a class="ltr" href="mailto:${db.hero.email}" style="color: #FFFFFF; font-size: 16px; font-weight: 500; text-decoration: none;">${db.hero.email}</a>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div class="skill-icon-wrap">${ICONS.pin}</div>
                        <div>
                            <div style="font-size: 12px; color: var(--text-tertiary);">${t('contact_location_label')}</div>
                            <div style="color: #FFFFFF; font-size: 16px; font-weight: 500;">${db.hero.location} · ${t('contact_remote')}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bento-item" style="grid-column: span 5; justify-content: space-between;">
                <div>
                    <div class="card-icon-box" style="margin-bottom: 24px;">${ICONS.globe}</div>
                    <h3 class="card-title" style="font-size: 24px; margin-bottom: 12px;">${t('contact_channels_title')}</h3>
                    <p class="card-desc" style="margin-bottom: 24px;">${t('contact_channels_body')}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <a href="https://github.com/mrsmf2006" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="justify-content: space-between; padding: 14px 20px;">
                        <span>${t('contact_github')}</span>
                        ${ICONS.arrowUpRight}
                    </a>
                    <a href="mailto:${db.hero.email}" class="btn-primary" style="justify-content: space-between; padding: 14px 20px;">
                        <span>${t('contact_send')}</span>
                        ${ICONS.arrowRight}
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderPath(path) {
    const db = content();
    if (path === '' || path === '/') renderHome(db);
    else if (path === 'experience') renderExperience(db);
    else if (path === 'projects') renderProjects(db);
    else if (path === 'contact') renderContact(db);
    else renderHome(db);
}

function routeFromHash() {
    return window.location.hash.replace(/^#\/?/, '');
}

function boot() {
    const path = routeFromHash();
    updateNav(path);
    renderPath(path);
}

window.addEventListener('hashchange', () => {
    const path = routeFromHash();
    updateNav(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderPath(path);
});

document.addEventListener('langchange', boot);
boot();
