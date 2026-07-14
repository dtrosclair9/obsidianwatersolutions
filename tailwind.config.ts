import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian black — headings, footer, product hardware
        ink: {
          DEFAULT: '#0B0B0F',
          soft: '#1A1A22',
        },
        // Violet end of the logo splash
        primary: {
          DEFAULT: '#6D28D9',
          light: '#8B5CF6',
          dark: '#5B21B6',
        },
        // Electric-blue end of the logo splash
        accent: {
          DEFAULT: '#2563EB',
          light: '#38BDF8',
          dark: '#1D4ED8',
        },
        // Faint violet-tinted gray for alternating sections
        mist: '#F6F5FA',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        serif: ['var(--font-spectral)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        splash: 'linear-gradient(90deg, #7C3AED 0%, #2563EB 55%, #38BDF8 100%)',
        'splash-soft':
          'linear-gradient(90deg, rgba(124,58,237,0.08) 0%, rgba(37,99,235,0.08) 55%, rgba(56,189,248,0.08) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
