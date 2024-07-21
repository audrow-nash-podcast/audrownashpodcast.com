import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63C9F2",
        secondary: "#3A7E99",
        "bg-dark": "#3E3A37",
        "bg-light": "#F8ECD4",
      },
      fontFamily: {
        "bebas": ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
} satisfies Config;
