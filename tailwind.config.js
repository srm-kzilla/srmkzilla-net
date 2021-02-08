module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange600: "#E9573E",
        orange300: "#FF644E",
        baseBlue: "#58ACF5",
        baseBlack: "#0F0F0F",
        baseGray: "#C4C4C4",
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/images/herobg.png')"
       }),
       boxShadow: {
         'box': '0px 12px 50px 10px rgba(0, 0, 0, 0.65)'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
