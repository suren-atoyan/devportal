import $ 			from '../../node_modules/jquery/dist/jquery.js';
import jQuery from '../../node_modules/jquery/dist/jquery.js';
window.jQuery = jQuery;
require('../../semantic/dist/components/dimmer');

import Dispatcher from './controller/dispatcher.js';

Dispatcher.trigger('create:app.login.view');