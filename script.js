const menu =document.getElementById("sidemenu");
const btn1 = document.getElementById("morebutton");
const btn2 = document.getElementById("closebtn");

btn1.addEventListener("click",function(){menu.classList.add("open");menu.classList.remove("close");});
btn2.addEventListener("click",function(){menu.classList.remove("open");menu.classList.add("close");});
