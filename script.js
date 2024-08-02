const box1=document.querySelector("#box-level1");
const box2=document.querySelector("#box-level2");
const box3=document.querySelector("#box-level3");


const level1Opener=()=>{
    fadeOutAndRedirect('beginner.html');
}

const level2Opener=()=>{
    fadeOutAndRedirect('Intermediate.html');
}
const level3Opener=()=>{
    fadeOutAndRedirect('Advanced.html');
}



// Function to handle the fade-out and redirect

const fadeOutAndRedirect=(url)=>{
    document.body.classList.add('fade-out'); // Add the fade-out class to the body
    setTimeout(()=>{
        window.location.href=url;
    },500); //Match this time with css fade-out property 
}


/* Level Container Controls */
box1.addEventListener("click",level1Opener);
box2.addEventListener("click",level2Opener);
box3.addEventListener("click",level3Opener);
