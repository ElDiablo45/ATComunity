/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#C0C0C0",
        tertiary: "#1E1E1E",
        "black-100": "#C0C0C0",
        "black-200": "#282828",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 0px 30px -15px #ffffff",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
