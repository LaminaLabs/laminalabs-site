/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'neon-cyan': '#00ffee',
          'dark-bg': '#0c0c1f',
          'darker-bg': '#05050f',
        },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };