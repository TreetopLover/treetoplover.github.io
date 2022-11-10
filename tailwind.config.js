/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      navcolor: '#B9C8DD',
      darklink: '#B55522',
      lightlink: '#DA7638' 
    }
  },
  plugins: [],
}
