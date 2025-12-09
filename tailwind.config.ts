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
        accent: {
          primary: '#69CE89',
          secondary: '#FBA16C',
        },
        bg: '#0b0c0d',
        paper: '#0f1112',
        muted: '#9aa0a6',
      },
      borderRadius: {
        xl: '0.75rem',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

export default config
