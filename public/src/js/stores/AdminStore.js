import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import AdminAPI from '../api/AdminAPI';
import extend from 'lodash/extend';
var Constants = require('../constants');



var _usersList = [];
var _isLoaded = false;

var AdminStore = extend({}, StandardStore, {

	getUsersList() {
		return _usersList;
	},

  isLoaded() {
    return _isLoaded;
  }

  });
AdminStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.USERS_LIST_ATTEMPT:
          _isLoaded = false;
	        AdminAPI.get();
	        break;

	    case Constants.USERS_LIST_SUCCESS: 
        _isLoaded = true;
        _usersList = data;
	    	break;

        default:
        return true;
      }

      AdminStore.emitChange();

      return true;

    });

module.exports = AdminStore;
