import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // VEGAS LIGHT PALETTE — warm cream base, near-black text, amber gold,
        // blue accent, and a coral sunset for energy. Semantic naming is kept
        // so `text-ink` always means "dark text" and `bg-bone` always means
        // "light background" — only the shades flipped, not the meaning.
        ink: {
          DEFAULT: '#0e0e0e',  // primary near-black text
          900: '#0e0e0e',
          800: '#1f1f1f',
          700: '#3a3a3a',
          600: '#525252',
          500: '#737373',      // muted
        },
        bone: {
          DEFAULT: '#faf7f2',  // warm cream — Vegas hotel lobby
          50: '#ffffff',       // pure white — elevated cards
          100: '#f5efe5',      // warmer cream — section alternation
          200: '#ebe3d4',      // soft beige edge
          300: '#dcd2bc',      // sand
          // Higher shades mirror the ink token positions so the
          // dark→light sweep can rewrite mechanically.
          700: '#f5efe5',      // form input bg (parallels bg-ink-700)
          800: '#f0e9dc',      // section alt (parallels bg-ink-800)
          900: '#ebe3d4',
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
        // Coral sunset — Vegas energy accent
        coral: {
          DEFAULT: '#f97316',  // orange-500
          light: '#fb923c',    // orange-400
          deep: '#c2410c',     // orange-700
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
        'cta-pulse': 'cta-pulse 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hairline-grow': 'hairline-grow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer-cta': 'shimmer-cta 4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'glow-amber-sm': '0 0 8px rgba(252, 187, 0, 0.5)',
        'glow-amber': '0 0 18px -4px rgba(252, 187, 0, 0.6)',
        'glow-amber-lg': '0 20px 60px -20px rgba(252, 187, 0, 0.55)',
        'glow-blue': '0 0 18px -4px rgba(59, 130, 246, 0.6)',
        'glow-duotone': '0 12px 40px -10px rgba(252, 187, 0, 0.35), 0 12px 40px -10px rgba(59, 130, 246, 0.25)',
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
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        // Vegas signature gradients
        'gradient-amber': 'linear-gradient(to right, #fcbb00, #f97316)',
        'gradient-sunset': 'linear-gradient(to right, #fcbb00, #fb923c, #f97316)',
        'gradient-amber-soft': 'linear-gradient(to bottom right, rgba(252,187,0,0.20), rgba(249,115,22,0.08))',
        'gradient-blue': 'linear-gradient(to right, #3b82f6, #1d4ed8)',
        'gradient-blue-radial': 'radial-gradient(circle at 100% 0%, rgba(59,130,246,0.22), transparent 60%)',
        'gradient-amber-radial': 'radial-gradient(circle at 0% 100%, rgba(252,187,0,0.25), transparent 55%)',
        'gradient-sunset-radial': 'radial-gradient(circle at 50% 100%, rgba(249,115,22,0.18), transparent 60%)',
        'gradient-bone-fade': 'linear-gradient(to bottom, rgba(250,247,242,0.92) 0%, rgba(250,247,242,0.55) 35%, rgba(250,247,242,0.95) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
