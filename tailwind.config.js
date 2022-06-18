/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/mainPage/*", "./src/components/App/*"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
