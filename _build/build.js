const execSync = require('child_process').execSync
const path = require('path')

const { rollup } = require(path.resolve(
	__dirname,
	'..',
	'node_modules',
	'rollup'
))
const rollupConfig = `${__dirname}/rollup.config.js`
console.log(rollup)

const exec = (command, extraEnv) =>
	execSync(command, {
		stdio: 'inherit',
		env: Object.assign({}, process.env, extraEnv)
	})

console.log('📦 Building Rollup packages')
exec(`${rollup} -c ${rollupConfig}`, {
	BUILD: 'production'
})
