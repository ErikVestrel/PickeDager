import pluginTailwind from 'tailwind-scrollbar'
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '2px 2px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0px 0px 15px 6px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out forwards',
        'fade-left': 'fadeLeft 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [
    pluginTailwind
  ],
}
