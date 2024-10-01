

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [

"./views/**/*.ejs" 
]

,
  theme: {
    extend: {
      colors:{
        primary:'#ff6363',
        secondary:{
          100:'#E2E2D5',
          200:'#888883',
        }
      }
    },
  },
  plugins: [],
};