/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        1: "Sora"
      },
      colors:{
        primary:{
          1: "#E7FE29",
        },
        text:{
          1: "rgba(19, 19, 19, 0.7)",
          2: "rgba(255, 255, 255, 0.7)"
        }
      },
      width:{
        1: "1240px"
      },
      backgroundImage:{
        heroBg: "url(../assets/images/heroBg.png)"
      }
    },
  },
  plugins: [],
}

