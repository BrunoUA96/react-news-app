/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat'],
        title: ['Playfair Display'],
      },
    },
  },
  /*eslint-env node*/
  plugins: [require('@tailwindcss/line-clamp')],
};
