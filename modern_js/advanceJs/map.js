var myMap=new Map();

myMap.set(1,"Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "cuatro");

console.log(myMap);

for(let [key,value] of myMap){
    console.log(`${value} for key ${key}`);
}

