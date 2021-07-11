var user = {
  fname: "shivam",
  lname: "rai",
  role: "admin",
  loginCount: 32,
  fb: true,
  courseList:[],
  buyCourse:function (courseName){
    this.courseList.push(courseName);
  },
  getCourseCount:function(){
      return `${this.fname} is enrolled in ${this.courseList.length} courses`
  }
};
console.log(user.getCourseCount());
user.buyCourse("react ja course");
user.buyCourse("angular course");
console.log(user.getCourseCount());

