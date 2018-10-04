//student.js
var Student = function(hakbun, name, kor, eng, mat, edp){
	var hakbun = hakbun;
	var name = name;
	var kor = kor;
	var eng = eng;
	var mat = mat;
	var edp = edp;
	var sum = null;
	var avg = null;
	var grade = null;
	this.getHakbun = function(){ return hakbun; };
	this.getName = function(){ return name; };
	this.getKor = function(){ return kor; };
	this.getEng = function(){ return eng; };
	this.getMat = function(){ return mat; };
	this.getEdp = function(){ return edp; };
	this.getSum = function() { return sum; };
	this.setSum = function(total) { sum = total; };
	this.getAvg = function() { return avg; };
	this.setAvg = function(average) { avg = average; };
	this.getGrade = function() { return grade; };
	this.setGrade = function(grd) { grade = grd; };
}