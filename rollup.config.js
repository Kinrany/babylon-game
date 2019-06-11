import typescript from 'rollup-plugin-typescript';
import node_resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/main.ts',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    node_resolve(),
    commonjs(),
    typescript(),
  ]
}
