/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Merriweather", "sans-serif"],
      },
      colors: {
        golden: {
          100: "#fdf6e3", // Lightest
          200: "#fae9c3",
          300: "#f7dba3",
          400: "#f4ce83",
          500: "#96770f", // Base shade of golden
          600: "#8a6a0e",
          700: "#7e5d0d",
          800: "#72510c",
          900: "#66450b", // Darkest
        },
        backgroundImage: {
          "golden-gradient": "linear-gradient(to right, #ffd700, #b28f00)",
        },
      },
    },
  },
  plugins: [],
};
