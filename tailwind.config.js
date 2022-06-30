const brandColors = {
  birdblue: '#1d9bf0',
  platinun: '#e7e9ea',
  silver: '#71767b',
  onix: '#333639',
  richBlack: '#15202b'
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // destruct de las props de color
        ...brandColors,
        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinun,
      }
    },
  },
  plugins: [],
}
