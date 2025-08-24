/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0a0a',      // Negro principal
        'secondary': '#1f1f1f',    // Gris oscuro
        'accent': '#e50914',       // Rojo vibrante
        'text-primary': '#f5f5f5', // Blanco/Gris claro para texto
        'text-secondary': '#a0a0a0', // Gris para texto secundario
      },
      fontFamily: {
        sans: ['"Anton"', 'sans-serif'], // Una fuente deportiva y fuerte
        body: ['"Roboto"', 'sans-serif'], // Fuente legible para el cuerpo
      },
    },
  },
  plugins: [],
};
