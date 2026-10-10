# Shivay India Securitas Services (SISS) – Official Web Portal

> **"Professional Security for a Safer Tomorrow"**  
> Modern, production-ready website with rich glassmorphism aesthetics, responsive mobile layout, WhatsApp integration, and customizable configuration.

---

## 🌟 Features Overview

- **Design System:** Deep Dark Navy (`#07162b` / `#0a1f3d`), Royal Blue (`#1565d8`), Silver, and Gold accent (`#d4af37`), with translucent glassmorphic cards and dynamic gradient glow blobs.
- **Loading Animation:** Full-screen navy loader with company shield badge, rotating glowing ring, and progress bar (2.5s smooth transition).
- **Welcome Pop-Up:** Interactive glass modal appearing after loading with direct actions to book a service or chat on WhatsApp (session-based).
- **Hero Slider:** Full-width responsive carousel with auto-play, pause on hover, touch swipe support, and glass text cards.
- **Glass Trust Bar:** Highlighted service metrics (Trained Staff, Reliable Service, 24/7 Support, Client Satisfaction).
- **Interactive Sections:**
  1. **About Us:** Company vision, mission, core values, and animated stat counters.
  2. **Our Services:** 19 categorized services across Security, Manpower, and Facility management with category filter tabs and pre-fill "Book Now" actions.
  3. **Industries We Serve:** Sector-specific solutions for 10 industries (societies, corporate, factories, hospitals, etc.).
  4. **Process Timeline:** 6-step guided methodology (Requirement to Supervision).
  5. **Training & Quality:** 8 core training modules (verification, grooming, fire safety, emergency response, etc.).
  6. **Why Choose SISS:** Key organizational differentiators and client benefits.
  7. **Service Booking Form:** Real-time validation, honeypot anti-spam protection, Indian phone validation, and instant formatted WhatsApp inquiry generation.
  8. **Join Us / Careers Form:** Comprehensive job application with conditional fields for ex-servicemen rank/service and gunman licenses.
  9. **Client Testimonials:** Glass review carousel with ratings.
  10. **FAQ Accordion:** Expandable answers to common security and manpower queries.
  11. **Contact & Location:** Contact cards with `tel:`, email, working hours, and embedded Google Maps for Gaur City Center, Greater Noida West.
  12. **Footer:** Comprehensive footer with company summary, quick links, services directory, and copyright.
- **Floating Controls:** Floating WhatsApp CTA with breathing pulse ring, floating call button on mobile, back-to-top button, and sticky mobile bottom bar.

---

## ⚙️ Configuration & Customization

All primary company details, phone numbers, email addresses, stats, and links are centralized in a single configuration file:

📁 **`src/config/index.ts`**

### 1. How to Update Phone Numbers & WhatsApp
Open `src/config/index.ts` and modify lines 16–19:
```typescript
phone: '+91 95284 74547',        // Displayed phone number
phoneRaw: '919528474547',        // Used for tel: links (digits only)
whatsapp: '919528474547',        // WhatsApp recipient number without '+' or spaces
```

### 2. How to Update Email and Address
In `src/config/index.ts`:
```typescript
email: 'info@shivaysecuritas.com',
address: 'SF 214A, 2nd Floor, Gaur City Center, Sector 4, Greater Noida West, Uttar Pradesh',
workingHours: 'Mon – Sat: 9:00 AM – 7:00 PM | Sun: By Appointment',
```

### 3. How to Update Stats (Animated Counters)
In `src/config/index.ts`:
```typescript
stats: [
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 2000, suffix: '+', label: 'Trained Staff' },
  { value: 35, suffix: '+', label: 'Cities Served' },
  { value: 5, suffix: '+', label: 'Years of Experience' },
],
```

### 4. How to Update Images & Logo
All visual assets are located in the `public/assets/` directory:
- `public/assets/logo.png` – Shield badge logo (used across navbar, loader, favicon, footer).
- `public/assets/slide1.jpg` – Hero Slide 1 (Security guards).
- `public/assets/slide2.jpg` – Hero Slide 2 (Manpower & facility staff).
- `public/assets/slide3.jpg` – Hero Slide 3 (Ex-servicemen & armed security).

To replace an image, simply overwrite the corresponding file in `public/assets/`.

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation
```bash
# Navigate to the website directory
cd siss-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📦 Deployment Options

### Option A: Vercel (Recommended for Next.js)
1. Push your repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New..."** > **"Project"** and import your repository.
4. Set Framework Preset to **Next.js**.
5. Click **Deploy**. Vercel will automatically build and assign a global CDN domain.

### Option B: Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish directory: `.next`
4. Install `@netlify/plugin-nextjs` if not auto-detected.
5. Click **Deploy Site**.

### Option C: Self-Hosted Node.js Server / VPS
```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```
Use PM2 or Docker for process management behind Nginx / Caddy reverse proxy.

---

## 🔒 Security & Performance Features
- **Anti-Spam:** Honeypot field included in both booking and job application forms.
- **Sanitization:** Input sanitization against script injection.
- **Strict Validation:** Indian 10-digit mobile number validation and age constraints.
- **Accessibility:** Semantic HTML tags, aria-expanded accordion, modal focus traps, and full keyboard navigation.
- **Motion Preferences:** Respects `prefers-reduced-motion` for accessibility.
