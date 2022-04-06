module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': {transform: 'rotate(0.0deg)'},
          '15%': {transform: 'rotate(14.0deg)'},
          '30%': {transform: 'rotate(-8.0deg)'},
          '40%': {transform: 'rotate(14.0deg)'},
          '50%': {transform: 'rotate(-4.0deg)'},
          '60%': {transform: 'rotate(10.0deg)'},
          '70%': {transform: 'rotate(0.0deg)'},
          '100%': {transform: 'rotate(0.0deg)'},
        },
        FadeIn: {
          '0%': {
            opacity:0,
          },
          '100%': {
            opacity:1,
          }
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
        FadeIn: 'FadeIn 1s  '
      }
    },
  },
  plugins: [],
}
