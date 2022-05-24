window.onload = function (){
    $('#cargando').fadeOut();
    $('body').removeClass('escondido');
}

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
const time = document.querySelector('#time');

const interval = setInterval(() => {
    const local = new Date();
    time.innerHTML = local.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}, 1000);

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

