const cutting=document.querySelector("#cutting-box");
const bulking=document.querySelector("#bulking-box");


const cuttingOpener=()=>{
    fadeOutAndRedirect('cutting-page_advanced.html');
}

const bulkingOpener=()=>{
    fadeOutAndRedirect('bulking-page_advanced.html');
}

fadeOutAndRedirect =(url)=>{
    document.body.classList.add('fade-out'); // Add the fade-out class to the body
    setTimeout(()=>{
        window.location.href=url;
    },500); //Match this time with css fade-out property 
}


/* Plan Box Controls */
cutting.addEventListener("click",cuttingOpener);
bulking.addEventListener("click",bulkingOpener);