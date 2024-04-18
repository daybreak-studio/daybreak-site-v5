import type { Config } from "tailwindcss";
import TypeSystemPlugin from "./TypeSystemPlugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    TypeSystemPlugin({
      // default base stlying (mobile)
      default: {
        // founders grotesk
        "sans-sm": {
          "font-family": "var(--font-founders-grotesk-regular)",
          "font-size": "16px",
          "letter-spacing": "0.0rem",
          "line-height": "20px",
        },
        "sans-xs": {
          "font-family": "var(--font-founders-grotesk-regular)",
          "font-size": "14px",
          "letter-spacing": "0.0rem",
          "line-height": "20px",
        },
        // founders grotesk condensed
        "cond-xs": {
          "font-family": "var(--font-founders-grotesk-condensed-regular)",
          "font-size": "14px",
          "letter-spacing": "0.02rem",
          "line-height": "100%",
          "text-transform": "uppercase",
        },
        "cond-sm": {
          "font-family": "var(--font-founders-grotesk-condensed-regular)",
          "font-size": "16px",
          "letter-spacing": "0.02rem",
          "line-height": "100%",
          "text-transform": "uppercase",
        },
        // factul
        "brand-xl": {
          "font-family": "var(--font-fractul-regular)",
          "font-size": "72px",
          "letter-spacing": "-0.03rem",
          "line-height": "64px",
        },
        "brand-lg": {
          "font-family": "var(--font-fractul-regular)",
          "font-size": "64px",
          "letter-spacing": "-0.03rem",
          "line-height": "64px",
        },
        "brand-md": {
          "font-family": "var(--font-fractul-regular)",
          "font-size": "24px",
          "letter-spacing": "-0.02rem",
          "line-height": "32px",
        },
      },

      // When screen is at lg breakpoint (desktop)
      lg: {
        // mono
      },
    }),
  ],
};
export default config;
