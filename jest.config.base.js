module.exports = {
	moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'^.+\\.jsx?$': 'babel-jest'
	},
	transformIgnorePatterns: ['/node_modules/'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@h/(.*)$': '<rootDir>/helper/$1',
		'^@p/(.*)$': '<rootDir>/packages/$1'
	},
	moduleDirectories: ['node_modules'],
	snapshotSerializers: ['jest-serializer-vue'],
	testMatch: ['**/tests/unit/**/*.spec.js'],
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/packages/**/src/**/*.vue'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	testURL: 'http://localhost/',
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname'
	]
}
