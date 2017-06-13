import AppDispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import actions from '../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import SettingsAPI from '../api/SettingsAPI';
import RouterStore from './RouterStore';
var Constants = require('../constants');


var _newName = '';
var _newAvatar = [];
var _isDeleted = false;
var _filter = '';
var _id = '';


var SettingStore = extend({}, StandardStore, {

	getNewName() {
		return _newName;
	},

  getNewAvatar() {
    return _newAvatar;
  },

  getIsDeleted() {
    return _isDeleted;
  },

  getFilter() {
    return _filter;
  },

   getId() {
    return _id;
  }

  });

SettingStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.PROFILE_ID:
        _id = data;
        break;

      case Constants.CHANGE_NICKNAME_ATTEMPT:
        SettingsAPI.postChange(data);
        break;

      case Constants.CHANGE_NICKNAME_SUCCESS: 
	    	_newName = data;
        RouterStore.get().push('/profile/'+_id);
	    	break;

      case Constants.UPDATE_AVATAR_ATTEMPT:
        SettingsAPI.postUpdate(data);
        break;

      case Constants.UPDATE_AVATAR_SUCCESS: 
        _newAvatar = data;
        RouterStore.get().push('/profile/'+_id);
        break;

      case Constants.DELETE_USER_ATTEMPT:
          SettingsAPI.getDelete(data);
          break;

      case Constants.DELETE_USER_SUCCESS: 
        RouterStore.get().push('/');
        _isDeleted = true;
        break;

      case Constants.ADD_FILTER_ATTEMPT:
        SettingsAPI.postFilter(data);
        break;

      case Constants.ADD_FILTER_SUCCESS: 
        _filter = data;
        break;

        default:
        return true;
        
      }

      SettingStore.emitChange();

      return true;

    });

module.exports = SettingStore;
