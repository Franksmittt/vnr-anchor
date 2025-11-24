import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          DEFAULT: '#1d4ed8', // A strong base blue (blue-700)
          light: '#3b82f6',   // A lighter accent (blue-500)
          dark: '#1e3a8a',    // A deeper, more corporate blue (blue-900)
        },
        'brand-teal': {
          DEFAULT: '#0d9488', // The base teal (teal-600)
          light: '#2dd4bf',   // A brighter accent (teal-400)
        },
        'surface': {
          light: '#f8fafc',  // A soft off-white (slate-50) for content sections
          dark: '#0f172a',   // A deep, rich slate (slate-900) for hero/footer sections
        },
        'text': {
          primary: '#1e293b',   // Primary text on light surfaces (slate-800)
          secondary: '#475569', // Secondary text on light surfaces (slate-600)
          'on-dark': '#e2e8f0',   // CORRECTED: Primary text on dark surfaces (slate-200)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          'from': { opacity: '0', transform: 'translateY(40px) scale(0.98)', filter: 'blur(5px)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0px)' },
        },
        subtleLift: {
          'from': { transform: 'translateY(0px)', boxShadow: 'var(--tw-shadow)' },
          'to': { transform: 'translateY(-4px)', boxShadow: 'var(--tw-shadow-xl)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'reveal': 'reveal 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards',
        'subtle-lift': 'subtleLift 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;