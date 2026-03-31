/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    fontFamily: {
      mono: ["'IBM Plex Mono'", "'Courier New'", 'monospace'],
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        muted: 'var(--m)',
        muted2: 'var(--m2)',
        accent: 'var(--ac)',
        'accent-subtle': 'var(--as)',
        border: 'var(--b)',
        card: 'var(--card)',
        'card-hover': 'var(--ch)',
        nav: 'var(--nav)',
        dot: 'var(--dot)',
        glow: 'var(--glow)',
        ghost: 'var(--ghost)',
        img1: 'var(--img1)',
        img2: 'var(--img2)',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '.3' } },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          from: { transform: 'scaleY(0)', opacity: '0' },
          to: { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        'fade-up-1': 'fadeUp 0.6s 0.15s ease both',
        'fade-up-2': 'fadeUp 0.6s 0.25s ease both',
        'fade-up-3': 'fadeUp 0.6s 0.35s ease both',
        'fade-up-4': 'fadeUp 0.6s 0.45s ease both',
        'fade-up-5': 'fadeUp 0.6s 0.55s ease both',
        'line-grow': 'lineGrow 0.8s ease forwards',
      },
    },
  },
  plugins: [],
};
