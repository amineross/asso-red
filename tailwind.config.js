/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        homepage: ['HomepageBaukasten', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
