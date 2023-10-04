/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'main': "#FFDE82",
    },
    fontFamily: {
      title: "Dancing Script, cursive"
    }
  },
  plugins: [],
}

