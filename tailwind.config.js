/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      "gray": "#cccccc",
      "white": "#ffffff",
      "dark": "#000000",
      DEFAULT: '#ffffff',
    },
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        bannerAnimation: 'move 10s linear infinite',
      },
    },
  },
  plugins: [],
}