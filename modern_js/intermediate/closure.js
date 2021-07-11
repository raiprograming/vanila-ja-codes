// function init(){
//     var fname="shivam";
//     function sayFname(){
//         console.log(fname)
//     }
//     return sayFname;
// }
// var value=init();
// value();
function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5=doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));