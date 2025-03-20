/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensure it's "class" for manual toggling
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Enable dark mode
  },
};
