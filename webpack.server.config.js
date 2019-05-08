const path = require('path');
const common = require('./webpack.common.config.js');

const cwd = process.cwd();

module.exports = ({entry = 'src/entry/server.js', root = cwd} = {}) => ({
  ...common({root}),
  entry: path.resolve(root, entry),
  output: {
    path: path.resolve(root, 'dist'),
    file: 'server.bundle.js',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
});
