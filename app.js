// --- Core Engine & Hash Router ---

const appRoot = document.getElementById('app-root');

// Simple Markdown to HTML Parser
function parseMarkdown(text) {
    if (!text) return '';
    let html = text.trim();
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold, Links, Quotes
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>');
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Lists
    html = html.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^[0-9]\. (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/<\/ul>\n<ul>/gim, '\n'); // Clean adjacent lists
    
    // Paragraphs (Lines that don't start with a tag)
    html = html.replace(/^(?!<[a-z])(.*$)/gim, '<p>$1</p>');
    
    return html;
}

// Update Active Nav Link
function updateNav(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        // Match exact route for styling
        if (link.getAttribute('href') === `#/${path.split('/')[0]}`) {
            link.classList.add('active');
        }
    });
}

// --- Page Renderers ---

function renderLanding() {
    let html = `
        <section class="hero">
            <h1>${DB.hero.name}</h1>
            <div class="role">${DB.hero.role}</div>
            <p>${DB.hero.intro}</p>
            
            <div class="contact-links">
                <a href="mailto:${DB.hero.email}" class="contact-link">
                    <span>📧</span>
                    <span class="en">${DB.hero.email}</span>
                </a>
                <a href="tel:${DB.hero.phone}" class="contact-link">
                    <span>📱</span>
                    <span class="en">${DB.hero.phone}</span>
                </a>
                <span class="contact-link">
                    <span>📍</span>
                    <span>${DB.hero.location}</span>
                </span>
            </div>
        </section>

        <section>
            <h2 class="section-title">تجربیات کاری برجسته</h2>
            <div class="grid-2">
                ${DB.experience.filter(e => e.current).map(exp => `
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3>${exp.title}</h3>
                                <div class="company">${exp.company}</div>
                            </div>
                            <div class="period">${exp.period}</div>
                        </div>
                        <p>${exp.description}</p>
                        <ul>
                            ${exp.responsibilities.slice(0, 3).map(r => `<li>${r}</li>`).join('')}
                        </ul>
                        <div class="tags">${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">پروژه‌های منتخب</h2>
            <div class="grid-2">
                ${DB.projects.map(p => `
                    <a href="${p.link}" class="card">
                        <div class="card-header">
                            <h3>${p.title}</h3>
                            <div class="period">${p.period}</div>
                        </div>
                        <p>${p.desc}</p>
                        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    </a>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">مهارت‌های کلیدی</h2>
            <div class="skills-grid">
                ${DB.skills.technical.slice(0, 6).map(s => `
                    <div class="skill-item">
                        <span>${s.name}</span>
                        <div class="skill-level">
                            ${[1,2,3,4].map(i => `<span class="skill-dot ${i <= s.level ? 'active' : ''}"></span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    appRoot.innerHTML = html;
}

function renderExperience() {
    let html = `
        <section>
            <h2 class="section-title">تجربیات کاری</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
                ${DB.experience.map(exp => `
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3>${exp.title}</h3>
                                <div class="company">${exp.company}</div>
                            </div>
                            <div class="period">${exp.period}</div>
                        </div>
                        <p>${exp.description}</p>
                        ${exp.responsibilities ? `
                            <ul>
                                ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                            </ul>
                        ` : ''}
                        <div class="tags">${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">آموزش و گواهینامه‌ها</h2>
            <div style="display: flex; flex-direction: column; gap: 16px;">
                ${DB.education.map(edu => `
                    <div class="card" style="padding: 20px;">
                        <h3 style="font-size: 16px; margin-bottom: 8px;">${edu.title}</h3>
                        <div class="company" style="margin-bottom: 8px;">${edu.institution}</div>
                        ${edu.period ? `<div class="period">${edu.period}</div>` : ''}
                        ${edu.desc ? `<p style="margin-top: 12px; margin-bottom: 0;">${edu.desc}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        </section>

        ${DB.achievements.length > 0 ? `
            <section>
                <h2 class="section-title">افتخارات</h2>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${DB.achievements.map(ach => `
                        <div class="card" style="padding: 20px;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <h3 style="font-size: 16px; margin-bottom: 8px;">🏆 ${ach.title}</h3>
                                    <p style="margin: 0;">${ach.desc}</p>
                                </div>
                                <div class="period">${ach.date}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        ` : ''}
    `;
    appRoot.innerHTML = html;
}

function renderProjects() {
    let html = `
        <section>
            <h2 class="section-title">تمام پروژه‌ها</h2>
            <div class="grid-2">
                ${DB.projects.map(p => `
                    <a href="${p.link}" class="card">
                        <div class="card-header">
                            <h3>${p.title}</h3>
                            <div class="period">${p.period}</div>
                        </div>
                        <p>${p.desc}</p>
                        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
    appRoot.innerHTML = html;
}

function renderSkills() {
    let html = `
        <section>
            <h2 class="section-title">مهارت‌های فنی</h2>
            <div class="skills-grid">
                ${DB.skills.technical.map(s => `
                    <div class="skill-item">
                        <span>${s.name}</span>
                        <div class="skill-level">
                            ${[1,2,3,4].map(i => `<span class="skill-dot ${i <= s.level ? 'active' : ''}"></span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">ابزارها و تکنولوژی‌ها</h2>
            <div class="tags" style="margin-top: 16px;">
                ${DB.skills.tools.map(tool => `<span class="tag">${tool}</span>`).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">مهارت‌های نرم</h2>
            <div class="grid-2">
                ${DB.skills.soft.map(skill => `
                    <div class="card" style="padding: 20px;">
                        <h3 style="font-size: 15px; margin: 0;">${skill}</h3>
                    </div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">زبان‌ها</h2>
            <div class="grid-2">
                ${DB.languages.map(lang => `
                    <div class="card" style="padding: 20px;">
                        <h3 style="font-size: 15px; margin-bottom: 8px;">${lang.name}</h3>
                        <p style="margin: 0; font-size: 13px;">${lang.level}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    appRoot.innerHTML = html;
}

// --- Router Logic ---

function router() {
    // Get path from URL hash (remove '#' and leading '/')
    let path = window.location.hash.replace(/^#\/?/, '');
    
    updateNav(path);
    window.scrollTo(0, 0);

    if (path === '' || path === '/') {
        renderLanding();
    } else if (path === 'experience') {
        renderExperience();
    } else if (path === 'projects') {
        renderProjects();
    } else if (path === 'skills') {
        renderSkills();
    } else {
        renderLanding(); // Fallback
    }
}

// Initialize application
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
