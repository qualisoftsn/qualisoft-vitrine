import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Cette ligne doit inclure TOUT le dossier src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;