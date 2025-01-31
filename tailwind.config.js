/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ex: "#262626",
        ew: "#6E4F65",
        cr: "#A04242",
        en: "#C47248",
        vu: "#B8A933",
        nt: "#9CAC47",
        lc: "#5E8B5A",
        dd: "#9A9A89",
        ne: "#CFCFBD",
        re: "#8B5C82",
        na: "#9E8772" 
      }
    },
    fontFamily: {
      noto: ['var(--font-noto)'],
      firaGo: ['var(--font-firaGo)'],
      arial: ['var-(--font-arial)'],
      bpg: ['var-(--font-bpg)']
    }
  },
  plugins: [],
}
