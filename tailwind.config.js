module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#1F1E24",
          200: "#151519",
        },
        orange600: "#E9573E",
        orange300: "#FF644E",
        baseBlue: "#58ACF5",
        baseGray: "#C4C4C4",
        icon: "#262430",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/images/herobg.png')",
      }),
      boxShadow: {
        box: "0px 12px 50px 10px rgba(0, 0, 0, 0.65)",
        icon: "0px 0px 30px #58ACF5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
