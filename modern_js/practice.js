var ar1=[2,1,0,8,9,3,2,8];
let s=new Set(ar1);
console.log(s)
let unq=[];
//remove dupliactions
for(let i=ar1.length-1;i>0;i--){
    if(unq.includes(ar1[i]) !== true){
        unq.push(ar1[i])
    }
}
console.log(unq)
//sort it with bubble sort first
for(let i=0;i<unq.length;i++){
    for(let j=0;j<unq.length-i-1;j++){
        if(unq[j]>unq[j+1]){
            console.log(`swapped ${unq[j]} with ${unq[j+1]}`)
            let temp=unq[j];
            unq[j]=unq[j+1]
            console.log(temp)
            unq[j+1]=temp
            console.log(unq);

        }
    }
}
console.log(unq)
//object
let j1={
    shiv:"rai",
    sonu:"ydv",
    safiq:"shasikh"
}
console.log(Object.keys(j1))

