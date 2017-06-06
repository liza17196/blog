import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import CommentAPI from '../api/SectionNameAPI';
var Constants = require('../constants');



var _sectionName = {};
var _isLoaded = false;

var SectionNameStore = extend({}, StandardStore, {

	getSectionName() {
		return _sectionName;
	},

  isLoaded() {
    return _isLoaded;
  }

  });
SectionNameStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.SECTION_NAME_ATTEMPT:
          CommentAPI.get(data);
          break;

      case Constants.SECTION_NAME_SUCCESS:
        _sectionName = data;
        _isLoaded = true;
	    	break;

        default:
        return true;
      }

      SectionNameStore.emitChange();

      return true;

    });

module.exports = SectionNameStore;
