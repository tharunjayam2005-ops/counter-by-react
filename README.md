# ⚡ Neo Counter

A simple, modern counter app built with React — featuring a glassmorphism UI, animated gradient background, and smooth interactions.

🔗 **Live Demo:** [add your Vercel link here]

## ✨ Features
- Increment, decrement, and reset counter
- Prevents going below 0, with a "Minimum limit reached" message
- Modern glassmorphism design with animated gradient background
- Gradient text counter display
- Fully responsive layout (mobile & desktop)
- Built with React + Vite

## 🛠️ Tech Stack
- **React** – UI library, component-based structure
- **Vite** – fast dev server & build tool
- **CSS3** – custom animations, gradients, glassmorphism effects
- **useState Hook** – manages count and message state

## 📁 Project Structure
counter-react/
├── public/
│ └── background.jpg
├── src/
│ ├── Components/
│ │ ├── Counter.jsx # Core logic + UI for the counter
│ │ └── Counter.css # Styling: gradient bg, glass card, animations
│ ├── App.jsx # Root component, renders Counter
│ └── main.jsx # React entry point
├── index.html
├── package.json
└── vite.config.js

## ⚙️ How It Works
- `useState` manages the `count` value and a `showMessage` flag
- **Increment** increases the count by 1
- **Decrement** decreases the count by 1, but stops at 0 and shows a limit-reached message
- **Reset** sets the count back to 0 and clears the message
- Styling — gradient background, frosted-glass card, gradient text, button hover states — is handled entirely in `Counter.css`, no external UI library

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 📦 Build for Production
```bash
npm run build
```
