let path = require('path');
const resources = require('../../scripts/tasks/webpack-resources');

const BUNDLE_NAME = 'test-app';
const IS_PRODUCTION = process.argv.indexOf('--production') > -1;

module.exports = resources.createConfig(
  BUNDLE_NAME,
  IS_PRODUCTION,
  {
    mode: 'production',

    entry: {
      [BUNDLE_NAME]: './lib/index.js'
    }
  },
  true
);
