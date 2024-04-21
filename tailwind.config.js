/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        signature: ["Great Vibes"],

      },
      animation: {
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      },

    },

  },

  keyframes: {

    'text-focus-in': {
      '0%': {
        'letter-spacing': '-0.5em',
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },

  },

  plugins: [],
};
