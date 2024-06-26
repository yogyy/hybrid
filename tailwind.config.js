/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        base: "10px",
      },
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
};
