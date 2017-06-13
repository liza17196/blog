import $ from 'jquery';
import actions from '../actions';
import requestHeandler from '../utils/requestHeandler';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	postChange(data){
		RequestHandler.ajax({
					url:'/blog/profile/' + data.id + '/change',
					type:'POST',
					data: data,
				}, function(res) {
					actions.handle('CHANGE_NICKNAME_SUCCESS', res.data)
				})
	},

	postUpdate(data){
		RequestHandler.ajax({
					url:'/blog/profile/new_avatar',
					type:'POST',
					data: data,
					contentType: false,
			        processData:false,
			        cache: false,
				}, function(res) {
					actions.handle('UPDATE_AVATAR_SUCCESS', res.data)
				})
	},

	getDelete(id){
		RequestHandler.ajax({
			url: '/blog/profile/' + id +'/delete',
			type: 'DELETE',
		}, function(res) {
			actions.handle('DELETE_USER_SUCCESS', res.data)
		})
	},
	postFilter(data){
		RequestHandler.ajax({
					url:'/blog/filter',
					type:'POST',
					data: data,
				}, function(res) {
					actions.handle('ADD_FILTER_SUCCESS', res.data)
				})
	},	
}