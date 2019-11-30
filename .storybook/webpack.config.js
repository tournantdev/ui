const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = ({ config }) => {
	// configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// You can change the configuration based on that.
	// 'PRODUCTION' is used when building the static version of storybook.

	config.module.rules.push({
		test: /\.scss$/,
		use: ['vue-style-loader', 'css-loader', 'sass-loader']
	})

	config.resolve.alias = {
		...(config.resolve.alias || {}),
		'@h': path.resolve(__dirname, '../helper'),
		vue$: 'vue/dist/vue.esm.js'
	}

	// Return the altered config
	return config
}
