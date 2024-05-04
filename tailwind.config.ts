import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'dark-blue-purple': 'radial-gradient(ellipse at center, #20202a, #2c5364)',
        'green-blue': 'radial-gradient(ellipse at center, #0f2027, #203a43, #2c5364)',
      },
    },
  },
  plugins: [],
};
export default config;
