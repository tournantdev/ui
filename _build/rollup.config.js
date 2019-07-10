import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import alias from 'rollup-plugin-alias'
import path from 'path'

const pkg = path.basename(process.env.PWD || process.cwd())
const name = `Tournant${pkg.charAt(0).toUpperCase()}`

const input = 'src/index.vue'

const aliasPlugin = alias({
	'@h': path.join(__dirname, '..', 'helper')
})

const fullPlugins = [
	aliasPlugin,
	commonjs(),
	resolve(),
	vue(),
	buble({ objectAssign: 'Object.assign' }),
	terser(),
	filesize()
]

export default [
	// Main build to be used with webpack/rollup.
	{
		input,
		output: {
			format: 'esm',
			file: `dist/${pkg}.js`,
			exports: 'named',
			name
		},
		plugins: fullPlugins
	},
	// ESM build to be used with webpack/rollup.
	{
		input,
		output: {
			format: 'esm',
			file: `dist/${pkg}.esm.js`
		},
		plugins: [aliasPlugin, commonjs(), vue(), filesize()]
	},
	// SSR build.
	{
		input,
		output: {
			format: 'cjs',
			file: `dist/${pkg}.ssr.js`
		},
		plugins: [commonjs(), vue({ template: { optimizeSSR: true } }), filesize()]
	},
	// Browser build.
	{
		input: 'src/wrapper.js',
		output: {
			format: 'iife',
			file: 'dist/browser.js',
			exports: 'named',
			name
		},
		plugins: fullPlugins
	}
]
