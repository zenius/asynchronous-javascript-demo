
function getPromiseValue(){ 
	return new Promise(function(resolve, reject){ 
		setTimeout(function(){ 
			var value = Math.random(); 

			if(value > 0.4){ 
				resolve(value);
			} else {
				reject(Error('value less than 0.4'));  
			}
		}, 1000); 
	}); 
}

var promise = getPromiseValue(); 

promise.then(function(value) { 
	console.log("success: " + value); 
	return value + 5; 
}).then(function(value){ 
	console.log("new value: " + value); 
}).catch(function(error){ 
	console.log("rejected: " + error); 
}); 