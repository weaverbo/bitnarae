/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      fontSize: {
        sm: "16px",
        base: "18px",
        lg: "24px",
        xl: "32px",
        "2xl": "36px",
        "3xl": "48px",
        "4xl": "64px",
      },
      colors: {
        background: "#212121",
      },
    },
  },
  plugins: [],
};
