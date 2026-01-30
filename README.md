# VIP Shuttle 24 - Premium Website Redesign

A modern, luxury website redesign for VIP Shuttle 24 chauffeur service in Düsseldorf.

## 🎨 Design Features

- **Modern Luxury Aesthetic**: Dark mode with Deep Charcoal & Obsidian Black
- **Premium Accents**: Champagne Gold & Metallic Silver highlights
- **Typography**: Playfair Display (Serif) for headings, Inter (Sans-Serif) for body
- **Smooth Animations**: Fade-in, slide-up effects throughout
- **Responsive Design**: Mobile-first approach, works on all devices
- **Glass Morphism**: Modern glassmorphism effects on cards
- **Interactive Gallery**: Lightbox with navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Add your images**
   
   Place your high-quality images in the `public` folder with these names:
   - `1.webp` - Hero background (Mercedes S-Class/V-Class at airport/hotel)
   - `2.webp` - About section (Luxury interior)
   - `3.webp` - VIP Service
   - `4.webp` - Limousine Service
   - `5.webp` - Airport Transfer
   - `6.webp` - Bus/Group Transfer
   - `7.webp` - Features background

   **Image Requirements:**
   - Format: WebP (recommended) or JPG/PNG
   - Resolution: Minimum 1920x1080px for hero, 1200x800px for others
   - Quality: High resolution, professional photography
   - Content: Mercedes-Benz vehicles, luxury interiors, professional settings

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
vipshuttle24-redesign/
├── public/              # Static assets (add your images here)
│   ├── 1.webp
│   ├── 2.webp
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles & fonts
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/
│       ├── Header.tsx   # Navigation
│       ├── Hero.tsx     # Hero section
│       ├── About.tsx    # About section
│       ├── Services.tsx # Services section
│       ├── Features.tsx # Features section
│       ├── Gallery.tsx  # Gallery section
│       ├── Contact.tsx  # Contact form
│       └── Footer.tsx   # Footer
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🎨 Color Palette

- **Obsidian Black**: `#0A0A0A` (Primary background)
- **Deep Charcoal**: `#1C1C1C` (Secondary background)
- **Champagne Gold**: `#D4AF37` (Accent color)
- **Metallic Silver**: `#C0C0C0` (Secondary accent)
- **White**: Text and highlights

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  obsidian: {
    DEFAULT: '#0A0A0A',
    // ...
  },
  gold: {
    DEFAULT: '#D4AF37',
    // ...
  },
}
```

### Modifying Content

- Update text content directly in component files
- Edit contact information in `Contact.tsx` and `Footer.tsx`
- Modify navigation items in `Header.tsx`

### Adding Sections

Create new component files in `src/components/` and import them in `src/app/page.tsx`

## 📱 Contact Information

Update these files with your actual contact details:
- `src/components/Header.tsx` - Phone number in navigation
- `src/components/Contact.tsx` - All contact information
- `src/components/Footer.tsx` - Footer contact details

## 🚀 Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## 📄 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Icons** - Icon library
- **Framer Motion** - Animations (ready to use)

## 🌟 Features

- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Fast page loads with Next.js
- ✅ Type-safe with TypeScript
- ✅ Smooth animations
- ✅ Contact form
- ✅ Interactive gallery
- ✅ Social media integration
- ✅ Mobile menu
- ✅ Sticky header

## 📞 Support

For questions or support, contact:
- Email: info@vipshuttle24.de
- Phone: +49 177 2472408

## 📝 License

© 2024 VIP Shuttle 24. All rights reserved.
