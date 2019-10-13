module.exports = {
	moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub'
	},
	transformIgnorePatterns: ['/node_modules/'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@h/(.*)$': '<rootDir>/helper/$1',
		'^@p/(.*)$': '<rootDir>/packages/$1'
	},
	snapshotSerializers: ['jest-serializer-vue'],
	testMatch: ['**/tests/unit/**/*.spec.js'],
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/packages/**/src/**/*.vue'],
	testURL: 'http://localhost/',
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname'
	]
}
