/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bitter", "sans-serif"],
      },
      colors: {
        golden: {
          100: "#FBE0D5", // Lightest
          200: "#FAD4AD",
          300: "#F9C985",
          400: "#F8BE5D",
          500: "#F7B32B", // Base shade of golden
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
