var value=Math.max(2,5,7,8,4,3,9,7,15);

console.log(value);

function sumOne(a,b){
    return a+b;
}
var myA=[5,4];
console.log(sumOne(...myA));//spread operator

function sumTwo(...args){//rest operator
    console.log(args)
    let sum=0;
    for (const arg of args) {
        sum +=arg;
    }
    return sum;
}
console.log(sumTwo(2,3,5,4));