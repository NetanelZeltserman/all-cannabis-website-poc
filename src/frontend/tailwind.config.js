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
        cannabisGreen: {
          100: '#E6F4E1',
          200: '#C1E4B8',
          300: '#9BD48F',
          400: '#75C466',
          500: '#397E2E',
          600: '#336F29',
          700: '#2E6425',
          800: '#27531F',
          900: '#1F4219',
        },
      },
    },
  },
  plugins: [],
}