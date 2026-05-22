/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8f3fe',
          100: '#cfe6fe',
          200: '#a3cdfc',
          300: '#67aefb',
          400: '#328bf7',
          500: '#0185ec',
          600: '#006bd1',
          700: '#0055a8',
          800: '#004689',
          900: '#023c72'
        }
      }
    }
  },
  plugins: []
};
