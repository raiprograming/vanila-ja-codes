const courses=[
    {
        name:"complete react js course",
        price:2.3
    },
    {
        name:"complete pyhton course",
        price:2.1
    },
    {
        name:"complete angular.js course",
        price:2.4
    },
    {
        name:"complete mern course",
        price:2.5
    },
    {
        name:"django",
        price:2.9
    }
]
function generateList(){
    const ul=document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach((course)=>{
        const li=document.createElement("li");
        li.classList.add("list-group-item");

        const name=document.createTextNode(course.name);
        li.appendChild(name);

        const span=document.createElement("span");
        span.classList.add("float-right");
        const price=document.createTextNode("$ "+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    })
}
//generateList()
window.addEventListener("load",generateList);

const btn=document.querySelector(".sort-btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    courses.sort((a,b)=>{return a.price-b.price})
    console.log(courses);
    generateList();
})