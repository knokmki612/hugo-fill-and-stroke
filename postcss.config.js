const { join } = require('path')

module.exports = () => ({
  map: false,
  plugins: {
    'postcss-import': {
      path: [join(__dirname, "assets", "style")]
    },
    'postcss-nested': {},
    'css-has-pseudo': {},
    autoprefixer: {},
    'postcss-csso': {},
  }
})
