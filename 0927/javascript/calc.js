function calc() {
			var f = document.forms[0];
			var first = parseInt(f.first.value);
			var second = parseInt(f.second.value);
			// console.log("idx = "+idx);
			var op = f.operator.options[f.operator.selectedIndex].value;
			switch(op){
				case '.' : f.result.innerHTML = "연산자를 선택해 주세요."; break;
				case '+' : f.result.innerHTML = first + second; break;
				case '-' : f.result.innerHTML = first - second; break;
				case 'x' : f.result.innerHTML = first * second; break;
				case '/' : f.result.innerHTML = first / second; break;
				case '%' : f.result.innerHTML = first % second; break;
			}
		}