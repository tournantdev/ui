import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/A11yCombobox.vue',
    output: {
      format: 'esm',
      file: 'dist/A11yCombobox.esm.js'
    },
    plugins: [vue(), filesize()]
  },
  // SSR build.
  {
    input: 'src/A11yCombobox.vue',
    output: {
      format: 'cjs',
      file: 'dist/A11yCombobox.ssr.js'
    },
    plugins: [vue({ template: { optimizeSSR: true } }), filesize()]
  },
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/A11yCombobox.min.js',
      exports: 'named',
      name: 'A11yCombobox.vue'
    },
    plugins: [vue(), buble(), terser(), filesize()]
  }
]
