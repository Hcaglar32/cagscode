import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily:{
        poppins:["Poppins","sans-serif"],
        roboto:["Roboto","sans-serif"],
        pacifico:["Pacifico","sans-serif"],
      },
  
      colors: {
        mycolor: {
          100: "#A8E6CF", // Açık yeşil
          200: "#56C596", // Orta yeşil
          300: "#379683", // Daha koyu yeşil
          400: "#0D0D11", // Değişmeden kaldı
          500: "#1B4D3E", // Koyu yeşil
          600: "#0A3D2A", // Daha koyu yeşil
        }
      },
      
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config