// rollup.config.js
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */

// module: ESM用的 此文件无用
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

/* 多入口多出口多产物 */
const buildOptions = {
  input: ["src/index.js", "src/util.js"],
  output: [
    {
      // 产物输出目录
      dir: "dist/es",
      // 产物格式
      format: "esm",
    },
    {
      dir: "dist/cjs",
      format: "cjs"
    },
  ],
  plugin: [resolve(), commonjs(), terser()]

};

// 不同入口对应的打包配置不一样：
// const secondOptions = {
//   input: ["src/index.js"],
//   output: [
//     {
//       dir: "dist/second/esm",
//       format: "esm"
//     },
//     {
//       dir: "dist/second/cjs",
//       format: "cjs"
//     }
//   ],
//   plugin: [resolve(),]
// }


export default [buildOptions];