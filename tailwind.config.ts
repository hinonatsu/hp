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
          navy: "#071527",
          deep: "#0D1E33",
          blue: "#1E7BFF",
          cyan: "#20C7E8",
          ice: "#F4F8FB",
          line: "#D9E3EC",
          ink: "#111827"
        }
      },
      boxShadow: {
        card: "0 18px 48px rgba(7, 21, 39, 0.08)",
        lift: "0 22px 60px rgba(7, 21, 39, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
