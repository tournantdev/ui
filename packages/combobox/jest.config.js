const base = require('../../jest.config.base.js')
const { name } = require('./package')

// Package name is scoped to @tournant org, split @tournant/package-name for use in path matcher
const path = name.split('/')[1]

module.exports = {
	...base,
	displayName: name,
	name: name,
	rootDir: '../..'
}
