// Create in this page jQuery and Semantic-Ui
import $ 			from '../../node_modules/jquery/dist/jquery.js';
import jQuery from '../../node_modules/jquery/dist/jquery.js';
window.jQuery = jQuery;
require('../../semantic/dist/components/dimmer');
require('../../semantic/dist/components/transition');
require('../../semantic/dist/components/modal');
require('../../semantic/dist/components/dropdown');
require('../../semantic/dist/components/tab');
require('../../semantic/dist/components/rating');
require('../../semantic/dist/components/popup');
require('../../semantic/dist/components/sticky');

require('../../semantic/dist/components/api');


import Dispatcher from './controller/dispatcher.js';

Dispatcher.trigger('create:app.composite.view');
