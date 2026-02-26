# NetFroot - Modern Web, SEO & AI Solutions

A modern, minimalistic web application for NetFroot, showcasing website creation, SEO optimization, digital marketing, lead generation, and AI automation services.

## 🚀 Features

- **Modern Stack**: React + Vite + TailwindCSS
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Multiple Pages**:
  - Home (Hero, Features, Stats)
  - Services (Detailed service offerings)
  - Portfolio (Project showcase with filtering)
  - Pricing (Package comparison)
  - Contact (Form with Firebase integration points)
  - Blog (SEO-ready blog structure)
- **AI-Ready**: Placeholders for AI-generated images and videos
- **SEO Optimized**: Meta tags, semantic HTML, proper structure
- **Smooth Animations**: Fade, slide, and scale effects
- **Clean Code**: Well-organized components, reusable utilities

## 🎨 Design

- **Style**: Young, modern, minimalistic
- **Colors**: Electric blue (#00D9FF) primary, deep navy secondary, purple accent
- **Typography**: Inter for body, Poppins for headings
- **Components**: Rounded cards, soft shadows, smooth transitions
- **Animations**: Tasteful fade-in and slide effects

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

The app will open at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 🗂️ Project Structure

```
netfroot/
├── public/              # Static assets (future images/videos)
├── src/
│   ├── components/
│   │   └── layout/     # Header, Footer
│   ├── pages/          # All page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Blog.jsx
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles + Tailwind
├── index.html          # HTML template with SEO meta
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json
```

## 🔧 Configuration

### Tailwind CSS
Custom colors, animations, and utilities are configured in `tailwind.config.js`:
- Primary: `#00D9FF` (Electric Blue)
- Secondary: `#0A0E27` (Deep Navy)
- Accent: `#7C3AED` (Purple)
- Custom animations: fade-in, slide-up, slide-in

### Routing
React Router setup in `App.jsx` with routes:
- `/` - Home
- `/services` - Services
- `/portfolio` - Portfolio
- `/pricing` - Pricing
- `/contact` - Contact
- `/blog` - Blog

## 🎯 TODO: Future Integrations

### Firebase Setup
The contact form has placeholder comments for Firebase integration:

1. Create a Firebase project at https://console.firebase.google.com
2. Install Firebase SDK:
```bash
npm install firebase
```

3. Create `src/firebase.js`:
```javascript
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // Your config here
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
```

4. Uncomment the Firebase code in `Contact.jsx`

### AI-Generated Media
Replace placeholder text with actual AI-generated images:
- Use services like DALL-E, Midjourney, or Stable Diffusion
- Generate images based on the placeholder descriptions
- Save to `/public/assets/images/`
- Update image src in components

### AI Chatbot
Add an AI chatbot widget:
- Integrate with ChatGPT API, Dialogflow, or similar
- Uncomment the chatbot button in `Contact.jsx`
- Add chat interface component

### Blog CMS
Connect to a headless CMS:
- Options: Contentful, Sanity, Strapi, WordPress API
- Create dynamic blog post pages
- Add markdown rendering
- Implement search and filtering

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
# Upload 'dist' folder to your hosting provider
```

## 🎨 AI Image Placeholders Used

The following AI-generated image descriptions are used throughout:
1. "Minimalistic flat-lay of modern web design tools, analytics dashboards, and AI workflow diagrams"
2. "Abstract neon-blue AI circuit pattern representing automation and machine intelligence"
3. "Creative team collaborating in a bright digital workspace, soft-focus, futuristic aesthetic"
4. "Clean UI mockups of websites, SEO dashboards, and marketing funnels"
5. "3D holographic-style interface showing lead generation and automation flows"

## 📹 AI Video Placeholders

Video placeholders for future integration:
1. "10-second motion graphic of AI nodes connecting in a neon-blue network"
2. "Short clip of website UI elements assembling dynamically in a futuristic animation"
3. "Abstract digital marketing dashboard animation with glowing data streams"
4. "Lead generation funnel visualized as flowing particles moving through stages"

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3
- **Routing**: React Router 6
- **Fonts**: Google Fonts (Inter, Poppins)

## 📄 License

© 2026 NetFroot. All rights reserved.

## 🤝 Support

For questions or support, contact: hello@netfroot.com

---

**Built with ❤️ by NetFroot Team**
