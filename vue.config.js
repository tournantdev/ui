const path = require('path')

module.exports = {
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./demo/main.js')
    config.resolve.alias
      .set('Styles', path.resolve(__dirname, 'src/styles'))
      .set('Demo', path.resolve(__dirname, 'demo'))
  }
}
