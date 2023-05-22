/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Agrandir-Regular', ...defaultTheme.fontFamily.sans],
      header: ['Pricedown-bl', ...defaultTheme.fontFamily.sans],
      koll: ['Kollektif-Bold', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
