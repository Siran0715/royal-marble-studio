/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        quarry: '#F6F3EC',
        quarry2: '#EDE8DC',
        ink: '#161513',
        ink2: '#211F1B',
        graphite: '#4B4842',
        stone: '#C9C4B8',
        stoneLight: '#E4E0D4',
        brass: '#9C7A3C',
        brassBright: '#C79A4B',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        plaque: '0 1px 0 rgba(156,122,60,0.4), 0 20px 60px -20px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'brass-line': 'linear-gradient(180deg, transparent, #9C7A3C, transparent)',
      },
      keyframes: {
        veinDrift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-1%,1%,0) scale(1.03)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        veinDrift: 'veinDrift 22s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
