/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {},
  daisyui: {
    themes: ["forest"],
  },
  plugins: [require("daisyui")],
}

