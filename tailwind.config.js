/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      title: ["Karla", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    borderRadius: {
      sm: "8px",
      lg: "20px",
    },
    extend: {
      colors: {
        black: "#333333",
        maroon: "#800F2F",
        brick: "#AC344B",
        pink: "#D87084",
        peach: "#FFBD98",
        salmon: "FFA9A2",
        coral: "#EC9F89",
        "light-peach": "rgba(255, 189, 152, 0.05)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(90deg, #AC344B 0%, #D87084 60%, #FFBD98 100%)",
        glow: "url('@/assets/images/glow.png')",
      },
    },
  },
  plugins: [],
};
