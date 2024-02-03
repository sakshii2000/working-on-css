/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"]
      }
    }
  },
  plugins: []
};
