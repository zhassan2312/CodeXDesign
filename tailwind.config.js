/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        grotesk: ['Schibsted Grotesk', 'sans-serif'],
      },
      spacing: {
        '15': '60px', // Height 60px
        '70': '280px', // Width 280px
      },
      
    },
  },
  variants: {},
  plugins: [],
}

