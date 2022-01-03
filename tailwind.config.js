const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontsizes");

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
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
