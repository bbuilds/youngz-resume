const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontsizes");

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1280px",
        xl: "1536px",
      },
    },
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      colors: {
        byYellow: "var(--yellow)",
        byTeal: "var(--teal)",
        byGray: "var(--gray)",
        byBlack: "var(--black)",
      },
      fontFamily: {
        courier: ["courier-std", " monospace"],
      },
    },
  },
  plugins: [],
};
