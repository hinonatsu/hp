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
          navy: "#07111F",
          ink: "#102033",
          muted: "#64748B",
          line: "#D9E2EE",
          soft: "#F8FAFC",
          paper: "#FFFFFF",
          blue: "#2F7DF6",
          cyan: "#5DE4FF"
        }
      }
    }
  },
  plugins: []
};

export default config;
