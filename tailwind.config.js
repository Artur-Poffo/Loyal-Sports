/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        loyal: {
          100: '#fefcfc',
          200: '#EEE',
          500: '#38b6ff',
          600: '#5c5c67',
          700: '#313131',
          800: '#161616',
          900: '#0b0b0b',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
