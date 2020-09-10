module.exports = {
  purge: ["./src/**/*.vue"],
  theme: {
    typography: theme => ({
      default: {
        css: {
          a: {
            "&:hover": {
              color: theme("colors.gray.900"),
            },
          },
          maxWidth: "75ch",
        },
      },
    }),
    extend: {},
    minHeight: {
      "0": "0",
      "2": "0.5rem",
      "4": "1rem",
      "8": "2rem",
      "12": "3rem",
      "20": "5rem",
      "32": "8rem",
      "40": "10rem",
      full: "100%",
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
    backGroundImage: ["responsive", "hover"],
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
    extendedSpacingScale: true,
    uniformColorPalette: true,
  },
};
