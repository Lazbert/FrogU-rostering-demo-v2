/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      
      colors: {
        haze: "#F1F4F1",
        darkGreen: "#2C4036",
        dimGreen: "#869886",
        lightGreen: "#C0E4C0",
        cyan: "#367878",
        turquoise: "#5BC6C6",
        cardBgOrange: "#F4E3BA",
        cardTitleOrange: "#7E3705",
        cardTextOrange: "#AF4B06",
        cardBgBlue: "#BCE2FA",
        cardTitleBlue: "#0E4C72",
        cardTextBlue: "#346F94",
        darkBlue: "#000075",
        mediumGray: "#7F7F7F"
      }
    },
  },
  plugins: [],
};
