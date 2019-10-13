module.exports = {
	presets: ['@vue/app'],
	env: {
		test: {
			presets: [
				['@vue/babel-preset-app', { modules: 'commonjs', useBuiltIns: false }]
			]
		}
	}
}
