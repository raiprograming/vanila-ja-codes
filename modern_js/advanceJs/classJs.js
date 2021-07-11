class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #courseList=[];

    getInfo(){
        return {name:this.name,email:this.email}
    }
    enrollCourse(name){
        this.#courseList.push(name)
    }
    getCourseList(){
        return this.#courseList;
    }
    static login(){
        return "you are logged in";
    }
}
class SubAdmin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "i am subadmin";
    }
    login(){
        return "this is login for subadmin"
    }
}





//let shivam=User("shivam","rai@dev.in")
module.exports=User;

// const rock=new User("dj rock","rock@dev.in");
// console.log(rock.getInfo());
// rock.enrollCourse("node bootcamp");
// console.log(rock.getCourseList());
// console.log((rock.courseList));


const tom=new SubAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());