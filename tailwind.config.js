/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        linkedin: {
          DEFAULT: '#0077B5',
          dark: '#005885',
          light: '#4A9FD1',
          background: '#0A1929',
          card: '#1E3A5F',
          border: '#2A4A6B'
        }
      }
    },
  },
  plugins: [],
};
