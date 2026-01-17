const menu =document.getElementById("sidemenu");
const btn1 = document.getElementById("morebutton");
const btn2 = document.getElementById("closebtn");
const blurW= document.getElementById("blurer");

btn1.addEventListener("click",function(){menu.classList.add("open");menu.classList.remove("close");blurW.classList.toggle("show");});
btn2.addEventListener("click",function(){menu.classList.remove("open");menu.classList.add("close");blurW.classList.toggle("show");});
blurW.addEventListener("click",function(){menu.classList.remove("open");menu.classList.add("close");blurW.classList.toggle("show");});
document.addEventListener("keydown",function(event){
    if (event.key ==='Escape'){
        menu.classList.remove("open");menu.classList.add("close");blurW.classList.remove("show");}
    }
);