import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import BodyAPI from '../api/BodyAPI';
var Constants = require('../constants');



var _topicBody = {};
var _isLoaded = false;

var BodyStore = extend({}, StandardStore, {

	getTopicBody() {
		return _topicBody;
	},

  isLoaded(){
    return _isLoaded;
  }

  });
BodyStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.TOPIC_BODY_ATTEMPT:
          _isLoaded = false;
          BodyAPI.get(data);
          break;

      case Constants.TOPIC_BODY_SUCCESS: 
      // debugger;
        _isLoaded = true;
        _topicBody = data;
	    	break;

        default:
        return true;
      }

      BodyStore.emitChange();

      return true;

    });

module.exports = BodyStore;
