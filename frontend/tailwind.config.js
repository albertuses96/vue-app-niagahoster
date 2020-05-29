const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          ...defaultTheme.colors.blue,
          'primary': '#008fee',
          'secondary-darken': '#007fde',
          'secondary-light': '#008fee'
        },
        indigo: {
          ...defaultTheme.colors.indigo,
          primary: '#303030',
          secondary: '#898989'
        },
        green: {
          ...defaultTheme.colors.green,
          "primary": '#00b359'
        },
      
      },
      fontFamily: {
        sans: [
          'Roboto',
          'Montserrat'
        ]
      }
      
    },
  },
  variants: {},
  plugins: [],
}
