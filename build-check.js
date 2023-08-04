const rollup = require('rollup')
const util = require('util')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

const inputOptions = {
  input: ['./src/index.js'],
  plugins: [resolve(), commonjs()]
}
async function buildCheck() {
  // build 阶段
  const bundle = await rollup.rollup(inputOptions)
  // console.log('bundle:', util.inspect(bundle))


  // output 阶段
  const result = await bundle.generate({
    format: 'es'
  })
  console.log('result:', result)
}

buildCheck()