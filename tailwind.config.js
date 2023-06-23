/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-o': 'linear-gradient(45deg, #f97141 50%, #1a1a1a80 calc( 50% + 2px ))'
      },
    },
  },
  plugins: [],
}

