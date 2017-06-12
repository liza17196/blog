import AppDispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import ProfileTableAPI from '../api/ProfileTableAPI';
var Constants = require('../constants');



var _profileTable = {};
var _isLoaded = false;

var ProfileTableStore = extend({}, StandardStore, {

	getProfileTable() {
		return _profileTable;
	},

  isLoaded(){
    return _isLoaded;
  }

  });
ProfileTableStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.PROFILE_TABLE_ATTEMPT:
          _isLoaded = false;
          ProfileTableAPI.get(data);
          break;

      case Constants.PROFILE_TABLE_SUCCESS: 
        _profileTable = data;
        _isLoaded = true;
	    	break;

        default:
        return true;
      }

      ProfileTableStore.emitChange();

      return true;

    });

module.exports = ProfileTableStore;
