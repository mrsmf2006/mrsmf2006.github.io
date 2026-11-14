/* Locale: English by default, Persian on request. Shared by the landing page and /vr /ai /blog. */
(function () {
    const KEY = 'site_lang';

    const dict = {
        en: {
            meta_title: 'Seyed Mohammad Fakhri',
            meta_description: 'I help businesses grow with AI agents, working across product, design, and infrastructure.',
            brand_name: 'Seyed Mohammad Fakhri',
            lang_label: 'Language',
            nav_overview: 'Overview',
            nav_experience: 'Experience',
            nav_projects: 'Projects',
            nav_contact: 'Get in Touch',
            aria_menu: 'Toggle navigation',
            aria_email: 'Email',
            aria_github: 'GitHub',
            aria_location: 'Location',
            footer_blurb: 'I help businesses grow with AI agents, working across the fields a product actually needs.',
            footer_nav: 'Navigation',
            footer_connect: 'Connect',
            footer_status: 'Status',
            footer_email: 'Direct Email',
            footer_github: 'GitHub Profile',
            footer_inquiries: 'Work Inquiries',
            footer_place: 'Qom, Iran',
            footer_available: 'Available for Remote Work',
            footer_tz: 'Timezone: UTC+3:30',
            footer_copy: '© 2026 Seyed Mohammad Fakhri. Engineered with precision and care.',
            footer_crafted: 'Crafted in a bento layout',
            hero_status: 'Available for product and infrastructure work',
            hero_projects: 'Explore Projects',
            hero_contact: 'Get in Touch',
            companies_kicker: 'Collaborations & Engagements',
            companies_sub: 'Selected organizations, studios, and production enterprises',
            metric_roles: 'Professional engineering roles',
            metric_systems: 'Delivered systems and production deployments',
            system_kicker: 'Services',
            system_title: 'I Help Businesses Grow with AI Agents',
            system_core: 'Your problem',
            system_note: 'I work where these meet, not deep inside a single specialty.',
            system_focus_business: 'The reason it should exist.',
            system_focus_cyber: 'What must not break.',
            system_focus_creativity: 'The move that is not obvious.',
            system_focus_design: 'How a person actually meets it.',
            system_focus_product: 'What is worth making.',
            projects_kicker: 'Featured Deployments',
            projects_title: 'Selected Projects',
            projects_sub: 'Real-world technical projects spanning infrastructure, automated workflows, and spatial computing.',
            skills_kicker: 'Competency Architecture',
            skills_title: 'Technical Capabilities',
            skills_sub: 'Core engineering stack, system utilities, and production tooling.',
            exp_kicker: 'Career Architecture',
            exp_title: 'Professional Experience',
            exp_sub: 'A practical record in DevOps, infrastructure, and technical support.',
            exp_active: 'Active Role',
            edu_kicker: 'Certifications & Education',
            edu_title: 'Credentials & Training',
            edu_sub: 'Formal study and continuous professional education.',
            awards_kicker: 'Distinctions',
            awards_title: 'Honors & Awards',
            work_kicker: 'Engineering Showcase',
            work_title: 'Featured Work',
            work_sub: 'Production deployments, automation projects, and digital work.',
            work_link: 'Inspect Release',
            contact_kicker: 'Communications',
            contact_title: 'Initiate Contact',
            contact_sub: 'Open to workflow consulting, product work, and infrastructure projects.',
            contact_direct_title: 'Direct Inquiries',
            contact_direct_body: 'Email is the direct line. I am based in Qom, Iran (UTC+3:30) and available for remote collaboration.',
            contact_email_label: 'Direct Email',
            contact_location_label: 'Location',
            contact_remote: 'Remote ready',
            contact_channels_title: 'Channels',
            contact_channels_body: 'Code, commits, and the public profile live on GitHub.',
            contact_github: 'GitHub Profile',
            contact_send: 'Send Message',
            blog_meta_title: 'Notes',
            blog_brand: 'Notes',
            blog_kicker: 'Writing',
            blog_title: 'Technical notes',
            blog_lead: 'Essays on DevOps, tools, and the systems behind the work. Each note is a Markdown file.',
            blog_read: 'Read note',
            blog_back: 'All notes',
            blog_missing_title: 'Note not found',
            blog_missing_body: 'This note is not on the shelf.',
            blog_loading: 'Loading notes…',
            blog_empty: 'No notes published yet.',
            blog_error: 'The notes could not be loaded.',
            vr_meta_title: 'VR work',
            vr_brand: 'VR',
            ai_meta_title: 'AI work',
            ai_brand: 'AI'
        },
        fa: {
            meta_title: 'سید محمد فخری',
            meta_description: 'به کسب‌وکارها کمک می‌کنم با ایجنت‌های هوش مصنوعی رشد کنند؛ از محصول و طراحی تا زیرساخت.',
            brand_name: 'سید محمد فخری',
            lang_label: 'زبان',
            nav_overview: 'نمای کلی',
            nav_experience: 'تجربه',
            nav_projects: 'پروژه‌ها',
            nav_contact: 'تماس',
            aria_menu: 'باز و بسته کردن منو',
            aria_email: 'ایمیل',
            aria_github: 'گیت‌هاب',
            aria_location: 'موقعیت',
            footer_blurb: 'به کسب‌وکارها کمک می‌کنم با ایجنت‌های هوش مصنوعی رشد کنند، روی همان حوزه‌هایی که محصول واقعاً لازم دارد.',
            footer_nav: 'ناوبری',
            footer_connect: 'ارتباط',
            footer_status: 'وضعیت',
            footer_email: 'ایمیل مستقیم',
            footer_github: 'پروفایل گیت‌هاب',
            footer_inquiries: 'درخواست همکاری',
            footer_place: 'قم، ایران',
            footer_available: 'آماده همکاری ریموت',
            footer_tz: 'منطقه زمانی: UTC+۳:۳۰',
            footer_copy: '© ۲۰۲۶ سید محمد فخری. با دقت مهندسی شده.',
            footer_crafted: 'چیدمان بنتو',
            hero_status: 'آماده همکاری روی محصول و زیرساخت',
            hero_projects: 'دیدن پروژه‌ها',
            hero_contact: 'تماس',
            companies_kicker: 'همکاری‌ها',
            companies_sub: 'سازمان‌ها، استودیوها و مجموعه‌هایی که با آن‌ها کار کرده‌ام',
            metric_roles: 'نقش حرفه‌ای و مهندسی',
            metric_systems: 'سامانه و استقرار تحویل‌شده',
            system_kicker: 'خدمات',
            system_title: 'به کسب‌وکارها کمک می‌کنم با ایجنت‌های هوش مصنوعی رشد کنند',
            system_core: 'مسئله شما',
            system_note: 'روی تلاقی این‌ها کار می‌کنم، نه در عمق یک تخصص.',
            system_focus_business: 'دلیلی که باید وجود داشته باشد.',
            system_focus_cyber: 'چیزی که نباید بشکند.',
            system_focus_creativity: 'حرکتی که بدیهی نیست.',
            system_focus_design: 'نحوه برخورد آدم با آن.',
            system_focus_product: 'آنچه ساختنش می‌ارزد.',
            projects_kicker: 'استقرارهای شاخص',
            projects_title: 'پروژه‌های منتخب',
            projects_sub: 'پروژه‌های واقعی در زیرساخت، گردش‌کار خودکار و رایانش فضایی.',
            skills_kicker: 'توانمندی‌ها',
            skills_title: 'مهارت‌های فنی',
            skills_sub: 'هسته مهندسی، ابزار سیستم و ابزار تولید.',
            exp_kicker: 'مسیر حرفه‌ای',
            exp_title: 'تجربه کاری',
            exp_sub: 'سابقه عملی در دواپس، زیرساخت و پشتیبانی فنی.',
            exp_active: 'نقش فعال',
            edu_kicker: 'آموزش و گواهی',
            edu_title: 'تحصیلات و دوره‌ها',
            edu_sub: 'آموزش رسمی و یادگیری مستمر.',
            awards_kicker: 'افتخارات',
            awards_title: 'جوایز',
            work_kicker: 'ویترین کار',
            work_title: 'کارهای شاخص',
            work_sub: 'استقرارهای تولیدی، پروژه‌های اتوماسیون و کارهای دیجیتال.',
            work_link: 'دیدن خروجی',
            contact_kicker: 'ارتباط',
            contact_title: 'شروع گفتگو',
            contact_sub: 'برای مشاوره گردش‌کار، کار محصول و پروژه‌های زیرساخت در دسترسم.',
            contact_direct_title: 'ارتباط مستقیم',
            contact_direct_body: 'ایمیل مستقیم‌ترین راه است. در قم (UTC+۳:۳۰) هستم و برای همکاری ریموت آماده‌ام.',
            contact_email_label: 'ایمیل',
            contact_location_label: 'موقعیت',
            contact_remote: 'آماده ریموت',
            contact_channels_title: 'کانال‌ها',
            contact_channels_body: 'کد، کامیت‌ها و پروفایل عمومی روی گیت‌هاب است.',
            contact_github: 'پروفایل گیت‌هاب',
            contact_send: 'فرستادن پیام',
            blog_meta_title: 'یادداشت‌ها',
            blog_brand: 'یادداشت‌ها',
            blog_kicker: 'نوشته‌ها',
            blog_title: 'یادداشت‌های فنی',
            blog_lead: 'یادداشت‌هایی درباره دواپس، ابزار و سیستم پشت کارها. هر یادداشت یک فایل مارک‌داون است.',
            blog_read: 'خواندن یادداشت',
            blog_back: 'همه یادداشت‌ها',
            blog_missing_title: 'یادداشت پیدا نشد',
            blog_missing_body: 'این یادداشت روی قفسه نیست.',
            blog_loading: 'در حال بارگذاری یادداشت‌ها…',
            blog_empty: 'هنوز یادداشتی منتشر نشده.',
            blog_error: 'یادداشت‌ها بارگذاری نشدند.',
            vr_meta_title: 'نمونه‌کار واقعیت مجازی',
            vr_brand: 'واقعیت مجازی',
            ai_meta_title: 'نمونه‌کار هوش مصنوعی',
            ai_brand: 'هوش مصنوعی'
        }
    };

    function current() {
        try {
            return localStorage.getItem(KEY) === 'fa' ? 'fa' : 'en';
        } catch (err) {
            return 'en';
        }
    }

    function t(key) {
        const lang = current();
        const table = dict[lang] || dict.en;
        if (table[key] != null) return table[key];
        if (dict.en[key] != null) return dict.en[key];
        return key;
    }

    function digits(value) {
        const text = String(value);
        if (current() !== 'fa') return text;
        const map = '۰۱۲۳۴۵۶۷۸۹';
        return text.replace(/\d/g, (d) => map[d]);
    }

    function apply() {
        const lang = current();
        document.documentElement.lang = lang === 'fa' ? 'fa' : 'en';
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.dataset.lang = lang;

        const titleKey = document.body && document.body.dataset.titleKey;
        if (titleKey) document.title = t(titleKey);

        const desc = t('meta_description');
        const description = document.querySelector('meta[name="description"]');
        if (description && document.body && document.body.dataset.i18nMeta === 'home') {
            description.setAttribute('content', desc);
        }
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogTitle && titleKey) ogTitle.setAttribute('content', t(titleKey));
        if (ogDesc && document.body && document.body.dataset.i18nMeta === 'home') {
            ogDesc.setAttribute('content', desc);
        }
        if (ogLocale) ogLocale.setAttribute('content', lang === 'fa' ? 'fa_IR' : 'en_US');

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.textContent = t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
        });
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            const active = btn.getAttribute('data-set-lang') === lang;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function set(lang) {
        const next = lang === 'fa' ? 'fa' : 'en';
        try {
            localStorage.setItem(KEY, next);
        } catch (err) {
            /* storage unavailable; the in-memory choice still applies for this call */
        }
        apply();
        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } }));
    }

    document.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-set-lang]');
        if (!btn) return;
        event.preventDefault();
        set(btn.getAttribute('data-set-lang'));
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }

    window.SiteLang = { current, t, digits, apply, set };
})();
