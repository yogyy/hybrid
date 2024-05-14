import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D52D9",
        black: "#121212",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
