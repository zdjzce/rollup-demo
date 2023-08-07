const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
module.exports = {
  input: './src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },

  plugins: [resolve(), commonjs(), alias({
    entries: [
      { find: './module-a', replacement: './src/module.js' }
    ]
  })]
}
