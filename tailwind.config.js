/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#d59430",
        "custom-green": "#229575",
      },
      fontFamily: {
        tajwal: ['Tajwal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
