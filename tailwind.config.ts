import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue : "var(--black)",
        color_black: { "900_99": "var(--color_black_900_99)" },
        blue_gray: { 900: "var(--blue_gray_900)" },
        dark_grey: "var(--dark_grey)",
        gray: {
          "600_19": "var(--gray_600_19)",
          "600_4c": "var(--gray_600_4c)",
          "600_66": "var(--gray_600_66)",
        },
        lavender: "var(--lavender)",
        light: {
          0: "var(--light_0)",
          1: "var(--light_1)",
          2: "var(--light_2)",
        },
        light_grey: "var(--light_grey)",
        light_yellow: "var(--light_yellow)",
        medium_grey: {
          0: "var(--medium_grey_0)",
          1: "var(--medium_grey_1)",
        },
        purple: "var(--purple)",
        yellow: "var(--yellow)",
      },
      fontFamily: {
        sen: ['Sen', 'serif'],
        inter :['Inter' , 'serif' ] // Add your custom font here
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, transparent 10%, black 130%)',
      
      },
    },
  },
  plugins: [],
};
export default config;
