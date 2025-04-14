module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInDelay0: "fadeIn 1s ease-out forwards 0.5s",
        fadeInDelay1: "fadeIn 1s ease-out forwards 1.5s",
        fadeInDelay2: "fadeIn 1s ease-out forwards 0.5s",
        fadeInDelay3: "fadeIn 1s ease-out forwards 0.9s",
        fadeInDelay4: "fadeIn 1s ease-out forwards 1.1s",
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        gradientX: "gradientX 10s ease infinite",
      },
    },
  },
  plugins: [],
};
