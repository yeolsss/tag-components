/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1ch": "1ch",
      },
      minWidth: {
        "1ch": "1ch",
      },
    },
  },
  plugins: [],
};
