const DB = {
    en: {
        hero: {
            name: "Seyed Mohammad Fakhri",
            role: "DevOps Engineer & Technical Support Specialist",
            intro: "I specialize in DevOps, infrastructure management, and product development with experience in workflow design, software tool development, and cloud service support. Passionate about lifelong learning and solving problems of all sizes.",
            location: "Qom, Iran",
            email: "mf0682073@gmail.com"
        },
        companies: [
            { name: "Najm Studio", logo: "/assets/images/companies/najm-studio.png", fallbackLogo: "/assets/images/companies/najm-studio.svg", domain: "Media & Production Studio" },
            { name: "Technoverse", logo: "/assets/images/companies/technoverse.png", fallbackLogo: "/assets/images/companies/technoverse.svg", domain: "Interactive & XR Systems" },
            { name: "Hezartoo", logo: "/assets/images/companies/hezartoo.png", fallbackLogo: "/assets/images/companies/hezartoo.svg", domain: "Creative Lab & Software" },
            { name: "Toyooran Sanat Pouya", logo: "/assets/images/companies/toyooran.png", fallbackLogo: "/assets/images/companies/toyooran.svg", domain: "Industrial Automation & Systems" },
            { name: "Amline", logo: "/assets/images/companies/amline.png", fallbackLogo: "/assets/images/companies/amline.svg", domain: "Digital Real Estate Platform" },
            { name: "Jamshidbar", logo: "/assets/images/companies/jamshidbar.png", fallbackLogo: "/assets/images/companies/jamshidbar.svg", domain: "Logistics & Transport" }
        ],
        experience: [
            {
                title: "DevOps Specialist & Technical Support",
                company: "Amline",
                period: "Apr 2025 - Present",
                current: true,
                icon: "devops",
                description: "Leading DevOps operations, workflow optimization, and infrastructure management for a digital real estate platform.",
                responsibilities: [
                    "Design and improve user workflows",
                    "Develop software tools and address technical needs",
                    "Programming and debugging using AI tools (Cursor, Codex)",
                    "Technical support for servers, VPN, and other services",
                    "Infrastructure support and CI/CD for Amline product"
                ],
                tags: ["DevOps", "Python", "CI/CD", "Docker", "AI Tools", "Infrastructure"]
            },
            {
                title: "Social Media & Website Support",
                company: "Jamshidbar International Logistics Group",
                period: "Dec 2024 - Present",
                current: true,
                icon: "web",
                description: "Managing social media presence and providing IT support for an international logistics company.",
                responsibilities: [
                    "Resolve IT issues for employees",
                    "Social media management and engagement",
                    "Website maintenance and updates"
                ],
                tags: ["IT Support", "Social Media", "Web Management"]
            },
            {
                title: "IT Supervisor",
                company: "Afagh Kahkeshani Javanan Fanavar",
                period: "Sep 2023 - Sep 2024",
                current: false,
                icon: "management",
                description: "Led IT operations and team training for a technology innovation company.",
                responsibilities: [
                    "IT management and support",
                    "Team management and training"
                ],
                tags: ["IT Management", "Team Leadership", "Training"]
            },
            {
                title: "XR Researcher & Developer",
                company: "Afagh Kahkeshani Javanan Fanavar",
                period: "Dec 2022 – Sep 2024",
                current: false,
                icon: "vr",
                description: "Developed virtual and augmented reality content using cutting-edge technologies.",
                responsibilities: [
                    "VR/AR content production with Blender and Unity",
                    "Research and development of innovative products",
                    "Project management and team training"
                ],
                tags: ["Unity", "Blender", "VR", "AR", "XR", "3D Modeling"]
            },
            {
                title: "Network & Systems Intern",
                company: "Toyooran Sanat Pouya",
                period: "Jun 2021 - Sep 2021",
                current: false,
                icon: "network",
                description: "Gained hands-on experience in network operations, automated control systems, and infrastructure maintenance.",
                responsibilities: [
                    "Assisted with industrial control networks and infrastructure setup",
                    "Network troubleshooting and monitoring systems maintenance"
                ],
                tags: ["Networking", "Infrastructure", "Troubleshooting"]
            }
        ],
        projects: [
            {
                title: "Niavaran Palace Virtual Museum",
                period: "Jan 2023 - Oct 2023",
                icon: "vr",
                desc: "Virtual museum showcasing historical artifacts from Niavaran Palace, commissioned for display at a tourism exhibition in February 2023.",
                tags: ["Unity", "VR", "3D Modeling", "Cultural Heritage", "Exhibition"],
                link: "#"
            },
            {
                title: "AI Documentary Production",
                period: "Dec 2024 - Dec 2025",
                icon: "ai",
                desc: "Multi-minute documentary created using Unreal Engine and AI services with photorealistic quality. Involved in production research, development, and problem-solving.",
                tags: ["Unreal Engine", "AI", "Documentary", "Research", "CGI"],
                link: "#"
            },
            {
                title: "Amline Channel Content Production",
                period: "Jan 2026 - May 2026",
                icon: "content",
                desc: "Educational and promotional content creation for Amline's communication channel.",
                tags: ["Content Creation", "Marketing", "Design", "Social Media"],
                link: "https://eitaa.com/Amlinebime/508"
            }
        ],
        capabilities: [
            { name: "Docker & Containers", domain: "Infrastructure & CI/CD", tier: "Production", fill: "95%", icon: "docker" },
            { name: "Linux Server Administration", domain: "Core System Operations", tier: "Core Stack", fill: "92%", icon: "cpu" },
            { name: "Python Automation", domain: "Scripting & Tool Dev", tier: "Production", fill: "88%", icon: "terminal" },
            { name: "CI/CD & Workflows", domain: "Deployment Pipelines", tier: "Core Stack", fill: "90%", icon: "server" },
            { name: "Git & Version Control", domain: "Repository Strategy", tier: "Advanced", fill: "95%", icon: "git" },
            { name: "Network Infrastructure", domain: "VPN, Routing & CCTV", tier: "Operational", fill: "85%", icon: "network" },
            { name: "AI Tool Integration", domain: "Cursor, Codex & Copilots", tier: "Workflow", fill: "96%", icon: "sparkles" },
            { name: "XR & Interactive Systems", domain: "Unity, 3D & Virtual Spaces", tier: "Specialized", fill: "82%", icon: "vr" }
        ],
        education: [
            {
                title: "Comprehensive UX/UI & Product Design Course",
                institution: "Daneshjooyar — Hussein Aslani",
                period: "Jun 2025 – Oct 2025",
                desc: "90-hour specialized course covering UX-UI and product design fundamentals"
            },
            { title: "CompTIA Network+ Certification", institution: "Maktab Khaneh", period: "" },
            { title: "Python for Beginners", institution: "Jadi", period: "" },
            { title: "Git & GitHub Fundamentals", institution: "Jadi", period: "" },
            { title: "Networking for Programmers", institution: "Jadi", period: "" }
        ],
        achievements: [
            {
                title: "1st Place Provincial - Basij Digital Content Festival 2023",
                date: "Dec 2023",
                desc: "Team management and AI animation production process"
            }
        ]
    },
    fa: {
        hero: {
            name: "سید محمد فخری",
            role: "مهندس دواپس و متخصص پشتیبانی فنی",
            intro: "روی دواپس، مدیریت زیرساخت و توسعه محصول کار می‌کنم؛ از طراحی گردش‌کار و ساخت ابزار نرم‌افزاری تا پشتیبانی سرویس‌های ابری. یادگیری پیوسته و حل مسئله، در هر مقیاسی، برایم جدی است.",
            location: "قم، ایران",
            email: "mf0682073@gmail.com"
        },
        companies: [
            { name: "Najm Studio", logo: "/assets/images/companies/najm-studio.png", fallbackLogo: "/assets/images/companies/najm-studio.svg", domain: "استودیو رسانه و تولید" },
            { name: "Technoverse", logo: "/assets/images/companies/technoverse.png", fallbackLogo: "/assets/images/companies/technoverse.svg", domain: "سیستم‌های تعاملی و XR" },
            { name: "Hezartoo", logo: "/assets/images/companies/hezartoo.png", fallbackLogo: "/assets/images/companies/hezartoo.svg", domain: "آزمایشگاه خلاقیت و نرم‌افزار" },
            { name: "Toyooran Sanat Pouya", logo: "/assets/images/companies/toyooran.png", fallbackLogo: "/assets/images/companies/toyooran.svg", domain: "اتوماسیون صنعتی و سیستم‌ها" },
            { name: "Amline", logo: "/assets/images/companies/amline.png", fallbackLogo: "/assets/images/companies/amline.svg", domain: "پلتفرم املاک دیجیتال" },
            { name: "Jamshidbar", logo: "/assets/images/companies/jamshidbar.png", fallbackLogo: "/assets/images/companies/jamshidbar.svg", domain: "لجستیک و حمل‌ونقل" }
        ],
        experience: [
            {
                title: "متخصص دواپس و پشتیبانی فنی",
                company: "اَملاین",
                period: "فروردین ۱۴۰۴ تا اکنون",
                current: true,
                icon: "devops",
                description: "راهبری عملیات دواپس، بهینه‌سازی گردش‌کار و مدیریت زیرساخت یک پلتفرم املاک دیجیتال.",
                responsibilities: [
                    "طراحی و بهبود گردش‌کار کاربران",
                    "ساخت ابزار نرم‌افزاری و پاسخ به نیاز فنی",
                    "برنامه‌نویسی و دیباگ با ابزارهای هوش مصنوعی (Cursor و Codex)",
                    "پشتیبانی فنی سرور، VPN و سرویس‌های دیگر",
                    "پشتیبانی زیرساخت و CI/CD محصول اَملاین"
                ],
                tags: ["دواپس", "Python", "CI/CD", "Docker", "ابزار هوش مصنوعی", "زیرساخت"]
            },
            {
                title: "پشتیبانی شبکه اجتماعی و وب‌سایت",
                company: "گروه لجستیک بین‌المللی جمشیدبار",
                period: "آذر ۱۴۰۳ تا اکنون",
                current: true,
                icon: "web",
                description: "مدیریت حضور در شبکه‌های اجتماعی و پشتیبانی IT یک شرکت لجستیک بین‌المللی.",
                responsibilities: [
                    "رفع مشکلات IT کارکنان",
                    "مدیریت شبکه‌های اجتماعی و تعامل با مخاطب",
                    "نگهداری و به‌روزرسانی وب‌سایت"
                ],
                tags: ["پشتیبانی IT", "شبکه اجتماعی", "مدیریت وب"]
            },
            {
                title: "سرپرست IT",
                company: "افق کهکشانی جوانان فناور",
                period: "شهریور ۱۴۰۲ تا شهریور ۱۴۰۳",
                current: false,
                icon: "management",
                description: "راهبری عملیات IT و آموزش تیم در یک شرکت نوآوری فناوری.",
                responsibilities: [
                    "مدیریت و پشتیبانی IT",
                    "مدیریت تیم و آموزش"
                ],
                tags: ["مدیریت IT", "رهبری تیم", "آموزش"]
            },
            {
                title: "پژوهشگر و توسعه‌دهنده XR",
                company: "افق کهکشانی جوانان فناور",
                period: "آذر ۱۴۰۱ تا شهریور ۱۴۰۳",
                current: false,
                icon: "vr",
                description: "تولید محتوای واقعیت مجازی و افزوده با ابزارهای تولید روز.",
                responsibilities: [
                    "تولید محتوای VR/AR با بلندر و یونیتی",
                    "پژوهش و توسعه محصول‌های تازه",
                    "مدیریت پروژه و آموزش تیم"
                ],
                tags: ["Unity", "Blender", "VR", "AR", "XR", "مدل‌سازی سه‌بعدی"]
            },
            {
                title: "کارآموز شبکه و سیستم‌ها",
                company: "طیوران صنعت پویا",
                period: "خرداد تا شهریور ۱۴۰۰",
                current: false,
                icon: "network",
                description: "کار عملی در عملیات شبکه، سیستم‌های کنترل خودکار و نگهداری زیرساخت.",
                responsibilities: [
                    "کمک به راه‌اندازی شبکه کنترل صنعتی و زیرساخت",
                    "عیب‌یابی شبکه و نگهداری سیستم‌های پایش"
                ],
                tags: ["شبکه", "زیرساخت", "عیب‌یابی"]
            }
        ],
        projects: [
            {
                title: "موزه مجازی کاخ نیاوران",
                period: "دی ۱۴۰۱ تا مهر ۱۴۰۲",
                icon: "vr",
                desc: "موزه مجازی آثار تاریخی کاخ نیاوران که برای نمایش در یک رویداد گردشگری در بهمن ۱۴۰۱ سفارش داده شد.",
                tags: ["Unity", "VR", "مدل‌سازی سه‌بعدی", "میراث فرهنگی", "نمایشگاه"],
                link: "#"
            },
            {
                title: "تولید مستند با هوش مصنوعی",
                period: "آذر ۱۴۰۳ تا آذر ۱۴۰۴",
                icon: "ai",
                desc: "مستند چنددقیقه‌ای با آنریل انجین و سرویس‌های هوش مصنوعی، با کیفیت نزدیک به واقعیت. در پژوهش تولید، توسعه و حل مسئله نقش داشتم.",
                tags: ["Unreal Engine", "هوش مصنوعی", "مستند", "پژوهش", "CGI"],
                link: "#"
            },
            {
                title: "تولید محتوا برای کانال اَملاین",
                period: "دی ۱۴۰۴ تا اردیبهشت ۱۴۰۵",
                icon: "content",
                desc: "ساخت محتوای آموزشی و تبلیغاتی برای کانال ارتباطی اَملاین.",
                tags: ["تولید محتوا", "بازاریابی", "طراحی", "شبکه اجتماعی"],
                link: "https://eitaa.com/Amlinebime/508"
            }
        ],
        capabilities: [
            { name: "داکر و کانتینر", domain: "زیرساخت و CI/CD", tier: "تولید", fill: "95%", icon: "docker" },
            { name: "مدیریت سرور لینوکس", domain: "عملیات سیستم", tier: "هسته", fill: "92%", icon: "cpu" },
            { name: "اتوماسیون پایتون", domain: "اسکریپت و ابزار", tier: "تولید", fill: "88%", icon: "terminal" },
            { name: "گردش‌کار و CI/CD", domain: "پایپ‌لاین استقرار", tier: "هسته", fill: "90%", icon: "server" },
            { name: "گیت و کنترل نسخه", domain: "استراتژی مخزن", tier: "پیشرفته", fill: "95%", icon: "git" },
            { name: "زیرساخت شبکه", domain: "VPN، مسیریابی و دوربین", tier: "عملیاتی", fill: "85%", icon: "network" },
            { name: "ابزارهای هوش مصنوعی", domain: "Cursor، Codex و دستیارها", tier: "گردش‌کار", fill: "96%", icon: "sparkles" },
            { name: "XR و سیستم تعاملی", domain: "یونیتی، سه‌بعدی و فضای مجازی", tier: "تخصصی", fill: "82%", icon: "vr" }
        ],
        education: [
            {
                title: "دوره جامع UX/UI و طراحی محصول",
                institution: "دانشجویار — حسین اصلانی",
                period: "خرداد تا مهر ۱۴۰۴",
                desc: "دوره ۹۰ ساعته مبانی تجربه کاربری، رابط کاربری و طراحی محصول."
            },
            { title: "گواهی CompTIA Network+", institution: "مکتب‌خونه", period: "" },
            { title: "پایتون برای مبتدیان", institution: "جادی", period: "" },
            { title: "مبانی گیت و گیت‌هاب", institution: "جادی", period: "" },
            { title: "شبکه برای برنامه‌نویسان", institution: "جادی", period: "" }
        ],
        achievements: [
            {
                title: "رتبه اول استانی، جشنواره محتوای دیجیتال بسیج ۱۴۰۲",
                date: "آذر ۱۴۰۲",
                desc: "مدیریت تیم و فرایند تولید انیمیشن با هوش مصنوعی."
            }
        ]
    }
};
