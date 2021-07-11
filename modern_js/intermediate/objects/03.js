var User=function(fname,courseCount){
    this.fname=fname;
    this.courseCount=courseCount;
    this.getCourseCount=function(){
        console.log(`course count is ${this.courseCount}`)
    };

}
User.prototype.getFname=function(){
    console.log(`fname = ${this.fname}`);
}

var rai=new User("shivam",2);
var chaudhry=new User("hitesh",3)
chaudhry.getFname();


console.log(rai);
console.log(chaudhry);