/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '370px',
      sw: '320',
      sn: '340px',
    },
  },
  plugins: [],
};
