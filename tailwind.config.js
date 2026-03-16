/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
      },
      boxShadow: {
        glow: '0 20px 60px -30px rgba(59, 130, 246, 0.45)',
      },
    },
  },
  plugins: [],
}
