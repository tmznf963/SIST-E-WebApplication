var array = null;
window.addEventListener('load',init,false);

function init(){
	array = new Array();
	document.getElementById('btnAdd').disabled = false;
	document.getElementById('btnCalc').disabled = true;
	document.getElementById('btnSort').disabled = true;
	document.getElementById('btnOutput').disabled = true;
	document.getElementById('btnAdd').addEventListener('click',add,false);
	document.getElementById('btnCalc').addEventListener('click',calc,false);
	document.getElementById('btnOutput').addEventListener('click',output,false);
	document.getElementById('btnSort').addEventListener('click',sort,false);
}