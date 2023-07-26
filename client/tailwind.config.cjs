/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgb(249,115,22)',
        'xl': '-2px 10px 30px -10px rgb(249,115,22)',
      },
      borderRadius:{
        'image': '50%'
      },
      letterSpacing:{
        'otp':'3rem'
      },
      fontSize:{
        'otp':'2rem'
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
      flex: {
        '1': '1 0 0%',
        '2':'2 0 0%'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
