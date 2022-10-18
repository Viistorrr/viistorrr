/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#075985",
        secondary: "#6b7280",
      },
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
