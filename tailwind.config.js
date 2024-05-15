/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          gray: colors.gray,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
          blue: colors.blue,
          red: colors.red,
          orange: colors.orange,
          green: colors.green,
          purple: colors.purple,
          pink: colors.pink,
          darkblue: '#00008B',
          verydarkblue: '#00004B',
        },
    extend: {},
  },
  plugins: [],
}