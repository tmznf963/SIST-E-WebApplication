function sort(){
	for(var i = 0; i < array.length; i++) { 
		for(var j = 0; j < array.length - 1; j++) { 
			if(array[j].getSum() < array[j+1].getSum()) { 
				var temp = array[j]; 
				array[j] = array[j+1]; 
				array[j+1] = temp;
			} 
		} 
	}

}