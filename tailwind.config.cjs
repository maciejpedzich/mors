const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Titillium Web', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'fastest-lap': '#a320d6',
        'tyre-s': '#c53537',
        'tyre-m': '#e0cf48',
        'tyre-h': '#c2c4c8',
        'tyre-i': '#4bc048',
        'tyre-w': '#3c78a7',
        'team-1': '#00d2be', // Mercedes
        'team-2': '#dc0000', // Ferrari
        'team-3': '#0600ef', // Red Bull
        'team-4': '#005aff', // Williams
        'team-5': '#006f62', // Aston Martin
        'team-6': '#0090ff', // Alpine
        'team-7': '#2b4562', // AlphaTauri
        'team-8': '#b6babd', // Haas
        'team-9': '#ff8700', // McLaren
        'team-10': '#900000' // Alfa Romeo
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
