# Modern Web Agency Portfolio

A sleek, modern, and responsive web agency portfolio built with Next.js, Tailwind CSS, and Framer Motion. This project showcases a professional web design agency website with beautiful animations, dark/light mode support, and a cohesive design language across all pages.

![Modern Web Agency Portfolio](https://i.imgur.com/XYZ123.png)

## 🌟 Features

- **Modern UI Design**: Clean, professional interface with consistent design language
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Page transitions and micro-interactions using Framer Motion
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Type-Safe**: Written in TypeScript for better developer experience
- **Accessible**: Built with accessibility in mind

## 📋 Pages

- **Home**: Modern hero section, services overview, featured projects, statistics, and CTA
- **Services**: Detailed service offerings with interactive cards and approach methodology
- **Portfolio**: Project showcase with filtering capability and process explanation
- **About**: Company information, team members, values, and timeline
- **Contact**: Contact form with validation, FAQ section, and interactive map

## 🛠️ Technologies Used

- **[Next.js](https://nextjs.org/)**: React framework for production
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript for better developer experience
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)**: Animation library for React
- **[Lucide Icons](https://lucide.dev/)**: Beautiful & consistent icon set
- **[React Hook Form](https://react-hook-form.com/)**: Form validation library
- **[Zod](https://zod.dev/)**: TypeScript-first schema validation
- **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible UI components
- **[Shadcn UI](https://ui.shadcn.com/)**: Re-usable components built with Radix UI and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-web-agency.git
   cd modern-web-agency
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── portfolio/        # Portfolio page
│   ├── services/         # Services page
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   ├── hero-section.tsx  # Hero section
│   └── ...
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...
```

## 🎨 Customization

### Theming

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Customize your colors here
        primary: {...},
        // ...
      },
      // ...
    },
  },
  // ...
};
```

### Adding New Pages

Create a new directory in the `app` folder with a `page.tsx` file:

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
      {/* Your content here */}
    </div>
  );
}
```

## 🔧 Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 🌐 Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmodern-web-agency)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Shadcn UI](https://ui.shadcn.com/) for the component library
- [Unsplash](https://unsplash.com/) for the stock images
- [Lucide Icons](https://lucide.dev/) for the beautiful icons

## 📞 Contact

If you have any questions or feedback, please reach out:

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com 