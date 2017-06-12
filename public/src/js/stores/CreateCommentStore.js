import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import CreateCommentAPI from '../api/CreateCommentAPI';
var Constants = require('../constants');



var _newComment = {};
var _isLoaded = false;

var CreateCommentStore = extend({}, StandardStore, {

	getNewSection() {
		return _newComment;
	},

  isLoaded() {
    return _isLoaded;
  }

  });
CreateCommentStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.CREATE_COMMENT_ATTEMPT:
      // debugger; 
          CreateCommentAPI.postComment(data);
          break;

      case Constants.CREATE_COMMENT_SUCCESS:
        _newComment = data
	    	break;

        default:
        return true;
      }

      CreateCommentStore.emitChange();

      return true;

    });

module.exports = CreateCommentStore;