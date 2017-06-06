import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import CommentAPI from '../api/CommentAPI';
var Constants = require('../constants');



var _topicComment = [];
var _isLoaded = false;

var CommentStore = extend({}, StandardStore, {

	getTopicComment() {
		return _topicComment;
	},

  isLoaded() {
    return _isLoaded;
  }

  });
CommentStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.TOPIC_COMMENT_ATTEMPT:
          CommentAPI.get(data);
          break;

      case Constants.TOPIC_COMMENT_SUCCESS:
        _topicComment = data
        _isLoaded = true;
        // console.log(_topicComment[0]);
      // debugger; 
	    	break;

        default:
        return true;
      }

      CommentStore.emitChange();

      return true;

    });

module.exports = CommentStore;
