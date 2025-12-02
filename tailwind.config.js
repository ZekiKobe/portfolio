module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0f172a",
          soft: "#1e293b",
        },
        accent: {
          DEFAULT: "#f97316",
          soft: "#fed7aa",
        },
      },
      boxShadow: {
        "soft-card": "0 20px 40px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};


