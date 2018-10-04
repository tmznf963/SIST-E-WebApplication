//output.js
function output(){
	var w = window.open();
	w.document.open();
	w.document.write('<!DOCTYPE html>');
	w.document.write('<html>');
	w.document.write('<head>');
	w.document.write('	<meta charset="utf-8">');
	w.document.write('	<title>성적처리 결과 창</title>');
	w.document.write('	<link rel="stylesheet" href="css/style.css">');
	w.document.write('</head>');
	w.document.write('<body>');
	w.document.write('<h1>쌍용강북고등학교 성적처리 결과</h1>');
	w.document.write("	<table border='1'>");
	w.document.write('		<thead>');
	w.document.write('			<tr>');
	w.document.write('				<th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>전산</th><th>		총점</th><th>평균</th><th>평점</th>');
	w.document.write('			</tr>');
	w.document.write('		</thead>');
	w.document.write('		<tbody>');
	for(var i = 0 ; i < array.length ;i++){
		var s = array[i];
		w.document.write('			<tr>');
		w.document.write('				<td>' + s.getHakbun() + '</td><td>' + s.getName() + '</td><td>' + s.getKor() + '</td><td>' + s.getEng() + '</td><td>' + s.getMat() + '</td><td>' + s.getEdp() + '</td><td>' + s.getSum() + '</td><td>' + s.getAvg() + '</td><td>' + s.getGrade() + '</td>');
		w.document.write('			</tr>');
	}
	w.document.write('		</tbody>');
	w.document.write('	</table>');
	w.document.write('</body>');
	w.document.write('</html>');
	w.document.close();
}