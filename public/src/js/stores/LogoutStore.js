import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import LogoutAPI from '../api/LogoutAPI';
import extend from 'lodash/extend';
var Constants = require('../constants');



var _logout = [];
var _authenticated = true;

var LogoutStore = extend({}, StandardStore, {

	getLogin() {
		return _logout;
	},

  isLoaded() {
    return _authenticated;
  }

  });
LogoutStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.LOGOUT_ATTEMPT:
          LogoutAPI.get();
          break;

        case Constants.LOGOUT_SUCCESS:
          _authenticated = false;
          debugger;
          break;

        default:
        return true;
      }

      LogoutStore.emitChange();

      return true;

    });

module.exports = LogoutStore;
