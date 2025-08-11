# ⏳ Time Tracker App

A simple and interactive **Time Tracker** built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**.  
Easily log your activities, track hours, and visualize your time distribution through a beautiful pie chart.

---

## 🚀 Live Demo
🔗 [Click here to try it out](https://veltimetracker.netlify.app/)

---

## 📌 LinkedIn Post
🔗 [Check my LinkedIn post here](https://www.linkedin.com/posts/velmaran-e-38139b2b0_day3of30-webdevelopment-javascript-activity-7360619695386861568-Fi4h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErOyVEB2jhy99mca8iuuQxWHug_y8OPbmk)

---

## 📸 Features
- ✅ **Log Activities** with custom names and hours
- 🎨 **Color-coded Pie Chart** to visualize time distribution
- 📱 **Responsive Design** for all devices
- ⚡ Built with **Vite** for fast performance
- 💻 **React + TypeScript** for scalable and type-safe code
- 🎯 **Tailwind CSS** for modern, utility-first styling

---

## 🛠️ Tech Stack
- **React** – Frontend framework
- **TypeScript** – Type safety and clean code
- **Vite** – Fast build tool
- **Tailwind CSS** – Modern styling
- **Chart.js** – Data visualization

---

## 📂 Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
