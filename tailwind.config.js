/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "script": ["Great Vibes", "cursive"],
        "body": ["Epilogue", "sans-serif"],
      },
      borderRadius: { "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
      colors: {
        "primary": "#e8304f",
        "background-light": "#f8f6f6",
        "background-dark": "#211114",
      },
      backgroundImage: {
        'pastel-sky': 'linear-gradient(135deg, #E6E6FA 0%, #FFE4E1 50%, #FFF8DC 100%)', // Lavender, MistyRose, Cornsilk
        'lavender-sky': 'linear-gradient(to bottom, #E6E6FA, #F8F6F6)',
        'lavender-sky-dark': 'linear-gradient(to bottom, #2D1B2E, #221510)',
      },
      keyframes: {
        float: {
          '0%, 100': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(250px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(250px) rotate(-360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(360deg) translateX(320px) rotate(-360deg)' },
          '100%': { transform: 'rotate(0deg) translateX(320px) rotate(0deg)' },
        },
        pulseglow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 48, 79, 0.4)' },
          '50%': { boxShadow: '0 0 20px 0 rgba(232, 48, 79, 0.7)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(100px, 100vh) rotate(360deg)', opacity: '0' },
        }
      },
      animation: {
        'float-island': 'float 6s ease-in-out infinite',
        'orbit-slow': 'orbit 25s linear infinite',
        'orbit-slower': 'orbitReverse 35s linear infinite',
        'pulse-glow': 'pulseglow 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'drift': 'drift 15s linear infinite',
      }
    },
  },
  plugins: [],
}
