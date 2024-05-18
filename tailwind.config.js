/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Josefin Sans', sans-serif",
      },
      screens: {
        'xs': '320px',
      },
      colors: {
        AzulCyan: "#4487EB",
        blancoFondo: "#F5F5F5",
        azulvivo: "#191970",
        azulCorpotativo: "#5485d2",
        azulCielo: "#5885b7",
        blancoTransparente: "#ffffff90",
      },

      Animation: {
        fadeIn: "fadeIn",
        fadeOut: "fadeOut",
        scaleIn: "scaleIn",
        scaleOut: "scaleOut",
        saltosA: "saltos 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        scaleIn: {
          "0%": { transorm: "scale(0)" },
          "100%": { transorm: "scale(1)" },
        },
        scaleOut: {
          "0%": { transorm: "scale(1)" },
          "100%": { transorm: "scale(0)" },
        },
        saltos: {
          "0%": { translateY: "0rem" },
          "50%": { translateY: "5rem" },
          "100%": { translateY: "0rem" },
        },
      },
    },
  },
  plugins: ["tailwindcss-animated"],
};
