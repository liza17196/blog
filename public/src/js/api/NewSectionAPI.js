import $ from 'jquery';
import actions from '../actions';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	postSection(data){
		RequestHandler.ajax({
			url: '/blog/sections/new_section',
			type: 'POST',
			data: data,
		}, function(res) {
					actions.handle('NEW_SECTION_SUCCESS', res.data)
				})
	}
}