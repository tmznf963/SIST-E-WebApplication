//main.js
var array = null;
window.addEventListener('load',init);

function init(){
   array = new Array();
   document.getElementById('btnAdd').disabled = false;
   document.getElementById('btnCalc').disabled = true;
   document.getElementById('btnSort').disabled = true;
   document.getElementById('btnOutput').disabled = true;

   document.getElementById('btnAdd').addEventListener('click',add);
   document.getElementById('btnCalc').addEventListener('click',calc);
   document.getElementById('btnSort').addEventListener('click',sort);
   document.getElementById('btnOutput').addEventListener('click',output);
}