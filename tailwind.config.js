/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "var(--first)",
        second: "var(--second)",
      },
      fontFamily:{
        fontCairoBold:"var(--font-Cairo-Bold)",
      },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(#addeed, #bee5f1 30%, #ffefe500)',
           },
    },
  },
  plugins: [],
};
