# SEAS Website

**Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS)** - Official website for the Summer in Engineering and Applied Sciences program.

## About SEAS

SEAS (Summer in Engineering and Applied Sciences) is a non-profit organization providing free educational opportunities for high school students in Central Vietnam. Students are directly guided by graduate researchers and experts from prestigious universities and leading technology companies worldwide.

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **TailwindCSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## Project Structure

```
seas-2026/
├── public/
│   └── images/          # Static images
│       ├── bank/
│       ├── icons/
│       ├── illustrations/
│       ├── layout/
│       ├── logo/
│       └── team/
├── src/
│   ├── assets/
│   │   └── information/ # Data files
│   ├── components/      # React components
│   │   ├── about/
│   │   ├── apply/
│   │   ├── contact/
│   │   ├── donate/
│   │   ├── homepage/
│   │   ├── layout/
│   │   ├── programmes/
│   │   └── team/
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zerostaticthemes/jekyll-serif-theme.git
cd seas-2026

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:5173)
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Pages

- **Home** (`/`) - Homepage with hero section and program overview
- **About** (`/about`) - Information about SEAS mission and benefits
- **Programmes** (`/programmes`) - Course schedules and curriculum
- **Team** (`/team`) - Founders and team members
- **Apply** (`/apply`) - Application information
- **Donate** (`/donate`) - Donation information
- **Contact** (`/contact`) - Contact details

## Contributing

We welcome contributions to improve the SEAS website! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Content Updates

To update content like team members, schedules, or donations:

1. Navigate to `src/assets/information/`
2. Edit the relevant `.ts` files
3. Follow the existing data structure

## License

This project is maintained by SEAS organization.

## Contact

For questions about the website or technical issues:
- Website: [SEAS Official Website]
- Email: Contact through the website

---

**Note**: This is the 2026 version of the SEAS website, migrated from Jekyll to React for better performance and maintainability.
