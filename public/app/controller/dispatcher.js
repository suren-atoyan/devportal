'use strict';

import _ from 'underscore';

import Backbone from 'backbone';

var Dispatcher = _.extend({}, Backbone.Events);

var api = {
  test: function(options) {
    var CompositeView = require('../views/app.composite.view');
    new CompositeView.default;
  }
}

Dispatcher.on({
  'create:app.composite.view': api.test,
});

export default Dispatcher;
