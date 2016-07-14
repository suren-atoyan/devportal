import Backbone from 'backbone';
import jQuery from '../../../node_modules/jquery/dist/jquery.js';
import '../../../node_modules/jquery.terminal/js/jquery.terminal.min.js';

var tpl = require('../tpls/app.composite.js');

var test = Backbone.View.extend({
  el: '#app_composite',

  events: {
    'click .meta a': 'modal_show',
    'click #prog_langs.menu .item': 'load_messages',
    'click img': 'terminal_show',
  },

  template: tpl,

  initialize: function() {
    this.data = {
      first_name: 'Suren',
      last_name: 'Atoyan',
    };
    this.data.full_name = this.data.first_name
                          + ' ' + this.data.last_name;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.data));
    this.$('.ui.dropdown')
        .dropdown();
    this.$('#prog_langs.menu .item')
        .tab({
          cache: true,
          // faking API request
          apiSettings: {
            loadingDuration : 300,
            mockResponse    : function(settings) {
              var response = {
                first  : 'AJAX Tab One',
                second : 'AJAX Tab Two',
                third  : 'AJAX Tab Three'
              };
              return response[settings.urlData.tab];
            }
          },
          context : 'parent',
          auto    : true,
          path    : '/'
        });
    return this;
  },

  modal_show: function() {
    console.log(Backbone);
    this.$('.ui.basic.modal')
        .modal('show');
      },

  terminal_show: function(e) {
    jQuery(function($, undefined) {
      $('#js_terminal').terminal(function(command, term) {
          if (command !== '') {
              try {
                  var result = window.eval(command);
                  if (result !== undefined) {
                      term.echo(new String(result));
                  }
              } catch(e) {
                  term.error(new String(e));
              }
          } else {
             term.echo('');
          }
      }, {
          greetings: 'Javascript Interpreter',
          name: 'js_terminal',
          height: 300,
          prompt: 'js$ '
      });
    });
    this.$('#js_terminal').toggle('show');
  },

  load_messages: function(e) {
    var tab = this.$(e.target).data('tab');

  }
});

export default test;