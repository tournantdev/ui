const base = require('../../jest.config.base.js')
const { name } = require('./package')

// Package name is scoped to @tournant org, split @tournant/package-name for use in path matcher
const folderName = name.split('/')[1]

module.exports = {
	...base,
	roots: [`<rootDir>/packages/${folderName}`],
	displayName: name,
	name,
	rootDir: '../..',
	modulePaths: [`<rootDir>/packages/${folderName}`]
}
