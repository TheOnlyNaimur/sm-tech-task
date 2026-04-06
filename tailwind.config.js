/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shadowPulse: {
          '0%, 100%': { boxShadow: '0 0 0px 0px rgba(0,0,0,0)' },
          '50%': { boxShadow: '0 0 24px 8px rgba(0,0,0,0.55)' },
        },
        greenGlow: {
          '0%, 100%': { boxShadow: '0 0 0px 0px rgba(34, 197, 94, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(34, 197, 94, 0.1)' },
        },
      },
      animation: {
        'shadow-pulse': 'shadowPulse 2s ease-in-out infinite',
        'green-glow': 'greenGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
