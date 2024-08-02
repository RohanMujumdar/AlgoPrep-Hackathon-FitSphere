const ex1=document.querySelector("#box1");
const ex2=document.querySelector("#box2");
const ex3=document.querySelector("#box3");
const ex4=document.querySelector("#box4");
const ex5=document.querySelector("#box5");


/* HTML Page Opener Functions */
const ex1Opener=()=>{
    fadeOutAndRedirect('bicep_curls_heavy_weights.html');
}

const ex2Opener=()=>{
    fadeOutAndRedirect('incline_dumbbell_curls.html');
}
const ex3Opener=()=>{
    fadeOutAndRedirect('concentration_curls_drop_sets.html');
}

const ex4Opener=()=>{
    fadeOutAndRedirect('hammer_curls_heavy_weights.html');
}

const ex5Opener=()=>{
    fadeOutAndRedirect('preacher_curls_extreme_motion.html');
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
