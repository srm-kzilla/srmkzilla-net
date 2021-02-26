module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#1F1E24',
          200: '#141318',
        },
        orange600: '#E9573E',
        orange300: '#FF644E',
        baseBlue: '#58ACF5',
        baseGray: '#C4C4C4',
        icon: '#262430',
        borderBlue: '#22415e',
        baseGreen: '#22D296',
        offWhite: '#fff1ca',
        logoRed: '#F0634D',
        logoGreen: '#5ed493',
        logoBlue: '#26BAFF',
        gray500: '#272727',
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/images/herobg.png')",
        'footer-pattern': "url('/images/newfooter.png')",
        'mobile-footer-pattern': 'url(/images/mobilefooter.png)',
        light: 'url(/images/light.png)',
        'home-footer': 'url(/images/herofooter.png)',
        'home-mobile': 'url(/images/mobilehomefooter.png)',
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
