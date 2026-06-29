import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#FDFBF7",
          card: "#F4EFE6",
          dark: "#3E3A26",
          accent: "#A49673",
          text: "#2A271B",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        serenity: "1.25rem",
        "serenity-lg": "1.5rem",
        pill: "9999px",
      },
      boxShadow: {
        serenity: "0 4px 24px -4px rgba(62, 58, 38, 0.08)",
        "serenity-lg": "0 8px 40px -8px rgba(62, 58, 38, 0.12)",
        float: "0 12px 48px -12px rgba(62, 58, 38, 0.15)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "brand-marquee": "brand-marquee 50s linear infinite",
        "brand-marquee-slow": "brand-marquee 65s linear infinite",
        "brand-marquee-ultra": "brand-marquee 85s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "brand-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
