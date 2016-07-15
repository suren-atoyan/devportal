'use strict';

import _ from 'underscore';

import Backbone from 'backbone';

var Dispatcher = _.extend({}, Backbone.Events);

var api = {
  app_composite: function(options) {
    var CompositeView = require('../views/app.composite.view');
    new CompositeView.default;
  },

  login: function() {
  	var LoginView = require('../views/app.login.view');
    new LoginView.default;
  }
}

Dispatcher.on({
  'create:app.composite.view': 		api.app_composite,
  'create:app.login.view':  api.login,
});

export default Dispatcher;
