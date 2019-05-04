const path = require('path');

module.exports = ({entry = 'src/entry/client.js', root = cwd} = {}) => ({
  ...common(root),
  entry: path.resolve(root, entry),
  output: {
    path: path.resolve(root, 'dist/static'),
    filename: 'client.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'public/index.html'),
      filename: path.resolve(root, 'dist/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: 'true',
      },
    }),
  ],
});
