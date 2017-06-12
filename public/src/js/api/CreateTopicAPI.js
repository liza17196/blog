import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	getOption(){
		requestHeandler.constantAjax({
					url:'/blog/create/option',
					type:'GET'
				}, function(res) {
					actions.handle('OPTION_SUCCESS', res.data)
				})
	},

	postTopic(data){
		RequestHandler.ajax({
			url: '/blog/posts',
			type: 'POST',
			data: data,
		}, function(res) {
					actions.handle('CREATE_TOPIC_SUCCESS', res.data)
				})
	}
}