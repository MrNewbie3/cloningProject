/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*", "./src/mainPage/*"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
