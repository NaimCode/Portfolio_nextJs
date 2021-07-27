module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        topOpa1: "topOpa1 1.1s",
        topOpa2: "topOpa2 1.1s",
        topOpa3: "topOpa3 1.1s",
        topOpa4: "topOpa4 1.1s",
      },
      keyframes: {
        topOpa1: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        topOpa2: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "20%": {
            opacity: "0",
            transform: "translateY(-15px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        topOpa3: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "40%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        topOpa4: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "60%": {
            opacity: "0",
            transform: "translateY(-20px)",
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
