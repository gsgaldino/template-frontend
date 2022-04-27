const { addBabelPlugin, override, setWebpackStats } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
  setWebpackStats('none'),
);
