var Http = {}
Http.request = function(method, url, params, data, callback){
  if(typeof(params) === "object"){
    url += "?";
    for(var k in params){
      if(url.charAt(url.length)!="?"){ url += "&"; }
      url += k + "=" + params[k];
    }
  }else if(typeof(params) === "string"){
    url += "?" + params;
  }
  url = encodeURI(url);
  var request = new XMLHttpRequest();
  request.open(method, url, true);
  request.onreadystatechange = function(){
    if(callback){ callback(request); }
  }
  request.send(data);
}