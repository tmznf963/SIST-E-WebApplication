function calc(){
	//console.log('학생 수 = '+array.length);
	for(var i = 0 ; i < array.length ; i++){
		var student = array[i];
		var sum = student.getKor() + student.getEng() + student.getMat() + student.getEdp();
		var avg = sum/4;
		var grade = (avg <= 100 && avg >90) ? 'A' :
							(avg <=90 && avg >80) ? 'B' :
							(avg <=80 && avg >70) ? 'C' :
							(avg <=70 && avg >60) ? 'D' : 'F';
		student.setSum(sum);
		student.setAvg(avg);
		student.setGrade(grade);
	}
	document.getElementById('btnOutput').disabled = false;//활성화
	if(array.length >=2){
		document.getElementById('btnSort').disabled = false;//학생이 2명 이상일 때 정렬버튼 활성화
	}
	//console.log(sum);
}