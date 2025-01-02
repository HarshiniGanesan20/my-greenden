var menubar=document.getElementById("menubar")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")

menubar.addEventListener("click",function(){

    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
