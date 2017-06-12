import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	get(id){
		requestHeandler.constantAjax({
					url:'/blog/posts/' + id + '/comments',
					type:'GET'
				}, function(res) {
					actions.handle('TOPIC_COMMENT_SUCCESS', res.data)
				})
	},

	getDelete(id){
		debugger;
		RequestHandler.ajax({
			url: '/blog/comments/'+ id,
			type: 'DELETE',
		}, function(res) {
			actions.handle('DELETE_COMMENT_SUCCESS', res.data)
		})
	}

}