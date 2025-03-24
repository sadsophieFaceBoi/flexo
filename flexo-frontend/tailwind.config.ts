/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/flexo-playground/src/index.html',
     './packages/flexo-playground/**/*.{js,ts,jsx,tsx,css}',
     './packages/flexo/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {},
  },
  plugins: [],
}