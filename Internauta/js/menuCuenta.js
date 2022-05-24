const perfilCuenta = document.querySelector('.accion');
const toggleCuenta = document.querySelector('.menuCuenta');

perfilCuenta.onmouseover = function (){
    toggleCuenta.classList.toggle('active');
}

perfilCuenta.onmouseout = function (){
    toggleCuenta.classList.remove('active');
}