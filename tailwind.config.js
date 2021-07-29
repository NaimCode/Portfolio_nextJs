module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        topOpa1: "topOpa1 1.5s forwards",
        topOpa2: "topOpa2 1.8s forwards",
        topOpa3: "topOpa3 2.1s forwards",
        topOpa4: "topOpa4 2.4s forwards",
      },
      keyframes: {
        topOpa1: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        topOpa2: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "20%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        topOpa3: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "35%": {
            opacity: "0",
            transform: "translateY(40px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        topOpa4: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "50%": {
            opacity: "0",
            transform: "translateY(40px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      fontFamily: {
        primary: ["Quicksand", "Arial", "sans-serif"],
        secondary: ["Prompt", "Arial", "sans-serif"],
        special: ["Poiret One"],
      },
      colors: {
        primary: {
          light: "#5A018D",
          DEFAULT: "#4D0179",
          dark: "#11001C",
        },
        secondary: {
          light: "#FFA647",
          DEFAULT: "#F77F00",
          dark: "#522A00",
        },
        accent: {
          light: "#FFFFFF",
          DEFAULT: "#F6F2DF",
          dark: "#EAE2B7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
