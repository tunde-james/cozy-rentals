import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-light': 'var(--brand-light)',
        'text1-dark': 'var(--text1-dark)',
        'text2-light': 'var(--text2-light)',
        'surface1-light': 'var(--surface1-light)',
        'surface2-light': 'var(--surface2-light)',
        opacity: 'var(--background-opacity)',
      },
      backgroundImage: {
        house:
          'url(assets/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.webp)',
      },
    },
  },
  plugins: [],
};
export default config;
