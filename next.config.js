const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.experiments = {};
    config.resolve.alias['styles'] = path.join(__dirname, 'src/styles');
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['fonts'] = path.join(__dirname, 'src/fonts');
    config.resolve.alias['contexts'] = path.join(__dirname, 'src/contexts');
    config.resolve.alias['reducers'] = path.join(__dirname, 'src/reducers');
    return config;
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  }
}