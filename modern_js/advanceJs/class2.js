const User = require("./classJs.js");
//import User from "./classJs"
const user=require("./classJs.js");

const rai=new User("shivam","rai@dev.in");
console.log(rai.getInfo());
rai.enrollCourse("react bootcamp");
rai.enrollCourse("angular bootcamp");
console.log(rai.getCourseList());
let courses=rai.getCourseList();
courses.forEach(c=>console.log(c));
