module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e74c3c',
        accent: '#ff6b54',
        'icon-bg': '#6b8dcd',
        beige: '#f8f6f3',
        dark: '#1a1a1a',
        muted: '#666666'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
}
