//input.js
function input(){
	var f = document.forms[0];
	with(student){
		hakbun = f.hakbun.value;
		irum = f.irum.value;
		kor = parseInt(f.kor.value);
		eng = parseInt(f.eng.value);
		mat = parseInt(f.mat.value);
		edp = parseInt(f.edp.value);
	};
};
/*with(student){  //초기화
	hakbun = '1101';    irum = '한송이';   kor = 90;
	eng = 100;          mat = 85;    edp = 70;
};*/