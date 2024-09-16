let btnNavbar=document.querySelector(".nav-toggle");
let list=document.querySelector(".nav-links");
let Icon=btnNavbar.querySelector(".icon");

console.log(Icon);
btnNavbar.addEventListener("click", ()=>{
list.classList.toggle("open");
const isOpen=list.classList.contains("open");
    Icon.setAttribute("src" , isOpen ? "./close-large-line.svg":"./align-justify (2).svg");
})