import $ from 'jquery';
import actions from '../actions';
import RequestHandler from '../utils/RequestHandler';
import requestHeandler from '../utils/requestHeandler';

module.exports={
	getCheck(){
		requestHeandler.constantAjax({
			url: '/blog/profile',
			type: 'GET',
		}, function(res) {
					actions.handle('CHECK_SUCCESS', res.data)
				})
	},
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
	},
	getLogout(data){
		requestHeandler.constantAjax({
			url: '/blog/logout',
			type: 'GET',
		}, function(res) {
					actions.handle('LOGOUT_SUCCESS', res.data)
				})
	}
}