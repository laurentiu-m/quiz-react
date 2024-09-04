/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#121212",
        primaryFontColor: "#E0E0E0",
        secondFontColor: "#B0BEC5",
        primaryColor: "#1E88E5",
        errorColor: "#CF6679",
      },
      fontFamily: {
        poppins: "Poppins, system-ui",
      },
    },
  },
  plugins: [],
};
