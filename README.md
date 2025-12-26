# ⚡ Energy Cost Estimator

<div align="center">

![Electricity Management](public/AppIcon.png)

**A beautiful and interactive web application to calculate and track electricity consumption costs for your devices**

[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Usage](#-usage)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Scripts](#-scripts)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Energy Cost Estimator** is a modern, user-friendly web application designed to help you calculate and track the electricity consumption costs of your household or office devices. With its intuitive interface and powerful features, you can:

- 📊 Calculate energy consumption in kilowatt-hours (kWh)
- 💰 Estimate costs based on your electricity rates
- 📝 Track multiple devices and their consumption history
- 🎨 Enjoy a beautiful, responsive design with smooth animations
- 📱 Use it seamlessly on desktop, tablet, or mobile devices

Perfect for homeowners, renters, students, or anyone looking to understand and manage their electricity usage better!

---

## ✨ Features

### 🔋 Core Functionality

- **Energy Calculation**: Calculate power consumption in kWh based on device wattage, usage hours, and time period
- **Cost Estimation**: Optional cost calculation when you provide electricity unit price
- **Flexible Periods**: Choose from predefined periods or enter custom days
  - Daily (1 day)
  - Weekly (7 days)
  - Monthly (30 days)
  - Semi-Annual (180 days)
  - Yearly (365 days)
  - Custom period (any number of days)

### 📊 Tracking & History

- **Device History**: View all calculated devices in an organized history section
- **Colorful Cards**: Each device gets a unique, randomly assigned color theme
- **Total Statistics**: See cumulative totals for units and costs
- **Detailed Information**: Each card shows:
  - Item name
  - Power consumption (Watts)
  - Usage duration (Hours)
  - Calculation period
  - Total units (kWh)
  - Optional: Unit price and estimated cost

### 🎨 User Experience

- **Glassmorphism Design**: Modern, elegant UI with backdrop blur effects
- **Smooth Animations**: Beautiful transitions powered by AOS (Animate On Scroll)
- **Loading States**: Elegant loading indicators with bouncing animations
- **Responsive Layout**: Perfectly adapts to any screen size
- **Form Validation**: Real-time validation ensures accurate inputs
- **Reset Functionality**: Clear form with confirmation dialog

### 🚀 Performance

- **Code Splitting**: Lazy loading for optimal performance
- **React 19**: Latest React features and optimizations
- **Memoization**: Optimized re-renders for better performance
- **Rolldown-Vite**: Ultra-fast build tool for development and production

---

## 🎥 Demo

### Live Features

1. **Calculate Energy Consumption**: Enter device details and get instant results
2. **Toggle Cost/Units**: Switch between viewing costs and units only
3. **Custom Periods**: Flexible time period selection
4. **History Tracking**: Automatically saves all calculations
5. **Responsive Design**: Works beautifully on all devices

---

## 📸 Screenshots

> Add screenshots here showing:
> - Main calculator form
> - Results display
> - History section
> - Mobile responsive view

---

## 💻 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Step-by-Step Guide

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/electricity-management.git
cd electricity-management
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Alternative Installation Methods

**Using yarn:**

```bash
yarn install
yarn dev
```

**Using pnpm:**

```bash
pnpm install
pnpm dev
```

---

## 🎯 Usage

### Basic Usage

1. **Enter Device Information**
   - Item Name: e.g., "Air Conditioner"
   - Power (Watts): e.g., 1500
   - Usage (Hours): e.g., 5

2. **Select Calculation Period**
   - Choose from dropdown: Daily, Weekly, Monthly, Semi-Annual, Yearly
   - Or click "Custom" to enter custom days

3. **Optional: Add Unit Price**
   - Click "Cost" button to toggle cost input
   - Enter your electricity unit price (e.g., 0.15)

4. **Calculate**
   - Click "Calculate" button
   - View results instantly in the form
   - See device added to history below

5. **View History**
   - Scroll down to see all calculated devices
   - Click info button (ℹ️) to see total statistics
   - Calculate total price from the info panel

### Advanced Features

**Cost vs Units Toggle:**
- Click the "Cost" / "Units only" button to switch between viewing modes
- Enter unit price only when you want to see cost estimates

**Custom Period:**
- Click "Custom" button to enter any number of days
- Click "Period" to return to predefined periods

**Reset Form:**
- Click "Reset" button to clear all inputs
- Confirmation dialog prevents accidental resets

---

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.2.0** - Latest React with enhanced features
- **React DOM 19.2.0** - React rendering library

### Build Tool

- **Rolldown-Vite 7.2.5** - Ultra-fast build tool (Vite fork)
- **@vitejs/plugin-react 5.1.1** - React plugin for Vite

### Styling

- **TailwindCSS 4.1.18** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.18** - Tailwind Vite plugin
- **Custom CSS** - Additional custom styles

### Animations

- **AOS 2.3.4** - Animate On Scroll library for smooth animations

### Code Quality

- **ESLint 9.39.1** - JavaScript linter
- **@eslint/js 9.39.1** - ESLint JavaScript plugin
- **eslint-plugin-react-hooks 7.0.1** - React hooks linting
- **eslint-plugin-react-refresh 0.4.24** - React refresh linting

### UI Font

- **Nunito** - Google Font for beautiful typography

---

## 📁 Project Structure

```
electricity-management/
├── public/
│   └── AppIcon.png              # Application icon
├── src/
│   ├── assets/                  # Static assets
│   ├── App.jsx                  # Main App component with lazy loading
│   ├── App.css                  # App-specific styles
│   ├── Form.jsx                 # Main form component (18KB)
│   ├── Form.css                 # Form-specific styles
│   ├── FormResult.jsx           # Results display component
│   ├── Results.jsx              # History section component
│   ├── Info.jsx                 # Statistics and info component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 🧩 Components

### 1. **App.jsx**
- Root component
- Implements lazy loading with Suspense
- Custom loading animation with bouncing colored circles

### 2. **Form.jsx** (Main Component)
- Manages all form state and logic
- Handles calculations (kWh and cost)
- Manages results array
- Random color assignment for history cards
- Period calculations (1, 7, 30, 180, 365, custom)
- Toggle between cost and units-only modes
- Form validation and reset functionality

### 3. **FormResult.jsx**
- Displays calculation results
- Shows estimated cost and total units
- Animated gradient backgrounds
- Toggle button for cost/units display
- Memoized for performance

### 4. **Results.jsx**
- Displays calculation history
- Integrates AOS animations
- Maps through results array
- Shows empty state when no history
- Color-coded device cards
- Hover effects and transitions
- Memoized for performance

### 5. **Info.jsx**
- Statistics panel component
- Shows total units and items count
- Calculate total price functionality
- Collapsible information section
- Interactive info button

---

## 📜 Scripts

Available npm scripts in `package.json`:

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `npm run dev` | Start development server with hot reload |
| **build** | `npm run build` | Build production-ready bundle |
| **lint** | `npm run lint` | Run ESLint to check code quality |
| **preview** | `npm run preview` | Preview production build locally |

### Development

```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Production Build

```bash
npm run build
```
Creates optimized production build in `dist/` folder

### Preview Production Build

```bash
npm run preview
```
Preview the production build locally before deployment

### Linting

```bash
npm run lint
```
Check code for errors and style issues

---

## ⚙️ Configuration

### Vite Configuration

The project uses Rolldown-Vite (specified in `package.json`):

```json
{
  "vite": "npm:rolldown-vite@7.2.5"
}
```

### TailwindCSS

TailwindCSS 4.x is integrated via Vite plugin:
- Utility-first CSS framework
- Custom color schemes
- Responsive breakpoints
- Animation utilities

### ESLint

Configured with:
- React-specific rules
- React Hooks rules
- React Refresh rules
- Modern JavaScript standards

---

## 🎨 Key Features Explained

### Energy Calculation Formula

```javascript
kWh = (Watts × Hours × Period) / 1000
Cost = kWh × Unit Price
```

### Color System

The app uses 22 different color themes for device cards:
- Each device gets a random color from the palette
- Colors use opacity and blur for glassmorphism effect
- Consistent color scheme across card components

### Animation System

**AOS (Animate On Scroll):**
- `fade-up` animation for device cards
- `slide-up` for empty state
- 400ms duration
- `ease-in-out` easing
- One-time animation on scroll

**Custom Animations:**
- Bouncing loader circles with staggered delays
- Hover scale effects (1.02x - 1.05x)
- Button press animations
- Smooth transitions (100-300ms)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Ideas

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ♿ Accessibility improvements
- 🌍 Internationalization (i18n)
- 📱 PWA features
- 💾 Local storage for history
- 📊 Data export functionality
- 📈 Charts and visualizations

### Code Style

- Follow existing code style
- Use meaningful variable names
- Add comments for complex logic
- Ensure all tests pass
- Run `npm run lint` before committing

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

**Project Maintainer:** Talha Javed

- GitHub: [M Talha Javed](https://github.com/talhadevstudio30-lang)
- Email: talhadevstudio30@gmail.com

**Project Link:** [https://adevt-electric.vercel.app/](https://github.com/talhadevstudio30-lang/electricity-management)

---

# Acknowledgments

- [React](https://react.dev/) - The amazing UI library
- [Vite](https://vite.dev/) - Lightning-fast build tool
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [AOS](https://michalsnik.github.io/aos/) - Animate on scroll library
- [Google Fonts](https://fonts.google.com/) - Nunito font family
- All contributors who help improve this project

---

## 🚀 Future Enhancements

- [ ] Local storage to persist history
- [ ] Export data to CSV/PDF
- [ ] Charts and data visualizations
- [ ] Dark/Light theme toggle
- [ ] Multiple currency support
- [ ] Device templates (common devices pre-filled)
- [ ] Comparison mode (compare multiple devices)
- [ ] Energy-saving tips based on usage
- [ ] PWA support for offline usage
- [ ] Multi-language support
- [ ] Delete individual history items

---

<div align="center">

**Made with ❤️ and ⚡ by Talha Javed**

⭐ Star this repo if you find it helpful!

</div>
