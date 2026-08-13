# سید محمد فخری | Seyed Mohammad Fakhri

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-blue)](https://mrsmf.github.io)
[![Email](https://img.shields.io/badge/Email-mf0682073@gmail.com-red)](mailto:mf0682073@gmail.com)

## 🚀 درباره این پروژه | About

سایت شخصی و نمونه‌کار (Portfolio) من - یک وب‌اپلیکیشن تک‌صفحه‌ای (SPA) مینیمال که با JavaScript خالص نوشته شده است.

My personal portfolio website - A minimal single-page application built with pure JavaScript.

## ✨ ویژگی‌ها | Features

- ⚡ بدون فریمورک - Pure Vanilla JavaScript
- 🎨 طراحی مدرن و تیره (Dark Theme)
- 📱 کاملاً ریسپانسیو
- 🌐 پشتیبانی از RTL برای فارسی
- 🔄 مسیریابی مبتنی بر Hash
- 🎯 عملکرد بالا و سبک

## 🛠️ تکنولوژی‌ها | Tech Stack

- HTML5
- CSS3 (Custom Properties)
- Vanilla JavaScript
- Google Fonts (Vazirmatn + Geist)

## 📂 ساختار پروژه | Structure

```
.
├── index.html      # ساختار HTML و استایل‌ها
├── app.js          # منطق روتینگ و رندر صفحات
├── config.js       # داده‌های سایت (پروفایل، پروژه‌ها، مهارت‌ها)
└── README.md       # مستندات
```

## 🎯 بخش‌های سایت | Sections

1. **درباره من** - معرفی، تجربیات برجسته و اطلاعات تماس
2. **تجربیات** - سوابق کاری کامل و دوره‌های آموزشی
3. **پروژه‌ها** - نمونه‌کارهای انجام‌شده
4. **مهارت‌ها** - مهارت‌های فنی و نرم

## 🚀 نحوه اجرا | Running Locally

```bash
# روش 1: با Python
python -m http.server 8000

# روش 2: با Node.js
npx http-server

# روش 3: با Live Server در VS Code
# فقط فایل index.html را با Live Server باز کنید
```

سپس به `http://localhost:8000` بروید.

## 📝 نحوه سفارشی‌سازی | Customization

برای سفارشی‌سازی محتوا، فایل `config.js` را ویرایش کنید:

```javascript
const DB = {
    hero: { /* اطلاعات شخصی */ },
    experience: [ /* تجربیات کاری */ ],
    projects: [ /* پروژه‌ها */ ],
    skills: { /* مهارت‌ها */ }
};
```

## 🎨 سفارشی‌سازی طراحی | Design Customization

متغیرهای CSS را در فایل `index.html` در بخش `:root` تغییر دهید:

```css
:root {
    --bg-main: #0A0E27;
    --accent: #3B82F6;
    /* ... */
}
```

## 📄 مجوز | License

این پروژه تحت مجوز MIT منتشر شده است.

## 📧 تماس | Contact

- ایمیل | Email: mf0682073@gmail.com
- تلفن | Phone: 09035095990
- محل سکونت | Location: قم، ایران

---

💙 ساخته شده با علاقه و کنجکاوی | Made with curiosity
