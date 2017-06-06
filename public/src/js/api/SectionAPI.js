import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	get(){
		requestHeandler.constantAjax({
					url:'/blog/sections',
					type:'GET'
				}, function(res) {
					actions.handle('TAKE_SECTIONS_SUCCESS', res.data)
				})
	}
}