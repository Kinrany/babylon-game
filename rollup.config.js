import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import node_resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript';

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
    serve(),
    livereload(),
  ]
};
