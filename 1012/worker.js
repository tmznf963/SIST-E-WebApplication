//worker.js
onmessage = function(evt) {
	var num = parseInt(evt.data);
	var result = 0;
	for(var i = 1; i <= num; i++){
	  result += i;
	}
	postMessage(result);
};