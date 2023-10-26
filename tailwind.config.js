/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      width: {
        "600": "600px",
      },
      height: {
        "600": "600px",
      },
      colors: {
        "memes-gray": "#e7e7e7",
        "memes-purple": "#5223cb",
        "memes-light-purple": "#e3dbf5",
        "memes-dark-gray": "#676868"
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}


