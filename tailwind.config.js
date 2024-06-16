/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "arc-move": {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) translateX(20px) scale(1.5)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "arc-move": "arc-move 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
