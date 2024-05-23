module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        eduBg: "url('/src/assets/blue-shape.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#43A8EB",
          secondary: "#43A8EB",
          accent: "#212121",
          neutral: "#e5e7eb",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#f87272",
        },
      },
    ],
  },
};
