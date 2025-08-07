ScrollReveal().reveal('.row', { delay: 300 });
ScrollReveal().reveal('footer', {delay: 600});

let slideIndex = 0;
let slideTimer
showSlide(slideIndex);


function changeSlide(n){
    clearTimeout(slideTimer)
    slideIndex += n;
    showSlide(slideIndex);
    console.log(slideIndex);
}

function showSlide(n){
    let i;
    const slides = document.getElementsByClassName("slides");

    if (n >= slides.length){
        slideIndex = 0;
    }
    if(n < 0){
        slideIndex = slides.length -1;
    }

    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none'
    }

    slides[slideIndex].style.display="block";
    slideTimer = setTimeout(() =>{
        slideIndex++;
        showSlide(slideIndex);
    }, 10000)
}


//modal

const modal = document.getElementById('siteModal')
const modalBtn = document.getElementById('modalBtn')

modalBtn.onclick = function(){
    const siteInfoIndex = (slideIndex) % siteInfo.length; //adjust slideIndex to siteInfoIndex
    let techList = '';
    for(let i=0; i<siteInfo[siteInfoIndex].tecnologias.length; i++){
        techList += `<li>${siteInfo[siteInfoIndex].tecnologias[i]}</li>`  
     }
    let siteText =`
            <span class="close">&times;</span>
          <h4 class="modal-title">${siteInfo[siteInfoIndex].titulo}</h4>
          <a class="modal-anchor" href="${siteInfo[siteInfoIndex].enlace}" target="_blank">${siteInfo[siteInfoIndex].enlace}</a>
          <img class="modal-img" src="./img/${siteInfo[siteInfoIndex].imagen}" alt="${siteInfo[siteInfoIndex].titulo}"/>
          <div class="badges">
            <ul>
            ${techList}
            </ul>
          </div>
          <p class="modal-text">${siteInfo[siteInfoIndex].descripcion}</p>` 
    document.getElementById('modalContent').innerHTML = siteText
    modal.style.display = 'block';

    const spanClose = document.getElementsByClassName('close')[0];
    spanClose.onclick = function(){
        modal.style.display="none";
    }
}



window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

let siteInfo = [{
    titulo: 'Diphoterine Chile',
    tecnologias: ['Wordpress', 'Pagelayer', 'JavaScript'],
    imagen: ['/diphoterine.png'],
    enlace: 'https://diphoterine.cl/',
    descripcion: 'Sitio web realizado para promociar e informar la ducha de emergencia Diphoterine, solución en caso de que algún químico entrase en contacto con el cuerpo. Contene material de uso, papers, testimonios y noticias, como también información de precios de diferentes formatos y enlace a e-commerce',
},
{
    titulo: 'PersonalCare',
    tecnologias: ['Wordpress', 'Pagelayer', 'JavaScript'],
    imagen: ['/personalcare.png'],
    enlace: 'https://personalcare.cl/',
    descripcion: 'Landing page para anunciar el lanzamiento y venta de la nueva linea de kits para curar accidentes domesticos PersonalCare HomeKit. Incluye información, contenido y fotos de los kits, como también enlaces a e-commerce para compra',
},
{
    titulo: 'Quemadura Térmica',
    tecnologias: ['Wordpress', 'Pagelayer', 'JavaScript'],
    imagen: ['/quemaduratermica.png'],
    enlace: 'https://quemaduratermica.cl/',
    descripcion: 'Landing page hecho para informar y promocionar productos y kits de marca Burnshield. Con instructivos de uso, video, carácteristicas y enlaces a e-commerce para comprar los diferentes formatos y kits.',
},
{
    titulo: 'Media Orange',
    tecnologias: ['Wordpress', 'Elementor', 'JavaScript'],
    imagen: ['/media-orange.jpg'],
    enlace: 'https://mediaorange.cl/',
    descripcion: 'Sitio web realizado para productora audiovisual Media Orange. Contiene información de servicios, clientes y casos de éxito, como también una sección de portafolio en la que se puede filtrar segun tipo de trabajos.',
}
];
