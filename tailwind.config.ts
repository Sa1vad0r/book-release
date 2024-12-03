import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'quinacridone-magenta': '#8b2a55ff',
        'cinereous': '#9a8986ff',
        'rosy-brown': '#be9f91ff',
        'tyrian-purple': '#550d2fff',
        'raisin-black': '#20202eff',
        'rich_black': {
          DEFAULT: '#04080f',
          100: '#010203',
          200: '#020306',
          300: '#03050a',
          400: '#03070d',
          500: '#04080f',
          600: '#19325d',
          700: '#2d5bab',
          800: '#648ed6',
          900: '#b2c6ea',
        },
        'battleship_gray': {
          DEFAULT: '#8a817c',
          100: '#1c1a18',
          200: '#373331',
          300: '#534d49',
          400: '#6e6662',
          500: '#8a817c',
          600: '#a19995',
          700: '#b9b3b0',
          800: '#d0ccca',
          900: '#e8e6e5',
        },
        'silver': {
          DEFAULT: '#bcb8b1',
          100: '#282622',
          200: '#4f4b44',
          300: '#777165',
          400: '#9c958a',
          500: '#bcb8b1',
          600: '#cac7c1',
          700: '#d8d5d1',
          800: '#e5e3e0',
          900: '#f2f1f0',
        },
        'isabelline': {
          DEFAULT: '#f4f3ee',
          100: '#3b3726',
          200: '#756e4d',
          300: '#a8a17a',
          400: '#cfcab5',
          500: '#f4f3ee',
          600: '#f7f6f3',
          700: '#f9f8f6',
          800: '#fbfbf9',
          900: '#fdfdfc',
        },
        'melon': {
          DEFAULT: '#e0afa0',
          100: '#3a1c13',
          200: '#743825',
          300: '#ad5438',
          400: '#cd7d65',
          500: '#e0afa0',
          600: '#e6beb2',
          700: '#eccec5',
          800: '#f3dfd8',
          900: '#f9efec',
        },
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(0deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-right': 'linear-gradient(90deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-bottom': 'linear-gradient(180deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-left': 'linear-gradient(270deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-top-right': 'linear-gradient(45deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-bottom-right': 'linear-gradient(135deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-top-left': 'linear-gradient(225deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-bottom-left': 'linear-gradient(315deg, #8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
        'gradient-radial': 'radial-gradient(#8b2a55ff, #9a8986ff, #be9f91ff, #550d2fff, #20202eff)',
      },
    },
  },
  plugins: [],
} satisfies Config;
