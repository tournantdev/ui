const path = require('path')

module.exports = {
  /* configureWebpack: {
    resolve: {
      alias: {
        'Styles': path.resolve(__dirname, 'src/styles')
      }
    }
  } */
  chainWebpack: (config) => {
    config.resolve.alias.set('Styles', path.resolve(__dirname, 'src/styles'))
  }
}
