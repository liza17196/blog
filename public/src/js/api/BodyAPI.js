import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	get(data){
		requestHeandler.constantAjax({
					url:'/blog/posts/'+data,
					type:'GET'
				}, function(res) {
					actions.handle('TOPIC_BODY_SUCCESS', res.data)
				})
	}
}