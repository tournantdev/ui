const path = require('path')

module.exports = {
	outputDir: path.resolve(__dirname, 'ui/dist'),
	configureWebpack: {
		/* plugins: [
			new CopyWebpackPlugin([
				{
					from: path.join(__dirname, 'ui/public'),
					to: path.join(__dirname, 'ui/dist'),
					toType: 'dir',
					ignore: ['index.html', '.DS_Store']
				}
			])
		] */
	},
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].template = path.join(__dirname, 'ui/public/index.html')
			return args
		})
		config
			.entry('app')
			.clear()
			.add('./ui/src/main.js')
		config.resolve.alias
			.set('@p', path.resolve(__dirname, 'packages'))
			.set('Styles', path.resolve(__dirname, 'src/styles'))
			.set('Demo', path.resolve(__dirname, 'demo'))
	}
}
