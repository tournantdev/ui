import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import alias from 'rollup-plugin-alias'
import del from 'rollup-plugin-delete'
import path from 'path'

const pkg = path.basename(process.env.PWD || process.cwd())
const name = `Tournant${pkg.charAt(0).toUpperCase()}`

const input = 'src/index.vue'

const aliasPlugin = () => {
	return alias({
		entries: [{ find: '@h', replacement: path.join(__dirname, '..', 'helper') }]
	})
}

const fullPlugins = () => [
	aliasPlugin(),
	commonjs(),
	resolve(),
	vue({ css: true }),
	buble({ objectAssign: 'Object.assign' }),
	terser(),
	filesize()
]

export default [
	{
		input,
		output: [
			{
				format: 'esm',
				file: `dist/${pkg}.js`,
				exports: 'named',
				name
			},
			{
				format: 'iife',
				file: 'dist/browser.min.js',
				exports: 'named',
				name
			}
		],
		plugins: [del({ targets: 'dist/*' }), ...fullPlugins()]
	},
	{
		input,
		output: {
			compact: true,
			format: 'cjs',
			name,
			file: `dist/${pkg}.ssr.js`,
			exports: 'named'
		},
		plugins: [
			aliasPlugin(),
			resolve(),
			commonjs(),
			vue({ template: { optimizeSSR: true } }),
			filesize()
		]
	}
]
