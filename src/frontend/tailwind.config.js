/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E34141',
        'primary-dark': '#B33333',
        secondary: '#64748B',
        'secondary-dark': '#4A5568',
        accent: '#597E6B',
        accentLight: '#397E2E',
        accentLightDark: '#2E6425',
        accentDark: '#3C5447',
        textDark: '#1E2936',
        textLight: '#000101',
      },
    },
  },
  plugins: [],
}