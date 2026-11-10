(function () {
    const page = document.getElementById('page');
    if (!page || !window.SHOWCASE) return;

    function render() {
        const lang = SiteLang.current();
        const copy = SHOWCASE[lang] || SHOWCASE.en;
        document.title = `${copy.title} — ${SiteLang.t('brand_name')}`;
        page.innerHTML = `
            <p class="standalone-kicker">${copy.kicker}</p>
            <h1 class="standalone-title">${copy.title}</h1>
            <p class="standalone-lead">${copy.lead}</p>
            <div class="work-list">
                ${copy.items.map((item) => `
                    <article class="work-card">
                        <div class="work-year">${item.year}</div>
                        <div>
                            <h2 class="work-title">${item.title}</h2>
                            <p class="work-summary">${item.summary}</p>
                            <p class="work-body">${item.body}</p>
                            <div class="tag-cluster">
                                ${item.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }

    document.addEventListener('langchange', render);
    render();
})();
