//calc.js
function calc(){
	var sum = student.kor + student.eng + student.mat + student.edp;
	var avg = sum / 4;
	var grade = (avg <= 100 && avg >= 90) ? 'A' :
								(avg < 90 && avg >= 80) ? 'B' :
									(avg < 80 && avg >= 70) ? 'C' :
										(avg < 70 && avg >= 60) ? 'D' : 'F';
	student.setSum(sum);
	student.setAvg(avg);
	student.setGrade(grade);
}