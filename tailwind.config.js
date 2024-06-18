/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pgray: "#DBF0F9",
        pblue: "#0093E9",
        pbackground: "#87CEEB",
      },
    },
  },
  plugins: [],
};
