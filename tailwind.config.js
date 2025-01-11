/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "text.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'amatic': ['"Amatic SC"', 'serif'],
       
      }
    },
  },
  plugins: [],
}