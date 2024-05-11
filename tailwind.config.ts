import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kinemoe: {
          "50": "#f0f9fb",
          "100": "#daeff3",
          "200": "#b9dfe8",
          "300": "#89c7d7",
          "400": "#52a6be",
          "500": "#368aa4",
          "600": "#30718a",
          "700": "#2c5d72",
          "800": "#2b4d5f",
          "900": "#284251",
          "950": "#0b151b",
        },
      },
    },
  },
};
export default config;
