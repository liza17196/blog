import Router from './components/Router';
import Dispatcher  from './dispatcher';
import Constants from './constants';

var actions = {
    handle: function(constant, data) {
      Dispatcher.handleAction({
        actionType: Constants[constant],
        data: data
      });
    },
};

module.exports = actions;
