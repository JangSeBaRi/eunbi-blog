const { keyframes } = require('@emotion/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "text-xs" : "0.75rem"
      },
      screens: {
        "560px" : "560px",
        "810px" : "810px"
      },
      animation: {
        fadein: 'fadein 0.2s ease-in-out'
      },
      keyframes: {
        fadein: {
          "0%" : {opacity: 0},
          "100%" : {opacity: 100},
        }
      }
    },
  },
  plugins: [],
}
