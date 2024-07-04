/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "first-blue": "#1A4689",
          "color-gray": "#a1a1aa"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #FFF 6.38%, #F1F1F1 47.86%, #FFF 100%), #FA0',
      },
      fontFamily: {
        generalRegular: ['GeneralSans-Regular', 'sans-serif'],
        generalMedium: ['GeneralSans-Medium', 'sans-serif'],
        generalBold: ['GeneralSans-Bold', 'sans-serif'],
        djrTextBold: ['FormaDJRText-bold', 'sans-serif'],
        djrDisplayBold: ['FormaDJRDisplay-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}