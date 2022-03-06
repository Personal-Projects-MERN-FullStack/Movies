module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src"
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('tw-elements/dist/plugin'),require('tailwind-scrollbar-hide')],
}