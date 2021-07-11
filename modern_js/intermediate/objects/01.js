var user={
    fname:"shivam",
    lname:"rai",
    role:"admin",
    loginCount:32,
    fb:true
}

console.log(user.fname);
console.log(user["lname"]);

user.loginCount=55;console.log(user.loginCount);
console.table(user);
console.log(Object.keys(user));