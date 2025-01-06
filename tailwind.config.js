/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        small: "420px",
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-intersect")],
};
