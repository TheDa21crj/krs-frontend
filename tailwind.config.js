const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "5000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xy: "800px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        cormorant: ["Cormorant Upright", "serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        "krs-yellow": "#FFB742",
        "krs-black": "#1C1C1C",
        "krs-tags": "#535353",
        "krs-grey": "#8F8E8E",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  plugins: [Myclass],
};
