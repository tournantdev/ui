import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

export default [
  // Main build to be used with webpack/rollup.
  {
    input: 'src/VueA11yInput.vue',
    output: {
      format: 'esm',
      file: 'dist/VueA11yInput.js'
    },
    plugins: [commonjs(), resolve(), vue(), buble(), terser(), filesize()]
  },
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/VueA11yInput.vue',
    output: {
      format: 'esm',
      file: 'dist/VueA11yInput.esm.js'
    },
    plugins: [commonjs(), vue(), filesize()]
  },
  // SSR build.
  {
    input: 'src/VueA11yInput.vue',
    output: {
      format: 'cjs',
      file: 'dist/VueA11yInput.ssr.js'
    },
    plugins: [commonjs(), vue({ template: { optimizeSSR: true } }), filesize()]
  },
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/VueA11yInput.min.js',
      exports: 'named',
      name: 'VueA11yInput.vue'
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
