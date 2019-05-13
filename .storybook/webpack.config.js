const config = require('../internals/webpack/webpack.base.babel')({plugins: []});

module.exports = {
  module: {
    rules: config.module.rules,
  },
};
