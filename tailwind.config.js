/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "578px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      ecru: "#F6F5F1",
      green: "#46AA42",
      "dark-green": "rgb(63 98 18)",
      white: "#FFFFFF",
      brown: "#412F22",
      black: "#000000",
      "light-yellow": "#FCFE7F",
      grey: "#464646",
      "light-grey": "#E6E6E6",
      red: "#FF0000",
    },
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 3px 6px #00000029",
      },
    },
  },
  plugins: [],
};
