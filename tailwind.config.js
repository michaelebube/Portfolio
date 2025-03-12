/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
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
      },
      appearance: {
        none: '-webkit-appearance: none;',
      },
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}

