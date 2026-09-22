import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brand kit: Spring Flow / Italic, approved 2026-09-21.
      // Contrast against WHITE measured before adoption — respect these limits:
      //   primary  #006F9D  5.58:1  the ONLY brand colour that passes AA for small text
      //   accent   #0087B5  4.09:1  FAILS small text. Large text (24px+), icons, graphics only.
      //   leaf     #609C35  3.33:1  FAILS small text. Graphic/accent device only, never body copy.
      //   ink      #12323E 13.54:1
      // Buttons and links take `primary` or `ink`. Never set body copy in `leaf` or `accent`.
      colors: {
        // Deep navy — headings, footer, dark sections
        ink: {
          DEFAULT: '#12323E',
          soft: '#1C4454',
        },
        // Wordmark blue — buttons, links, body-size brand text
        primary: {
          DEFAULT: '#006F9D',
          light: '#0087B5',
          dark: '#005778',
        },
        // Stream blue — large headings, icons, graphic fills
        accent: {
          DEFAULT: '#0087B5',
          light: '#33A2C7',
          dark: '#006C90',
        },
        // Leaf green — the middle ribbon. Graphic device and large accents only.
        leaf: {
          DEFAULT: '#609C35',
          light: '#7BB552',
          dark: '#4C7C2A',
        },
        // Off-white for alternating sections
        mist: '#F4F7F3',
      },
      // Manrope only. Spectral was dropped with the rebrand: a literary serif
      // fights the new mark's directness and the product-brand positioning.
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // The new identity is FLAT — the old violet→cyan gradient is gone.
        // `splash` is kept as a token name because 36 call sites reference it;
        // it now resolves to a solid brand blue. Deleting the key would make
        // Tailwind silently drop the class and leave white text on transparent.
        splash: 'linear-gradient(90deg, #006F9D 0%, #006F9D 100%)',
        // Three-stripe rule echoing the stream mark. Use as a thin divider only.
        ribbon:
          'linear-gradient(90deg, #0087B5 0%, #0087B5 33%, #609C35 33%, #609C35 66%, #006F9D 66%, #006F9D 100%)',
      },
    },
  },
  plugins: [],
}

export default config
