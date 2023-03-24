/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
   
  theme: {
    colors: {
      'midnight': '#121063',
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}
