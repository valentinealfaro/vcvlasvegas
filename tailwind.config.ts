import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand-aligned with vcvservices.com:
        // pure-black background, amber gold accent, blue secondary.
        ink: {
          DEFAULT: '#000000',
          900: '#000000',
          800: '#0a0a0a',
          700: '#141414',
          600: '#1a1a1a',
          500: '#222222',
        },
        bone: {
          DEFAULT: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
        },
        stone: {
          warm: '#a89c8a',
          cool: '#8a8a87',
          mist: '#c9c4bb',
        },
        // Amber gold — primary accent, matches vcvservices.com amber-400/500
        gold: {
          DEFAULT: '#fcbb00',  // amber-400
          light: '#ffd236',    // amber-300
          deep: '#b45309',     // amber-700
          champagne: '#fde68a', // amber-200
        },
        // Blue accent — secondary CTA / contractor signal
        accent: {
          DEFAULT: '#2563eb',  // blue-600
          light: '#3b82f6',    // blue-500
          deep: '#1d4ed8',     // blue-700
          glow: '#0a66ff',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        '8xl': ['6.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'slow-zoom': 'slow-zoom 18s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.4s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        // Franchise signature gradients (vcvservices.com)
        'gradient-amber': 'linear-gradient(to right, #fcbb00, #b45309)',
        'gradient-amber-soft': 'linear-gradient(to bottom right, rgba(252,187,0,0.18), rgba(180,83,9,0.04))',
        'gradient-blue': 'linear-gradient(to right, #3b82f6, #1d4ed8)',
        'gradient-blue-radial': 'radial-gradient(circle at 100% 0%, rgba(59,130,246,0.18), transparent 60%)',
        'gradient-amber-radial': 'radial-gradient(circle at 0% 100%, rgba(252,187,0,0.20), transparent 55%)',
        'gradient-ink-fade': 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.92) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
