/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'noto': ['Noto Serif', 'serif'],
    },
    extend: {
      colors: {
        pastel: {
          pink: '#FADADD',
          blue: '#AEDFF7',
          green: '#D6F5D6',
          purple: '#E4D0F7',
          yellow: '#FFF5BA',
          mint: '#D0F0C0',
          peach: '#FFDAB9',
          lavender: '#E6E6FA',
        }
      }
    },
  },
  plugins: [],
}