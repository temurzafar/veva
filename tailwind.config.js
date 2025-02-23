/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        'primary': '#1CBBEE',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1552px',
    },
  },
  plugins: [],
}

