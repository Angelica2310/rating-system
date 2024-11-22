/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        platinum: "var(--platinum)",
        cream: "var(--cream)",
        blue: "var(--blue)",
        brown: "var(--brown)",
      },
    },
  },
  plugins: [],
};
