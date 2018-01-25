const path = require('path');

const webpack = require('webpack');
const Minify = require('babel-minify-webpack-plugin');

module.exports = [
  {
    entry: {
      locationsList: './src/locationsList.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new Minify(),
    ],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            plugins: [
              'external-helpers',
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-object-rest-spread',
              'transform-es3-member-expression-literals'
            ],
            presets: [
              'react',
              'stage-0',
              'es2015',
              [
                'env', {
                  modules: false,
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                },
              ],
            ],
          },
        },
      ],
    },
  },
];
