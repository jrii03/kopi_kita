/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D4037',
        secondary: '#8BC34A',
        neutral: {
          background: '#FFF8F0',
          card: '#F5F5F5',
          text: {
            dark: '#212121',
            light: '#757575'
          }
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}

