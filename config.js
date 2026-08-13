const DB = {
    hero: {
        name: "سید محمد فخری",
        nameEn: "Seyed Mohammad Fakhri",
        role: "کارشناس DevOps و پشتیبان فنی محصول",
        intro: "متخصص در زمینه DevOps، زیرساخت فنی و توسعه محصول با تجربه در طراحی فلوی کاربری، توسعه ابزارهای نرم‌افزاری و پشتیبانی سرویس‌های ابری. علاقه‌مند به یادگیری مادام‌العمر و حل مسائل ریز و درشت.",
        location: "قم، ایران",
        email: "mf0682073@gmail.com",
        phone: "09035095990",
        birthDate: "۱۳۸۴/۱۰/۳۰"
    },

    experience: [
        {
            title: "کارشناس DevOps و پشتیبان فنی محصول",
            company: "املاین",
            period: "فروردین ۱۴۰۵ - اکنون",
            current: true,
            description: "مسئول طراحی و بهبود فلوی کاربری، توسعه ابزارهای نرم‌افزاری و مدیریت زیرساخت محصول",
            responsibilities: [
                "طراحی و بهبود فلوی کاربری",
                "توسعه ابزارهای جانبی نرم‌افزار و رفع نیازها",
                "برنامه‌نویسی و دیباگ با کمک ابزارهای هوش مصنوعی Cursor و Codex",
                "پشتیبانی فنی سرور، VPN و سایر سرویس‌ها",
                "پشتیبانی زیرساخت و CI/CD محصول املاین"
            ],
            tags: ["DevOps", "Python", "CI/CD", "Docker", "AI Tools"]
        },
        {
            title: "فضای مجازی و پشتیبان سایت",
            company: "گروه لجستیک بین‌المللی جمشیدبار",
            period: "آذر ۱۴۰۳ - اکنون",
            current: true,
            description: "مدیریت شبکه‌های اجتماعی، پشتیبانی سایت و حل مسائل IT",
            responsibilities: [
                "حل مسائل مربوط به آی‌تی کارمندان",
                "فعالیت در شبکه‌های اجتماعی",
                "مدیریت سایت"
            ],
            tags: ["IT Support", "Social Media", "Web Management"]
        },
        {
            title: "سرپرست آی‌تی",
            company: "افق کهکشانی جوانان فناور",
            period: "شهریور ۱۴۰۲ - شهریور ۱۴۰۳",
            current: false,
            description: "مدیریت واحد IT و تربیت نیرو",
            responsibilities: [
                "مدیریت و پشتیبانی IT",
                "مدیریت واحد و تربیت نیرو"
            ],
            tags: ["IT Management", "Team Leadership"]
        },
        {
            title: "محقق و توسعه‌دهنده XR",
            company: "افق کهکشانی جوانان فناور",
            period: "آذر ۱۴۰۱ - شهریور ۱۴۰۳",
            current: false,
            description: "تولید محتوای واقعیت مجازی و واقعیت افزوده",
            responsibilities: [
                "تولید محتوای واقعیت مجازی و واقعیت افزوده با Blender و Unity",
                "تحقیق و توسعه ایده‌ها و محصولات کارآمد برای بازآفرینی و استفاده عمومی",
                "مدیریت پروژه و آموزش نیروها برای توسعه محصول"
            ],
            tags: ["Unity", "Blender", "VR", "AR", "XR"]
        },
        {
            title: "کارآموز شبکه",
            company: "دیدافزار تمیم",
            period: "خرداد ۱۴۰۰ - شهریور ۱۴۰۰",
            current: false,
            description: "کمک در پروژه‌های شبکه و دوربین مداربسته",
            responsibilities: [
                "کمک در انجام پروژه‌های مختلف شرکت",
                "رفع اشکال‌های شبکه، دوربین‌های مداربسته"
            ],
            tags: ["Networking", "CCTV"]
        }
    ],

    projects: [
        {
            title: "موزه واقعیت مجازی کاخ نیاوران",
            period: "دی ۱۴۰۱ - مهر ۱۴۰۲",
            desc: "موزه مجازی اشیاء تاریخی کاخ نیاوران به سفارش این مجموعه و اجرا در نمایشگاه گردشگری در بهمن ۱۴۰۱",
            tags: ["Unity", "VR", "3D Modeling", "Cultural Heritage"],
            link: "#"
        },
        {
            title: "مستند هوش مصنوعی",
            period: "آذر ۱۴۰۳ - آذر ۱۴۰۴",
            desc: "تولید مستند چند دقیقه‌ای با استفاده از موتور آنریل و سرویس‌های هوش مصنوعی با کیفیت واقع‌گرایانه. فعالیت در فرایند تولید، تحقیق و توسعه و حل مسائل پروژه",
            tags: ["Unreal Engine", "AI", "Documentary", "Research"],
            link: "#"
        },
        {
            title: "تولید محتوای کانال املاین",
            period: "دی ۱۴۰۴ - اردیبهشت ۱۴۰۵",
            desc: "تولید محتوای آموزشی و تبلیغاتی برای کانال املاین",
            tags: ["Content Creation", "Marketing", "Design"],
            link: "https://eitaa.com/Amlinebime/508"
        }
    ],

    skills: {
        technical: [
            { name: "Python", level: 3 },
            { name: "Linux", level: 3 },
            { name: "Docker", level: 3 },
            { name: "Git", level: 4 },
            { name: "Project Management", level: 4 },
            { name: "Troubleshooting", level: 4 },
            { name: "CompTIA Network+", level: 3 },
            { name: "Agile", level: 4 }
        ],
        tools: [
            "Cursor", "Codex", "Unity", "Blender", "Unreal Engine"
        ],
        soft: [
            "برنامه‌نویسی هوش مصنوعی",
            "مدیریت تیم و فرایند تولید",
            "طراحی UX/UI",
            "حل مسئله"
        ]
    },

    education: [
        {
            title: "دوره جامع UX/UI و طراحی محصول",
            institution: "دانشجویار - حسین اصلانی",
            period: "خرداد ۱۴۰۴ - مهر ۱۴۰۴",
            desc: "دوره ۹۰ ساعته تخصصی UX-UI و آشنایی با طراحی محصول"
        },
        {
            title: "دوره نتورک پلاس (CompTIA Network+)",
            institution: "مکتب خونه",
            period: ""
        },
        {
            title: "دوره پایتون مبتدی",
            institution: "جادی",
            period: ""
        },
        {
            title: "آشنایی با گیت و گیت هاب",
            institution: "جادی",
            period: ""
        },
        {
            title: "شبکه برای برنامه‌نویسان",
            institution: "جادی",
            period: ""
        }
    ],

    achievements: [
        {
            title: "رتبه اول استانی جشنواره محتوای دیجیتال بسیج ۱۴۰۲",
            date: "آذر ۱۴۰۲",
            desc: "مدیریت تیم و فرایند تولید انیمیشن با هوش مصنوعی"
        }
    ],

    languages: [
        { name: "فارسی", level: "زبان مادری" },
        { name: "انگلیسی", level: "متوسط" }
    ]
};
