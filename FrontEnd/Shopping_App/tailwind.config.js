/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        blueCustom1: ["#4E4FEB"],
        blueCustom2: ["#060047"],
        teal1: ["#22A699"],
        peach: ["#F5EAEA"],
      },
    },
  },
  plugins: [],
};
