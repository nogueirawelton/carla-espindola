export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        jomolhari: "var(--font-jomolhari)"
      },
      colors: {
        "black": "#4A4848",
        "white": "#FEFEFE",
        "green-500": "#3E4841",
        "green-whatsapp": "#25D366",
        "beige-500": "#EEEBE6",
        "beige-700": "#D3CAB7",
      },
      backgroundImage: {
        "green-icon": "url(/img/icon-bg.webp)"
      },
      keyframes: {
        "menu": {
          from: {
            opacity: "0",
            transform: "translateX(-16px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "item": {
          from: {
            opacity: "0",
            transform: "translate(-50%, -55%)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%,-50%)",
          },
        },
      },
      animation: {
        "menu": "menu .6s forwards",
        "item": "item .6s forwards",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}