/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Afacad: ["Afacad Flux", "sans-serif"],
      },
      colors: {
        hoverBtn: "#A0BCE0",
        hoverBtn1: "#E07575",
        button2: "#DB4444",
        button1: "#00FF66",
        secondary2: "#DB4444",
        secondary1: "#FEFAF1",
        secondary: "#F5F5F5",
        button: "#000000",
        text2: "#000000",
        text1: "#7D8184",
        text: "#FAFAFA",
        bg: "#FFFFFF",
        primary1: "#363738",
        primary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
