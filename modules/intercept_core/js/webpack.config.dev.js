const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: {
      interceptClient: './src/interceptClient.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    externals: {},
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            plugins: [
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-object-rest-spread',
            ],
            presets: [
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
