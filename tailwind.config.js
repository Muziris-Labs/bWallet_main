/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #D02129 0%, #750069 100%)",
        "gradient-primary/20":
          "linear-gradient(90deg, #cf202933 0%, #75006abe 100%)",
        "tlBank-gradient-primary":
          "radial-gradient(50% 180.65% at 50% 50%, #FAFAFA 0%, #929292 100%)",
        "wallet-gradient":
          "radial-gradient(100% 100% at 0% 50%, #5D9DF6 0%, #006FFF 100%)",
        "text-gradient": "linear-gradient(90deg, #E51E34 0%, #EA13F2 100%)",
      },

      fontFamily: {
        grotesque: ["var(--font-grotesque)", "sans"],
        "clash-display": ["var(--font-clash-display)", "sans"],
        conthrax: ["var(--font-conthrax)", "sans"],
        neue: ["var(--font-neue)", "sans"],
      },

      colors: {
        "primary-black": "#141414",
        primary: "#D02129",
        "background-black": "#212121",
        "background-primary": "#161616",
        pink: "#FB96FF",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-text": {
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },

        ".gradient-text-primary": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },

        ".hide-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities);
    }),
  ],
});
