/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3674B5",
        secondary: "#578FCA",
        light: {
          100: "#D1F8EF",
          200: "#A1E3F9",
          300: "#578FCA",
        },
        dark: {
          100: "#578FCA",
          200: "#3674B5",
        },
        accent: "#A1E3F9",
      },
    },
  },
  plugins: [],
};
