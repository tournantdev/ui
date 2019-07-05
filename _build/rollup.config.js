import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import path from 'path'

const pkg = path.basename(process.env.PWD || process.cwd())
const name = `Tournant${pkg.charAt(0).toUpperCase()}`

const input = 'src/index.vue'

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
    plugins: [
      commonjs(),
      resolve(),
      vue(),
      buble({ objectAssign: 'Object.assign' }),
      terser(),
      filesize()
    ]
  },
  // ESM build to be used with webpack/rollup.
  {
    input,
    output: {
      format: 'esm',
      file: `dist/${pkg}.esm.js`
    },
    plugins: [commonjs(), vue(), filesize()]
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
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      buble({ objectAssign: 'Object.assign' }),
      terser(),
      filesize()
    ]
  }
]
