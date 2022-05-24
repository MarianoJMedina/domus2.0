window.onload = function (){
    $('#cargando').fadeOut();
    $('body').removeClass('escondido');
}

const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');
const background = document.querySelector('.background');


boton1.onclick = function(){
    background.src = "/Internauta/img/white-wall-living-room-have-sofa-and-decoration-3d-rendering.jpg";
    background.fadeOut(1000);
}

boton2.onclick = function(){
    background.src = "/Internauta/img/fondo2.jpg";
}

boton3.onclick = function(){
    background.src = "/Internauta/img/fondo3.jpg";
}
