/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        fontFamily: {
          turret: ['"Turret Road"', ...defaultTheme.fontFamily.sans]
        }
      }
  },
  plugins: [],
}

