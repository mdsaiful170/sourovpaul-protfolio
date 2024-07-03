const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['*'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "997px",
      xl: "1400px"
    },
    extend: {
      colors: {
        sectionColor: "hsl(209, 100%, 97%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColor: "hsl(209, 87%, 21%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#DDD",
        secondaryColor: "red"
      },

      keyframes: {
        move: {
          "50%": {
            transform: "scale(1.1)"
          }
        }
      },
      animation:{
        scaleAnimation:"move 3s linear infinte"
      }
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      londrina: ["Londrina Outline", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
      },
    },
  },
  plugins: [],
}

