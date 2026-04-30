import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--bg-void)",
        cream: "var(--bg-cream)",
        silver: "var(--silver)",
        "silver-dim": "var(--silver-dim)",
        "red-primary": "var(--red-primary)",
        "red-deep": "var(--red-deep)",
        ink: "var(--ink)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        eyebrow: "0.2em",
      },
      maxWidth: {
        page: "1680px",
      },
    },
  },
  plugins: [],
};

export default config;
