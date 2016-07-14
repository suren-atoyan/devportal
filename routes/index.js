'use strict';

module.exports = function(app) {
  app.get('/', require('./test').get);
}
