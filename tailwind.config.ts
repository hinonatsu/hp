import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#111111",
          muted: "#5F5F5F",
          line: "#D8D8D8",
          soft: "#F7F7F5",
          paper: "#FFFFFF"
        }
      }
    }
  },
  plugins: []
};

export default config;
