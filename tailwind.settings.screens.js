const remToPx = (rem) => {
  return `${rem * 16}px`;
};

module.exports = {
  sm: remToPx(20),
  md: remToPx(40),
  lg: remToPx(48),
  xl: remToPx(64),
  "2xl": remToPx(96),
};
