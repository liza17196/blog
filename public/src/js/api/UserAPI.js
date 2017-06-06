import $ from 'jquery';
import actions from '../actions';
import RequestHandler from '../utils/RequestHandler';

module.exports={
	getRegister(data){
		RequestHandler.ajax({
			url: '/blog/register',
			type: 'POST',
			data: data,
			contentType: false,
	        processData:false,
	        cache: false,
		}, function(res) {
					actions.handle('REGISTER_SUCCESS', res.data)
				})
	},
	getLogin(data){
		RequestHandler.ajax({
			url: '/blog/login',
			type: 'POST',
			data: data,
			contentType: false,
	        processData:false,
	        cache: false,
		}, function(res) {
					actions.handle('LOGIN_SUCCESS', res.data)
				})
	}
}