module.exports = {
  important: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('src/assets/icons/check.svg')"
        // landscape: "url('/images/landscape/2.jpg')"
      }),
      colors: {
        green: {
          light: '#00F395'
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active']
    }
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true
  }
}
