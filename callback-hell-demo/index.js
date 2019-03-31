
/*A simple illustartion on callback hell*/

function myFunction(x,callback){
    callback(x);
}

var value = 10; 

myFunction(value, function(x){ //callback1
	if(value < 10){ 
		throw Error("value should be greater than 10"); 
	} else { 
		var result = x * x; 
			myFunction(result, function(x){ //callback2 within callback 1

				if(result <= 100) { 
					throw Error("value should be greater than 100"); 
				} else { 
					var result2 = x + x; 

			        myFunction(result2, function(x){ //callback 3 within callback 2
			            var answer = 10 + result2; 
			            console.log(answer); 
			        }); 
				}
		        
		    }); 
		}  
});