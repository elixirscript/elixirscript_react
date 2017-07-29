const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const plugins = [
  resolve({}),
  commonjs(),
  babel({
    babelrc: false,
    presets: [
      [
        'env',
        {
          targets: {
            node: 'current'
          },
          modules: false,
          loose: true
        }
      ]
    ]
  })
];

rollup
  .rollup({
    entry: 'src/react.index.js',
    dest: 'priv/elixir_script/react.js',
    sourceMap: 'inline',
    format: 'es',
    plugins: plugins
  })
  .then(bundle => {
    bundle.write({
      format: 'es',
      dest: 'priv/elixir_script/react.js'
    });
  });

rollup
  .rollup({
    entry: 'src/react_dom.index.js',
    dest: 'priv/elixir_script/react_dom.js',
    sourceMap: 'inline',
    format: 'es',
    plugins: plugins
  })
  .then(bundle => {
    bundle.write({
      format: 'es',
      dest: 'priv/elixir_script/react_dom.js'
    });
  });
