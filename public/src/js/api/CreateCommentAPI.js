import $ from 'jquery';
import actions from '../actions';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	postComment(data){
		RequestHandler.ajax({
			url: '/blog/posts/'+ data.topic_id + '/comments',
			type: 'POST',
			data: data,
		}, function(res) {
					actions.handle('CREATE_COMMENT_SUCCESS', res.data)
				})
	}
}