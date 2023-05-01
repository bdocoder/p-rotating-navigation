import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      light: colors.neutral[100],
      dark: colors.neutral[800],
      primary: colors.indigo[400],
    },
    transitionDuration: {
      DEFAULT: "350ms",
    },
    extend: {},
  },
  plugins: [typography()],
};
