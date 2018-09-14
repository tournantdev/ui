const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('Styles', path.resolve(__dirname, 'src/styles'))
  }
}
