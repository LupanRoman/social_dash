/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    letterSpacing: {
      widest: '.40em',
    },
    extend: {
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'dark-theme-r': 'hsl(210, 78%, 56%)',
        'dark-theme-l': 'hsl(146, 68%, 55%)',
        'light-theme': 'hsl(230, 22%, 74%)',
        // !! Dark theme colors
        'v-dark-blue': 'hsl(230, 17%, 14%)',
        'v-dark-blue-top': 'hsl(232, 19%, 15%)',
        'dark-des-blue': 'hsl(228, 28%, 20%)',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        white: 'hsl(0, 0%, 100%)',
        // !! Light theme colors
        'v-pale-blue': 'hsl(225, 100%, 98%)',
        'light-gray-blue': 'hsl(227, 47%, 96%)',
        'dark-dray-blue': 'hsl(228, 12%, 44%)',
        'v-dark-blue': 'hsl(230, 17%, 14%)',
      },
    },
  },
  plugins: [],
};
