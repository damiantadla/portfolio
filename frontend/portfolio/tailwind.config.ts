import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBlack: '#171717',
        orange: '#fd853a',
        darkBlue: "#344054",
        secondary: "#36509A",
        ai: "#EDF2FF",
        date: "#0D082C66",
        whiteOpacity: "rgba(255,255,255,0.2)",
        whiteOpacityHover: "rgba(255,255,255,0.3)",
        avatarGrey: "#EAEAEA",
        blackLight: "#0D082C"
      },
      backgroundImage: {
        'back-pattern': "url('/background.png')",
        'back-grey': "url('/backgroundGrey.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
