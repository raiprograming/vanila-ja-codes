const shivam={
    fname:"shivam",
    lname:"rai",
    role:"admin",
    courseCount:3,
    getInfo:function(){
        console.log(`
        fist name is ${this.fname}
        last name is ${this.lname}
        his role is ${this.role}
        and he is enrolled in ${this.courseCount} courses
        `)
    }
}

const dj={
    fname:"rock",
    lname:"DJ",
    role:"sub-admin",
    courseCount:4
}
shivam.getInfo();
var djInfo=shivam.getInfo.bind(dj);//method referenced
var djInfo=shivam.getInfo.call(dj);//called method
djInfo();
// var user={
//     name:"",
//     age:"",
//     getName:function(){
//         console.log(this.name);
//     }
// }
// user1 =function(){
//     let name="";
//     age:""
// }
// var rai=Object.create(user);
// rai.name="shivam";
// rai.getName();
// var rai1=new user1();
// rai1.name="shivam";
// console.log(rai1.name);
