import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	get(data){
		// debugger;
		requestHeandler.constantAjax({
			url: '/blog/profile/' + data,
			type: 'GET'
		}, function(res) {
					actions.handle('PROFILE_INFO_SUCCESS', res.data)
				})
	}
}