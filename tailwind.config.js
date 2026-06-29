/** @type {import('tailwindcss').Config} */
const colors = require("./src/theme/colors.json");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: colors.brand.gold,
          "gold-dark": colors.brand.goldDark,
          "gold-light": colors.brand.goldLight,
          charcoal: colors.brand.charcoal,
          cream: colors.brand.cream,
          card: colors.brand.card,
          muted: colors.brand.muted,
          border: colors.brand.border,
          success: colors.brand.success,
        },
        primary: colors.primary,
        "primary-dark": colors.primaryDark,
        "primary-light": colors.primaryLight,
        background: colors.background,
        card: colors.card,
        text: colors.text,
        "text-muted": colors.textMuted,
        border: colors.border,
        success: colors.success,
        error: colors.error,
      },

      fontFamily: {
        sans: ["System"], // We can configure expo fonts here later if needed
      },
    },
  },
  plugins: [],
};
