/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,jsx}'],
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
