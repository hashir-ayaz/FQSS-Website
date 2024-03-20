/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: {
          100: "#fff9db",
          200: "#fff3b8",
          300: "#ffed94",
          400: "#ffe771",
          500: "#ffd700", // Base shade of golden
          600: "#e6c200",
          700: "#cca900",
          800: "#b39100",
          900: "#997800",
        },
      },
    },
  },
  plugins: [],
};
