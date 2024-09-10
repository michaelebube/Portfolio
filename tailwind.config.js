/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        megrim: ['Megrim', 'system-ui'],
        majorMono: ['Major Mono Display', 'monospace'],
        marko: ['Marko One', 'serif'],
        mina: ['Mina', 'sans-serif'],
        poiret: ['Poiret One', 'sans-serif']
      },
      rotate: {
        'custom35': '40deg'
      }
    },
  },
  plugins: [],
}

