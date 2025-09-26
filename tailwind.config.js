/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        cloud: "#F4F4F5",
        brand: "#0DF5C6",
      },
    },
  },
  plugins: [],
}
