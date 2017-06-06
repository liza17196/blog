import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	get(data){
		requestHeandler.constantAjax({
					url:'/blog/sections/' + data + '/title',
					type:'GET'
				}, function(res) {
					actions.handle('SECTION_NAME_SUCCESS', res.data)
				})
	}
}