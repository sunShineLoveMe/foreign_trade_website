# Foreign Trade Windows & Doors Website

A modern, responsive website for an Australian windows and doors manufacturer built with React, Tailwind CSS, and internationalization support.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd foreign_trade_website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
foreign_trade_website/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Responsive navigation
│   ├── pages/
│   │   ├── HomePage.jsx        # Homepage with hero, values, products
│   │   ├── ProductsPage.jsx    # Product showcase with filtering
│   │   ├── AboutPage.jsx       # Company information and timeline
│   │   ├── CertificatesPage.jsx # Certifications display
│   │   └── ContactPage.jsx     # Contact form and info
│   ├── i18n/
│   │   └── index.js           # Internationalization setup
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS config
└── postcss.config.js         # PostCSS config
```

## 🛠️ Features Implemented

### ✅ Core Features
- **Multi-language Support**: English/Chinese with seamless switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern Navigation**: Sticky header with mobile-friendly menu
- **Product Showcase**: Grid layout with filtering and search
- **About Us**: Timeline, team profiles, and company capabilities
- **Certificates**: Categorized certifications with modal details
- **Contact Form**: Integrated with Formspree for email submissions

### ✅ Technical Features
- **React Router**: Clean URL routing for all pages
- **Tailwind CSS**: Utility-first styling with responsive design
- **i18n**: Full internationalization support
- **Form Handling**: Client-side validation and submission
- **Image Optimization**: Placeholder images with TODO markers
- **Performance**: Optimized loading and responsive images

## 🌍 Language Support

The website supports:
- **English** (default)
- **中文** (Chinese)

Language can be switched using the toggle button in the navigation bar. All content is properly translated and SEO-friendly URLs are maintained.

## 📧 Form Configuration

To enable form submissions, you need to set up a Formspree account:

1. Visit [Formspree](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `ContactPage.jsx` with your actual Formspree form ID
4. Update the form endpoint URL if needed

## 🎨 Customization

### Images
All placeholder images use Unsplash URLs. To replace with actual images:
- Search for `// TODO: Replace with actual image` comments
- Replace placeholder URLs with your actual product images
- Update alt text for accessibility

### Content
- Edit translation files in `src/i18n/index.js`
- Update product information in respective page components
- Modify company details in AboutPage.jsx

### Styling
- Customize colors in `tailwind.config.js`
- Adjust responsive breakpoints as needed
- Modify component-specific styles directly in JSX

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Build and deploy using GitHub Actions
- **Custom Server**: Build with `npm run build` and serve the `dist` folder

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Next Steps

1. **Replace placeholder images** with actual product photos
2. **Configure Formspree** for live form submissions
3. **Add real certificates** and documentation
4. **Update contact information** with actual details
5. **Add analytics** (Google Analytics, etc.)
6. **Optimize for SEO** with meta tags and structured data
7. **Add customer testimonials** section
8. **Implement product detail pages** with specifications

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📞 Support

For questions or issues, please contact the development team or open an issue in the project repository.

---

Built with ❤️ for Australian Windows & Doors Industry