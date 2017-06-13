import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import UserAPI from '../api/UserAPI';
import extend from 'lodash/extend';
import RouterStore from './RouterStore';
var Constants = require('../constants');



var _user = [];
var _isLoaded = false;

var UserStore = extend({}, StandardStore, {

	getUser() {
		return _user;
	},

  getRole() {
    return _user.role;
  },

  isLoaded() {
    return _isLoaded;
  },

});
UserStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.REGISTER_ATTEMPT:
          _isLoaded = false;
          UserAPI.getRegister(data);
          break;

      case Constants.REGISTER_SUCCESS: 
        _user = data;
        _isLoaded = true;
        RouterStore.get().push('/');
	    	break;

        case Constants.LOGIN_ATTEMPT:
          _isLoaded = false;
          UserAPI.getLogin(data);
          break;

      case Constants.LOGIN_SUCCESS: 
        _user = data;
        _isLoaded = true;
        RouterStore.get().push('/');
        break;

      case Constants.LOGOUT_ATTEMPT: 
        _isLoaded = true;
          UserAPI.getLogout(data);
          break;
      
      case Constants.LOGOUT_SUCCESS: 
        _user = data;
        _isLoaded = true;
        RouterStore.get().push('/');
        break;

      case Constants.CHECK_ATTEMPT: 
          UserAPI.getCheck();
          break;
      
      case Constants.CHECK_SUCCESS:
        _isLoaded = true;
        _user = data;
        break;


        default:
        return true;
      }

      UserStore.emitChange();

      return true;

    });

module.exports = UserStore;
