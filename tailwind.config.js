/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {colors: {
      "brown":"#CAA892",
    },
    screens: {
      '2xlarge': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xlarge': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'large': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'medium': {'max': '790px'},
      // => @media (max-width: 767px) { ... }

      'small': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
fontFamily:{
      'display': ['cursive'],
}
  },
  },
  plugins: [],
}

