/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    //? ----- WHITESPACE SYSTEM -----
    spacing: {
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      24: '2.4rem',
      32: '3.2rem',
      48: '4.8rem',
      64: '6.4rem',
      80: '8rem',
      96: '9.6rem',
      128: '12.8rem',
    },

    //? ----- TYPOGRAPHY SYSTEM -----
    fontSize: {
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
      30: '3rem',
      36: '3.6rem',
      44: '4.4rem',
      52: '5.2rem',
      62: '6.2rem',
      74: '7.4rem',
      86: '8.6rem',
      98: '9.8rem',
    },
    lineHeight: {
      DEFAULT: '1',
      medium: '1.2',
      paragraph: '1.5',
    },
    letterSpacing: {
      DEFAULT: '0.1rem',
      0.1: '0.01rem',
      0.25: '0.025rem',
      1.25: '0.125rem',
      1.5: '0.15rem',
      6: '0.6rem',
    },

    // ! Rem and em do not depend on html font-size in media queries.
    // ! Instead, 1rem = 1em = 16px

    // ! We use em units for media queries because rem has some bugs in media queries.
    /* 
    Example:
    1680px / 16px = 105em
    */
    screens: {
      'bigger-desktops': { max: '105em' },
      'smaller-desktops': { max: '85em' },
      'landscape-tablets': { max: '75em' },
      tablets: { max: '59em' },
      'smaller-tablets': { max: '44em' },
      phones: { max: '34em' },
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },

      // ? ----- COLOR SYSTEM
      colors: {
        background: '#f0f4f7',
        primary: {
          DEFAULT: '#6200EE',
          shade: { 200: '#BB86FC', 500: '#6200EE', 700: '#3700B3' },
          tint: { 1: '#F2F8FF', 2: '#F3FAFF', 3: '#E6F4F1' },
        },
        secondary: {
          DEFAULT: '#333333',
          shade: { 100: '#03DAC5' },
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        black: '#202223',
        general: {
          DEFAULT: '#1349A0',
          tint: { 1: '#D5E3F9', 2: '#3877DD', 3: '#326bc7' },
          shade: { 1: '#0E3C87' },
        },
        success: {
          DEFAULT: '#2DA013',
          tint: { 1: '#568500', 2: '#D6F9D5' },
          shade: { 1: '#2B4200' },
        },
        warning: { DEFAULT: '#DD8D38', tint: { 1: '#F9EDD5' } },
        danger: { DEFAULT: '#A01313', tint: { 1: '#F9D5D5' } },
        border: {
          DEFAULT: '#8C9196',
          subdued: '#C9CCCF',
        },
        surface: {
          depressed: '#EDEEEF',
          disabled: '#F6F6F7',
        },
        typography: {
          disabled: '#8C9196',
        },
        light: {
          background: '#f0f4f7',
          primary: '#1094DD',
        },
        dark: {
          background: '#1f2937',
          primary: '#60a5fa',
          tint: { 1: '#334155', 2: '#181818' },
        },
      },

      // ? ----- SHADOW SYSTEM
      boxShadow: {
        disabled: '0px -0.9471396207809448px 0px 0px rgba(0, 0, 0, 0.08) inset',
        'active-primary': '0 0 0 3px rgba(64, 0, 83, 0.5)',
      },

      // ? ----- ANIMATION
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: ['tailwindcss-animate'],
}
