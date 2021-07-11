function isEven(element){
    return element%2===0 ? true:false
}
console.log(isEven(3));
var res=[2,3,6,8].every((e)=>{
    return e%2===0;
});
console.log(res);

