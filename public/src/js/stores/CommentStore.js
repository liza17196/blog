import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import remove from 'lodash/remove';
import CommentAPI from '../api/CommentAPI';
import RouterStore from './RouterStore';
var Constants = require('../constants');



var _topicComment = [];
var _isLoaded = false;
var _topicId = '';

var _isDeleted = false;

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

        case Constants.TOPIC_ID:
          _topicId = data;
          break;

        case Constants.TOPIC_COMMENT_ATTEMPT:
          CommentAPI.get(data);
          break;

      case Constants.TOPIC_COMMENT_SUCCESS:
        _topicComment = data
        _isLoaded = true;
	    	break;

        case Constants.DELETE_COMMENT_ATTEMPT:
        CommentAPI.getDelete(data);
        break;

        case Constants.DELETE_COMMENT_SUCCESS:
        _isDeleted = true;
        remove(_topicComment, function(item){
          item.id == parseInt(data.id)
        });
        RouterStore.get().push('/posts/' + _topicId);

        break;

        default:
        return true;
      }

      CommentStore.emitChange();

      return true;

    });

module.exports = CommentStore;
