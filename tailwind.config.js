module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          light: '#00F395'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
