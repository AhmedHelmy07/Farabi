/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
          sans: ['var(--font-family)'],
      },
      colors:{
        'footer':'#101828',
        'main':"#155dfc",
        'black':"#0a0a0a"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}