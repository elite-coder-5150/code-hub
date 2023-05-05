const wp = require('@cypress/webpack-preprocessor')
// const wpOptions = require('../../webpack.config')
// const wpOptions = require('../../../code-hub/code-hub')
// const wpOptions = require('../../config/webpack.config');
// q: why is this not working?
const wpOptions = require('../../config/webpack.config.js');
module.exports = (on, config) => {
  on('file:preprocessor', wp({
    webpackOptions: wpOptions
  }))

  require('@cypress/angular/plugins')(on)

  return config
}

