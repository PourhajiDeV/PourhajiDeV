/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iran: ['var(--font-iransans)', 'sans-serif'],
      },
      colors: {
        darkBg: '#09090b',
        lightBg: '#f4f4f5',
      },
      borderRadius: {
        'apple': '24px',
        'apple-lg': '32px',
      }
    },
  },
  plugins: [],
}