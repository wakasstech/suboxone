/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#41CEB3', // the green color from the button
          hover: '#36B09C',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#1E293B',
        },
        green: {
          400: '#4ECDC4',
          500: '#41CEB3',
        },
        yellow: {
          400: '#FFD700', // For star ratings
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'], // Add this
      },
    },

  },
  plugins: [
  ],
}

