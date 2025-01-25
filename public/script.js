var showNavbar=document.querySelector(".toggle-bar");
var hideNavbar=document.querySelector(".close-navbar");
var navbarContainer=document.querySelector(".hide-navbar")
// isClick=false;

showNavbar.addEventListener("click" ,function(){
    // isClick=true;
  
    navbarContainer.style.display="block"

      navbarContainer.style.display="flex"
    
})
hideNavbar.addEventListener("click",function(){
    isClick=false;
    navbarContainer.style.display="none";
})