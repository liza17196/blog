import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	get(data){
		requestHeandler.constantAjax({
					url:'/blog/sections/'+data,
					type:'GET'
				}, function(res) {
					actions.handle('TAKE_TOPICS_SUCCESS', res.data)
				})
	}
}