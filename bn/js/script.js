function jumbo(){

imagenes = ["./img/bg-1.jpg", "./img/bg-2.jpg", "./img/bg-3.jpg"];
textos = ["BN TIENE UNA LARGA TRAYECTORIA EN OPERACIONES LOGÍSTICAS","BN ES LA MEJOR SOLUCIÓN EN OPERACIONES LOGÍSTICAS","BN ES UNA DE LAS EMPRESAS LÍDERES NACIONALES EN MANEJO Y DISTRIBUCIÓN DE PRODUCTOS"];

// Al recargar la página, mostrará aleatoreamente una de tres imagenes
function imagenJumbo() {
    randomImg = Math.floor(Math.random() * imagenes.length);
}

//Al recargar página, mostrará uno de cada tres textos
function fraseJumbo(){
   randomTxt = Math.floor(Math.random() * textos.length);
}

if(imagenJumbo() == fraseJumbo()){
    document.getElementById('jumboBg').style.backgroundImage = 'url('+imagenes[randomImg]+')'; 
    document.getElementById('tituloJumbo').innerHTML = textos[randomTxt];
} else {
    jumbo();
}

//después de unos 5 segundos, cambiar fondo y texto
i = 0;
setInterval(function(){
    document.getElementById('tituloJumbo').innerHTML = textos[i++ % textos.length];
}, 7500);

setInterval(function(){
    document.getElementById('jumboBg').style.backgroundImage = 'url('+imagenes[i++ % imagenes.length];
}, 7500);
}

ScrollReveal().reveal('.container', { delay: 280 });
