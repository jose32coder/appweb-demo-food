/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mdCustom': '900px', // Custom breakpoint
      },
      ringColor: {
        'gradient-1': 'linear-gradient(to right, #ff7f50, #ff4500)',
      },
    },
  },
  plugins: [],
}
