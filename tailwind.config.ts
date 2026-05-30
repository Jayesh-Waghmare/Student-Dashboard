import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: "#08090d",
        foreground: "#d1d7e5",
        surface: "#11131a",
        card: "#1a1d26",
        muted: "#7b849c",
        border: {
          DEFAULT: "#242838",
          divider: "#33394f",
        },
        accent: {
          subtle: "#261a0f",
          border: "#5d3e1d",
          DEFAULT: "#ea580c",
          text: "#ffb84d",
        },
        success: {
          bg: "#122c1f",
          text: "#34d399",
        },
        warning: {
          bg: "#2c2212",
          text: "#fbbf24",
        },
        danger: {
          bg: "#341416",
          text: "#f87171",
        },
        info: {
          bg: "#10223c",
          text: "#60a5fa",
        },
      },
    },
  },
  plugins: [],
}

export default config
