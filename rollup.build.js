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
            node: 'current',
          },
          modules: false,
          loose: true,
        },
      ],
    ],
  }),
];

async function build() {
  let inputOptions = {
    input: 'src/react.index.js',
    plugins: plugins,
  };

  let outputOptions = {
    format: 'es',
    file: 'priv/elixir_script/react.js',
    sourcemap: 'inline',
  };

  let bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);

  inputOptions = {
    input: 'src/react_dom.index.js',
    plugins: plugins,
  };

  outputOptions = {
    format: 'es',
    file: 'priv/elixir_script/react_dom.js',
    sourcemap: 'inline',
  };

  bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);
}

build();
