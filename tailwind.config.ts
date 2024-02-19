import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "kw-white": "#ffffff",
      "kw-gray": "#666666",
      "kw-gray-200": "#e2e8f0",
      "kw-gray-800": "#1e293b",
      "kw-gray-950": "#020420",
      "kw-dark-green": "#98AE8D",
      "kw-secondary-green": "#EDF0E9",
      "kw-main-green": "#68DE4E",
      "kw-main-light-green": "#A2E394",
      "kw-main-dark-green": "#5BC244",
    },
    fontSize: {
      "6xl": "40px",
      "5xl": "36px",
      "4xl": "32px",
      "3xl": "24px",
      "2xl": "20px",
      xl: "16px",
      normal: "16px",
    },
  },
};

export default config;
