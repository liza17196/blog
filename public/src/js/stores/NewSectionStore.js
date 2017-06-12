import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import NewSectionAPI from '../api/NewSectionAPI';
var Constants = require('../constants');



var _newSection = {};
var _isLoaded = false;

var NewSectionStore = extend({}, StandardStore, {

	getNewSection() {
		return _newSection;
	},

  isLoaded() {
    return _isLoaded;
  }

  });
NewSectionStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.NEW_SECTION_ATTEMPT: 
          NewSectionAPI.postSection(data);
          break;

      case Constants.NEW_SECTION_SUCCESS:
        _newSection = data;
        RouterStore.get().push('/');
	    	break;

        default:
        return true;
      }

      NewSectionStore.emitChange();

      return true;

    });

module.exports = NewSectionStore;
