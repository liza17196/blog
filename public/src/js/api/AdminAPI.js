import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	get(){
		requestHeandler.constantAjax({
					url:'/blog/user_list',
					type:'GET'
				}, function(res) {
					actions.handle('USERS_LIST_SUCCESS', res.data)
				})
	}
}