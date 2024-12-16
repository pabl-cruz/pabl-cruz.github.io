ScrollReveal().reveal('.row', { delay: 300 });
ScrollReveal().reveal('footer', {delay: 600});

let slideIndex = 0;
showSlide()


function changeSlide(n){
    showSlide(slideIndex += n)
}

function showSlide(){
    let i;
    const slides = document.getElementsByClassName("slides");
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none'
    }
    slideIndex++
    if (slideIndex > slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlide, 5000)
}


//modal

const modal = document.getElementById('siteModal')
const modalBtn = document.getElementById('modalBtn')
const spanClose = document.getElementsByClassName('close')[0]

modalBtn.onclick = function(){
    modal.style.display = 'block';
}

spanClose.onclick = function(){
    modal.style.display="none";
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
