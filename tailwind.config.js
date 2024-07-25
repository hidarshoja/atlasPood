/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['ProximaNovaCond', 'sans-serif'],
      },
      colors: {
        brown1: '#443427',
        brown2: '#674937', 
        brown3: '#75614e', 
        brown4: '#8e8076', 
        brown5: '#7e7367', 
        white1: '#c9c5bc', 
      },

    },
  },
  plugins: [],
};
