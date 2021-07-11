const red=document.querySelector(".red")
const cyan=document.querySelector(".cyan")
const violet=document.querySelector(".violet")
const orange=document.querySelector(".orange")
const pink=document.querySelector(".pink")

const center=document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor=(element)=>{
    return window.getComputedStyle(element).backgroundColor;
}

// console.log(getBGColor(pink));
// var orangeColor=getBGColor(orange);

// orange.addEventListener("click",()=>{
//     center.style.background=orangeColor
// })

const magicColorChanger=(element,color)=>{
    return element.addEventListener("click",()=>{
    center.style.background=color
})
}
magicColorChanger(red,getBGColor(red));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(pink,getBGColor(pink));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(cyan,getBGColor(cyan));
