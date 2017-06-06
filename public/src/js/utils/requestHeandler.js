import $ from 'jquery';

module.exports = {
		
		constantAjax: function(
				data,
				doneFunction
			) {

			const app_url = 'http://localhost:8000';

			// const token = window.blog.csrf;

			const url = app_url + data.url;
			
			data.dataType = 'json';

				$.ajax(data).done((res)=>{
					doneFunction(res)
				});	
		}

}