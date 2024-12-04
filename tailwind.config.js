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
      mobile: "375px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1500px",
    },
    fontFamily: {
      title: ["Karla", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    borderRadius: {
      sm: "8px",
      lg: "20px",
      xl: "40px",
    },
    container: {
      center: true,
      padding: {
        mobile: "2rem",
        tablet: "20px",
        laptop: "12rem"
      }
    },
    extend: {
      colors: {
        black: "#333333",
        grey: "#b4b4b4",
        "light-grey": "#d7d7d7",
        maroon: "#800F2F",
        brick: "#AC344B",
        pink: "#D87084",
        "light-pink": "rgba(216,112,132, 0.07)",
        peach: "#FFBD98",
        salmon: "FFA9A2",
        coral: "#EC9F89",
        "light-peach": "rgba(255, 189, 152, 0.05)",
        "transparent-pastel-1": "rgba(255, 169, 162, 0.10)",
        "transparent-pastel-2": "rgba(255, 189, 152, 0.10)",
        "transparent-pastel-3": "rgba(224, 130, 102, 0.10)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(90deg, #AC344B 0%, #D87084 60%, #FFBD98 100%)",
        glow: "url('@/assets/images/glow.png')",
        "corner-glow-left":
          "radial-gradient(circle at top left, #D87084, transparent)",
        "corner-glow-right":
          "radial-gradient(circle at top right, #FD8C6E, transparent)",
      },
    },
  },
  plugins: [],
};
