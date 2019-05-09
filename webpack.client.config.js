const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.config.js');

const cwd = process.cwd();

module.exports = ({entry = 'src/entry/client.js', root = cwd} = {}) => ({
  ...common(root),
  entry: path.resolve(root, entry),
  output: {
    path: path.resolve(root, 'dist/static'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: path.resolve(root, 'dist/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: 'true',
      },
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
