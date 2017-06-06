import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	get(){
		requestHeandler.constantAjax({
					url:'/blog/logout',
					type:'GET'
				}, function(res) {
					actions.handle('LOGOUT_SUCCESS', res.data)
				})
	}
}