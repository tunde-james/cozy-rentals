import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "brand-light": "var(--brand-light)",
        "text1-dark": "var(--text1-dark)",
        "text2-light": "var(--text2-light)",
        "surface1-light": "var(--surface1-light)",
        "surface2-light": "var(--surface2-light)",
        "background-util": "var(--background-util)",
        opacity: "var(--background-opacity)",
      },
    },
  },
  plugins: [],
};
export default config;
