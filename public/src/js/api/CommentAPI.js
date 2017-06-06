import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	get(id){
		requestHeandler.constantAjax({
					url:'/blog/posts/' + id + '/comments',
					type:'GET'
				}, function(res) {
					actions.handle('TOPIC_COMMENT_SUCCESS', res.data)
				})
	}
}