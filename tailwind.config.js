/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Palette basée sur palette.svg - #FA5329 (Orange/Rouge)
          50: '#fef5f3',
          100: '#fde8e3',
          200: '#fbd5cc',
          300: '#f8b8a8',
          400: '#f5917a',
          500: '#FA5329', // Rouge/Orange principal
          600: '#e84a25',
          700: '#c43d1f',
          800: '#9f3119',
          900: '#7a2613',
        },
        secondary: {
          // Palette basée sur palette.svg - #474745 (Gris foncé/Noir)
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6b6b6b',
          600: '#5a5a5a',
          700: '#474745', // Noir/Gris foncé principal
          800: '#3a3a38',
          900: '#2d2d2b',
        },
        neutral: {
          // Palette basée sur palette.svg - #B0A89C (Beige/Gris)
          50: '#f7f6f5',
          100: '#edeae7',
          200: '#ddd8d2',
          300: '#c8c0b8',
          400: '#B0A89C', // Beige/Gris principal
          500: '#9a9082',
          600: '#847a6d',
          700: '#6e655a',
          800: '#585047',
          900: '#423b34',
        },
        light: {
          // Palette basée sur palette.svg - #E4E6E3 (Blanc cassé)
          50: '#f9faf9',
          100: '#f3f4f2',
          200: '#E4E6E3', // Blanc cassé principal
          300: '#d4d6d3',
          400: '#c4c6c3',
          500: '#b4b6b3',
          600: '#a4a6a3',
          700: '#949693',
          800: '#848683',
          900: '#747673',
        },
        accent: {
          // Palette basée sur palette.svg - #5BABC5 (Bleu clair - pour accents optionnels)
          50: '#f0f7f9',
          100: '#d9ecf2',
          200: '#b8dbe6',
          300: '#8cc4d6',
          400: '#5BABC5', // Bleu clair
          500: '#4a9bb5',
          600: '#3d8ba3',
          700: '#337589',
          800: '#2d6171',
          900: '#28515e',
        },
        black: {
          DEFAULT: '#474745', // Utilise le gris foncé de la palette
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6b6b6b',
          600: '#5a5a5a',
          700: '#474745',
          800: '#3a3a38',
          900: '#2d2d2b',
        },
        white: {
          DEFAULT: '#E4E6E3', // Utilise le blanc cassé de la palette
          50: '#f9faf9',
          100: '#f3f4f2',
          200: '#E4E6E3',
          300: '#d4d6d3',
          400: '#c4c6c3',
          500: '#b4b6b3',
        },
      },
    },
  },
  plugins: [],
}

