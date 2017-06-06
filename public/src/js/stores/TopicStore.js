import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import TopicAPI from '../api/TopicAPI';
var Constants = require('../constants');



var _topicList = [];
var _isLoaded = false;

var TopicStore = extend({}, StandardStore, {

	getTopicList() {
		return _topicList;
	},

  isLoaded() {
    return _isLoaded;
  }

  });
TopicStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.TAKE_TOPICS_ATTEMPT:
          TopicAPI.get(data);
          break;

      case Constants.TAKE_TOPICS_SUCCESS: 
	    	_topicList = data;
        _isLoaded = true;
	    	break;

        default:
        return true;
      }

      TopicStore.emitChange();

      return true;

    });

module.exports = TopicStore;
