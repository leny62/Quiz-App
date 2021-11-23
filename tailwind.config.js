// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,ts,tsx}', 
  './public/index.html'
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-lg': "url('/src/assets/bg.svg')",
        'hero-sm': "url('/src/assets/bg.svg')",
      }
    },
  },
  variants: {},
  plugins: [],
}

