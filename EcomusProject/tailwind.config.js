/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 185, 185, 0.25) 50%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
}