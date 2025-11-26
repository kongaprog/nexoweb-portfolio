/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Fira Code', 'monospace'],
      },
      colors: {
        nexo: '#06b6d4',
        dark: '#020204'
      }
    },
  },
  plugins: [],
}