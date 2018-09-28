//output.js
function output(){
	var str = '<h1>학생 성적표</h1>' +
						'<ul>';
	for(var idx in student){
		if(typeof(student[idx]) != 'function')
			str += '<li>' + idx + ' : ' + student[idx] + '</li>';
	}
	str += '</ul>';
	document.getElementById('result').innerHTML = str;
}