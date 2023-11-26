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
      },
      keyframes: {
        floatTilt: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1.25)' },
          '25%': { transform: 'translateY(-20px) rotate(-3deg) scale(1.25)' },
          '50%': { transform: 'translateY(0) rotate(0deg) scale(1.25)' },
          '75%': { transform: 'translateY(-20px) rotate(3deg) scale(1.25)' },
        }
      },
      animation: {
        floatTilt: 'floatTilt 6s ease-in-out infinite',
      },
      boxShadow: {
        'red-glow': '0 4px 15px rgba(255, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

