//cookie.js
function getCookie(key){
	var cookie = document.cookie;
	var startIdx = cookie.indexOf(key + '=');
	if(startIdx != -1){  //찾았다면
		var endIdx = cookie.indexOf(';', startIdx);
		if(endIdx == -1) endIdx = cookie.length;
		var value = cookie.substring(startIdx, endIdx);
	}
	return value;
}
function setCookie(key, value, days){
	var now = new Date();
	now.setTime(now.getTime() + days * 1000 * 60 * 60 * 24);
	document.cookie = key + '=' + value + ';expires=' + now.toUTCString();
}
function deleteCookie(key){
	var now = new Date();
	document.cookie = key + '=' + ';expires=' + now.toUTCString();
}