/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a365d',
          light: '#2a4a7f',
          dark: '#0f2440',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#d4b94e',
          dark: '#a88620',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
