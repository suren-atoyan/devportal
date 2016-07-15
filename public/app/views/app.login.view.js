import Backbone from 'backbone';

var tpl = require('../tpls/app.login.js');

var LoginView = Backbone.View.extend({

  el: 'body',

  template: tpl,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.template() );
  },

});

export default LoginView;
