# 🚀 QUICK START GUIDE

Follow these steps to get your VIP Shuttle 24 website running:

## Step 1: Extract the ZIP File

Extract `vipshuttle24-redesign.zip` to your desired location.

## Step 2: Add Your Images

1. Navigate to the `public` folder
2. Add 7 images named exactly as:
   - `1.webp` (Hero - Main background)
   - `2.webp` (About section)
   - `3.webp` (VIP Service)
   - `4.webp` (Limousine Service)
   - `5.webp` (Airport Transfer)
   - `6.webp` (Bus Transfer)
   - `7.webp` (Features background)

See `public/IMAGE_INSTRUCTIONS.md` for detailed image requirements.

## Step 3: Install Dependencies

Open terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all required packages (may take 2-3 minutes).

## Step 4: Start Development Server

Run:

```bash
npm run dev
```

The website will be available at: http://localhost:3000

## Step 5: Customize Content (Optional)

### Update Contact Information

Edit these files:
- `src/components/Contact.tsx` - Contact form and details
- `src/components/Footer.tsx` - Footer contact info
- `src/components/Header.tsx` - Phone number in navigation

### Modify Text Content

All text can be edited directly in the component files located in `src/components/`.

## 🎨 Design Customization

### Change Colors

Edit `tailwind.config.ts` to modify the luxury color palette.

### Modify Fonts

The website uses:
- **Playfair Display** (Headlines) 
- **Inter** (Body text)

To change fonts, edit `src/app/globals.css`.

## 🔥 Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## 📦 Deployment Options

### Vercel (Recommended - Free)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy (automatic)

### Netlify
1. Drag & drop the `.next` folder
2. Or connect GitHub repository

### Other Hosting
Build static export:
```bash
npm run build
```
Upload the `.next` folder contents to your hosting.

## 🆘 Troubleshooting

### "Module not found" errors
Run: `npm install` again

### Images not loading
- Check image filenames match exactly (1.webp, 2.webp, etc.)
- Ensure images are in the `public` folder
- Try refreshing the page (Ctrl+F5)

### Port 3000 already in use
Run: `npm run dev -- -p 3001` (uses port 3001 instead)

## 📞 Need Help?

Contact: info@vipshuttle24.de

---

**Enjoy your new luxury website! 🌟**
