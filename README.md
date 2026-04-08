# Premium Aesthetic Wall Calendar

A high-fidelity, interactive wall calendar component built with React and Tailwind CSS. This project features a sophisticated SaaS-style interface with 3D animations, seasonal dynamic wallpapers, and professional date-range selection logic.

## ✨ Features

- **3D Page-Flip Transitions**: Experience tactile feedback with a perspective-based page turn when navigating months.
- **Living Wallpapers**: Each month features a curated gallery of 3 high-quality seasonal landscapes that cross-fade automatically every 10 seconds.
- **Intelligent Date Range Selection**: Select date ranges with intuitive click-tracking and a precise utility bar for selection summaries.
- **Holiday Recognition**: Built-in awareness for major international holidays with aesthetic visual markers.
- **Premium Design System**:
  - **Glassmorphism**: Sophisticated backdrop-blur effects throughout the UI.
  - **Lined Paper UI**: A persistent notes section with a realistic paper texture.
  - **Dark Mode**: Fully optimized deep-slate and neon-indigo theme.
  - **Responsive Layout**: Seamless transition between desktop and mobile viewing.

## 🛠️ Technology Stack

- **Core**: React 18 (via CDN for zero-install portability).
- **Styling**: Tailwind CSS (Custom configuration for premium shadows and colors).
- **Typography**: Google Fonts (Inter for UI, Outfit for Headers).
- **Icons & Assets**: Unsplash API landscapes & HeroIcons.

## 🚀 How to Run Locally

This project is built with **Vite + React**. Follow these steps to set up your local development environment:

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-link>
   cd premium-wall-calendar
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`.*

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

The codebase follows a professional, modular pattern:

- **`src/components/`**: Atomic UI components (Hero, Grid, Notes).
- **`src/hooks/`**: Custom React hooks for business logic (Persistence, Date Range, Grid generation).
- **`src/constants/`**: Static configuration and asset galleries.
- **`src/App.jsx`**: Main application assembly.
- **`tailwind.config.js`**: Custom design tokens and theme settings.

## 🧠 Design choices

- **Modular Architecture**: Separated business logic (hooks) from visual presentation (components) to ensure high testability and clean code standards.
- **Vite Build System**: Selected over CRA for faster HMR (Hot Module Replacement) and modern ESM support.
- **Horizontal Split Layout**: Prioritized a balanced SaaS-inspired dashboard layout for better visual hierarchy on high-resolution screens.

## 📄 License
MIT License - Created for Professional Assessment.
