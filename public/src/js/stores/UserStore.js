import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import UserAPI from '../api/UserAPI';
import extend from 'lodash/extend';
var Constants = require('../constants');



var _user = [];
var _authenticated = false;

var RegisterStore = extend({}, StandardStore, {

	getLogin() {
		return _user;
	},

  isAuthenticated() {
    return _authenticated;
  }

  });
RegisterStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.REGISTER_ATTEMPT:
          _authenticated = false;
        // debugger;
          UserAPI.getRegister(data);
          break;

      case Constants.REGISTER_SUCCESS: 
        _user = data;
        _authenticated = true;
        //RouterStore.get().push('/')
        // debugger;
	    	break;

        case Constants.LOGIN_ATTEMPT:
          _authenticated = false;
        debugger;
          UserAPI.getLogin(data);
          break;

      case Constants.LOGIN_SUCCESS: 
        _user = data;
        _authenticated = true;
        //RouterStore.get().push('/')
        // debugger;
        break;

        default:
        return true;
      }

      RegisterStore.emitChange();

      return true;

    });

module.exports = RegisterStore;
