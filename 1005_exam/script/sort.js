function sort(){
	for(var i = 0; i < array.length; i++) { 
		for(var j = 0; j < array.length - 1; j++) { 
			if(array[j].getSal() < array[j+1].getSal()) { 
				var temp = array[j]; 
				array[j] = array[j+1]; 
				array[j+1] = temp;
			} 
		} 
	}

}