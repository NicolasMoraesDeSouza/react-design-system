/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      
      'black': '000',
      'white': 'FFF',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-100': '#E1E1E6',
      'gray-200': '#C4C4CC',
      'cyan': '#61DAFB',
      'cyan-hover': '#A0EBFF',
      'cyan-focus': '#C7F3FF'
      
      
    },
    fontSize: {
      xs : 14,
      sm : 16,
      md : 18,
      lg : 20,
      xl : 24,
      '2xl' : 32

    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
