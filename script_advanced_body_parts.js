const ex1=document.querySelector("#exercise-1");
const ex2=document.querySelector("#exercise-2");
const ex3=document.querySelector("#exercise-3");
const ex4=document.querySelector("#exercise-4");
const ex5=document.querySelector("#exercise-5");
const ex6=document.querySelector("#exercise-6");
const ex7=document.querySelector("#exercise-7");
const ex8=document.querySelector("#exercise-8");

/* HTML Page Opener Functions */
const ex1Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/chest/chest.html');
}

const ex2Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/back/back.html');
}
const ex3Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/shoulders/shoulders.html');
}

const ex4Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/biceps/biceps.html');
}

const ex5Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/triceps/triceps.html');
}

const ex6Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/legs/legs.html');
}

const ex7Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/abs&cardio/abs&cardio.html');
}

const ex8Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_bulking/yoga/yoga.html');
}

fadeOutAndRedirect =(url)=>{
    document.body.classList.add('fade-out'); // Add the fade-out class to the body
    setTimeout(()=>{
        window.location.href=url;
    },500); //Match this time with css fade-out property 
}


/* Excercises controls Controls */
ex1.addEventListener("click",ex1Opener);
ex2.addEventListener("click",ex2Opener);
ex3.addEventListener("click",ex3Opener);
ex4.addEventListener("click",ex4Opener);
ex5.addEventListener("click",ex5Opener);
ex6.addEventListener("click",ex6Opener);
ex7.addEventListener("click",ex7Opener);
ex8.addEventListener("click",ex8Opener);