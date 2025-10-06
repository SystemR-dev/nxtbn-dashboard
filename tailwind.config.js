/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
        "background-light": "#F8F9FA",
        "background-dark": "#121212",
        "card-light": "#FFFFFF",
        "card-dark": "#1E1E1E",
        "text-light": "#1F2937",
        "text-dark": "#E5E7EB",
        "text-muted-light": "#6B7280",
        "text-muted-dark": "#9CA3AF",
        "border-light": "#E5E7EB",
        "border-dark": "#374151"
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}