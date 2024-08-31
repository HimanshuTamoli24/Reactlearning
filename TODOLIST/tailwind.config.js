/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      textDecorationColor: {
        "custom-red": "#DDDDDD",
      },
      textDecorationThickness: {
        thick: "2px",
      },
    },
  },
  plugins: [],
};
