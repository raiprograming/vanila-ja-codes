var testArray=[2,4,6,3,1,5,9,8,0];

console.log(testArray.fill("empty",2,5));

const numbers=[23,2,5,99,55,66,77,88];

const res=numbers.filter((num)=>{
    return num<55;
})
console.log(res);