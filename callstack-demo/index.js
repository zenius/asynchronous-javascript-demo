
function funcA(){
   funcB();  
}

function funcB(){
   funcC();
}

function funcC(){
    console.log(Error().stack); //Error is only used to show the call stack
}

funcA();


/*
function funcA(){
   funcA();  
}

funcA();

//causes at stack overflow error because funcA() keeps getting called recursively

*/
