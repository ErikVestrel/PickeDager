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
        hoverOver:{
          '0%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(1.1)'  },
        },
        twinkle: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
          '50%': { transform: 'translateY(-2px) translateX(2px)', opacity: '0.2' },
        },
        backgroundMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out forwards',
        'fade-left': 'fadeLeft 0.7s ease-in-out forwards',
        'star-twinkle': 'twinkle 3s ease-in-out infinite',
        'background-move': 'backgroundMove 10s linear infinite',
      },
    },
  },
  plugins: [
    pluginTailwind
  ],
}
