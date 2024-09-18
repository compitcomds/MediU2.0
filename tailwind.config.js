/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1520px'
    },
  },
  plugins: [require('daisyui'),],
}

