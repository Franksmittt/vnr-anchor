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
          DEFAULT: '#234694', // Royal Blue - Primary brand color
          light: '#3d5ba8',   // Lighter Royal Blue accent
          dark: '#1a3569',    // Darker Royal Blue for emphasis
        },
        'brand-teal': {
          DEFAULT: '#92C741', // Lime Green - Secondary brand color (checkmark accent)
          light: '#a8d45f',   // Lighter Lime Green accent
          dark: '#7ab033',    // Darker Lime Green for emphasis
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