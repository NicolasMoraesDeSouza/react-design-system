/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '000',
      'white': 'FFF',
      gray: {
        '900': '#121214',
        '800': '#202024',
        '400': '#7C7C8A',
        '100': '#E1E1E6',
        '200': '#C4C4CC',

      },
      cyan: {
        '200': '#61DAFB',

        'hover': '#A0EBFF',
        'focus': '#C7F3FF'

      }



    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}