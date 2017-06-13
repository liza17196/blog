import AppDispatcher from'../dispatcher';
import { EventEmitter } from'events';
import actions from'../actions';
import StandardStore from './StandardStore';
import extend from 'lodash/extend';
import BodyAPI from '../api/BodyAPI';
var Constants = require('../constants');



var _topicBody = {};
var _isLoaded = false;
var _isDeleted = false;

var BodyStore = extend({}, StandardStore, {

  getTopicBody() {
    return _topicBody;
  },

  isLoaded(){
    return _isLoaded;
  },

  isDeleted() {
    return _isDeleted;
  }

  });
BodyStore.dispatchToken = AppDispatcher.register(function(payload) {
      var action = payload.action;
      var data = action.data;

      switch(action.actionType) {

        case Constants.TOPIC_BODY_ATTEMPT:
          _isLoaded = false;
          BodyAPI.get(data);
          // debugger;
          break;

      case Constants.TOPIC_BODY_SUCCESS: 
      // debugger;
        _isLoaded = true;
        _topicBody = data;
        console.log(_topicBody);
	    	break;
      }

      BodyStore.emitChange();

      return true;

    });

module.exports = BodyStore;
