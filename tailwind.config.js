/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryColor : "#3559E0",
        headingColor : "#081e21",
        smallTextColor : "#193256",
      }
    },
  },
  plugins: [],
}

