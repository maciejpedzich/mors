/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fastest-lap': '#a320d6',
        'tyre-s': '#c53537',
        'tyre-m': '#e0cf48',
        'tyre-h': '#c2c4c8',
        'tyre-i': '#4bc048',
        'tyre-w': '#3c78a7',
        'team-0': '#00d2be', // Mercedes
        'team-1': '#dc0000', // Ferrari
        'team-2': '#0600ef', // Red Bull
        'team-3': '#005aff', // Williams
        'team-4': '#006f62', // Aston Martin
        'team-5': '#0090ff', // Alpine
        'team-6': '#2b4562', // AlphaTauri
        'team-7': '#b6babd', // Haas
        'team-8': '#ff8700', // McLaren
        'team-9': '#900000' // Alfa Romeo
      }
    }
  },
  plugins: []
};
