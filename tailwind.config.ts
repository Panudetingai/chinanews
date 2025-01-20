import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#e6e0ae',
        gold: '#dfbc5e',
        coral: '#ee6146',
        red: {
          light: '#d73c37',
          dark: '#b51f09'
        }
      }
    },
  },
  plugins: [nextui()],
} satisfies Config;
