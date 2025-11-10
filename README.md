# Vatulemo - Programming Tadulako Website

A modern, responsive website for Programming Tadulako (Batch Soyuz) built with Next.js, React, and Tailwind CSS.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

Vatulemo is the official website for Programming Tadulako, showcasing information about the organization. The website features modern animations, responsive design, and an intuitive user interface.

## ✨ Features

- **Home Page** - Overview of Programming Tadulako
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Modern Animations** - Smooth transitions and interactive elements using Motion
- **Optimized Performance** - Next.js App Router for optimal performance

## 🛠 Tech Stack

### Core

- **[Next.js](https://nextjs.org/)** - React framework with App Router
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **[PostCSS](https://postcss.org/)** - CSS transformation

### UI Components

- **[shadcnUI](https://ui.shadcn.com/)** - UI components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Motion](https://motion.dev/)** - Animation library

### Development Tools

- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Pre-commit linting
- **[pnpm](https://pnpm.io/)** - Package manager

## 📁 Project Structure

```
vatulemo/
├── .github/                # Github stuffs
├── .husky/                 # Git hooks
├── public/                 # Static assets
│   └── assets/
│       ├── icons/         # Icon files
│       └── images/        # Image files
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── not-found.tsx # 404 page
│   ├── components/        # Reusable components
│   │   ├── animations/   # Animation components
│   │   ├── icon/         # Icon components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI components
│   ├── features/          # Feature modules
│   │   └── home/         # Home page feature
│   │       └── index.tsx
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── components.json       # UI component config
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm (yea, you're forced)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Programming-Tadulako/vatulemo.git
cd vatulemo
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm format` - Format code with Prettier
- `pnpm check-format` - Check code formatting

## 🎨 Code Quality

This project uses several tools to maintain code quality:

- **Prettier** - Automatic code formatting
- **ESLint** - Code linting with Next.js config
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files

Pre-commit hooks automatically format your code before committing.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat(scope): add some amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and passes all linting checks.

## 📄 License

This project is private and maintained by Programming Tadulako.

---

**Built with ❤️ by Programming Tadulako - Development Team**
