/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    extend: {
      colors:{ 
        primary: "#56042c",
        secondary: "#1077c3",
        goldish: "#fcbc00",
        grey: "#EEEEE4",
        pink: "#F20249"
      }
    },
  },
  plugins: [],
}
