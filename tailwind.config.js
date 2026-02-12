/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
    colors: {
      primary: "#22c55e",
      dark: "#05070d",
    },
    boxShadow: {
      glow: "0 0 30px rgba(34,197,94,0.35)",
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    }
  },
},

  plugins: [],
}



