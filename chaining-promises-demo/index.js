
function getRandomNumber(){ 
	return new Promise(function(resolve, reject){ 
		setTimeout(function(){ 
			var number = Math.random()*100 ;  

			if(number > 30){ 
				resolve(number); 
			} else  { 
				reject(Error("invalid number generated")); 
			}
		}, 1000); 
	}); 
}; 

function getNameFromNumber(number){ 
	return new Promise(function(resolve, reject) { 
		setTimeout(function(){ 
			var name = "Bharat";   

			if(number > 10){ 
				resolve(name); 
			} else  { 
				reject(Error("name not found")); 
			}
		},1000);  
	}); 	
}

function getAgeFromName(name){ 
	return new Promise(function(resolve, reject) { 
		setTimeout(function(){ 
			var age = 26;   

			if(name === "Bharat"){ 
				resolve(age); 
			} else  { 
				reject(Error("age not found")); 
			}	
		}, 1000); 			
	});  
}

/*promise code*/

//getRandomNumber() returns a promise containing a random number
getRandomNumber().then(function(number) {  
    console.log(number); 
    return getNameFromNumber(number); //returns a promise containing a string representing a name

}).then(function(name){
    console.log(name) //"Bharat"
    return getAgeFromName(name);  //returns a promise containing a number representing an age

}).then(function(age){
   console.log(age) 

}).catch(function(error){
    console.log(error); 
});