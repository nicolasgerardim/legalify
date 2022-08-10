/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      body: 'Montserrat,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
    },
    extend: {
      colors: {
        'primary-color': '#0A3F73',
        'secondary-color': '#E5E6E7',
        'third-color': '#5D6970'
      }
    },
  },
  plugins: [],
}
