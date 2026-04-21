/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#335f3d", // Dark green for logo
        cta: "#e8601c", // Orange for buttons and accents
        text: "#292524", // Dark text color
        background: "#ffffff", // Pure bright white background
        muted: "#57534e", // Gray for subtitles
        border: "#d6d3d1", // Light border
        secondary: "#fca5a5",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80')",
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"],
        nav: ["Futura", "Futura-Medium", "Century Gothic", "CenturyGothic", "AppleGothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
