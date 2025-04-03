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
        primary: '#00E5B3',
        secondary: '#3E8BFF',
        dark: {
          DEFAULT: '#0D1117',
          lighter: '#1A202C',
        },
      },
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 