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
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/barbell_hip_thrusts.html');
}

const ex2Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/bulgarian_split_squats.html');
}

const ex3Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/burpee_jump_box.html');
}

const ex4Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/dumbbell_renegade_rows.html');
}

const ex5Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/plyometric_push_ups.html');
}

const ex6Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/kettlebell_snatches.html');
}

const ex7Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/T-bar_rows.html');
}

const ex8Opener=()=>{
    fadeOutAndRedirect('excercises_advanced/excercises_cutting/hanging_leg_raises.html');
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