var name=["rai","hsivam"];
var countries=["india","usa","japan","russia"];

var states=new Array("Rajasthan","Delhi","Mumbai","Assam")

console.log(states[0]);

console.log(states.length);

states[0]="Punjab";
console.log(states);

var user=["shivam","srai@gmail.com",3,34,true];
console.log(user);

user.pop();
//console.log(user);

user.unshift("NEW VALUE");
//console.log(user);

user.shift();
//console.log(user);

console.log(user.indexOf(3));
console.log(user.indexOf("new"));

console.log(Array.from("shivam"));
var a="rai";
console.log(a.includes("r"));