const resumeBtn = document.querySelector(".resumebtn");
const resume = document.querySelector(".resume");
const closeBtn = document.querySelector(".closebtn");
const bodySpace = document.querySelector(".overlay");
const projectItems = document.querySelectorAll(".project-div");
const projectImg = document.querySelectorAll(".project-img");
const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".navlist");
const windowscreen = window;
const loaders = document.querySelector(".loader");
const toggle_btn = document.querySelector(".toggler");
const bodyMain = document.querySelector("body");

resumeBtn.addEventListener("click",function(){
   resume.classList.remove("hidden");
   bodySpace.classList.remove("hidden");

});

closeBtn.addEventListener("click",function(){
    resume.classList.add("hidden");
    bodySpace.classList.add("hidden");
});

bodySpace.addEventListener("click",function(){
    resume.classList.add("hidden");
    bodySpace.classList.add("hidden");
});

for(let i=0;i<projectItems.length;i++){
    projectItems[i].addEventListener("click",function(){
    projectImg[i].classList.toggle("animation");
    });
}

navIcon.addEventListener("click",function(event){
    if(navList.style.height==="auto"){
        navList.style.height="0";
    }
    else{
        navList.style.height="auto";
    }
    event.preventDefault();
});

windowscreen.addEventListener("load",function(){
    // loaders.addEventListener("click",fadeOutEffect)
    fadeOutEffect();
});

// $(window).on("load",function(){
// 	$(".loader .inner").fadeOut(700,function(){
// 		$(".loader").fadeOut(800);
// 	});

function fadeOutEffect() {
    var fadeTarget = loaders;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.5;
        } else {
            clearInterval(fadeEffect);
            loaders.style.zIndex = -19;
        }
    }, 1500);
}

toggle_btn.addEventListener("click",function(){
    bodyMain.classList.toggle("change");
});