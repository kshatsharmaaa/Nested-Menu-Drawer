# Nested Menu Drawer - React Component

A fully accessible, animated drawer component with nested menu navigation built for mobile-first experiences. Features smooth transitions, intuitive back navigation, and keyboard accessibility.

## 🔗 Live Demo

**[View Live Demo →](https://nested-menu-drawer-nu.vercel.app/)**

Try it out on your mobile device for the best experience!

## ✨ Features

- ✅ **Smooth Animations** - Direction-aware slide animations with Framer Motion
- ✅ **Multi-Level Navigation** - Support for unlimited nested menu levels
- ✅ **Full Accessibility** - ARIA compliant with keyboard navigation support
- ✅ **Mobile Optimized** - Drag-to-close gesture and responsive design
- ✅ **TypeScript Support** - Fully typed for better DX
- ✅ **Customizable** - Easy to style with Tailwind CSS
- ✅ **Lightweight** - Minimal dependencies

## 🚀 Tech Stack

- **React 19+** - UI framework
- **TypeScript** - Type safety
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library (optional)

## 📦 Installation

Clone the repository
git clone https://github.com/kshatsharmaaa/nested-menu-drawer.git

Navigate to project directory
cd nested-menu-drawer

Install dependencies
npm install

or
yarn install

Start development server
npm run dev



## 📁 Project Structure

src/
├── types/
│ └── menu.ts # TypeScript interfaces
├── data/
│ └── menuData.ts # Menu configuration
├── hooks/
│ └── useMenuNavigation.ts # Navigation state management
├── components/
│ ├── OpenMenuButton.tsx # Trigger button
│ ├── MenuDrawer.tsx # Main drawer container
│ └── MenuItem.tsx # Individual menu item
└── App.tsx # Main application
