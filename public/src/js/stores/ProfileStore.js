import AppDispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import actions from '../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import ProfileAPI from '../api/ProfileAPI';
var Constants = require('../constants');

var _profileInfo = {};
var _isLoaded = false;

var ProfileStore = extend({}, StandardStore, {

	getProfileInfo() {
		return _profileInfo;
	},

  isLoaded(){
    return _isLoaded;
  }

  });
ProfileStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.PROFILE_INFO_ATTEMPT:
          _isLoaded = false;
          // debugger;
          ProfileAPI.get(data);
          break;

      case Constants.PROFILE_INFO_SUCCESS: 
      // debugger;
        _isLoaded = true;
        _profileInfo = data;
	    	break;

        default:
        return true;
      }

      ProfileStore.emitChange();

      return true;

    });

module.exports = ProfileStore;
