module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'charcoal': '#444140',
      'platinum': '#EBEBEB',
      'dodger': '#4392F1',
      'carrot': '#F09B3E'
    }),
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
    textColor: {
      'charcoal': '#444140',
      'platinum': '#EBEBEB',
      'dodger': '#4392F1',
      'carrot': '#F09B3E'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
