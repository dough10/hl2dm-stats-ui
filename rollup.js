import babel from '@rollup/plugin-babel';
export default {
  input: [
    'src/js/main.js',
    'src/js/tv.js'
  ],
  output: {
    dir: 'html/js',
    format: 'cjs'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};