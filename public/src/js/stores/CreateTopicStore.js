import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import CreateTopicAPI from '../api/CreateTopicAPI';
import RouterStore from './RouterStore';
var Constants = require('../constants');



var _topic = [];
var _isLoaded = false;

var _createTitle = '';
var _createOption = '';
var _createBody = '';
var _option = {};
var _userId = {};

var CreateTopicStore = extend({}, StandardStore, {

	getTopic() {
    return _topic;
  },

  getTopicTitle() {
    return _createTitle;
  },

  getTopicOption() {
    return _createOption;
  },

  getTopicBody() {
		return _createBody;
	},

  isLoaded(){
    return _isLoaded;
  },

  getOption() {
    return _option;
  },

  getUserId() {
    return _userId;
  }

  });
CreateTopicStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.OPTION_ATTEMPT:
          CreateTopicAPI.getOption();
          break;

      case Constants.OPTION_SUCCESS: 
        _option = data;
	    	break;

      case Constants.TOPIC_TITLE:
          _createTitle = data;
          break;

      case Constants.TOPIC_OPTION:
          _createOption = data;
          break;

      case Constants.TOPIC_BODY:
        _createBody = data;
        break;

      case Constants.USER_ID:
        _userId = data;
        break;

      case Constants.CREATE_TOPIC_ATTEMPT:

        let createData = {
          title: _createTitle,
          section_id: _createOption,
          body: _createBody,
          user_id: _userId
        }

        CreateTopicAPI.postTopic(createData);
        break;

        case Constants.CREATE_TOPIC_SUCCESS:
        _topic = data;
        RouterStore.get().push('/sections/' + _createOption);
        break;

        default:
        return true;
      }

      CreateTopicStore.emitChange();

      return true;

    });

module.exports = CreateTopicStore;
