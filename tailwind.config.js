/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        cream: "#F5F0E8",
        charcoal: "#2C2C2C",
        espresso: "#1A1410",
        bronze: "#B07D4E",
        clay: "#C4845A",
        terracotta: "#C46B45",
        sage: "#8A9E7E",
        olive: "#6B7A5E",
        rust: "#8B3E2F",
        forest: "#2D4A3E",
        /* Semantic tokens that flip with dark mode */
        bg: "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        surface: "var(--color-surface)",
        body: "var(--color-text)",
        heading: "var(--color-heading)",
        muted: "var(--color-text-muted)",
        "card-bg": "var(--color-card)",
        "card-alt": "var(--color-card-alt)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
