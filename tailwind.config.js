/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8f1',
          100: '#f5efe0',
          200: '#eadbc0',
          300: '#dec09a',
          400: '#d0a070',
          500: '#c58652',
          600: '#b86d42',
          700: '#995638',
          800: '#7f4833',
          900: '#673c2c',
          950: '#371e16',
        },
        luxury: {
          black: '#0c0c0c',
          charcoal: '#1c1c1c',
          cream: '#fcfcfc',
          sand: '#f5f5f0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      }
    },
  },
  plugins: [],
}