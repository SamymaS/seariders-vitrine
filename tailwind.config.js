module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        seaBlue: '#0077B6', // Couleur personnalisée
        lightGray: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Police personnalisée
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
