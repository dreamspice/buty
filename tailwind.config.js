/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'orange': '#ff7d1a',
        'orange-hover': '	hsla(26, 100%, 55%, 0.8)',
        'pale-orange': '	#ffede0',
        'very-dark-blue': '	#1d2025',
        'dark-grayish-blue': '#68707d',
        'grayish-blue': 	'#b6bcc8',
        'light-grayish-blue': '#f7f8fd',
      }
    },
  },
  plugins: [],
}
