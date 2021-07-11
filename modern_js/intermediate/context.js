sayHello();//it works because of node context
function sayHello(){
    console.log("hello ther");
}
//context
//function declaration are scanned and made available
//variable declaration are scanned and made undefined
tipper(5);//able to run because global context knows about tipper
function tipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}
sayName();//gives error because sayName is defined as var hence it's st
//still undefined
var sayName=function(){
    console.log("shivam")
}

