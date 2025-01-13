/** @type {import('tailwindcss').Config} */
import { themes } from "daisyui/src/theming/themes";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    screens: {
      sm: "400px", // decrease small breakpoint from 640px to support small phones (e.g. iPhone SE)
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...themes["bumblebee"],
          primary: "#FCE589",
        },
      },
    ],
  },
};