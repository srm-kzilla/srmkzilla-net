module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#1F1E24",
          200: "#16141b",
        },
        orange600: '#E9573E',
        orange300: '#FF644E',
        baseBlue: '#58ACF5',
        baseGray: '#C4C4C4',
        icon: '#262430',
        borderBlue: '#22415e',
        baseGreen: '#50be96',
        offWhite: '#fff1ca',
        logoRed: '#F0634D',
        logoGreen: '#54A870',
        logoBlue: '#26BAFF',
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/images/herobg.png')",
        'footer-pattern': "url('/images/newfooter.png')",
        'mobile-footer-pattern': 'url(/images/mobilefooter.png)',
        light: 'url(/images/light.png)',
        'home-footer': 'url(/images/herofooter.png)',
        'home-mobile': 'url(/images/mobilehomefooter.png)',
        mozofest: 'url(/images/mozofest.png)',
        mozohack: 'url(/images/mozohack.jpg)',
        social: 'url(/images/social.jpg)',
      }),
      boxShadow: {
        box: '0px 12px 50px 10px rgba(0, 0, 0, 0.65)',
        icon: '0px 0px 30px #58ACF5',
      },
    },
    fontFamily: {
      subHeading: ['Helvetica'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
