

function asyncLog(val){ //logs values asynchronously
    setTimeout(function(){  //setTimeout with a time of 0 will execute asynchronously
        console.log(val);      
    },0)
}

console.log("first");
asyncLog("second");
console.log("third");

 

/* 
   console.log("first");
   console.log("second");
   console.log("third");
*/