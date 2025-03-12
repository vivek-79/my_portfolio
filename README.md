# Portfolio Website

This is a **personal portfolio website** built with **Next.js**, **TypeScript**, and **Tailwind CSS** to showcase projects, skills, education, and contact details.

---

## 🚀 Features

✅ Built with **Next.js** and **TypeScript**  
✅ Modern UI with **Tailwind CSS**  
✅ **Framer Motion** for smooth animations  
✅ **Fully responsive design** for all devices  
✅ Integrated **Contact Form** with **EmailJS**  
✅ **Social media links** for easy networking  
✅ **Project showcase** with live demos & GitHub links  
✅ **Skills section** to highlight expertise  
✅ **Education section** to display academic background  

---

## 🛠 Tech Stack

- **Next.js** – React framework for fast development
- **TypeScript** – Strongly typed JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Smooth animations
- **EmailJS** – Email service for contact form
- **React Icons** – Social media & UI icons

---

## 📌 Sections

1. **Hero Section** – Introduction and tagline  
2. **Projects** – Showcasing key projects with live demos & GitHub links  
3. **Skills** – Displaying technical expertise and tools  
4. **Education** – Academic background and qualifications  
5. **Contact** – Contact form and social media links  

---

## 📥 Installation

Clone the repository and install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

---

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create a new **email service**.
3. Set up an **email template** with placeholders:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
4. Get your **Service ID**, **Template ID**, and **Public Key**.
5. Replace them in `Contact.tsx`:
   ```tsx
   await emailjs.send(
       "your_service_id",
       "your_template_id",
       {
           from_name: formData.name,
           from_email: formData.email,
           message: formData.message,
       },
       "your_public_key"
   );
   ```

---

## 📌 Usage

Simply import and use components as needed in your Next.js pages.

```tsx
import Contact from "@/components/Contact";

export default function Page() {
    return (
        <div>
            <Contact />
        </div>
    );
}
```

---

## 📞 Contact

📧 Email: [vivekroy5667@gmail.com](mailto:vivekroy5667@gmail.com)  
📞 Phone: +91 7970335667  
🔗 [LinkedIn](https://www.linkedin.com/in/vivek-kumar-469384281/)  
🐙 [GitHub](https://github.com/vivek-79)  
#   m y _ p o r t f o l i o  
 