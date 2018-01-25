const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: {
      locationsList: './src/locationsList.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
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
