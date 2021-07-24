module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        topOpa: "topOpa 2s",
      },
      keyframes: {
        topOpa: {
          from: {
            opacity: "0",
            transform: "translateY(-40px)",
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
