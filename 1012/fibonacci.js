//fibonacci.js
var array = [];

function returnResult(evt){
	var n = parseInt(evt.data);
	array.push(n);
	if(array.length == 2) postMessage(array[0] + array[1]);
}

onmessage = function(evt){    //수신
	var n = parseInt(evt.data);

	if(n <= 2) {
		postMessage(1);   return;
	}
	for(var i = 3 ; i <= n ; i++){
		var worker = new Worker('fibonacci.js');
		worker.onmessage = returnResult;
		worker.postMessage(n - i);
	}

}