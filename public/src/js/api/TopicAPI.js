import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	get(data){
		requestHeandler.constantAjax({
					url:'/blog/sections/'+data,
					type:'GET'
				}, function(res) {
					actions.handle('TAKE_TOPICS_SUCCESS', res.data)
				})
	},

	getDelete(id){
		RequestHandler.ajax({
			url: '/blog/posts/' + id +'/delete',
			type: 'DELETE',
		}, function(res) {
			actions.handle('DELETE_TOPIC_SUCCESS', res.data)
		})
	}
}