import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
  get(data){
    requestHeandler.constantAjax({
          url:'/blog/profile/' + data + '/topics',
          type:'GET'
        }, function(res) {
          actions.handle('PROFILE_TABLE_SUCCESS', res.data)
        })
  }
}