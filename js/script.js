$(document).ready(function(){
    /* funciones de scroll en header */
    
    $(window).scroll(function(){
        if ($(document).scrollTop() > 1){
            $('header').css({"position": "sticky", "top": "0px"});
            $('#contenedor-linea').css({ "display": "flex", "width": "80%", "justify-content": "space-between", "margin": "0 auto", "padding": "23px 0px 23px 0px"});
            $('h1').css({ "font-size": "300%", "width": "auto"});
            $('#logo').css({"width": "75px"});
        } else {
            $('header').css({"position": "block"});
            $('#contenedor-linea').css({ "display": "flex", "width": "75%", "justify-content": "space-between", "margin": "0 auto", "padding": "120px 0px 120px 0px"});
            $('h1').css({ "font-size": "600%", "width": "20vw"});
            $('#logo').css({"width": "15%"});
        };
    });

 $('#menu').hide(); 
    
    /*funciones de menu nav */
    
    function hoverInicial(){
        $('#menuBot').hover(
        function(){$(this).css({"color": "#FB6F37"})},
        function(){$(this).css({"color": "#091C30"})}
    )};
    hoverInicial();
    function hoverMenu(){
        $('#menuBot').hover(
        function(){$(this).css({"color": "#FFE8C2"})},
        function(){$(this).css({"color": "#091C30"})}
        )};
    
    var conteo= 0;
    
    $('#menuBot').click(function(){
        conteo++;
        var esPar = function(num){
            return (num % 2 === 0 ) ? true : false;
        };
        if (esPar(conteo) === false){
            hoverMenu();
            $('h1').hide();
            $('#logo').hide();
            $('header').css({"background-color": "#FB6F37"});
        } else if (esPar(conteo) === true){
            hoverInicial();
            $('h1').show(250);
            $('#logo').show(250);
            $('header').css({"background-color": "#033055"});
        };
        $('#menu').toggle(500);
        
    $('.lista').click(function(){
        $('#menu').hide(250);
         $('h1').show(250);
            $('#logo').show(250);
            $('header').css({"background-color": "#033055"});
    });
});
    /* Funcion de botón que sube al inicio de la página */
        $('#inicio').click(function(){
            $("html, body").animate({scrollTop: 0}, 500);
        });
    /*Funcion de botones de menú */
            $('#btnSobre').click(function(){
                $("html, body").animate({scrollTop: 350}, 300);
        });
            $('#btnProy').click(function(){
                $("html, body").animate({scrollTop: 1250}, 300);
        });
    
    /*scroll reveal*/
    ScrollReveal().reveal('#sobre');
    ScrollReveal().reveal('.contenedor', { delay: 450 });
    ScrollReveal().reveal('h2');
    ScrollReveal().reveal('.pagina', { delay: 500 });
});


    