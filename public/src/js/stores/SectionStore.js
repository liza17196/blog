import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import SectionAPI from '../api/SectionAPI';
import extend from 'lodash/extend';
var Constants = require('../constants');



var _sectionList = [];

var SectionStore = extend({}, StandardStore, {

	getSectionList() {
		return _sectionList;
	}

  });
SectionStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.TAKE_SECTIONS_ATTEMPT: 
	        SectionAPI.get();
	        break;

	    case Constants.TAKE_SECTIONS_SUCCESS: 
	    	_sectionList.push(data);
	    	break;

        default:
        return true;
      }

      SectionStore.emitChange();

      return true;

    });

module.exports = SectionStore;
