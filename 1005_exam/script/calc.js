function calc(){
	//console.log('학생 수 = '+array.length);
	for(var i = 0 ; i < array.length ; i++){
		var emp = array[i];
		if(emp.getNum().substring(1,2)==1){
			var hosal = 900000;
			emp.setHosal(hosal);
		}else if(emp.getNum().substring(1,2)==2){
			var hosal = 400000;
			emp.setHosal(hosal);
		}else if(emp.getNum().substring(1,2)==3){
			var hosal = 600000;
			emp.setHosal(hosal);
		}else if(emp.getNum().substring(1,2)==4){
			var hosal = 800000;
			emp.setHosal(hosal);
		}else if(emp.getNum().substring(1,2)==5){
			var hosal = 300000;
			emp.setHosal(hosal);
		}else if(emp.getNum().substring(1,2)==6){
			var hosal = 800000;
			emp.setHosal(hosal);
		}else if(emp.getNum().substring(1,2)==7){
			var hosal = 800000;
			emp.setHosal(hosal);
		}//호급수당

		if(emp.getNum().substring(0,1)=="A"){
			var dept = "영업부";
			emp.setDept(dept);
		}else if(emp.getNum().substring(0,1)=="B"){
			var dept = "업무부";
			emp.setDept(dept);
		}else if(emp.getNum().substring(0,1)=="C"){
			var dept = "홍보부";
			emp.setDept(dept);
		}else if(emp.getNum().substring(0,1)=="D"){
			var dept = "인사부";
			emp.setDept(dept);
		}else if(emp.getNum().substring(0,1)=="E"){
			var dept = "경리부";
			emp.setDept(dept);
		}else if(emp.getNum().substring(0,1)=="F"){
			var dept = "판촉부";
			emp.setDept(dept);
		}else if(emp.getNum().substring(0,1)=="G"){
			var dept = "총무부";
			emp.setDept(dept);
		}//부서명

		if(emp.getNighttime()==1){
			var n = 1500;
			emp.setNightsal(n);
		}else if(emp.getNighttime()==2){
			var n = 2500;
			emp.setNightsal(n);
		}else if(emp.getNighttime()==3){
			var n = 3500;
			emp.setNightsal(n);
		}else if(emp.getNighttime()==4){
			var n = 4500;
			emp.setNightsal(n);
		}//야간수당

		if(emp.getGibon()==1){
			var g = 15000;
			emp.setGibon2(g);
		}else if(emp.getGibon()==2){
			var g = 25000;
			emp.setGibon2(g);
		}else if(emp.getGibon()==3){
			var g = 35000;
			emp.setGibon2(g);
		}else if(emp.getGibon()==4){
			var g = 45000;
			emp.setGibon2(g);
		}//기본1 == 입력 , 기본2 == 세팅

		var famsal = emp.getFamnum() * 7000;//가족수당
		emp.setFamsal(famsal);

		var sum = emp.getGibon2() + emp.getHosal() + emp.getFamsal() + emp.getNightsal(); //총금액
		var sal = sum-(emp.getHosal() * 0.1);//실수령액

		emp.setSum(sum);
		emp.setSal(sal);
	}
	document.getElementById('btnOutput').disabled = false;//결과보기 활성화
	if(array.length >=2){
		document.getElementById('btnSort').disabled = false;//사원이 2명 이상일 때 정렬버튼 활성화
	}
	//console.log(sum);
}