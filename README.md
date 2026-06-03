# Dev Sharma — Retro VS Code Developer Portfolio 🚀

A premium, highly-interactive developer portfolio application styled like the Visual Studio Code editor (using the One Dark Pro theme). Built from scratch using React, TypeScript, Vite, Framer Motion, and Tailwind CSS.

Live at: [https://devsharma.dev](https://devsharma.dev)

---

## 🌟 Primary Features

- **Retro VS Code Aesthetics**: Replicates the One Dark Pro editor environment with a collapsible file explorer sidebar, active tab headers, breadcrumb path navigators, and interactive status bars.
* **Interactive Skills Dashboard (`skills.tsx`)**: 
  - Grouped core technical proficiencies with progress meters.
  - Clear, colored official SVG brand logos next to all technologies.
  - **Embedded Bash Console Terminal**: A fully functioning mockup CLI console. Try typing commands (like `help`, `skills`, `certifications`, `hackathon`, `campusfinder`, `supabase`, `about`, `clear`) or tech names (like `docker`, `react`, `aws`) to print custom compilation logs.
  - Dynamic project filters (clicking a skill highlights matching projects).
- **Walking Robot Preloader**: Dynamically computes load progress (0% to 100%) showing a pixelated walking robot character with animated keyframe cycles.
- **Titlebar Walking Loop**: A mini pixelated robot that walks back and forth in the editor header, spawning puff dust particles.
- **Canvas Favicon Loops**: Generates a blinking, animated favicon in the browser tab.
- **Custom Cursor Settings**: A custom mouse cursor with particle sparks on click, togglable in the status bar settings.
- **URL Hash Router**: Seamless client-side routing syncs open tabs and navigation states directly in shareable URLs (e.g. `#/`, `#/about-me`, `#/projects/bracerce`).
- **Responsive Mobile Drawer**: Collapses the explorer tree into a clean sidebar burger drawer menu on mobile viewports.

---

## 🛠️ Technology Stack

* **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
* **Animations**: Framer Motion, CSS Keyframes
* **Icons & Typographies**: JetBrains Mono, Press Start 2P, custom SVGs

---

## 🏃 Getting Started

### 1. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Launch Local Environment
Run the hot-reloaded development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your web browser!

---

## 📦 Building & Deploying

To bundle the application and automatically run the directory cleanup script (which sweeps any unused development assets):
```bash
npm run build
```
The output directory `dist/` is fully optimized and ready to host on Vercel, Netlify, or Github Pages.
