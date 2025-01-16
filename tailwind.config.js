/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D1D1C7",
        secondary: "#080807",
        third: "#6B645C",
        fourth: "#393632",
        thin_text: "#A29E9A"
      },
      fontFamily: {
        prompt: ["Prompt"],
        libre: ["Libre Franklin"]
      }
    },
  },
  plugins: [],
};
