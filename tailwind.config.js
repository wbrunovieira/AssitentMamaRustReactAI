/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F4F9",    // Cor de fundo principal
        secondaryBackground: "#E1E7EC", // Cor de fundo secundária
        primaryText: "#333333",  // Cor do texto principal
        secondaryText: "#777777", // Cor do texto secundário
        highlight: "#6C5B7B", // Cor de destaque
        buttonPrimary: "#A1C4D6", // Cor de botão principal
        buttonAction: "#F2A65A", // Cor de botão de ação
        border: "#D1D5DB",  // Cor de bordas e contornos
        error: "#E74C3C",  // Cor de erro
      },
    },
  },
  plugins: [],
}
