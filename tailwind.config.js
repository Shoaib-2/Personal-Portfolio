/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#6ee7b7",
        tertiary: "#172554",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#6ee7b7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "470px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/backg.png')",
      },
    },
  },
  plugins: [],
};