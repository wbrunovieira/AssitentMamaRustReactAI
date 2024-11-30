/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#F4F4F4",    
        darkText: "#333333",     
        highlight: "#FF6347",    
        buttonAction: "#4682B4", 
        buttonPrimary: "#2C3E50",
      },
    },
  },
  plugins: [],
}
