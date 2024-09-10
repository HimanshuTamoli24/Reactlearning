export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PTSerif: ['"PT Serif"', "serif"],
        NerkoOne: ['"Nerko One"', "cursive"], // Added Nerko One font
      },
    },
  },
  plugins: [],
};