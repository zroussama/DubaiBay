/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moroccan-blue': '#0077be',
        'moroccan-orange': '#ff9900',
        'moroccan-red': '#c1272d',
      },
    },
  },
  plugins: [],
}