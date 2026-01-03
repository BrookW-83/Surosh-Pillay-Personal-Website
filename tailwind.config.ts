import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navy: 'var(--navy)',
        'dark-navy': 'var(--dark-navy)',
        gold: 'var(--gold)',
        'light-bg': 'var(--light-bg)',
      },
      fontFamily: {
        'noto': ['Noto Sans Adlam', 'sans-serif'],
        'noto-variable': ['Noto Sans Adlam Variable', 'sans-serif'],
        'secular': ['Secular One', 'sans-serif'],
        'sans': ['Noto Sans Adlam', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
