var rh = require('./ResponseHandler');
var $ = require('jquery');

// var _token = window.cd.access_token;
var _api_url = 'http://localhost:8000';

$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.crossDomain = {
    crossDomain: false
  };
  options.xhrFields = {
    withCredentials: true
  };
});

module.exports = {

  ajax: function(options, cb) {

    options.data = options.data || {};

    options.dataType = 'json';
    options.url = _api_url+options.url;

    if(options.processData === false)
    {
      // options.data.append('access_token', _token);
      options.data.append('_token', window.data.csrf);
    } else {
      // options.data.access_token = _token;
          options.data._token = window.data.csrf;
    }
      $.ajax(options)
        .done(function(res)
        {
        if(rh.handle(res) && typeof(cb) === 'function') {

          cb(res);

        }

        })
        .fail(rh.handleError);

  }
}