const uno=()=>{
    console.log("i am one");
};
const dos = () => {
    setTimeout(()=>{
        console.log("wooooooo");
    },3000)
  console.log("i am two");
};
const tres = () => {
  console.log("i am three");
};
uno();
dos();
tres();