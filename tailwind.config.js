/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black':'#000000',
        'light-pink':'#F7F5FD',
        'light-blue':'#F2FAF8',
        'dark':'#2D2D2D',
        'blue':'#3366FF',
        'pink':'#ECE7FB',
        'light-yellow':'#FCFAF5',
        'yellow':'#F8D57E',
        
      },
      fontSize: {
        'xsm':'0.6rem',
        sm: '0.8rem',
        base: '1rem',
        'l': '1.125rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '5rem': '5rem',
      },
      screens: {
        '450px':'450px',
        '768': '768px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'max-1024': {'max': '1024px'},
        'max-768': {'max': '768px'},
        'max-450': {'max': '450px'},
      },
    },
  },
  plugins: [],
}

