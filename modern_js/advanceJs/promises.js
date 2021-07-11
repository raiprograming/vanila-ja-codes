/*const uno=()=>{
    return "i am one"
}
const dos=()=>{
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve("i am two");
        },3000);
    })
}
const tres=()=>{
    return "i am three"
}

const callMe=async ()=>{
    let valOne=uno();
    console.log(valOne);

    
    let valTwo =await dos();
    console.log(valTwo);
    
    let valThree = tres();
    console.log(valThree);
}
callMe();*/

const uno=()=>{
    return "i am done";
}

const dos=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("i am two");
        },3000);
    })
}

const tres=()=>{
    return "i am three"
}

const callMe=async ()=>{
    let valone=uno();
    console.log(valone);
    let valtwo=await dos();
    console.log(valtwo);
    let valthree = tres();
    console.log(valthree);

}

callMe();

















