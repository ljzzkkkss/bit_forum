if (process.env.ENV === 'production') {
  // Production
  module.exports = require('./config/webpack.prod.js');
} else {
  // Development and test
  module.exports = require('./config/webpack.dev.js');
}
