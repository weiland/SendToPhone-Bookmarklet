(function(){
  var currentURL, title, __constructor, config, buildQuery, post;
  currentURL = window.location.href;
  title = document.title,
  config = {
    AppTitle        : 'Send URL to Phone',
    PushoverAppKey  : 'APPKEY',
    PushoverUserKey : 'USERKEY',
    PushoverUrl     : 'https://api.pushover.net/1/messages.json'
  };
  post = function(url, data) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.onload = function(d) {
      console.log('Request load: ', request.status, request.responseText, d);
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
  };
  buildQuery = function() {
    var query =   'token='  + config.PushoverAppKey
                + '&user='  + config.PushoverUserKey
                + '&title=' + title
                + '&message=' + currentURL
                + '&url='   + currentURL
                ;
    return query;
  };
  __constructor = function() {
    post(config.PushoverUrl, buildQuery());
  }();
})();
