//input.js
function add(){
	var hakbun = document.getElementById('txtHakbun').value;
	var name = document.getElementById('txtName').value;
	var kor = document.getElementById('txtKor').value;
	var eng = document.getElementById('txtEng').value;
	var mat = document.getElementById('txtMat').value;
	var edp = document.getElementById('txtEdp').value;
	if(!hakbun || !name || !kor || !eng || !mat || !edp){
		alert("빠진 값이 있습니다. \n확인후 다시 추가해 주세요.");
	}else{
		var student = new Student(hakbun, name, parseInt(kor), parseInt(eng),
			parseInt(mat), parseInt(edp));
		array.push(student);
		document.myform.reset();
		document.getElementById('btnCalc').disabled = false;
	}
}